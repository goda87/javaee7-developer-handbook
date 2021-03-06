// A shared service

angular.module('sharedService', [])

//myApp
    .factory( 'sharedService', function ($rootScope) {
        var sharedService = { };

        sharedService.message = '';

        sharedService.setBroadcastMessage = function(message) {
            sharedService.message = message;
            sharedService.broadcastMessage();
        }

        sharedService.broadcastMessage = function() {
            $rootScope.$broadcast('handleBroadcastMessage');
        }

        return sharedService;
    });
