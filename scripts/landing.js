function revealPoint (point){

    point.style.opacity = .5;
    point.style.transform = "scaleX(1) translateY(0)";
    point.style.msTransform = "scaleX(1) translateY(0)";
    point.style.background = "yellow";
    point.style.background = "yellow";
    point.style.WebkitTransform = "scaleX(1) translateY(0)";
}


function animatePoints () {
    // 1) We want to loop over every point in the HTML, and reveal it using CSS changes
    

    var points = document.getElementsByClassName("point");

    
    for (var i=0; i < points.length; i++){
        revealPoint(points[i]);
    };
}