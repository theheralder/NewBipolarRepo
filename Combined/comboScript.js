//Setting up variables for the canvas, stage, and
//other elements for the game to run
var canvas, stage, bounds, queue;



function init()
{
    if(!(!!document.createElement('canvas').getContext))
    {
        var wrapper = document.getElementById("canvasWrapper");
        wrapper.innerHTML = "Your browser does not appear to support " +
            "the HTML5 Canvas element";
        return;
    }

	queue = new createjs.LoadQueue(true);
	queue.addEventListener("fileload", handleFileLoad);
	queue.addEventListener("complete", handleComplete);
	
	queue.loadFile(id:"manic", src:"Manic\Game.js");
	queue.loadFile(id:"depress", src:"Depressive\script.js");
	
	
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);
	
}