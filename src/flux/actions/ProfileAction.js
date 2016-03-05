import alt from '../alt';

class ProfileAction {
  constructor() {
    this.generateActions(
      'read',
      'update',
      'create'
    );
  }
}

export default alt.createActions(ProfileAction);