require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const contentful = require('contentful');
const fs = require('fs');
const fsPromises = require('fs').promises;

const client = contentful.createClient({
  space: process.env.ctfl_spaceId,
  accessToken: process.env.ctfl_accessToken,
});

client
  .getEntries({
    content_type: 'pageAssemblyContentPage',
  })
  .then(Entries => {
    const generateRedirects = async () => {
      const filepath = `${__dirname}/../public/_redirects`;
      try {
        await fsPromises.truncate(filepath, 4);
        console.log('redirects emptied');
        await fsPromises.appendFile(filepath, '#auto generated redirects \n\n');
        console.log('header added');
        let i = 1; // for now we need this to generate unique urls
        Object.keys(Entries.items).map(key => {
          const writeRedirectsFile = async slug => {
            await fsPromises.appendFile(
              filepath,
              `/this-should-redirect${i}              /${slug} \n`
            );
          };
          const { slug } = Entries.items[key].fields;

          writeRedirectsFile(slug);
          console.log(`${slug} added.`);
          i += 1; // for now we need this to generate unique urls
        });
      } catch (error) {
        console.log(error);
      }
    };
    generateRedirects();
  })
  .catch(error => {
    console.log(error);
  });
