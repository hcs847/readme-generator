// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
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
  ## License
  ${data.license}
  ## Contribution
  ${data.contribution}
  ## Tests
  ${data.tests}
  ## Questions
  ${data.questions}

      `;
}

module.exports = generateMarkdown;
