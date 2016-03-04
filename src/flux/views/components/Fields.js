import React from 'react';

export default class Fields extends React.Component {
  render() {
    return (
      <div className="form-horizontal">
        {this.props.children}
      </div>
    );
  }
};