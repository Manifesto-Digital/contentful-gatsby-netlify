## 🚀 Quick start

1.  **Grab the repo.**

    Clone the repository to your local development environment

    ```sh
    git clone git@github.com:Manifesto-Digital/Shelter.git
    ```

2.  **Get setup**

    Navigate into your new site’s directory and get the project set up.

    ```sh
    cd my-cloned-folder
    npm run setup
    ```

    Create your .env.develop file in the project root.

    ```sh
    touch .env.development
    ```

    You will need the following values:

    - ctfl_spaceId = 'XXXXXXXXX'
    - ctfl_accessToken = 'XXXXXXXXX' //change api token depending if you want to use the content or preview api
    - ctfl_host = 'XXXXXXXXX'

3)  **Start developing**

    ```sh
    npm run develop
    ```

4)  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    \_Note: You'll also see a second link: `http://localhost:8000/___graphql`. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql).\_

## 🏠 Hosting and deploying

Netlify will control branch deployments

- develop: [develop--shelter-website.netlify.com](develop--shelter-website.netlify.com)
- staging: [staging--shelter-website.netlify.com](staging--shelter-website.netlify.com)
- master: [shelter-website.netlify.com](shelter-website.netlify.com)

### 📌 Deploy a local branch for testing

Netlify will only deploy develop, staging and master brnaches. If you want to provide a local version for QA you can build a production version of the site.

```sh
    npm run mock-deploy-build
    npm install netlify-cli -g
    netlify login
```

This will open a browser window, asking you to log in with Netlify and grant access to Netlify CLI.

```sh
    npm run netlify-deploy-current
```

Which should give you a result containing published url and logs.

```sh
    Logs:           https://app.netlify.com/sites/shelter-website/deploys/5bfc0af6792f897b2bef8349
    Live Draft Url: https://5bfc0af6792f897b2bef8349--shelter-website.netlify.com
```

## 🌿 Branch strategy

Gitflow will be used as a default.

Feature branches should follow the following convention: `feature/TKT-01-description-of-feature`

Master and develop are both locked to direct push. All code acceptance into these branches is required to have gone through formal pull request process which needs at least one peer approval. Merging is also restricted based on unit tests and linting rules passing against the PR.

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    ├── README.md
    └── yarn.lock

1.  **`/node_modules`**: The directory where all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser), like your site header, or a page template. “Src” is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for a tool called [Prettier](https://prettier.io/), which is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: Gatsby is licensed under the MIT license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. (You won’t change this file directly).

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

13. **`.eslintrc`**: Linting configuration for the code standards.
