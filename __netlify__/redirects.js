require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const contentful = require('contentful');
const fs = require('fs');

const client = contentful.createClient({
  space: process.env.ctfl_spaceId,
  accessToken: process.env.ctfl_accessToken,
});

client
  .getEntries({
    content_type: 'repeaterTest',
  })
  .then(Entries => {
    const generateRedirects = async () => {
      const filepath = `${__dirname}/../public/_redirects`;
      fs.truncate(filepath, 0, () => {
        console.log('redirects emptied');
        fs.writeFile(filepath, '#auto generated redirects \n\n', () => {
          console.log('header added');
          let i = 1; // for now we need this to generate unique urls
          Object.keys(Entries.items).map(key => {
            const { slug } = Entries.items[key].fields;
            fs.appendFileSync(
              filepath,
              `/this-should-redirect${i}              /${slug} \n`
            );
            console.log(`${slug} added.`);
            console.log(Entries.items[key].fields.redirects);
            if (Array.isArray(Entries.items[key].fields.redirects)) {
              Entries.items[key].fields.redirects.map(redirect => {
                if (redirect) {
                  fs.appendFileSync(
                    filepath,
                    `/${redirect}              /${slug} \n`
                  );
                  console.log(`${redirect} added.`);
                  return redirect;
                }
                console.log('null redirects');
                return false;
              });
            }
            i += 1; // for now we need this to generate unique urls
            return true;
          });
        });
      });
    };
    generateRedirects();
  });
