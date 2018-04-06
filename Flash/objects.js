var objectlist = [];
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
            [' ', 'set object %n property %s to %s', 'so', 0, "username", "AmazingMech2418"],
            [' ', 'new object', 'newO'],
            ['r', 'get object number %n property %s', 'go', 0, "username"],
            ['r', 'number of objects','no']
        ],
menus: {
txt: ['hi','bye','how are you?'],
superMath: ['radian sine', 'radian cosine', 'radian tangent', 'asin', 'atan', 'acos', 'power'],
geo: ['latitude','longitude']
}
    };
 
    // What blocks do go here
    ext.so = function (n,p,d) {
    objectlist[n][p]=d;
    }
    ext.newO = function () {
    objectlist.push(new Object());
    }
    ext.go = function (n,p) {
    return objectlist[n][p];
    }
    ext.no = function() {
    return objectlist.length;
    }
    // Name of Scratch Extension goes here
    ScratchExtensions.register('Objects', descriptor, ext); 
     // The name is 'Hello, World!''
})({});
