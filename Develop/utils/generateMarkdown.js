// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "Apache 2.0"){
    return '![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
  } else if (license === "GNU"){
    return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
  } else if (license === "MIT"){
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  } 
  return ("")
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "Apache 2.0"){
    return `https://opensource.org/licenses/Apache-2.0`;
  } else if (license === "GNU"){
    return `https://www.gnu.org/licenses/gpl-3.0`;
  } else if (license === "MIT"){
    return `https://opensource.org/licenses/MIT`;
  } 
  return ("");
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None"){
    return "";
  }
  return `## License`;
}

//function for links/images section
function imagesAndLinks(links){
  if (links === "yes"){
    return `## Links`;
  } else if (links === "no"){
  return ("");
}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.title}

  ${renderLicenseSection(data.license)}
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}

  ## Description
  ${data.description}

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributions](#contributions)
  * [Tests](#tests)
  * [Questions](#questions)
  * [GitHub](#github)
  * [Links and Images](#links)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributions
  ${data.contributions}

  ## Tests
  ${data.tests}

  ## Questions
  ${data.questions}
  
  Send me an email at ${data.email}

  ## GitHub
  https://github.com/${data.gitUsername}

  ${imagesAndLinks(data.linksImages)}
`
}

module.exports = generateMarkdown;
