import alt from '../alt';

class ProfileAction {
  constructor() {
    this.generateActions(
      'update',
      'create'
    );
  }
}

export default alt.createActions(ProfileAction);