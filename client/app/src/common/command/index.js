
//application commands
require('./LoginCommand');
require('./LogoutCommand');
require('./GetCurrentUserCommand');
require('./CreateUserCommand');

module.exports = angular.module('loghApp.commandConfig', [])
    .config(function($commangularProvider) {

        $commangularProvider.mapTo('LoginEvent').asSequence()
            .add('LoginCommand').add('GetCurrentUserCommand');

        $commangularProvider.mapTo('LogoutEvent').asSequence()
            .add('LogoutCommand');

        $commangularProvider.mapTo('GetCurrentUserEvent').asSequence()
            .add('GetCurrentUserCommand');

        $commangularProvider.mapTo('CreateUserEvent').asSequence()
            .add('CreateUserCommand').add('GetCurrentUserCommand');

    }
);
