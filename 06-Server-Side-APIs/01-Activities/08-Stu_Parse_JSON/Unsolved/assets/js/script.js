// TODO: Edit the URL to get only 5 issues of Twitter's Chill repo
var requestUrl = 'https://api.github.com/repos/twitter/chill/issues';

fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log('Twitter Repo Issues \n----------');
    console.log(data);
    // TODO: Loop through the response
    for ( var i=0; i < 5; i++ ) {
    // TODO: Console log each issue's URL and each user's login
      console.log(data[i].user.login);
      console.log(data[i].html_url);
    }
  });