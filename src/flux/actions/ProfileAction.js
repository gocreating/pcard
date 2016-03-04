import alt from '../alt';

class ProfileAction {
  constructor() {
    this.generateActions(
      'sendTest'
    );
  }

  test() {
    return this.sendTest();
  }
}

export default alt.createActions(ProfileAction);