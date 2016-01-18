(function(module) {
  var articlesController = {};

  // done: Create the `articles` table when the controller first loads, with the code that used to be in index.html:

  // done: Setup a function that kicks off the fetching and rendering of articles, using the same
  // code that used to be in index.html.
  // Also be sure to hide all the main section elements, and reveal the #articles section:
  articlesController.index = function() {
    Article.createTable();
    $('main > section').hide();
    $('#articles').show();
    Article.fetchAll(articleView.initIndexPage);
  };

  module.articlesController = articlesController;
})(window);
