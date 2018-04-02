// Extension converted by Mrcomputer1's ScratchXto3
// https://mrcomputer1.github.io/ScratchXto3

var Extext = function(){};
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
Extext.prototype.getInfo = function(){
	
	(function(){})();
	
	return {
		id: "ext",
		name: "Keys",
		iconURI: "",
		docsURI: "",
		blocks: [
			
			{
				opcode: "kc",
				blockType: Scratch.BlockType.REPORTER,
				isTerminal: false,
				text: "keycode",
				arguments: {
					
				},
				func: "kc",
				
			},
			
			{
				opcode: "kcb",
				blockType: Scratch.BlockType.BOOLEAN,
				isTerminal: false,
				text: "key with code [ARG_0] ",
				arguments: {
					
					ARG_0: {
						type: Scratch.ArgumentType.NUMBER,
						defaultValue: "",
						
					},
					
				},
				func: "kcb",
				
			},
			
			{
				opcode: "kn",
				blockType: Scratch.BlockType.REPORTER,
				isTerminal: false,
				text: "key name",
				arguments: {
					
				},
				func: "kn",
				
			},
			
		],
		menus: {
			
			"txt": ["hi","bye","how are you?"],
			
			"superMath": ["radian sine","radian cosine","radian tangent","asin","atan","acos","power"],
			
			"geo": ["latitude","longitude"],
			
		}
	};
	
};



Extext.prototype.kc = function(args){
	var inner = function () {return codecode;};
	return inner();
};

Extext.prototype.kcb = function(args){
	var inner = function (code) {
    if (codecode===code) {
    return true;
    } else {return false;}
    };
	return inner(args.ARG_0);
};

Extext.prototype.kn = function(args){
	var inner = function () {return k;};
	return inner();
};


Scratch.extensions.register(new Extext());
