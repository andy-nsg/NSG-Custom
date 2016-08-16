four51.app.directive('alertShow', ['$animate', function($animate) {
    return {
        scope: {
            'alertShow': '='
        },
        link: function(scope, element) {
            scope.$watch('alertShow', function(show) {
                if (show) {
                    $animate.enabled(true);
                    $animate.removeClass(element, 'ng-hide');
                    $timeout($animate.addClass(element, 'ng-hide'), 10000); // Gives us a timeout of 10 seconds $ak
                    $animate.enabled(false);
                }
            });
        }
    }
}]);
