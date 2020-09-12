// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Table of Contents
  - ### [Description](#Description)
  - ### [Installation](#Installation)
  - ### [Usage](#Usage)
  - ### [License](#License)
  - ### [Contributors](#Contributors)
  - ### [Test](#Test)
  - ### [Questions](#Question)
  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contributors
  ${data.contributing}
  ## Test
  ${data.test}
  ## Questions
  ${data.questions}
  ## License
  ${data.license}
`;
}

module.exports = generateMarkdown;
