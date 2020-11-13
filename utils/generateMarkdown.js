const generateBadges = licenseInput => {
  if (licenseInput === 'Apache License 2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else if (licenseInput === 'BSD') {
    return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
  } else if (licenseInput === 'ISC') {
    return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
  } else if (licenseInput === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  }
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `${generateBadges(...data.license)}

  # ${data.title}
  # Description
  ${data.description}

  ### Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [License](#license)

  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contribution
  ${data.contribution}
  ## Tests
  ${data.tests}
  ## Questions

  ${data.questions}
  * Got questions? [email me](mailto:${data.email})<br>
  * [My GitHub profile](https://github.com/${data.github})
      `;
}

// enable import from other files
module.exports = generateMarkdown;
