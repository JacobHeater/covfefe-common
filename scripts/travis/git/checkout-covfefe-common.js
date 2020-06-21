// TRAVIS_PULL_REQUEST_BRANCH
// TRAVIS_BRANCH
// TRAVIS_EVENT_TYPE One of [push, pull_request, api, cron]

const { execSync, exec } = require('child_process');
const isPullRequest = process.env.TRAVIS_EVENT_TYPE === 'pull_request';
const branchName = isPullRequest
  ? process.env.TRAVIS_PULL_REQUEST_BRANCH
  : process.env.TRAVIS_BRANCH;
const commonBranchDelimiter = '-needscommon-';

console.log(`The current branch for the build is ${branchName}`);
console.log(`Is pull request? ${isPullRequest ? 'Yes' : 'No'}`);

if (branchName.includes(commonBranchDelimiter)) {
  console.log(`This build has indicated it depends on a branch from covfefe-common`);
  const requestedBranch = branchName.split(commonBranchDelimiter)[1];
  console.log(`The branch that was requested is: ${requestedBranch}`);

  try {
    const io = execSync(`git checkout ${requestedBranch}`).toString();
    console.log(io);
  } catch (e) {
    console.warn(`There was an error while checking out ${requestedBranch}. Falling back to master.`)
    console.log(execSync(`git checkout master`).toString());
  }
}

console.log('Done in checkout script.')
