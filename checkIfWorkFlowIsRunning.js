const { Octokit } = require("@octokit/core");

const octokit = new Octokit({ auth: process.env.GITTOKEN });

const results = await octokit.request('GET /repos/bcbrian/my-first-github-action/actions/runs', {
  owner: 'bcbrian',
  repo: 'my-first-github-action',
  status: 'queued',
});

const result2 = await octokit.request('GET /repos/bcbrian/my-first-github-action/actions/runs', {
  owner: 'bcbrian',
  repo: 'my-first-github-action',
  status: 'in_progress',
});
console.log('****************');
console.log('****************');
console.log('****************');
console.log(results);
console.log('****************');
console.log('****************');
console.log('****************');
console.log(results2);
console.log('****************');
console.log('****************');
console.log('****************');

setTimeout(() => {
  process.exit();
}, 3000);
