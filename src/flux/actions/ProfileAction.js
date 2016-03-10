import alt from '../alt';

class ProfileAction {
  constructor() {
    this.generateActions(
      'listSelf',
      'read',
      'update',
      'clearNew',
      'create'
    );
  }
}

export default alt.createActions(ProfileAction);