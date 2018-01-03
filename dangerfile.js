// @flow

/* eslint flowtype-errors/enforce-min-coverage: 0 */

import { danger, warn, markdown } from 'danger';

// No PR is too small to include a decription of why you made a change
if (danger.github.pr.body.length < 10) {
  warn('Please include a description of your PR changes.');
}

// Check that someone has been assigned to this PR
if (danger.github.pr.assignee === null) {
  warn(
    'Please assign someone to merge this PR, and optionally include people who should review.',
  );
}

// Warn when PR size is large
const bigPRThreshold = 600;
if (danger.github.pr.additions + danger.github.pr.deletions > bigPRThreshold) {
  warn(':exclamation: Big PR');
  markdown(
    `> Pull Request size seems relatively large.
     If Pull Request contains multiple changes, split each into separate PR will helps faster, easier review.`,
  );
}
