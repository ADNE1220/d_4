$(function(){

//메인메뉴
$(".main>li").hover(function(){
    $(".sub").stop().show();
},function(){
    $(".sub").stop().hide();
})//


//슬라이드
$(".move li:gt(0)").hide();
var n= 0
setInterval(function(){
    $(".move li").eq(n).fadeOut()
    if(n==2){
        n=0;
    }else{
        n++;
    }//
    console.log("n: ",n)

    $(".move li").eq(n).fadeIn();
},3000)//



//팝업
$(".popup").hide();
$(".click").click(function(){
    $(".popup").show();
})
$(".close").click(function(){
    $(".popup").hide();
})




})//jQuery