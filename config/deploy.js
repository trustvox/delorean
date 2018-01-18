module.exports = function (deployTarget) {
  var ENV = {};

  if (deployTarget === 'production') {
    ENV.git = {
      repo: 'git@github.com:trustvox/delorean.git',
      branch: 'deploys',
      commitMessage: 'Deployed %@'
    }

    ENV.pipeline = {
      activateOnDeploy: true
    }
  }

  return ENV;
};
