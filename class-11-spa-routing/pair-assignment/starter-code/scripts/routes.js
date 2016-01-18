// done: Configure routes for this app with page.js, by registering each URL your app can handle,
// linked to a a single controller function to handle it:

// done: What function do you call to activate page.js? Fire it off now, to execute
page.base('');

page('/about', aboutController.index);
page('/articles', articlesController.index);
page('*', articlesController.index);

page();
