import * as core from "@actions/core";
import * as github from "@actions/github";
import * as Context from "@actions/github/lib/context";

type ClientType = ReturnType<typeof github.getOctokit>;

export async function run() {
  try {
    const token = core.getInput("repo-token", { required: true });
    const issue_number = getIssueNumber(github.context);

    if (!issue_number) {
      core.error("Could not get issue number from context, exiting");
      return;
    }

    const client: ClientType = github.getOctokit(token);

    core.info(`issue number is ${issue_number}`);

    const { data: issue } = await client.rest.issues.get({
      owner: github.context.repo.owner,
      repo: github.context.repo.repo,
      issue_number,
    })

    core.info(JSON.stringify(issue));


  } catch (error: any) {
    core.error(error);
    core.setFailed(error.message);
  }
}

function getIssueNumber(context: Context.Context): number | undefined {
  const issue = context.payload.issue;
  if (!issue) {
    return undefined;
  }else{
    return issue.number;
  }
}

