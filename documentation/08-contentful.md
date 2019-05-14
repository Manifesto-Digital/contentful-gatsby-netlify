# Contentful

- [Fields](#fields)
  - [Rich text](#rich-text)
      - [Formatting options](#formatting-options)
      - [Hyperlinks](#hyperlinks)
      - [Embedded entries & assets](#embedded-entries--assets)
      - [Link to entry](#link-to-entry)
      - [Embedded block entry](#embedded-block-entry)
  - [Single Reference field](#single-reference-field)
- [Custom extensions](#custom-extensions)
  - [For Page Content models](#for-page-content-models)
    - [Shelter Slug](#shelter-slug)
    - [Menu Parent](#menu-parent)

## Fields

Below is a list of conventions when adding a field to contentful model.

### Rich text

Formatting options and validations have to be limited to the following.

##### Formatting options

- h1, h2, h3, h4
- Bold, Italic, Underline
- UL, OL
- Quote

##### Hyperlinks

- Link to entry - [Link Validations](#link-to-entry)

##### Embedded entries & assets

- Entry (not inline) - [Entry Validations](#embedded-block-entry)

##### Link to entry

- Any page content model (that must include slug and title)
- External link components

##### Embedded block entry

- Assembly - CTA
- Assembly - Download banner
- Component - Advice search box
- Component - Video embed
- Component - Google map
- Component - Inline callout

### Single Reference field

[Single reference field gotcha](./09-debugging-and-gotchas.md#content-model-name-is-used-in-query)

## Custom extensions

### For Page Content models

#### Shelter Slug

An extension that generates the value of the slug based on the `menuParent` choice combined with the title.

The `menuParent` choice is when the editor chooses the direct parent of the current page to generate the hierarchy.

This will then update this slug field to show the full URL path for the piece of content.

#### Menu Parent

A hierarchy select menu that is populated from the `Component - URL hierarchy`. This allows the editor to choose the direct parent and from that, we can populate the full path of the page.

Currently the IDs of two top-level `Component - URL hierarchy` pieces of content that are hard-coded in the extension. It checks the current content type to determine what hierarchy to use.

**Legal Page content types**

- pageAssemblyLegalPage
- pageAssemblyLegalHomepage
- pageAssemblyLegalLandingPage
- pageAssemblyLegalWhatsNewPage'


  <!-- -->
  <!-- -->

  **IDs**
- Legal - `qYQMbZoZx7QoiZUfX2okV`
- Else - `1VIR12YBIauAS66hZiGCwm`
