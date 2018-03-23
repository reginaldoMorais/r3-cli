module.exports = component => {
  return `import React, { Component } from 'react';

class ${component} extends Component {
  render() {
    return (
      <div>
        Conteúdo
      </div>
    );
  }
}

export default ${component};
`;
};
