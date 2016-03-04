import alt from '../alt';

class ProfileAction {
  constructor() {
    this.generateActions(
      'update'
    );
  }
}

export default alt.createActions(ProfileAction);