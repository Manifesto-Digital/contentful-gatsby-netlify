const createAdvicePages = require('./create-pages/advice-pages.js');
const createContentPages = require('./create-pages/content-pages.js');
const createPressReleasePages = require('./create-pages/press-release-pages.js');
const createEventsLandingPages = require('./create-pages/events-landing-pages.js');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  createAdvicePages(graphql, createPage);
  createContentPages(graphql, createPage);
  createPressReleasePages(graphql, createPage);
  createEventsLandingPages(graphql, createPage);
};
