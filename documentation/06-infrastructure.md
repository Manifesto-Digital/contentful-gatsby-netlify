# Infrastructure & Tooling

The shelter websites is made up of a few microservices:

- Contentful is used for delivering the data.
- Azure hosts the Laravel Api for doing slightly more complicated actions with the Contentful data.
- Netlify hosts the static Gatsby generatted sites.
- CircleCi is the automation tool.

## Contentful

[Contentful](app.contentful.com) is a content architecute plaftform. It is responsible for providing all content for the Shelter website and future spin offs.

Key area's:

- Content models: provide structure for various pieces of content.
- Environments: allow multiple versions of the content for testing.
- Api keys: provide access to integration services with granular environment access.
- Webhooks: allow triggers based on content actions.
- Roles & permissions: control users editing and publishing capabilities

### Extending the contenful interface

There are situations where you want to slightly alter what Contentful's UI offers, for example add information about previous versions, enter UI Extensions.

A repository has been created to house all future [UI Extensions](https://github.com/Shelter-England/contentful-extentions).

A Contentful environment should be created to test extension installations before installing them on the master environment. You should specify this in the extension upload command.

Create a folder with the minimum extension files:

    extension.json
    index.html
    README.md

Uploading to your space:

`contentful extension create --space-id 6sxvmndnpn0s --environment-id extension-testing`

If updating an extension:

`contentful extension update --space-id 6sxvmndnpn0s --environment-id extension-testing --force`

    Note - Contentful will only allow storage of files under 200kb, If your extension is larger you will need to host it externally.

Full documentation can be found [here](https://www.contentful.com/r/knowledgebase/ui-extensions-guide/).

## Netlify

[Netlify](app.netlify.com) provides a static hosting environment.

Netlify is connected to a Github repository and allows you to create multiple sites with different branch strategies.

Using environment variables you can connect the different Netlify environments to different Contentful spaces/environments.

## CircleCi

CircleCi is used as an automation tool for shipping and checking quality of code before allowing it to be production ready.

This is covered in more detail in the [deploying](05-deploying.md#CircleCi) section.

## Azure

Azure is used to host the Laravel API.

This API came about from key functionality that was not offered out the box in Contentful.

These were:

- Notifications (currently Slack)
- Workflow (integration with Jira)

The idea would be to utilize this API in conjunction with the Contentful webhook system and managment API to maniplate data or create functionality without complex UI Extentions.

## Jira

Workflows in Jira operate in a state machine like flow.
The Jira API provides transition states in a [to, from] format. We then map these to a set of rules in the Laravel API and appropriately edit Contentful content based on these Jira transition rules