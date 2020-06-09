let lazySharedInstance: CurrentIdentity | undefined;
export class CurrentIdentity {
  currentUser: null;

  static sharedInstance() {
    if (!lazySharedInstance) {
      lazySharedInstance = new CurrentIdentity();
    }
    return lazySharedInstance;
  }

  baseUrl = '/api/users';
  constructor() {}

  setUser(user) {
    this.currentUser = user;
  }
  clearUser() {
    this.currentUser = null;
  }
  authenticated() {
    return !!this.currentUser;
  }

  updateUser(newUserObj) {
    // var dfd = $q.defer();

    // $http.put('/api/users/' + this.currentUser.id, newUserObj).then(
    //   function (response) {
    //     this.currentUser.firstName = newUserObj.firstName;
    //     this.currentUser.lastName = newUserObj.lastName;
    //     dfd.resolve();
    //   }.bind(this),
    //   function (response) {
    //     dfd.reject('Error Logging Out');
    //   }
    // );
    // return dfd.promise;

    return fetch(`${this.baseUrl}${this.currentUser.id}`, newUserObj)
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        this.currentUser.firstName = newUserObj.firstName;
        this.currentUser.lastName = newUserObj.lastName;
      })
      .catch((res) => {});
  }
}
