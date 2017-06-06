var request = require('request');
var fs = require('fs');
var GITHUB_USER = 'caitlinquon';
var GITHUB_TOKEN = '9a074496dee278a1861c904f3fc0c909f650a2fa';
var owner = process.argv[2];
var repo = process.argv[3];
//cb helps return asynchoronous results of getRepoContributors
function getRepoContributors(repoOwner, repoName, cb) {
  var requestURL = 'https://' + GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';
  var options = {
    url: requestURL,
    headers: {
      'User-Agent': 'caitlinquon'
    },
    json: true
  };
  request.get(options, function(err, response, body){
    cb(err, body);
  });
}

function downloadImageByURL(url, filePath) {
  request(url)
  .pipe(fs.createWriteStream(filePath));
}

getRepoContributors(owner, repo, function(err, body) {
  body.forEach(function(item, index, array){
    downloadImageByURL(item.avatar_url, './avatars/' + item.login + '.jpg');
  });
  
});




