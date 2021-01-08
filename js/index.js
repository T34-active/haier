// $.noConflict();
$(document).ready(function() {
    $(".first").mouseenter(function() {
        $(".first").css("display", "none")
        $(".second").css("display", "block")
    }).mouseleave(function() {
        $(".first").css("display", "block")
        $(".second").css("display", "none")
    })
    $(".mine:before").hover(function() {
            $(".mine-hover:before").show()
            $(".mine:before").hide()
        }, function() {
            $(".mine-hover:before").hide()
            $(".mine:before").show()
        })
        // 了解智家 立即播放按钮
    $(".content-box").hover(function() {
            $(this).css("height", "300px")
        }, function() {
            $(this).css("height", "230px")
        })
        // 头部轮播图
    $(".banner-img").click(function() {
            var move = $(".banner-img>li").index();
            $(this).animate({
                    marginLeft: "-1920px"
                }, 500)
                // $(this).addClass("banner-move")
        })
        // 返回顶部
    $(".back-top").hover(function() {
        $(".no-hover").css("display", "none")
        $(".hover-top").css("display", "block")
    }, function() {
        $(".no-hover").css("display", "block")
        $(".hover-top").css("display", "none")
    })
    $(".back-top").click(function() {
        $("body,html").stop().animate({
            scrollTop: 0
        })
    })

    //点击头像
    $(".myid .mine").click(function() {
        if (localStorage.getItem("onlineIn") == "ok") {
            $(".header-right .mine_out").toggle();
            return false;
        } else {
            $(".header-right .mine_out").hide();
            $(this).get(0).href = "online.html";
        }
    })

    //点击退出
    $(".mine_out .tuichu").click(function() {
        $(".header-right .mine_out").hide();
        $(".myid .mine").css("background-image", "url(./images/icon-myid.png)");
        localStorage.removeItem("onlineIn");
        $(".myid .mine").get(0).href = "online.html";
    })
})
window.addEventListener("storage", function() {
    console.log(1);
    headImg();
}, false);
headImg();

function headImg() {
    if (localStorage.getItem("onlineIn") == "ok") {
        document.querySelector(".myid .mine").style.backgroundImage = "url(./images/head_img.jpg)";
    }
}