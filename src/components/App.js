// This component handles ths App template used on every page
import React, {PropTypes} from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <p>Header here...</p>
        {this.props.children}
      </dvb>
    );
  }
}

// prop type validation
App.propTypes = {
  children: propTypes.object.isRequired
};

export default App;
