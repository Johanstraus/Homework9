// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT License":
      badge =
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case "Apache License 2.0":
      badge =
        "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "Mozilla Public License 2.0 (MPL-2.0)":
      badge =
        "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
      break;
    case "The Unliscense":
      badge =
        "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
      break;
    default:
      badge = "Missing Badge";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT License":
      link = "https://opensource.org/licenses/MIT";
      break;
    case "Apache License 2.0":
      link = "https://opensource.org/licenses/Apache-2.0";
      break;
    case "Mozilla Public License 2.0 (MPL-2.0)":
      link = "https://opensource.org/licenses/MPL-2.0";
      break;
    case "The Unliscense":
      link = "http://unlicense.org/";
      break;
    default:
      link = "Missing Link";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseLink = renderLicenseLink(license);
  const licenseBadge = renderLicenseBadge(license);
  if (license === undefined) {
    return (license = "");
  } else {
    return `
## License
${licenseBadge}
* License - [${license}](${licenseLink})
Copyright (c) 2022 Braxton Minkey
`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  const licenseSection = renderLicenseSection(data.license);
  const licenseBadge = renderLicenseBadge(data.license);
  return `
# ${data.title} ${licenseBadge}
## Table of Contents
 [Description](#description)
 [Installation](#installation)
 [Usage](#usage)
 [Contributions](#contributions)
 [Testing](#testing)
 [Questions](#questions)
## Description
${data.description}
## Installation
${data.installation}
## Usage
${data.usage}
${licenseSection}
## Contributions
${data.contributing}
## Testing Instructions
${data.tests}
## Questions
For any questions on the repository or the application please reach me at one of the following:
* ${data.user} - [Github](https://github.com/${data.githubUsername})
* ${data.user} - [Email](mailto:${data.email})
`;
}

module.exports = generateMarkdown;