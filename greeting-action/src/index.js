const core = require('@actions/core');

const person = core.getInput('person', { required: true });
console.log(`Subdir Warm Welcome2 ${person}!`);
