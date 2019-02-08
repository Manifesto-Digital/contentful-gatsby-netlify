require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const contentful = require('contentful');
const fs = require('fs');

const client = contentful.createClient({
  space: process.env.space_id,
  accessToken: process.env.access_token,
});

client
  .getEntries({
    content_type: 'pageAssemblyContentPage',
  })
  .then(Entries => {
    const generateRedirects = async () => {
      fs.truncate(`${__dirname}/../public/_redirects`, 0, () => {
        console.log('redirects emptied');
        fs.writeFile(
          `${__dirname}/../public/_redirects`,
          '#auto generated redirects \n\n',
          () => {
            console.log('header added');
            let i = 1;

            for (const entry of Entries.items) {
              console.log(`${entry.fields.slug} added`);
              let slug = entry.fields.slug;
              fs.appendFileSync(
                `${__dirname}/../public/_redirects`,
                `/this-should-redirect${i}              /${slug} \n`
              );
              i++;
            }
          }
        );
      });
    };
    generateRedirects();
  });
