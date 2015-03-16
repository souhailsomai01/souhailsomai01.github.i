angular.module("myApp.views").run(["$templateCache", function($templateCache) {$templateCache.put("/partial1.html","<div class=\'box twitter-{{twReady()}}\'>\n  <div class=\'row\'>\n    <div class=\'col-xs-12\'>\n      <h1>Twitter OAuth Example</h1>\n      <button class=\'btn btn-primary\' id=\'connectButton\' ng-click=\'connectButton()\' type=\'button\'>Connect Twitter</button>\n      <button class=\'btn btn-info\' id=\'getTimelineButton\' ng-click=\'refreshTimeline(true)\' type=\'button\'>Update My Timeline</button>\n      <button class=\'btn btn-link\' id=\'signOut\' ng-click=\'signOut()\' type=\'button\'>Sign Out</button>\n    </div>\n  </div>\n  <div class=\'row\'>\n    <div class=\'col-xs-12\'>\n      <div class=\'row\' ng-repeat=\'t in tweets\'>\n        <div class=\'col-sm-1 col-xs-2\'>\n          <img class=\'img-circle\' ng-src=\'{{t.user.profile_image_url}}\'>\n        </div>\n        <div class=\'col-sm-11 col-xs-10\'>\n          <small>{{t.user.name}}</small>\n          <br>\n            {{t.text}}\n          <br>\n          <a class=\'btn btn-primary\' href=\'#/view2/{{t.user.id}}\' type=\'button\'>Send Private Message</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>");
$templateCache.put("/partial2.html","<p>User id = {{id}}</p>\n<a href=\'#/\'>Back</a>\n<div class=\'row user-{{!!user}}\'>\n  <div class=\'col-xs-12\'>\n    <div class=\'row\'>\n      <div class=\'loading\'>\n        Wait a moment please...\n      </div>\n      <div class=\'col-sm-1 col-xs-2\'>\n        <img class=\'img-circle\' ng-src=\'{{user.profile_image_url}}\'>\n      </div>\n      <div class=\'col-sm-11 col-xs-10\'>\n        <p>{{user.name}}</p>\n        <small>{{user.description}}</small>\n      </div>\n      <textarea ng-model=\'textToUser\'></textarea>\n      <button class=\'btn btn-primary\' ng-click=\'sendMessage(textToUser)\' type=\'button\'>Send messages</button>\n    </div>\n  </div>\n</div>");}]);