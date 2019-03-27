#!/usr/bin/env node

(async () => {
  try {
    const { createClient } = require('contentful-management');
    
    // Configuration variables
    const [, , SPACE_ID, ENVIRONMENT_ID, CMA_ACCESS_TOKEN] = process.argv;
    const client = createClient({
      accessToken: CMA_ACCESS_TOKEN,
      headers: {
        'X-Contentful-Source-Environment': 'master',
      },
    });
    const space = await client.getSpace(SPACE_ID);
    let environment;
    console.log('Running with the following configuration');
    console.log(`SPACE_ID: ${SPACE_ID}`);
    console.log(`ENVIRONMENT_ID: ${ENVIRONMENT_ID}`);

    try {
      environment = await space.getEnvironment(ENVIRONMENT_ID);
      if (ENVIRONMENT_ID == 'CI_MIGRATION') {
        await environment.delete();
        console.log('Environment deleted');
      }
    } catch (e) {
      console.log('Environment not found');
    }
    console.log('All done!');
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
