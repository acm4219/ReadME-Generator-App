// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}
  ## Table of Contents
  - ### [Description](#Description)
  - ### [Installation](#Installation)
  - ### [Usage](#Usage)
  - ### [License](#License)
  - ### [Contributors](#Contributors)
  - ### [Test](#Test)
  - ### [Questions](#Question)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License
  ${data.license}
  ## Contributors
  ${data.contributing}
  ## Test
  ${data.test}
  ## Questions
  ${data.questions}
`;
}

module.exports = generateMarkdown;
