// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";
  let licenseTag = "";
  if (license === "No License") {
    return "";
  } else {
    if (license = "MIT"){
      licenseTag = "MIT"
    } else if (license = 'GNU GPLv3') {
      licenseTag = "GNU_GPLv3"
    } else if (license = 'Apache 2.0') {
      licenseTag = "Apache_2.0"
    }
    }
  }
  badge = `https://img.shields.io/badge/license-${licenseTag}-blue`;
  return badge;
  }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = "";
  let licenseTag = "";
  if (license === "No License") {
    return "";
  } else  {
    if (license = "MIT"){
      licenseTag = "mit"
    } else if (license = 'GNU GPLv3') {
      licenseTag = "gpl-3.0"
    } else if (license = 'Apache 2.0') {
      licenseTag = "apache-2.0"
    }
    }
  licenseLink = `https://choosealicense.com/licenses/${licenseTag}/`;
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseText = ""
  if (license === "No License") {
    
  } else {
  licenseText = `This project is licensed under the ${license} license. Read more about the license here:`
  }
  return licenseText;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![license description](${renderLicenseBadge(data.license)})

  ## Description

  ${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#License)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}
  

  ## Contributing

  ${data.contribution}

  ## Tests

  ${data.testing}

  ## Questions

  You can reach me at GitHub; my username is ${data.username} and my profile is here: https://github.com/${data.username}. 
  You can also email me at ${data.email}. 
  

`;
};

module.exports = generateMarkdown;
