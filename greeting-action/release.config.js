const config = {
  branches: ['main'],
   extends: ['semantic-release-monorepo'],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    ["@semantic-release/git", {
      "assets": ["dist/*.js", "dist/*.js.map"],
      "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
    }],
    ['@semantic-release/github', {
      "assets": ["dist/*.js", "dist/*.js.map"]
    }

  ],
    'semantic-release-github-actions-tags'
  ]
};

module.exports = config;
