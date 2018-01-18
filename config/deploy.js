module.exports = function (deployTarget) {
  var ENV = {};

  if (deployTarget === 'production') {
    ENV.git = {
      repo: 'git@github.com:trustvox/delorean.git',
      branch: 'gh-pages',
      worktreePath: 'tmp/delorean-deploy',
      commitMessage: 'Deployed %@',
    }

    ENV.pipeline = {
      activateOnDeploy: true
    }
  }

  return ENV;
};
