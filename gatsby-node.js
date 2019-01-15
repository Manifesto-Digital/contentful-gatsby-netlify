const createAdvicePages = require('./create-pages/advice-pages.js');
const createContentPages = require('./create-pages/content-pages.js');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  createAdvicePages(graphql, createPage);
  createContentPages(graphql, createPage);
};
