# Complex components

- [Legal sidebar](#legal-sidebar)
- [Donation Form Handler](#donation-form-handler)
- [Rich Text](#rich-text)
- [Content Form](#content-form)
  - [Initial Values](#initial-values)
  - [Form Validation](#form-validation)
  - [Form Fields](#form-fields)
  - [Form Submission](#form-submission)
    - [Redirection / thankyou message](#redirection--thankyou-message)
    - [Data submission to API](#data-submission-to-api)

## Legal sidebar

The legal sidebar had the following requirements.

- Has to allow any depth
- Has to display current active item and siblings
- Has to display parent and parents siblings
- Has to display the current item depth and two levels higher

Design can be seen [here](./assets/legal-sidebar.png)

A hierarchy was needed specific to the legal section that had an actual link to pieces of content, so that if a piece of content updated then the hierarchy should also.

A custom extension [Menu Parent](./08-contentful.md#menu-parent) was created.
This allows the editor to choose their direct parent from a list of legal pages that are generated from `Component - URL hierarchy`.

This extensions exposes an array of `menuItems` that correspond to the current pages parent pages all the way to the root legal page. The big benefit of this approach means that we can allow any level of depth, if this was a GraphQL query then we would have to explicitly state the depth, and it that depth did not exist we would run into this [gotcha](./09-debugging-and-gotchas.md#entity-doesnt-exist-then-query-fails) fast.

Now we have each pages parent items we have to create a hierarchy structure for all legal pages, so that we can display the sidebar with links correctly. Below is an example of a menuParent array that would be available on each legal page.

```javascript
"menuParent": [
    {
      "label": "Legal",
      "menuItem": [
        {
          "title": "Shelter Legal",
          "slug": "shelter-legal"
        }
      ]
    },
      {
      "label": "Benefits",
      "menuItem": [
        {
          "title": "Benefits",
          "slug": "shelter-legal/benefits"
        }
      ]
    },
  ]
```

In `create-pages/legal.js` there is a `buildHierarchy` function that loops through each legal page and returns an object containing the legal hierarchy. An example object structure that is built below.

```
{
  "legalHierarchy": [
    {
      "slug": "shelter-legal",
      "label": "Shelter Legal",
      "children": [
        {
          "slug": "shelter-legal/problems-during-repair-work",
          "label": "Problems during repair work",
          "children": null,
          "description": "description"
        },
        {
          "slug": "shelter-legal/the-night-is-always-darkest-before-the-dawn",
          "label": "the night is always darkest before the dawn",
          "children": null,
          "description": "description"
        },
      ],
      "description": {
        "shortDescription": "Aenean leo ligula,"
      }
    }
  ]
}
```

The next obstacle is to determine what levels of the hierarchy to display, as if the current item is 6 levels deep we do not want to show them all in the sidebar.

There is a helper function in `src/components/legal-sidebar/helpers.js` that loops through the hierarchy object until it finds the current item, it stores and returns the current active level and a specified amount of levels above. An active prop is also added to be used for styling.

## Donation Form Handler

As all donation components have certain requirements, this logic was pulled out into the donation Form Handler to be as versatile as possible while also ensuring the functionality required was there.

The component uses render props pattern. It takes care of all the submission and hidden values that must be on each donation form while still allowing additional fields to be added in the form if specific use cases vary.

```
<Formik
    onSubmit={() => {}} // Required to prevent submission error
    initialValues={{
        cid: donation.defaultEnglandCampaignId,
        free_amount: '1',
        'amount-holder': '',
        amount: defaultPennyValue.toString(),
        reserved_appeal_code: getReservedAppealCode(location),
        frequency,
    }}
>
    {({ submitForm, setFieldValue }) => (
    <StyledForm
        inline={inline ? 1 : 0}
        as={Form}
        onSubmit={submitForm}
        action="https://donate.shelter.org.uk/b"
        method="GET"
        className={className}
        id={id || null}
    >
        <Field type="hidden" name="cid" />
        <Field type="hidden" name="free_amount" />
        <Field type="hidden" name="amount" />
        <Field type="hidden" name="reserved_appeal_code" />
        <Field type="hidden" name="frequency" />
        {render({ handleAmountChange, setFieldValue, defaultValue })}
    </StyledForm>
    )}
</Formik>
```

Above you can see that the hidden fields are populated with values.

- **cid**: Passed in props
- **free_amount**: '1'
- **amount-holder**: This is the visible amount holder :exclamation: A field must exist with this name when used
- **amount**: The amount in pence to be sent
- **reserved_appeal_code**: Retrieved from URL
- **frequency**: Passed in props

A typical use of this component is used in the `src/components/donation-hero/own-amount.js`

```
<DonationForm
    frequency={frequency}
    id="donation-hero-own-amount-form"
    render={({ handleAmountChange, setFieldValue, defaultValue }) => (
    <>
        <VisuallyHidden as="label" htmlFor="amount-holder-other-amount">
        Donate
        </VisuallyHidden>
        <Field
        name="amount-holder"
        render={props => (
            <DonationInput
                noMargin
                inline
                placeholder={defaultValue.toString()}
                {...props}
                id="amount-holder-other-amount"
                onChange={e => handleAmountChange(e, setFieldValue)}
            />
        )}
        />
        <OwnAmountSubmit as={Button} bg="donate" type="submit">
        Donate
        </OwnAmountSubmit>
    </>
    )}
/>
```

The example above uses all the props that were made passed down from the Donation handler.

It has the required `amount-holder` field. This uses the `handleAmountChange` function passed down and passes the current field value to the donation Form handler. This in turn updates the hidden donation fields accordingly to ensure the correct format is sent on submission.

The approach allows donation components to share the necessary logic while still leaving the presentation completely up to the use-case.

## Rich Text

Towards the end of the project the recommended approach for Rich Text changed. Before custom handling of `renderNodes` were handled in gatsby-config. The one main drawback of this meant that we had no access to React components as this was before the data was passed to React.

The `documentToReactComponents` from the `@contentful/rich-text-react-renderer` package allowed us to leverage React and opened up the possibilities of embedding components inside the Rich Text Editor.

We currently still have this large [gotcha](./09-debugging-and-gotchas.md#linking-to-content-via-rich-text), until that is solved we will have to restrict the use of components that do not have links to other pieces of content within them.

Docs on Rich text react renderer https://github.com/contentful/rich-text/tree/master/packages/rich-text-react-renderer.

When querying for Rich Text fields use the JSON field, this retrieves the full JSON associated to the field.

Inside the `renderNodes` object, we use the `[BLOCKS.EMBEDDED_ENTRY]: node => {}` key to be able to handle when a block embedded component is used. A simple node object example is shown below (sys emptied as not needed for example).

```javascript
{
  "data": {
    "target": {
      "sys": {},
      "fields": {
        "name": {
          "en-GB": "Inline callout"
        },
        "icon": {
          "en-GB": "Download"
        },
        "bannerColour": {
          "en-GB": "Grey"
        },
        "borderColour": {
          "en-GB": "WhatsApp green"
        },
        "removeMarginBottom": {
          "en-GB": true
        }
      }
    }
  },
  "content": [],
  "nodeType": "embedded-entry-block"
}
```

Above you can see every field value is now an object with the locale as it's key. We want to be able to pass the data down to our components that are already created and the data structure to match what we receive when querying for data (no locale present).

To achieve this there is a temporary helper function that flattens the values. In `src/components/rich-text/helpers.js` there is a `fieldsMap` function that recursively loops through that turns the above `node.data.target.fields` into the following object that matches the structure used elsewhere.

```javascript
{
  "name": "Inline callout",
  "icon": "Download",
  "bannerColour": "Grey",
  "borderColour": "WhatsApp green",
  "removeMarginBottom": true
}
```

## Content Form

In contentful there is a `Assembly - Form` content model. There are various fields that handles the form logic, including the URL that the form submits, hidden fields and after submission behavior.

The main functionality comes from the `formFields` field which is a multi reference field allowing `Component - Form field` content type. This allows the editor to create a form from a choice of possible field types and options.

In the `Component - Form field` content model there is all the information we require to render a field.

The entry point for the form component is `src/components/form/index.js`. [Formik](https://github.com/jaredpalmer/formik) is used to handle the forms in our React project, predominantly to do some of the heavy lifting and simplify logic.

### Initial Values

We pass through initial values for all fields. Inside `/form/helpers.js` there is a `getInitialValues` function that loops through the form fields and combines with the hidden value fields. Example of output from `getInitialValues`

```javascript
{
  "sourceCode": "1234",
  "formId": "1234",
  "first_name": "",
  "last_name": "",
  "email": ""
}
```

### Form Validation

For form validation we are using [Yup](https://github.com/jquense/yup).

Each `Component - Form field` has the option to set the field as required and set the field type.

Inside `/form/helpers.js` there is a `getValidationSchema` function that loops through the form fields and generates the Yup Schema using [Yup.object.shape](https://github.com/jquense/yup#objectshapefields-object-nosortedges-arraystring-string-schema)
to pass into Formik.

### Form Fields

Inside the Form we loop through the chosen form fields. We use `FormFieldType` component to determine if a fieldset is necessary.

The `FormField` component is then called, this ensures we have a label for each form field.

The `FieldInputField` is the component that decides the React component to render for that field. After this check the form fields used should be as agnostic and simple as possible, with any destructuring of values occurring before in the `filedInputField` component.

### Form Submission

#### Redirection / thankyou message

If the redirect after submission reference field in contentful `Assembly - Form` is populate then this takes priority of the thank you message. On successful submission the user is redirected. Else the thank you message should be shown

#### Data submission to API

TODO: ADD ONCE IN PLACE
