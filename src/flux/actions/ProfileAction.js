import alt from '../alt';

class ProfileAction {
  constructor() {
    this.generateActions(
      'listSelf',
      'read',
      'update',
      'clearNew',
      'create',
      'delete'
    );
  }
}

export default alt.createActions(ProfileAction);