import React from 'react';
import connectToStores from 'alt-utils/lib/connectToStores';
import ProfileStore from '../../../stores/ProfileStore';
import ProfileAction from '../../../actions/ProfileAction';

@connectToStores
export default class CreatePage extends React.Component {
  constructor(props) {
    super(props);
  }
  static contextTypes = {
    router: React.PropTypes.any.isRequired,
  };

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
    const profile = this.props.readProfile;
    return <div className="container">
      <div className="page-header">
        <h1>
          Profile
          <button
            className="btn btn-danger pull-right"
            onClick={this._btnDeleteClick}>
            Delete
          </button>
        </h1>
      </div>
      <div className="row">
        <div className="col-md-12">
          <pre>
            {JSON.stringify(profile, null, 2)}
          </pre>
        </div>
      </div>
    </div>;
  }
};