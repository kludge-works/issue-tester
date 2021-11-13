import { run } from "../src/issuer";
import * as github from "@actions/github";
import * as core from "@actions/core";

jest.mock("@actions/core");
jest.mock("@actions/github");

const gh = github.getOctokit("_");
const errorSpy = jest.spyOn(core, "error");
const issueSpy = jest.spyOn(gh.rest.issues, "get");


afterEach(() => {
  jest.clearAllMocks();
});

describe("run", () => {

  it("Issue number not found", async () => {
    let mockInput = {
      "repo-token": "foo"
    };

    github.context.payload.issue = undefined;

    jest
      .spyOn(core, "getInput")
      .mockImplementation((name: string, ...opts) => mockInput[name]);

    await run();

    expect(errorSpy).toHaveBeenCalledTimes(1);
    expect(errorSpy.mock.calls[0][0]).toBe("Could not get issue number from context, exiting")
    expect(issueSpy).toHaveBeenCalledTimes(0);

  });

  it("green line", async () => {
    let mockInput = {
      "repo-token": "foo"
    };

    github.context.payload.issue = {number: 123}

    jest
        .spyOn(core, "getInput")
        .mockImplementation((name: string, ...opts) => mockInput[name]);

    await run();

    expect(errorSpy).toHaveBeenCalledTimes(0);
    expect(issueSpy).toHaveBeenCalledTimes(1);

  });
});
