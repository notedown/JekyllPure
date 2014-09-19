$(function(){
    //主题星期变换颜色开始
    var dayweek=new Date().getDay();
    switch (dayweek) {
        case 0:
            $('.sidebar,.search-query').css({  "background": "#4b4b49" });
            break;
        case 1:
            $('.sidebar,.search-query').css({  "background": "#1c5461" });
            break;
        case 2:
            $('.sidebar,.search-query').css({  "background": "#3D4F5D" });
            break;
        case 3:
            $('.sidebar,.search-query').css({  "background": "#273e38" });
            break;
        case 4:
            $('.sidebar,.search-query').css({  "background": "#3D4F5D" });
            //"color": "#ff0011",parseInt(6*Math.random())
            break;
        case 5:
            $('.sidebar,.search-query').css({  "background": "#3D4F5D" });
            break;
        case 6:
            $('.sidebar,.search-query').css({  "background": "#3D4F5D" });
            break;
    }
    //主题星期变换颜色结束
    NProgress.start();
    setTimeout(function () {
        NProgress.done();

    }, 500);
    var tags_a = $(".post-category");
    tags_a.each(function(){
        var x = 4;
        var y = 0;
        var rand = parseInt(Math.random() * (x - y + 1) + y);
        $(this).addClass("post-category-"+rand);
    });
    $(window).scroll(function() {
        if($(window).scrollTop() >= 100){
            $('.topfade').fadeIn(300);
        }else{
            $('.topfade').fadeOut(300);
        }
    });

    $('.topfade').click(function(){
        $('html,body').animate({scrollTop: '0px'}, 800);});


});