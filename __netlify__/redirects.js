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
const filepath = `${__dirname}/../public/_redirects`;
const filepathFixedRedirects = `${__dirname}/fixed_redirects.txt`;

const doRedirects = async () => {
  const generateRedirects = async entries => {
    await fsPromises.truncate(filepath);
    console.log('redirects emptied');
    await fsPromises.appendFile(filepath, '# auto generated redirects \n\n');
    console.log('header added');
    Object.keys(entries.items).map(key => {
      const { slug, redirectsPageContent } = entries.items[key].fields;

      if (Array.isArray(redirectsPageContent)) {
        Object.keys(redirectsPageContent).map(redirectKey => {
          const { url } = redirectsPageContent[redirectKey].fields;

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
    const entries = await client.getEntries({
      content_type: 'pageContent',
    });
    fs.closeSync(fs.openSync(filepath, 'a'));
    await generateRedirects(entries);
    const fileContents = await readFile();
    await writeStaticRedirectsFile(fileContents);
  } catch (error) {
    console.log(error);
    process.exit(-1);
  }
};
doRedirects();
