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
};

const generateTests = testsText => {
  if (!testsText) {
    return ``;
  }
  return `
  ## Tests
  ${testsText}
  `
};

const tableOfContentTests = testsTable => {
  if (!testsTable) {
    return ``;
  }
  return `
  * [Tests](#tests)
  `
};

const generateContribution = contributionText => {
  if (!contributionText) {
    return ``;
  }
  return `
  ## Contribution
  ${contributionText}
  `
};

const tableOfContentContribution = contributionTable => {
  if (!contributionTable) {
    return ``;
  }
  return `
  * [Contribution](#contribution)
  `
};

// function to generate markdown for README
module.exports = templateMarkdown => {
  const {
    github,
    email,
    title,
    description,
    installation,
    usage,
    license,
    contribution,
    tests,
    questions
  } = templateMarkdown

  return `${generateBadges(...license)}
  # ${title}
  # Description
  ${description}

  ### Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  ${tableOfContentTests(tests)}
  ${tableOfContentContribution(contribution)}
  * [Questions](#questions)

  ## Installation
  ${installation}
  
  ## Usage
  ${usage}

  ${generateContribution(contribution)}

  ${generateTests(tests)}
  
 ## Questions
  ${questions}
  * Got questions? [email me](mailto:${email})<br>
  * [My GitHub profile](https://github.com/${github})
      `;
};