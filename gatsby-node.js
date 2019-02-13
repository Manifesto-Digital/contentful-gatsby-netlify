const createAdvicePages = require('./create-pages/advice-pages.js');
const createContentPages = require('./create-pages/content-pages.js');
const createPressReleasePages = require('./create-pages/press-release-pages.js');
const createEventPages = require('./create-pages/event-pages.js');
const createEventsLandingPages = require('./create-pages/events-landing-pages.js');
const createEventCategoryPages = require('./create-pages/event-category-pages.js');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  createAdvicePages(graphql, createPage);
  createContentPages(graphql, createPage);
  createPressReleasePages(graphql, createPage);
  createEventPages(graphql, createPage);
  createEventsLandingPages(graphql, createPage);
  createEventCategoryPages(graphql, createPage);
};
