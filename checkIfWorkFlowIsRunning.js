const { Octokit } = require("@octokit/core");

const octokit = new Octokit({ auth: process.env.GITTOKEN });
async function main(){
  const resultQued = await octokit.request('GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs', {
    owner: 'bcbrian',
    repo: 'my-first-github-action',
    workflow_id: 'manual-check-if-running.yml',
    status: 'queued',
  });

  const resultsRunning = await octokit.request('GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs', {
    owner: 'bcbrian',
    repo: 'my-first-github-action',
    workflow_id: 'manual-check-if-running.yml',
    status: 'in_progress',
  });
  console.log('I am: ', process.argv[2]);
  console.log('****************');
  console.log('****************');
  console.log('****************');
  console.log(JSON.stringify(resultQued, null, 2));
  console.log('****************');
  console.log('****************');
  console.log('****************');
  console.log(JSON.stringify(resultsRunning, null, 2));
  console.log('****************');
  console.log('****************');
  console.log('****************');

  setTimeout(() => {
    process.exit();
  }, 3000);
}
main();
