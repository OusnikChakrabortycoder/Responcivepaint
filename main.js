 var last_position_of_x, last_position_of_y ;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;
    var width = screen.width ;
    new_width = screen.width - 70 ;
    new_height = screen.height - 300 ;

    if (width < 992) {
        document.getElementById("myCanvas").width = new_width ;
        document.getElementById("myCanvas").height = new_height ;
        document.body.style.overflow = "hidden" ; 
    }
     
    canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart (e) {
last_position_of_x = e.touches[0].clientX - canvas.offsetLeft ;
last_position_of_y = e.touches[0].clientY - canvas.offsetTop ;
}
canvas.addEventListener("touchmove", my_touchmove)

function my_touchmove (e) {
    current_positon_of_touch_x = e.touches[0].clientX - canvas.offsetLeft ; 
    current_positon_of_touch_y = e.touches[0].clientY - canvas.offsetTop ;

ctx.beginPath() ;
ctx.strockStyle = color ;
ctx.lineWidth = width_of_line ;

ctx.arc(current_positon_of_touch_x, current_positon_of_touch_y, 10, 0, 2*Math.PI);
ctx.stroke();
}