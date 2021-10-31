import * as core from "@actions/core";

jest.mock("@actions/core");

beforeAll(() => {
  jest.spyOn(core, "getInput").mockImplementation((name, options) => {
    return jest.requireActual("@actions/core").getInput(name, options);
  });
});

const matchConfig = [{ any: ["*.txt"] }];

describe("method name", () => {
  it("method #1", () => {});
});
