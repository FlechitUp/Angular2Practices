System.register(['angular2/platform/browser', './app.component', './deneme', './clicevent', './loop', './loopdois'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, app_component_1, deneme_1, clicevent_1, loop_1, loopdois_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (deneme_1_1) {
                deneme_1 = deneme_1_1;
            },
            function (clicevent_1_1) {
                clicevent_1 = clicevent_1_1;
            },
            function (loop_1_1) {
                loop_1 = loop_1_1;
            },
            function (loopdois_1_1) {
                loopdois_1 = loopdois_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent);
            browser_1.bootstrap(deneme_1.deneme);
            browser_1.bootstrap(clicevent_1.clicevent);
            browser_1.bootstrap(loop_1.loop);
            browser_1.bootstrap(loopdois_1.loopdois);
        }
    }
});
//# sourceMappingURL=main.js.map