

$(document).ready(function(){
    $("#loading").fadeOut(1000,function(){
        $("body").css("overflow","visible" )
    })
});
$(Window).scroll(function(){
    let sectionOffset=$('.open-menu ').offset().top;
    let topOffset=$(window).scrollTop();
    console.log(topOffset)
    if(topOffset>sectionOffset){
        $('#btnTop').fadeIn(1000);
    }else{
        $('#btnTop').fadeOut(1000);

    }
})
// // function openNav() {
// //     document.getElementById("mySidebar").style.width = "250px";
// //     document.getElementById("main").style.marginLeft = "250px";
// //   }
  
//   function closeNav() {
//     document.getElementById("mySidebar").style.width = "0";
//     document.getElementById("main").style.marginLeft= "0";
//   }


// $("a").click(function () {
//     var sectionId = $(this).attr("href");

//     if ($(sectionId).offset() != undefined) {
//         var positionOfSection = $(sectionId).offset().top;

//         $("html , body").animate({
//             scrollTop: positionOfSection
//         }, 500);
//     }

// })



$('.open-menu').click(()=>{
    
    let optionWidth=$("#mySidebar").outerWidth()
    if($("#mySidebar").css("width")=="0px"){
        $("#mySidebar").animate({width:250},500);
        $('.open-menu').animate({marginLeft:250},1000);
        console.log(optionWidth)
    }else{
        $("#mySidebar").animate({width:0},500);
        $('.open-menu').animate({marginLeft:0},1000);
        console.log(optionWidth)
    }
})
$('.closebtn').click(()=>{
    $("#mySidebar").animate({width:0},500);
    $('#main').animate({marginLeft:0},500);})
///////////////////this function didnt execute????????????????
    $("#mySidebar a").click(function(){
        let curentLink=$(this).attr("href")
        let currentOffset=$(curentLink).offset().top;
        $("html,body").animate({scrollTop:currentOffset},500)
        console.log(curentOffset)
    })
//     // ACCORDION------------
// $('.accordion').click(()=>{
//    let accordion=$(this).next()
//    console.log(accordion)

//   if(accordion=="none"){
//     $(".panel").slideDown(500)
//   }else{
//     $(".panel").slideUp(500)
//   }
// })



$(document).ready(function (){
    $("#singers div:first").css("display","block");
    $("#singers button").click(function () {
       
        $(this).next().slideToggle(500);
        $(".panel").not($(this).next()).slideUp(500);
    })
})

// countsec---------------

// var now=new Date();
// var eventDate=new Date(2022,2,22)

// var currentTiime = now.getTime();
// var eventTime = eventDate.getTime();
// let x=eventTime-currentTiime

// var counter =0;

// var timeLeft=60;


// function convertSeconds(s){
    
//      let min=Math.floor(s/60);
//     let sec=s%60;
//     let hur=Math.floor(min/60);
//     return min+":"+sec;    
// }
// function setUp(){

//         var timer=$('#timer');
//     timer.html(convertSeconds(timeLeft-counter));
//     function timeIt(){
//         counter++;
//         timer.html(convertSeconds(timeLeft-counter))
//     }
//     setInterval(timeIt,1000);
// };
// setUp();
function countdown() 
{
var now = new Date();
    let eventDate = new Date(2022,2,22);
    let currentTime=now.getTime();
    let myBirthday=(eventDate-currentTime)/1000;
    let sec=(Math.floor(myBirthday)),
    min=Math.floor(sec/60),
    hur=Math.floor(min/60),
    day=Math.floor(hur/24)-30;
    hur %= 24;
    min %= 60;
    sec %= 60;
    hur = (hur < 10) ? "0" + hur : hur;
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;
    $("#days").html(day+" D");
    $("#hours").html(hur+" H");
    $("#minutes").html(min+" M");
    $("#sec").html(sec+" S");
    setTimeout(countdown,1000);

}countdown() ;
// ------------text-------
// Hover
$(".con-social i").ready(function(){
    $(".con-social i").mouseover(function(){
        $(this).css("backgroundColor","#D62E33").css("color","white")
    })
}, $(".con-social i").mouseout (function(){
    $(this).css("backgroundColor","white").css("color","#999")
}))
// text limit
var max=100;
$('form textarea ').keyup(function(){
    let charcterLength=$(this).val().length;
    let char=max-charcterLength;
    $('#char').html(char)
    if(charcterLength>=max){
        $('#char').text("your available character finished")
    }
})

