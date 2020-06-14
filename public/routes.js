app.config(function ($routeProvider) {
  var routeResolvers = {
    loggedIn: function (auth) {
      return auth.requireLogin();
    },
    waitForAuth: function (auth) {
      return auth.waitForAuth();
    },
    requireAdmin: function (auth) {
      return auth.requireAdmin();
    },
    userSessions: function (sessions, currentIdentity, auth) {
      return auth.requireLogin().then(function () {
        return sessions.getSessionsByUser(currentIdentity.currentUser.id);
      });
    },
    allSessions: function (sessions, auth) {
      return auth.requireLogin().then(function () {
        return sessions.getAllSessions();
      });
    },
    allUsers: function (users, auth) {
      return auth.requireLogin().then(function () {
        return users.getAllUsers();
      });
    },
  };

  $routeProvider
    .when('/admin/login', {
      controller: 'adminLoginCtrl',
      controllerAs: '$ctrl',
      templateUrl: 'admin/adminLogin.html',
      resolve: {
        currentAuth: routeResolvers.waitForAuth,
      },
    })
    .when('/admin/results', {
      template:
        '<results-el ng-custom-element ngce-prop-sessions_by_vote_desc="$resolve.allSessions"></results-el>',
      resolve: {
        admin: routeResolvers.requireAdmin,
        allSessions: routeResolvers.allSessions,
      },
    })
    .when('/admin/users/:id', {
      controller: 'userDetailsCtrl',
      templateUrl: 'admin/userDetails.html',
      controllerAs: 'vm',
      resolve: {
        admin: routeResolvers.requireAdmin,
        allUsers: routeResolvers.allUsers,
      },
    })
    .when('/users', {
      template:
        '<user-list-el ng-custom-element ngce-prop-all_users="$resolve.allUsers"></user-list-el>',
      resolve: {
        admin: routeResolvers.requireAdmin,
        allUsers: routeResolvers.allUsers,
      },
    })
    .when('/admin/createusers', {
      template: '<create-users-el ng-custom-element></create-users-el>',
      resolve: {
        admin: routeResolvers.requireAdmin,
      },
    })
    .when('/home', {
      controller: 'homeCtrl',
      templateUrl: 'home/home.html',
      controllerAs: 'vm',
      resolve: {
        login: routeResolvers.loggedIn,
        userSessions: routeResolvers.userSessions,
      },
    })
    .when('/profile', {
      controller: 'profileCtrl',
      templateUrl: 'profile/profile.html',
      controllerAs: 'vm',
      resolve: {
        userProfile: routeResolvers.loggedIn,
      },
    })
    .when('/createsession', {
      controller: 'createNewSessionCtrl',
      templateUrl: 'home/createNewSession.html',
      controllerAs: 'vm',
      resolve: {
        userSessions: routeResolvers.userSessions,
      },
    })
    .when('/login', {
      controller: 'loginCtrl',
      templateUrl: 'security/login.html',
      controllerAs: 'vm',
      resolve: {
        currentAuth: routeResolvers.waitForAuth,
      },
    })
    .when('/logout', {
      controller: 'logoutCtrl',
      controllerAs: 'vm',
      template: '<logout></logout>',
    })
    .otherwise('/home');
});
