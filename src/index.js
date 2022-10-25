const core = require('@actions/core');

const person = core.getInput('person', { required: true });
console.log(`0.0.2 Warm Welcome ${person}!`);
