$(document).ready(function(){
var count =1;

//Pre-game Set-up
$("#level").text("Level: "+count);
$("#nextlevel").hide();
$('.characterSection').hide();
$('#level3').hide();
$('#start').click(function() {
    $('#start').fadeOut();
    $('#game').show();
    $('h1').show();
    $('.characterSection').show();
    $('#level').show();
});
//Character Selection
$("#goku").click(function(){
    $("#character1").attr("src","https://orig00.deviantart.net/10e3/f/2011/355/3/5/goku_charge_by_arestwinblade-d4jrtc0.gif");
});
$("#link").click(function(){
    $("#character1").attr("src","http://rs183.pbsrc.com/albums/x297/Sajoh/Fotos%20robadas/Gifs/link.gif~c200");
});
$("#sonic").click(function(){
    $("#character1").attr("src","http://rs589.pbsrc.com/albums/ss335/Cirgeo/Sonic.gif?w=280&h=210&fit=crop");
});
$("#pikachu").click(function(){
    $("#character2").attr("src","https://media.giphy.com/media/FRDFK0bgXdAic/source.gif");
});
$("#samus").click(function(){
    $("#character2").attr("src","http://gifimage.net/wp-content/uploads/2017/08/samus-gif-15.gif");
});
function checkCollision() {
    var c1Left = $("#character1").offset().left;
    var c2Left = $("#character2").offset().left;
    var c1Right = c1Left + $("#character1").width();
    var c2Right = c2Left + $("#character2").width();
    if(c1Right > c2Left && c1Left < c2Right) {
        $("#character2").attr("src","https://media.giphy.com/media/PKEH9WF0eq3ja/giphy.gif");
        $("#nextlevel").show();
    }
}
//Character 1 Movement
$("body").keydown(function(e) {
    if(e.keyCode === 39) { // left
        $("#character1").css("left", $("#character1").offset().left + 30);
        }
    if(e.keyCode === 37) { // left
        $("#character1").css("left", $("#character1").offset().left - 30);
        }  
    checkCollision();
        });
//Reset Level
$("#nextlevel").click(function(){
    $("#nextlevel").hide();
    $("#game").css("background","url('https://pre00.deviantart.net/4977/th/pre/i/2016/175/f/4/25_years_of_sonic__just_green_hill_background__by_diegoshedyk53182-da7hxe4.png')");
        $("#character2").attr("src","");
        $("#character1").css({position:"absolute",bottom:"-7px",left:"10px"});
         $("#character2").css({position:"absolute",bottom:"-1px",right:"10px"});
             count=count+1;
        $("#level").text("Level: "+count); 
        if(count===2){
    alert("Are you sure you want to continue?");
    }else if(count===3){
        alert("You'll have to take the Advanced Course to continue.");
          $("#level3").show();
    }else if(count>=4 && $("input").val()==="Y" || $("input").val()==="y" ){
          $("#board").hide();
        $("body").html('<div id="gameover">'+"<img src='https://media.giphy.com/media/2gtoSIzdrSMFO/giphy.gif'>"+'</div>');
        $("#gameover").css("text-align","center"); 
    }else{
        $("#board").hide();
        $("body").html('<div id="gameover">'+"<img src='https://media.giphy.com/media/dkuZHIQsslFfy/giphy.gif'>"+'</div>');
        $("#gameover").css("text-align","center");
        
    }
    
});
});