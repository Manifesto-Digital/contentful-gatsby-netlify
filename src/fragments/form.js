import { graphql } from 'gatsby';

export const AssemblyFormFragment = graphql`
  fragment AssemblyFormFragment on ContentfulAssemblyForm {
    id
    internal {
      type
    }
    submitUrl
    sourceCode
    formId
    formHeader
    submitCallToAction
    backgroundColour
    redirectAfterSubmission {
      ...LinkFragment
    }
    thankYouMessage {
      json
    }
    formFields {
      ... on Node {
        ...FormFieldFragment
        ...FormFieldsetFragment
      }
    }
  }

  fragment FormFieldFragment on ContentfulTopicFormField {
    internal {
      type
    }
    id
    fieldType
    fieldLabel
    required
    placeholder
    toolTip
    defaultValue
    machineName
    valueOptions {
      value
      label
      sendToAnalytics
    }
  }

  fragment FormFieldsetFragment on ContentfulTopicFormFieldset {
    internal {
      type
    }
    id
    fieldsetLegend
    fieldsetDescription {
      fieldsetDescription
    }
    formFields {
      internal {
        type
      }
      id
      fieldType
      fieldLabel
      required
      placeholder
      toolTip
      defaultValue
      machineName
      valueOptions {
        value
        label
      }
    }
  }
`;
