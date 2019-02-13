require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const contentful = require('contentful');
const fs = require('fs');
const fsPromises = require('fs/promises');

const client = contentful.createClient({
  space: process.env.ctfl_spaceId,
  accessToken: process.env.ctfl_accessToken,
});

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
        const { slug } = Entries.items[key].fields;

        const writeRedirectsFile = async () => {
          await fsPromises.appendFile(
            filepath,
            `/this-should-redirect${key}              /${slug} \n`
          );
        };

        writeRedirectsFile(slug);

        console.log(`${slug} added.`);
        return true;
      });
    };
    await generateRedirects().catch(error => {
      console.log(error);
      process.exit(1);
    });

    const readFile = async () => {
      let fileHandle = null;
      fileHandle = await fsPromises.open(filepathFixedRedirects, 'r+');
      const content = await fsPromises.readFile(fileHandle, 'utf-8');

      if (fileHandle) {
        await fileHandle.close();
      }
      console.log(content);
      return content;
    };

    const writeStaticRedirectsFile = async staticRedirects => {
      await fsPromises.appendFile(filepath, '# static redirects generated\n\n');
      await fsPromises.appendFile(filepath, staticRedirects);
    };

    const fileContents = await readFile().catch(error => {
      console.log(error);
      process.exit(1);
    });

    writeStaticRedirectsFile(fileContents).catch(error => {
      console.log(error);
      process.exit(1);
    });
  })
  .catch(error => {
    console.log(error);
    process.exit(1);
  });
