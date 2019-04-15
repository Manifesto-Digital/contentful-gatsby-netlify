# Code Overview

- project layout
- where do i find things?
- queries (graph)
- fragments
- linting
- testig
- analytics
- forms
- dynamic vs static
- migrations

## Migrations

Contenful model changes support migrations which are simples changes as code. These can be simple creations or modifications with transformation of data.

To create a migration that is automatically run during CI/CD:

1. Inside `.circleci/__migrations__` create a sequentially named migration file with a descriptive name.
2. Add your migration
3. Add a seed - this is related to a Gatsby schema workaround, where new fields that are empty are not queriable. Its about adding data to your new fields from your migration.
4. Test your migration

### Example migration

#### Running migrations

Circle will run `.circleci/migrate.js` during deployment but the raw command for a migration can be run to test individual migrations using the `contentful-cli` CLI. As a not the javascript library `contentful-migration` is used but the CLI tasks have moved to the `contentful-cli`.

The migration version is stored as content in Contentful wihtin the `migrationVersion` model. It will look for the next sequential file name and updated the contentful `migrationVersion` each migration that is run.

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
