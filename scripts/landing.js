function revealPoint (point){

    point.style.opacity = .5;
    point.style.transform = "scaleX(1) translateY(0)";
    point.style.msTransform = "scaleX(1) translateY(0)";
    point.style.background = "yellow";
    point.style.background = "yellow";
    point.style.WebkitTransform = "scaleX(1) translateY(0)";
}



var animatePoints = function(points) {
    // 1) We want to loop over every point in the HTML, and reveal it using CSS changes
    
    forEach(points, revealPoint);
}

$(window).load(function() {
    if ($(window).height() > 950){
        animatePoints();
    }

    var scrollDistance = $(".selling-points").offset().top - $(window).height() + 200;
    
    
    
     $(window).scroll(function(event) {
         // #4
         if ($(window).scrollTop() >= scrollDistance) {
             animatePoints();
         }
     });
 });
     
      var animatePoints = function() {
     var revealPoint = function() {
         // #7
         $(this).css({
             opacity: 1,
             transform: 'scaleX(1) translateY(0)'
         });
     };
     // #6
     $.each($('.point'), revealPoint);
 };

