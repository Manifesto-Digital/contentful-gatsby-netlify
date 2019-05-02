# Deploying

- [Deploying](#deploying)
  - [CircleCi](#circleci)
    - [Production](#production)
    - [Any other environment](#any-other-environment)
    - [Migrations](#migrations)
    - [Gotcha's](#gotchas)

Deployments are largely controlled by CircleCi but there are some situations where you may want to deploy to new environments for testing, in these situations Netlify will be used.

## CircleCi

This project uses [CircleCi](https://circleci.com) to automate deployment tasks. It has workflows configured which differ depending on wether the action is a pull request or merge into `master`.

The setup can be found in the CircleCi [config](../.circleci/config.yml) file.

At a high level this automates:

- tests
- code linting
- gatsby static site builds
- production release control
- forward migrations for Contentful
- deploying to Netlify

View the [CircleCi documentation](./07-infrastructure-setup.md#CircleCi) for setup instructions.

### Production

The process for shipping changes to production requires two steps.

- A pull request into master with successful CircleCi status's
- A merge into master from the pull request

After a successful merge into the `master` Github branch, CircleCi will take over.

CircleCi will run the tests, trial migrations and a trial build against a throw away copy of Contentful's master environment.
Once these are successful an approval step is required for all production releases, which is a manual click with in the CircleCI workflow. After approval any migrations and seeds are run against Contentful's master environment followed by running a `gatsby build` to generate the static site and then pushing this over to Netlify using the CLI `netlify deploy -s $NETLIFY_MASTER_ID -m "CircleCI build success" --prod`.

[Example of a successful deployment](assets/successful-workflow-production.jpeg).

### Any other environment

All other environments utilise Netlify more for automation as the shipping of code is less risky and changes need to be available to developers and testers more frequently.

Any `pull request` opened will run a simplified CircleCi workflow. This only runs tests, linting, mock migrations and a gatsby build.

If Netlify is configured against the target branch,Netlify will create a deploy preview. Netlify will also automatically deploy once the branch is merged into.

View the [Netlify documentation](07-infrastructure-setup.md#Netlify) for configuration instructions.

### Migrations

As part of the workflow altering content and content models in Contentful may require migrations to be run.

CirclCi makes use of the [migration script](../.circleci/scripts/migrate.js) to identify new migrations by migration number (05-new-migration.js) and compares this to the Contenful Migration Version content type.
If there are new migrations it will firstly test these against the dummy environment before running against Contentful master.

### Gotcha's

CircleCi is configured to `Only build pull requests`, which means as a branch strategy only the branch defined in Github as the default will trigger full builds on merge(`master` in this case). There is on-going discussion about CircleCi allowing the pull request strategy alongside the ability to build multiple branches other than the defined default.

Migrations require seeds to be written to prevent Gatsby failing based on empty schema generation. There is a new Gatsby Schema API which was released which could be used to overcome the need for the seeds files.
