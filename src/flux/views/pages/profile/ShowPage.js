import React from 'react';
import connectToStores from 'alt-utils/lib/connectToStores';
import ProfileStore from '../../../stores/ProfileStore';
import ProfileAction from '../../../actions/ProfileAction';

@connectToStores
export default class CreatePage extends React.Component {
  constructor(props) {
    super(props);
  }

  static getStores() {
    return [ProfileStore];
  }

  static getPropsFromStores() {
    return ProfileStore.getState();
  }

  componentDidMount() {
    const { id } = this.props.params;
    ProfileAction.read(id);
  }

  render() {
    const profile = this.props.currentProfileValue;
    return <div className="container">
      <h1>Profile</h1>
      <pre>
        {JSON.stringify(profile, null, 2)}
      </pre>
    </div>;
  }
};