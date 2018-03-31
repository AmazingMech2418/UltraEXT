var scrollvar = 0;
var keydata = false;
var dclick = false;
window.addEventListener("wheel",function(e){scrollvar+=e.deltaY/100});
window.addEventListener("keydown",function(){keydata=true;});
window.addEventListener("keyup",function(){keydata=false;});
window.addEventListener("dblclick", function(){dclick=true;});
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
            ['r', 'scroll', 'scroll'],
            ['b', 'Key Down?', 'kd'],
            ['b', 'Key Up?', 'ku']
        ],
menus: {
txt: ['hi','bye','how are you?'],
superMath: ['radian sine', 'radian cosine', 'radian tangent', 'asin', 'atan', 'acos', 'power'],
geo: ['latitude','longitude']
}
    };
 
    // What blocks do go here
ext.scroll = function() {
return scrollvar;
};
ext.kd = function() {
return keydata;
};
ext.ku = function() {
return !keydata;
};
    ext.dc = function() {
    return dclick;
        dclick=false;
    }
    // Name of Scratch Extension goes here
    ScratchExtensions.register('events', descriptor, ext); 
     // The name is 'Hello, World!''
})({});
