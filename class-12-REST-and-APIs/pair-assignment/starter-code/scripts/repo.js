(function(module) {
  var repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {
    console.log('requestRepos working');
    // done: How would you like to fetch your repos? Don't forget to call the callback.
    // fetch repo's with ajax - 1st requirement DONE
    // write a success function to do something - 2nd requirement
    // var qs = '?per_page=100&sort=updated';

    $.ajax({
       url: 'https://api.github.com/users/rdavid8/repos' +
             '?per_page=5&sort=updated',
       type: 'GET',
       headers: { 'Authorization': 'token ' + githubToken },
       success: function(data, message, xhr) {
         repos.all = data;
         console.log(data[0].html_url);
         $('#about ul ').append(

         )
        }
      })
      .done(callback);
  };

  // DONE: Model method that filters the full collection for repos with a particular attribute.
  // You could use this to filter all repos that have a non-zero `forks_count`, `stargazers_count`, or `watchers_count`.
  repos.with = function(attr) {
    return repos.all.filter(function(repo) {
      return repo[attr];
    });
  };

  module.repos = repos;
})(window);
