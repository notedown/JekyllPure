$(function () {
    $(".content a").attr("target", "_blank");
    $("hgroup").remove();
    $("#rem").remove();
    $("#header h2").remove();
    $(".profilepic img").css("width", "100px")
    $(".profilepic").append('<div class="grcode"><i class="fa fa-qrcode"></i>手机扫描</div>');
    $('#toc').toc({'container': '.content', 'selectors': 'h1,h2', prefix: 'top'});
    $('.content').each(function (i) {
        $(this).find('img').each(function () {
            if ($(this).parent().hasClass('fancybox')) return;
            var url2 = this.src;
            var url = url2.substring(0, url2.length - 4);
            $(this).wrap('<a href="' + url + '" title="' + this.title + '" class="fancybox"></a>');
        });
        $(this).find('.fancybox').each(function () {
            $(this).attr('rel', 'article' + i);
        });
    });
    if ($.fancybox) {
        $('.fancybox').fancybox({
            padding: 0,
            openEffect: 'elastic',
            closeEffect: 'elastic',
            helpers: {
                title: {
                    type: 'inside'
                },
                overlay: {
                    css: {
                        'background': 'rgba(255,255,255,0.5)'
                    }
                }
            }

        });
    }
    ;
    $(".grcode").mouseover(function () {
        grcode();
    }).mouseout(function () {
        $(".qrcodeTable ").empty();
    });
});
function grcode() {
    $(".qrcodeTable").append('<i class="label label-danger">手机UC浏览器点击输入地址栏扫描按钮</i><br>');
    var url = $("link[rel='canonical']").attr('href');
    console.info(url);
    $(".qrcodeTable").qrcode({
        render: "canvas",
        text: url
    });
    $(window).scroll(function () {
        var yy = $(this).scrollTop();//获得滚动条top值
        if ($(this).scrollTop() < 30) {
            $(".qrcodeTable").css({"position": "relative", top: "5px", left: "-50px"});
        } else {
            $(".qrcodeTable").css({"position": "relative", top: yy + "px", left: "-50px"});
        }
    });
}