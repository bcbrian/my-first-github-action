const { Octokit } = require("@octokit/core");

const octokit = new Octokit({ auth: `personal-access-token123` });

await octokit.request('GET /repos/{owner}/{repo}/actions/runs', {
  owner: 'octocat',
  repo: 'hello-world'
})
