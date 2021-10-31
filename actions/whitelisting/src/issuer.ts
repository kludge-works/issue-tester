import * as core from "@actions/core";
import * as github from "@actions/github";

type ClientType = ReturnType<typeof github.getOctokit>;

export async function run() {
  try {
    const token = core.getInput("repo-token", { required: true });

    const issueNumber = getIssueNumber();

    const client: ClientType = github.getOctokit(token);

    if (!issueNumber) {
      core.error("Could not get issue number from context, exiting");
      return;
    }

    core.info(`issue number is ${issueNumber}`)

  } catch (error: any) {
    core.error(error);
    core.setFailed(error.message);
  }
}

function getIssueNumber(): number | undefined {
  const issue = github.context.payload.issue;
  if (!issue) {
    return undefined;
  }

  return issue.number;
}
