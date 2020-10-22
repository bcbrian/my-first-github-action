const { Octokit } = require("@octokit/core");

const octokit = new Octokit({ auth: process.env.GITTOKEN });
async function main() {
  const resultQued = await octokit.request(
    "GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs",
    {
      owner: "bcbrian",
      repo: "my-first-github-action",
      workflow_id: "manual-check-if-running.yml",
      status: "queued",
    }
  );

  const resultsRunning = await octokit.request(
    "GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs",
    {
      owner: "bcbrian",
      repo: "my-first-github-action",
      workflow_id: "manual-check-if-running.yml",
      status: "in_progress",
    }
  );

  const thisRunNum = process.argv[2];
  console.log("****************");
  console.log("****************");
  console.log("****************");
  console.log("I am: ", thisRunNum);
  console.log("****************");
  console.log("****************");
  console.log("****************");
  console.log(
    JSON.stringify(
      resultQued.data.workflow_runs.map(({ run_number }) => run_number),
      null,
      2
    )
  );
  console.log("****************");
  console.log("****************");
  console.log("****************");
  console.log(
    JSON.stringify(
      resultsRunning.data.workflow_runs.map(({ run_number }) => run_number),
      null,
      2
    )
  );
  console.log("****************");
  console.log("****************");
  console.log("****************");

  const qued =
    resultQued?.data?.workflow_runs?.filter(
      ({ run_number }) => run_number < thisRunNum
    ) || [];
  const running =
    resultsRunning?.data?.workflow_runs?.filter(
      ({ run_number }) => run_number < thisRunNum
    ) || [];

  const all = [...qued, ...running];
  console.log(all.map((a) => a.run_number));
  console.log("****************");
  console.log("****************");
  console.log("****************");
  console.log("****************");
  console.log("Canceling");
  console.log(all.map((a) => a.cancel_url));
  all.map((a) => octokit.request(`GET ${a.cancel_url}`));
  console.log("****************");
  console.log("****************");

  setTimeout(() => {
    process.exit();
  }, 0.5 * 60 * 1000);
}
main();
