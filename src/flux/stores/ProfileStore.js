import alt from '../alt';
import ProfileAction from '../actions/ProfileAction';
import ProfileSchema from '../../server/models/schemas/Profile';

class ProfileStore {
  constructor() {
    this.bindActions(ProfileAction);
    this.state = {
      test: 'zzzz',
    };
  }

  onSendTest() {
    this.setState({
      test: 'wahaha',
    });
  }
}

export default alt.createStore(ProfileStore, 'ProfileStore');