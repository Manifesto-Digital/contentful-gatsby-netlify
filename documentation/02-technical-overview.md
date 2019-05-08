# Technical Overview

## The stack

### Contentful

Contentful is described as content architecture and its job is to replace the traditional CMS. Delivering content purely as JSON allowing whichever source to consume the data and display it as needs be.

### Gatsby

Gatsby is a React based framework allowing static site generation. Gatsby will consume Contentful data generating a static version of Shelter's website.

### Github

Github is a home for the source Gatsby code.

### Netlify

Netlify is used to host the Gatsby generated code for the website.

### CircleCi

CircleCI is a build automation tool. It is used as a CI/CD pipeline to deliver code and content changes to the environments.

## What does this look like?

At a high level, this is represented with the basic development flow [here](assets/shelter-highlevel-workflow.jpg)