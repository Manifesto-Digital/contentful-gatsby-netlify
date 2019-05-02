# Code Overview

## Table of contents

- [Code Overview](#code-overview)
  - [Table of contents](#table-of-contents)
  - [Project Layout](#project-layout)
    - [Create Pages](#create-pages)
    - [Templates](#templates)
    - [Components](#components)
  - [Linting](#linting)
  - [Testing](#testing)
    - [Jest](#jest)
    - [Enzyme](#enzyme)
    - [Snapshot testing](#snapshot-testing)
  - [Analytics](#analytics)
  - [Migrations](#migrations)
    - [Example migration](#example-migration)
      - [Running migrations](#running-migrations)
      - [Migration to edit the event content model](#migration-to-edit-the-event-content-model)
      - [Related seed](#related-seed)
      - [Useful information](#useful-information)

## Project Layout

Below is a high level visual representation of the layout of the folders in this project.

```
project
└───create-pages
└───queries
└───src
│   │
│   └───assets
│       └───images
│       └───svg
│   └───components
│       └───componentA
│           │   index.js
│           │   test.js
│           │   styles.js
│   └───fragments
│   └───pages
│   └───prop-types
│   └───templates
│   └───utils
│   └───variables
```

#### Create Pages

`src/create-pages` is where we have all the logic that dynamically generates pages. We pass the Gatsby createPage function to these files. Some templates have the same page generation steps and could be combined, but have been left separate for clarity.

The `exports.createPages` extension point is called only after the initial sourcing and transformation of nodes plus creation of the GraphQL schema are complete so you can query your data in order to create pages.

#### Templates

Every template in the templates folders if the first entry point from Gatsby into React. They are always referenced in the `createPage` function. https://www.gatsbyjs.org/docs/building-with-components/#page-template-components

#### Components

The folder structure in `components` is very flat currently, this could be organised now there is a full view of the use cases for each component. Each component should have a `.test` file associated to it.

## Linting

We are using ESLint and there should be a `.eslintrc` file in the root of the project. Prettier is also run when linting `yarn lint` will also execute prettier.

## Testing

We are using `Jest` and `Enzyme` for our components testing along with `react-test-renderer` for generating the snapshots.

#### Jest

[Jest](https://jestjs.io/docs/en/getting-started) is a JavaScript unit testing framework, used by Facebook to test services and React applications.

#### Enzyme

[Enzyme](https://airbnb.io/enzyme/) is a JavaScript Testing utility for React that makes it easier to assert, manipulate, and traverse your React Components’ output.

#### Snapshot testing

Snapshot tests are a very useful tool whenever you want to make sure your UI does not change unexpectedly.

We have a wrapper in `test-helpers` called `renderWithTheme` that gives the [Test Renderer snapshot](https://reactjs.org/docs/test-renderer.html) access to theme variables, this ensures if a theme variable is changed then each component snaphsot that subscribes to that variable will fail and alert the developer to the effect.

#### React testing library

During the project and the emergence of React hooks the [react-testing-library](https://github.com/testing-library/react-testing-library) by Ken C Dodds has become a recommended way to test stateful components. This was used for it's simplicity in the `finder` component towards the end of the project and could be utilised more moving forward.

## Analytics

## Migrations

Contenful model changes support migrations which are structural schema changes as code. These can be simple creations or modifications with transformation of data.

To create a migration that is automatically run during CI/CD:

1. Inside `.circleci/__migrations__` create a sequentially named migration file with a descriptive name.
2. Add your migration
3. Add a seed - this is related to a Gatsby schema workaround, where new fields that are empty are not queriable. Its about adding data to your new fields from your migration.
4. Test your migration

### Example migration

#### Running migrations

Circle will run `.circleci/migrate.js` during deployment but the raw command for a migration can be run to test individual migrations using the `contentful-cli` CLI. As a note the javascript library `contentful-migration` is used but the CLI tasks have moved to the `contentful-cli`.

The migration version is stored as content in Contentful within the `migrationVersion` model. It will look for the next sequential file name and updated the contentful `migrationVersion` each migration that is run.

#### Migration to edit the event content model

```javascript
const linkField = require('../field-types/link');

module.exports = function(migration) {
  const event = migration
    .editContentType('event')
    .deleteField('registrationLink');

  const eventEditorLink = linkField(
    migration,
    'event',
    true,
    'Registration Link'
  );

  const eventEditor = migration
    .editContentType('event')
    .changeEditorInterface('link', 'entryLinksEditor', {
      bulkEditing: false,
    });
};
```

#### Related seed

```json
{
  "entries": [
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "6sxvmndnpn0s"
          }
        },
        "id": "3sbziwRCcgHekqJuibQNuR",
        "type": "Entry",
        "createdAt": "2019-03-13T13:51:25.415Z",
        "updatedAt": "2019-03-13T13:52:39.807Z",
        "environment": {
          "sys": {
            "id": "external-migration",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 59,
        "publishedAt": "2019-03-13T13:52:39.807Z",
        "firstPublishedAt": "2019-03-13T13:52:39.807Z",
        "createdBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "626lvcSPzGpLe4tAiZj4tA"
          }
        },
        "updatedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "626lvcSPzGpLe4tAiZj4tA"
          }
        },
        "publishedCounter": 1,
        "version": 60,
        "publishedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "626lvcSPzGpLe4tAiZj4tA"
          }
        },
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "event"
          }
        }
      },
      "fields": {
        "systemName": {
          "en-GB": "Migration - topicEvent"
        },
        "eventName": {
          "en-GB": "Event Name"
        },
        "shortDescription": {
          "en-GB": "Short Description"
        },
        "thumbnailImage": {
          "en-GB": {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "1QpzljvxQoQE2PqEgRi9yG"
            }
          }
        },
        "eventType": {
          "en-GB": "Cycle"
        },
        "eventStatus": {
          "en-GB": "Open"
        },
        "eventSystemDate": {
          "en-GB": "2019-03-13"
        },
        "eventDisplayDate": {
          "en-GB": "Display date"
        },
        "distance": {
          "en-GB": "20"
        },
        "registrationFee": {
          "en-GB": 100
        },
        "pledge": {
          "en-GB": 200
        },
        "eventLocation": {
          "en-GB": {
            "lon": -0.07537430000002132,
            "lat": 51.5232689
          }
        },
        "displayLocation": {
          "en-GB": "Shoreditch"
        },
        "notifiedTeamEmail": {
          "en-GB": "migration@test.com"
        },
        "link": {
          "en-GB": [
            {
              "sys": {
                "type": "Link",
                "linkType": "Entry",
                "id": "4gXZvSzxllBNV7LhNY7bnT"
              }
            }
          ]
        }
      }
    }
  ],
  "assets": []
}
```

#### Useful information

We found generating the seeds and migrations easier by first exporting the models that needed adjusting and modifying this code.

Get the content from a content type (you can change the query to limit this to specific pieces of content):
`contentful space export --space-id [SPACE_ID] --environment-id [ENV] --content-file topic-url-hierarchy.json --export-dir content_export/ --content-only --use-verbose-renderer --skip-assets --query-entries 'content_type=topicUrlHierarchy' --query-assets 'fields.title=doesntexist'`

Some useful generator tools: [Migration generator](https://github.com/Shelter-England/contentful-migration-generator)

Run the migration script against test environment:
`node .circleci/scripts/migrate.js "[SPACE_ID]" "[ENV]" [MANAGEMENT_TOKEN]`
