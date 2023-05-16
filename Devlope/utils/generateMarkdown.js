// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === `None`) {
    return '';
  }
  else {
    const str = license.license.replace(' ', '_')
    return `[![License: ${license}](https://img.shields.io/badge/License-${str}-blue.svg)](https://opensource.org/licenses/${license.key})`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === `None`) {
    return '';
  }
  else {
    return `[${license.license}](https://opensource.org/licenses/${license.key})`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === `None`) {
    return '';
  }
  else {
    return `${renderLicenseBadge(license)}\n\nUsing ${renderLicenseLink(license)}`;
  }
}
function AddContribution(params) {
  if (params == 'Yes') {
    return `[Contribution guidelines for this project](docs/CONTRIBUTING.md)`
  } else {
    return '';
  }
}


// TODO: Create a function to generate markdown for README
const getlicenses = require("./licenses");
const lcs = getlicenses();

function generateMarkdown(data) {
  // const index = data.License.findIndex(item => item === lcs);
  const licenseNameToFind = "Apache license 2.0";

  const index = lcs.findIndex(item => item.license === data.License);

  const licenseSelected = lcs[index];

  // console.log(licenseSelected);

  return `# ${data.Title}
## Description
${data.Description}

## Table of Content
- [Installation](#installation)
- [Usage](#usage)
- [License Information](#License)
- [Contribution](#contribution)
- [Test](#test)
- [Questions](#questions)
## Installation
\`\`\`
${data.Installation}
\`\`\`

## Usage
${data.Usage}
## License
${renderLicenseSection(licenseSelected)}

## Contribution
${AddContribution(data.Contributing)}

## Test
${data.Test}

## Questions
For questions regarding the functionality
Contact me at: 
* Github: [${data.username}](https://github.com/${data.username})
* Email: ${data.Email}

`;
}

module.exports = generateMarkdown;
