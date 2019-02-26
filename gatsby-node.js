const createAdvicePages = require('./create-pages/advice-pages.js');
const createContentPages = require('./create-pages/content-pages.js');
const createPressReleasePages = require('./create-pages/press-release-pages.js');
const createEventsLandingPages = require('./create-pages/events-landing-pages.js');
const createEventCategoryPages = require('./create-pages/event-category-pages.js');
const createStandardEventPages = require('./create-pages/standard-event-pages.js');
const createChallengeEventPages = require('./create-pages/challenge-event-pages.js');
const createEventLandingPages = require('./create-pages/challenge-event-pages.js');
const createLegalPages = require('./create-pages/legal-pages.js');
const createFurnitureShopPages = require('./create-pages/furniture-shop-pages.js');
const createServicePages = require('./create-pages/service-pages.js');
const createLegalLandingPages = require('./create-pages/legal-landing-pages.js');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  createAdvicePages(graphql, createPage);
  createContentPages(graphql, createPage);
  createPressReleasePages(graphql, createPage);
  createEventsLandingPages(graphql, createPage);
  createEventCategoryPages(graphql, createPage);
  createStandardEventPages(graphql, createPage);
  createChallengeEventPages(graphql, createPage);
  createEventLandingPages(graphql, createPage);
  createLegalPages(graphql, createPage);
  createFurnitureShopPages(graphql, createPage);
  createServicePages(graphql, createPage);
  createLegalLandingPages(graphql, createPage);
};
