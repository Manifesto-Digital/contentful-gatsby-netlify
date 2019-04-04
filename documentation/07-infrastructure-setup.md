# Infrastructure Setup

Outlines key areas to link up the services.

## Contentful

Login to [Contentful](https://app.contentful.com)

### API Keys

To allow external services to consume content you need to create an API key.

1. Settings
2. API keys
3. Add API Key
4. Provide a clearly identifiable name for the key
5. Give the key access to the environments you want to access

### Environments

Allows separation of content for testing or development use.

1. Settings
2. Environments
3. Add environment
4. Name your new environment
5. Choose content environment to clone
6. If required update/create the API key to allow access to the environment.

### Webhooks

Allow you to trigger exrternal actions based on content updates.

1. Settings
2. Webhooks
3. Add webhook
4. Add identifiable name for your hook
5. Add a URL to the service you want to use
6. Configure actions that will trigger this webhook to fire
7. Add filters based on system properties
8. Configure the payload to send (default send the entire Entry)

### Content Preview

Allows you to configure preview environments. This project uses Netlify and Gatsby preview.

## Netlify

Login to [Netlify](https://app.netlify.com).

Steps to setup a new site:

1. Click New site from Git
2. Choose provider (Github) - you will need to authorise in some cases
3. Select your Github organization
4. Choose the git branch to deploy
5. Set your build commands [`Gatsby build` && `public/`]
6. Deploy

This will start teh process but you will need to configure some environment variable before the site will successfully deploy.

1. Select your site from the [landing page](https://app.netlify.com/teams/shelter/sites)
2. Site settings > Build & deploy > Build environment variables
3. The Gatsby environment variable need to be provided to allow the site to build from Contentful
   1. `GATSBY_CONTENTFUL_ENVIRONMENT`
   2. `ctfl_accessToken`
   3. `ctfl_host`
   4. `ctfl_spaceId`

Once those are added you should be able to re-deploy your site and will succeed allowing you to access your new site at a Netlify provided url.

### Deploy Contexts

Settings > Build & deploy > Deploy contexts
This allows you to configure the deployment strategies and deploy preview branches.

## CircleCi

## Azure

This sits within Shelters current infrastructure and is hosted as a WebApp. It uses a KUDU Deployment Script provided by Shelter to deploy. Any pushes into the master branch will deploy the API.

The API is documentented in it's own [repository](https://github.com/Shelter-England/webhook-api/blob/master/README.md)
