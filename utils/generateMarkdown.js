// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = ""
  if (license ==="") {
    
  } else {
  badge = `https://img.shields.io/badge/licence-${license}-blue`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenceLink = ""
  if (license ==="") {
    
  } else {
  licenceLink = `https://choosealicense.com/licenses/${license}`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenceLink = ""
  if (license ==="") {
    
  } else {
  licenceLink = `https://choosealicense.com/licenses/${license}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
