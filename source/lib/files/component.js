module.exports = component => {
  return `import React, { Component } from 'react';

class ${component} extends Component {
  render() {
    return (
      <div>
        Hello World
      </div>
    );
  }
}

export default ${component};
`;
};
