import { run } from "../src/issuer";
import * as github from "@actions/github";
import * as core from "@actions/core";

const fs = jest.requireActual("fs");

jest.mock("@actions/core");
jest.mock("@actions/github");

const gh = github.getOctokit("_");
const addLabelsMock = jest.spyOn(gh.rest.issues, "addLabels");

afterAll(() => jest.restoreAllMocks());

describe("run", () => {

  it("Issue number not found", async () => {
    let mockInput = {
      "repo-token": "foo"
    };

    jest
      .spyOn(core, "getInput")
      .mockImplementation((name: string, ...opts) => mockInput[name]);

    await run();

    expect(addLabelsMock).toHaveBeenCalledTimes(0);
  });
});
