require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const contentful = require('contentful');
const fs = require('fs');

const client = contentful.createClient({
  space: process.env.space_id,
  accessToken: process.env.access_token,
});

client.getContentTypes().then(contentTypes => {
  const generateRedirects = async () => {
    for (const contentType of contentTypes.items) {
      let contentTypeId = contentType.sys.id;
      fs.appendFileSync(
        `${__dirname}/../public/_redirects`,
        `${contentTypeId} data to append \n`
      );
    }
  };
  generateRedirects();
});
