var request = require('request');
var fs = require('fs');
var GITHUB_USER = 'caitlinquon';
var GITHUB_TOKEN = '9a074496dee278a1861c904f3fc0c909f650a2fa';
var requestURL = 'https://' + GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/jquery/jquery/contributors';

function getRepoContributors(repoOwner, repoName, cb){
  var options = {
    url: requestURL, 
    headers: {
      'user-agent': 'LHL Project'
    }
  };
  request.get(options, cb);
};


getRepoContributors("jquery", "jquery", function(err, result){
  var emptyArray = [];
  var data = JSON.parse(result.body);
  data.forEach(function(item, index, array){
    emptyArray.push(item.avatar_url);
  });
    
});

