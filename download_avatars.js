var request = require('request');
var fs = require('fs');
var GITHUB_USER = 'caitlinquon';
var GITHUB_TOKEN = '9a074496dee278a1861c904f3fc0c909f650a2fa';
var requestURL = 'https://' + GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.come/repos/' + 'jquery' + '/' + 'jquery' + '/contributors';

function getRepoContributors(repoOwner, repoName, cb){
 
}
getRepoContributors("jquery", "jquery", function(err, result){
  if(err) throw err;
  console.log("Errors:", err);
  console.log("Result :", result);
});

