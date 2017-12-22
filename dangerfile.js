import { danger, warn, markdown } from 'danger';

// No PR is too small to include a decription of why you made a change
if (danger.github.pr.body.length < 10) {
  warn('Please include a description of your PR changes.');
}

// Check that someone has been assigned to this PR
if (danger.github.pr.assignee === null) {
  warn(
    'Please assign someone to merge this PR, and optionally include people who should review.'
  );
}

// Add a CHANGELOG entry for app changes
const hasChangelog = danger.git.modified_files.includes('changelog.md');
const isTrivial = `${danger.github.pr.body}${danger.github.pr.title}`.includes(
  '#trivial'
);

if (!hasChangelog && !isTrivial) {
  warn('Please add a changelog entry for your changes.');
}

// Warn when PR size is large
let errorCount = 0;
const bigPRThreshold = 600;
if (danger.github.pr.additions + danger.github.pr.deletions > bigPRThreshold) {
  warn(':exclamation: Big PR (' + ++errorCount + ')');
  markdown(
    '> (' +
      errorCount +
      ') : Pull Request size seems relatively large. If Pull Request contains multiple changes, split each into separate PR will helps faster, easier review.'
  );
}
