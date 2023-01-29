//to run program tsc app.ts in terminal .Then app.js file generated automatically .then include app.js in .html file
//console.warn("hello-world");
var Tests = /** @class */ (function () {
    function Tests() {
    }
    Tests.prototype.apple = function () {
        console.warn("eating apple");
    };
    return Tests;
}());
var a = new Tests();
a.apple();
