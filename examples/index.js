require("../dist/promise.js");
require("../dist/harmony.js");
require("../dist/loader.js");
assertEq = function (a, b) { console.log(a === b); }
var l = new Loader();
var m1 = new Module({}),
    m2 = new Module({});
l.set("water", m1);
l.set("water", m2);
assertEq(l.get("water"), m2);
