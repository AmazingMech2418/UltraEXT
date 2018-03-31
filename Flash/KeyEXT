var key = false;
var codecode;
var k;
window.addEventListener("keydown",function(e){
key = true;
codecode = e.keyCode;
k = e.key;
});
window.addEventListener("keyup",function() {
key = false;
    k="";
    codecode="";
});
(function(ext) {
    // When Scratch closes, do this
    ext._shutdown = function() {
        // Nothing here at the moment...
    };
 
    // Tell Scratch if the extension is ready to do stuff
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'}; // Status 1 = Red, Error // Status 1 = Yellow, Not Ready // Status 2 = Green, Ready
    };
 
    // Blocks to add to Scratch
    var descriptor = {
        blocks: [
            // Block type, block name, function name
            ['r', 'keycode', 'kc'],
            ['b', 'key with code %n', 'kcb',13],
            ['r', 'key name', 'kn']
        ],
menus: {
txt: ['hi','bye','how are you?'],
superMath: ['radian sine', 'radian cosine', 'radian tangent', 'asin', 'atan', 'acos', 'power'],
geo: ['latitude','longitude']
}
    };
 
    // What blocks do go here
    ext.kc = function () {return codecode;}
    ext.kcb = function (code) {
    if (codecode===code) {
    return true;
    } else {return false;}
    }
    ext.kn = function () {return k;}
    // Name of Scratch Extension goes here
    ScratchExtensions.register('Keys', descriptor, ext); 
     // The name is 'Hello, World!''
})({});
