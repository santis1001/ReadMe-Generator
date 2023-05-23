// If there is no license, return an empty string
// uses the selected license Object to make the badge and add a link to the 
// opensource.org license documentation
function renderLicenseBadge(license) {
  if (license === `None`) {
    return '';
  }
  else {
    const str = license.key.replace('-', '_');
    return `[![License: ${license.license}](https://img.shields.io/badge/License-${str}-grey.svg)](https://opensource.org/licenses/${license.key})`
  }
}

// If there is no license, return an empty string
// Returns the selected license Individual link
function renderLicenseLink(license) {
  if (license.license === `None`) {
    return '';
  }
  else {
    return `[${license.license}](https://opensource.org/licenses/${license.key})`;
  }
}

// If there is no license, return an empty string
// Returns both result of the functions renderLicenseBadge() and renderLicenseLink
// which results are formatted into what it would be outputed to the readme.md
function renderLicenseSection(license) {
  if (license === `None`) {
    return '';
  }
  else {
    return `${renderLicenseBadge(license)}\n\nUsing ${renderLicenseLink(license)}`;
  }
}
// It will add a contribution policy if theres one.
function AddContribution(params) {
  if (params != '') {
    return `## Contribution\n\n${params}`
  } else {
    return '';
  }
}

// Returns the objecto containing all the license information
// Compete Name, and short name
const getlicenses = require("./licenses");
const lcs = getlicenses();

// Gets the selected license from the data which contains all the answers
// structurize a readme structure and returns it as string to the index.js.
function generateMarkdown(data) {
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
