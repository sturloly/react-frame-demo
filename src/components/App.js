// This component handles ths App template used on every page
import React, {PropTypes} from 'react';
import Header from './common/Header';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Header/>
        {this.props.children}
      </div>
    );
  }
}

// prop type validation
App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;

// {this.props.children} components from routes as props.child passed into app
