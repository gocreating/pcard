import React from 'react';
import { Link } from 'react-router';
import connectToStores from 'alt-utils/lib/connectToStores';
import ProfileStore from '../../../stores/ProfileStore';
import ProfileAction from '../../../actions/ProfileAction';

@connectToStores
export default class ListSelfPage extends React.Component {
  static getStores() {
    return [ProfileStore];
  }

  static getPropsFromStores() {
    return ProfileStore.getState();
  }

  componentDidMount() {
    ProfileAction.listSelf();
  }

  render() {
    const profiles = this.props.listSelfProfile;
    return <div className="container">
      <div className="page-header">
        <h1>My Profiles</h1>
      </div>
      {profiles.length === 0 &&
        'There is no profile.'}
      {profiles.map((profile, idx) =>
        <div key={idx}>
          <Link to={`/profile/${profile._id}`}>
            {profile._id}
          </Link>
          <pre>
            {JSON.stringify(profile.value, null, 2)}
          </pre>
        </div>)}
    </div>;
  }
};