var svg = document.getElementById("svg");
var pulseButton = document.getElementById("pulse");
var DVDButton = document.getElementById("dvd");
var stopButton = document.getElementById("stop");
var clearButton = document.getElementById("clear");

var pulse = function() {
    var radius = 10;
    var radiusModifier = 5;

    var draw = function(){
        var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("cx", "250");
        circle.setAttribute("cy", "250");
        circle.setAttribute("r", radius);
        circle.setAttribute("fill", "#BEEEEF");
        svg.appendChild(circle);

        radius = radius + radiusModifier;
        if ((radius == 0) || (radius == 250)){
            radiusModifier = radiusModifier * -1;
        };;
    };
    
    console.log(setInterval(draw, 250));
};

var dvd = function() {

    var speedModifierX = 2;
    var speedModifierY = 2;
    var rectWidth = 200;
    var rectHeight = 80;
    var newX = (Math.random() * (svg.width-2*rectWidth))+rectWidth;
    var newY = (Math.random() * (svg.height-2*rectHeight))+rectHeight;
    
    var draw = function() {
        //ctx.clearRect(0, 0, 800, 600);
        //ctx.fillRect(newX, newY, rectWidth, rectHeight);
	//svg.
        //if ((newX + rectWidth > svg.width)||(newX < 0)){
        //    speedModifierX = speedModifierX * -1;
        //};
        //if ((newY + rectHeight > svg.height)||(newY < 0)){
        //    speedModifierY = speedModifierY * -1;
        //};
        newX = newX + speedModifierX;
        newY = newY + speedModifierY;
        //requestID = window.requestAnimationFrame(draw);

    };
    
    draw();

};

var stop = function() {
    
};

var clear = function() {

};

pulseButton.addEventListener("click", pulse);
DVDButton.addEventListener("click", dvd);
stopButton.addEventListener("click", stop);
clearButton.addEventListener("click", clear);
window.requestAnimationFrame(dvd);
