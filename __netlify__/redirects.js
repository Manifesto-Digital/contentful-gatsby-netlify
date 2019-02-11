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
      const filepath = `${__dirname}/../public/_redirects`;
      fs.truncate(filepath, 0, () => {
        console.log('redirects emptied');
        fs.writeFile(filepath, '#auto generated redirects \n\n', () => {
          console.log('header added');
          let i = 1;
          Object.keys(Entries.items).map(key => {
            const { slug } = Entries.items[key].fields;
            fs.appendFileSync(
              filepath,
              `/this-should-redirect${i}              /${slug} \n`
            );
            console.log(`${slug} added.`);
            i += 1;
            return true;
          });
        });
      });
    };
    generateRedirects();
  });
