(function(){
"use strict";
'use strict';

var app = angular.module('viewCustom', ['angularLoad']);
   
  /*<!-- LibNav Widget Integration -->*/
  app.controller('prmSearchResultAvailabilityLineAfterController',  ['angularLoad', function (angularLoad) {
    var w = this;
    var w = document.createElement("script");
    w.type = "text/javascript";
    w.async = true;
    w.src = "http://navigation.library.oregonstate.edu/widget/lib-nav.js";
    var b = document.getElementsByTagName("script")[0];
    b.parentNode.insertBefore(w, b);

    var css2 = document.createElement("link");
    css2.type = "text/css";
    css2.rel = "Stylesheet";
    css2.href = "http://navigation.library.oregonstate.edu/widget/lib-nav.css";
    var a = document.getElementsByTagName("script")[0];
    a.parentNode.insertBefore(css2, a);
  }]);

  app.component('prmSearchResultAvailabilityLineAfter', {
    bindings: { },
    controller: 'prmSearchResultAvailabilityLineAfterController',
    template: `<div class="libnav-map">
    </div>`
  });
  /*<!-- LibNav End -->*/

// show/hide borrowing institutions   
app.component('prmAlmaMoreInstAfter', {
    controller: 'institutionToggleController',
    template: '<md-button class="md-raised" ng-click="toggleLibs()">\n\t\t\t{{ showLibs ? \'Hide Libraries &laquo;\' : \'Show Libraries &raquo;\' }}\n\t\t\t</md-button>'
}).controller('institutionToggleController', ['$scope', function ($scope) {
    this.$onInit = function () {
        $scope.showLibs = false;
        $scope.button = angular.element(document.querySelector('prm-alma-more-inst-after'));
        $scope.tabs = angular.element(document.querySelector('prm-alma-more-inst md-tabs'));
        $scope.tabs.addClass('hide');
        $scope.button.after($scope.tabs);
        $scope.toggleLibs = function () {
            $scope.showLibs = !$scope.showLibs;
            if ($scope.tabs.hasClass('hide')) $scope.tabs.removeClass('hide');else $scope.tabs.addClass('hide');
        };
    };
}]); 

})();

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-35760875-20');
  ga('send', 'pageview');
  ga('set', 'anonymizeIp', true);