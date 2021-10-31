export const context = {
  payload: {
    issue: {
      number: 123,
    },
  },
  repo: {
    owner: "monalisa",
    repo: "helloworld",
  },
};

const mockApi = {
  rest: {
    issues: {
      addLabels: jest.fn(),
      removeLabel: jest.fn(),
    },
    repos: {
      getContent: jest.fn(),
    },
  },
  paginate: jest.fn(),
};

export const getOctokit = jest.fn().mockImplementation(() => mockApi);
