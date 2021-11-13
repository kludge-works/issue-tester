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
      get: jest.fn().mockResolvedValue({data: {
          "url": "https://api.github.com/repos/kludge-works/issue-tester/issues/10",
          "repository_url": "https://api.github.com/repos/kludge-works/issue-tester",
          "labels_url": "https://api.github.com/repos/kludge-works/issue-tester/issues/10/labels{/name}",
          "comments_url": "https://api.github.com/repos/kludge-works/issue-tester/issues/10/comments",
          "events_url": "https://api.github.com/repos/kludge-works/issue-tester/issues/10/events",
          "html_url": "https://github.com/kludge-works/issue-tester/issues/10",
          "id": 1043264796,
          "node_id": "I_kwDOGBZIws4-LvUc",
          "number": 10,
          "title": "[Whitelist]: ",
          "user": {
            "login": "timothysparg",
            "id": 6872586,
            "node_id": "MDQ6VXNlcjY4NzI1ODY=",
            "avatar_url": "https://avatars.githubusercontent.com/u/6872586?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/timothysparg",
            "html_url": "https://github.com/timothysparg",
            "followers_url": "https://api.github.com/users/timothysparg/followers",
            "following_url": "https://api.github.com/users/timothysparg/following{/other_user}",
            "gists_url": "https://api.github.com/users/timothysparg/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/timothysparg/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/timothysparg/subscriptions",
            "organizations_url": "https://api.github.com/users/timothysparg/orgs",
            "repos_url": "https://api.github.com/users/timothysparg/repos",
            "events_url": "https://api.github.com/users/timothysparg/events{/privacy}",
            "received_events_url": "https://api.github.com/users/timothysparg/received_events",
            "type": "User",
            "site_admin": false
          },
          "labels": [
            {
              "id": 3505007118,
              "node_id": "LA_kwDOGBZIws7Q6ioO",
              "url": "https://api.github.com/repos/kludge-works/issue-tester/labels/X-Whitelist:version=v1",
              "name": "X-Whitelist:version=v1",
              "color": "004D0C",
              "default": false,
              "description": ""
            },
            {
              "id": 3505276660,
              "node_id": "LA_kwDOGBZIws7Q7kb0",
              "url": "https://api.github.com/repos/kludge-works/issue-tester/labels/X-Whitelist:task:add-name-rule",
              "name": "X-Whitelist:task:add-name-rule",
              "color": "1d76db",
              "default": false,
              "description": ""
            },
            {
              "id": 3505277062,
              "node_id": "LA_kwDOGBZIws7Q7kiG",
              "url": "https://api.github.com/repos/kludge-works/issue-tester/labels/X-Whitelist:status:initial",
              "name": "X-Whitelist:status:initial",
              "color": "D012B1",
              "default": false,
              "description": ""
            }
          ],
          "state": "open",
          "locked": false,
          "assignee": {
            "login": "timothysparg",
            "id": 6872586,
            "node_id": "MDQ6VXNlcjY4NzI1ODY=",
            "avatar_url": "https://avatars.githubusercontent.com/u/6872586?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/timothysparg",
            "html_url": "https://github.com/timothysparg",
            "followers_url": "https://api.github.com/users/timothysparg/followers",
            "following_url": "https://api.github.com/users/timothysparg/following{/other_user}",
            "gists_url": "https://api.github.com/users/timothysparg/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/timothysparg/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/timothysparg/subscriptions",
            "organizations_url": "https://api.github.com/users/timothysparg/orgs",
            "repos_url": "https://api.github.com/users/timothysparg/repos",
            "events_url": "https://api.github.com/users/timothysparg/events{/privacy}",
            "received_events_url": "https://api.github.com/users/timothysparg/received_events",
            "type": "User",
            "site_admin": false
          },
          "assignees": [
            {
              "login": "timothysparg",
              "id": 6872586,
              "node_id": "MDQ6VXNlcjY4NzI1ODY=",
              "avatar_url": "https://avatars.githubusercontent.com/u/6872586?v=4",
              "gravatar_id": "",
              "url": "https://api.github.com/users/timothysparg",
              "html_url": "https://github.com/timothysparg",
              "followers_url": "https://api.github.com/users/timothysparg/followers",
              "following_url": "https://api.github.com/users/timothysparg/following{/other_user}",
              "gists_url": "https://api.github.com/users/timothysparg/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/timothysparg/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/timothysparg/subscriptions",
              "organizations_url": "https://api.github.com/users/timothysparg/orgs",
              "repos_url": "https://api.github.com/users/timothysparg/repos",
              "events_url": "https://api.github.com/users/timothysparg/events{/privacy}",
              "received_events_url": "https://api.github.com/users/timothysparg/received_events",
              "type": "User",
              "site_admin": false
            }
          ],
          "milestone": null,
          "comments": 0,
          "created_at": "2021-11-03T09:17:40Z",
          "updated_at": "2021-11-03T09:17:40Z",
          "closed_at": null,
          "author_association": "CONTRIBUTOR",
          "active_lock_reason": null,
          "body": "### full name\n\njohn\n\n### permanence\n\nDay",
          "closed_by": null,
          "reactions": {
            "url": "https://api.github.com/repos/kludge-works/issue-tester/issues/10/reactions",
            "total_count": 0,
            "+1": 0,
            "-1": 0,
            "laugh": 0,
            "hooray": 0,
            "confused": 0,
            "heart": 0,
            "rocket": 0,
            "eyes": 0
          },
          "timeline_url": "https://api.github.com/repos/kludge-works/issue-tester/issues/10/timeline",
          "performed_via_github_app": null
        }}
      ),
    },
    repos: {
      getContent: jest.fn(),
    },
  },
  paginate: jest.fn(),
};

export const getOctokit = jest.fn().mockImplementation(() => mockApi);
