// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description 
${data.description}

## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  clone the repo and use npm and use node index.js
  
  ## Usage
  ${data.Usage}
  
  ## License
  This application is covered under ${data.license}.
  
  ## Contributing
  n/a for now 
  
  ## Tests
  none at the moment 
  
  ## Questions
  Have questions? Contact the developer at ${data.email} or [check out their GitHub profile](https://github.com/${data.github}).

`;
}

module.exports = generateMarkdown;