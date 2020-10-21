const { Octokit } = require("@octokit/core");

const octokit = new Octokit({ auth: process.env.GITTOKEN });
async function main(){
  const resultQued = await octokit.request('GET /repos/bcbrian/my-first-github-action/actions/runs', {
    owner: 'bcbrian',
    repo: 'my-first-github-action',
    status: 'queued',
  });

  const resultsRunning = await octokit.request('GET /repos/bcbrian/my-first-github-action/actions/runs', {
    owner: 'bcbrian',
    repo: 'my-first-github-action',
    status: 'in_progress',
  });
  console.log('****************');
  console.log('****************');
  console.log('****************');
  console.log(resultQued);
  console.log('****************');
  console.log('****************');
  console.log('****************');
  console.log(resultsRunning);
  console.log('****************');
  console.log('****************');
  console.log('****************');

  setTimeout(() => {
    process.exit();
  }, 3000);
}
main();
