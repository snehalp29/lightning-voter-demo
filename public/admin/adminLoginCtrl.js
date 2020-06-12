angular
  .module('app')
  .controller('adminLoginCtrl', function (
    $location,
    currentIdentity,
    auth,
    toastr
  ) {
    this.pagetitle = 'Admin Login Title';
    this.loggedIn = currentIdentity.authenticated();
    if (this.loggedIn) {
      $location.path('/home');
    }

    this.login = function () {
      auth
        .login({
          username: this.email,
          password: this.password,
        })
        .then(
          function () {
            alert('adminLoginCtrl');
            $location.path('/home');
          },
          function (err) {
            toastr.error(err);
          }
        );
    };
    this.handleauth = function (event) {
      if (event.detail) {
        $location.path('/home');
      } else {
        console.log('login unsuccessfull', event);
      }
    };
  });
