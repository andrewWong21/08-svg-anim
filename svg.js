var svg = document.getElementById("svg");
var pulseButton = document.getElementById("pulse");
var DVDButton = document.getElementById("dvd");
var stopButton = document.getElementById("stop");
var clearButton = document.getElementById("clear");
var svgWidth = svg.getAttribute("width");
var svgHeight = svg.getAttribute("height");
var timer;

var changeColor = function(){
    var hex = "0123456789ABCDEF";
    var newColor = "#";
    for (var i = 0; i < 6; i++){
        newColor = newColor + hex[Math.floor(Math.random() * 16)];
    };

    return newColor;
}

var pulse = function() {
    clearInterval(timer);
    var radius = 10;
    var radiusModifier = 2;

    var draw = function(){
        if (svg.firstChild){
            svg.removeChild(svg.firstChild);
        };
        var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("cx", "400");
        circle.setAttribute("cy", "300");
        circle.setAttribute("r", radius);
        circle.setAttribute("fill", "#000000");
        svg.appendChild(circle);

        radius = radius + radiusModifier;
        if ((radius == 0) || (radius == 300)){
            radiusModifier = radiusModifier * -1;
        };
    };
    
    timer = setInterval(draw, 10);
};

var dvd = function() {
    clearInterval(timer);
    var speedModifierX = 1.5;
    var speedModifierY = 1.5;
    var rectWidth = 200;
    var rectHeight = 80;
    var newX = 0;
    var newY = 0;
    var newColor = changeColor();
    
    var newX = (Math.random() * (svgWidth-2*rectWidth))+rectWidth;
    var newY = (Math.random() * (svgHeight-2*rectHeight))+rectHeight;
    
    var draw = function() {
        if (svg.firstChild){
                svg.removeChild(svg.firstChild);
        };
        var rectangle = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        rectangle.setAttribute("x", newX);
        rectangle.setAttribute("y", newY);
        rectangle.setAttribute("width", rectWidth);
        rectangle.setAttribute("height", rectHeight);
        rectangle.setAttribute("fill", newColor);
        svg.appendChild(rectangle);
        if ((newX + rectWidth > svgWidth)||(newX < 0)){
            speedModifierX = speedModifierX * -1;
            newColor = changeColor();
        };
        if ((newY + rectHeight > svgHeight)||(newY < 0)){
            speedModifierY = speedModifierY * -1;
            newColor = changeColor();
        };
        newX = newX + speedModifierX;
        newY = newY + speedModifierY;
    };
    
    timer = setInterval(draw, 10);
};

var stop = function() {
    clearInterval(timer);
};

var clear = function() {
    stop()
    while (svg.firstChild){
        svg.removeChild(svg.firstChild);
    };
};

pulseButton.addEventListener("click", pulse);
DVDButton.addEventListener("click", dvd);
stopButton.addEventListener("click", stop);
clearButton.addEventListener("click", clear);