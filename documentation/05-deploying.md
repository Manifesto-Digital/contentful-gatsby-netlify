# Deploying

Deployments are largely controlled by CircleCi but there are some situations where you may want to deploy to new environments for testing.

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

### Production

The process for shipping changes to production requires two steps.

- A pull request into master with successful CircleCi status's
- A merge into master from the pull request

  After a successful merge into the `master` Github branch CircleCi will take over.

  CircleCi will run the tests, trial migrations and a trial build against a throw away copy of Contentful's master environment.
  Once these are successful an approval step is required for all production releases, which is a manual click with in the CircleCI workflow. After approval any migrations and seeds are run against Contentful's master environment followed by running a `gatsby build` to generate the static site and then pushing this over to Netlify using the CLI `netlify deploy -s $NETLIFY_MASTER_ID -m "CircleCI build success" --prod`.

  [Example of a successful deployment](assets/successful-workflow-production.jpeg).

### Any other environment

All other environments utilise Netlify more for automation as the shipping of code is less risky and changes need to be available to developers and testers more frequently.

Any `pull request` opened will run a simplified CircleCi workflow. This only runs tests, linting, mock migrations and a gatsby build.

If Netlify is configured against the target branch,Netlify will create a deploy preview. Netlify will also automatically deploy once the branch is merged into.

View the [Netlify configuration](06-infrastructure.md#Netlify).
