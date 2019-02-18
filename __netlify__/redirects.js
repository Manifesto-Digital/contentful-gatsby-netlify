require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const contentful = require('contentful');
const fs = require('fs');
const fsPromises = require('fs/promises');

const client = contentful.createClient({
  space: process.env.ctfl_spaceId,
  accessToken: process.env.ctfl_accessToken,
  environment: process.env.GATSBY_CONTENTFUL_ENVIRONMENT,
});
console.log(process.env.GATSBY_CONTENTFUL_ENVIRONMENT);
const filepath = `${__dirname}/../public/_redirects`;
const filepathFixedRedirects = `${__dirname}/fixed_redirects.txt`;

client
  .getEntries({
    content_type: 'pageAssemblyContentPage',
  })
  .then(async Entries => {
    const generateRedirects = async () => {
      await fsPromises.truncate(filepath);
      console.log('redirects emptied');
      await fsPromises.appendFile(filepath, '# auto generated redirects \n\n');
      console.log('header added');
      Object.keys(Entries.items).map(key => {
        const { slug, redirects } = Entries.items[key].fields;

        if (Array.isArray(redirects)) {
          Object.keys(redirects).map(redirectKey => {
            const { url } = redirects[redirectKey].fields;

            const writeRedirectsFile = async () => {
              await fsPromises.appendFile(
                filepath,
                `${url}              /${slug} \n`
              );
              return true;
            };

            writeRedirectsFile(slug);

            console.log(`${slug} added.`);
            return true;
          });
          return true;
        }

        return true;
      });
    };

    const readFile = async () => {
      let fileHandle = null;
      fileHandle = await fsPromises.open(filepathFixedRedirects, 'r+');
      const content = await fsPromises.readFile(fileHandle, 'utf-8');

      if (fileHandle) {
        await fileHandle.close();
      }
      return content;
    };

    const writeStaticRedirectsFile = async staticRedirects => {
      await fsPromises.appendFile(
        filepath,
        '\n\n# static redirects generated\n\n'
      );
      await fsPromises.appendFile(filepath, staticRedirects);
      console.log('static redirects added');
    };

    try {
      await generateRedirects();
      const fileContents = await readFile();
      writeStaticRedirectsFile(fileContents);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  })
  .catch(error => {
    console.log(error);
    process.exit(1);
  });
