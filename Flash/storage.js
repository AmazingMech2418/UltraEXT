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
            ['r','get %s','get','score'],
            [' ','set %s to %s','set','score','100']
        ],
menus: {
txt: ['hi','bye','how are you?'],
superMath: ['radian sine', 'radian cosine', 'radian tangent', 'asin', 'atan', 'acos', 'power'],
geo: ['latitude','longitude']
}
    };
 
    // What blocks do go here
ext.get = function(a) {
return localStorage[a];
};
ext.set = function(a,b) {
localStorage.setItem(a,b)
};

    // Name of Scratch Extension goes here
    ScratchExtensions.register('Local Storage', descriptor, ext); 
     // The name is 'Hello, World!''
})({});
