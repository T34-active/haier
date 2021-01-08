// 轮播 1.2版
function lunboPlay() {
    var curr = 0;
    var percent = 0;
    var timer;
    $(".five_content .bar li").eq(curr).addClass("cur");
    function start(chuan) {
        curr = chuan == undefined ? curr : chuan;
        timer = setInterval(function() {
            $(".five_content .lunbo").css("transition", "left 1s");
            curr++;
            if (curr == 5) curr = 0;
            percent -= 100;
            $(".five_content .bar li").eq(curr).addClass("cur");
            $(".five_content .bar li").eq(curr).siblings().removeClass("cur");
            $(".five_content .lunbo").css("left", percent + "%");
            if (percent == -500) {
                setTimeout(function() {
                    $(".five_content .lunbo").css("transition", "none");
                    $(".five_content .lunbo").css("left", "0%");
                    percent = 0;
                }, 1000)
            }
        }, 2000);
    }
    start();
    $(".five_content").mouseenter(function() {
        clearInterval(timer);
    })
    $(".five_content").mouseleave(function() {
        clearInterval(timer);
        start();
    })
    $(".five_content .bar li").click(function() {
        console.log($(this).index());
        clearInterval(timer);
        percent = ($(this).index() - 1) * 100 * -1;
        start($(this).index() - 1);
    })
}
lunboPlay();
























// 轮播 1.0 版(基本功能实现)

// function lunboPlay() {
//     var curr = 0;
//     var percent = 0;
//     var timer;

//     function start(chuan) {
//         curr = chuan == "undefined" ? curr : chuan;
//         timer = setInterval(function() {
//             curr++;
//             if (curr == 5) curr = 0;
//             percent -= 100;
//             if (percent == -500) percent = 0;
//             $(".five_content .bar li").eq(curr).css("background-color", "#34bcfc");
//             $(".five_content .bar li").eq(curr).siblings().css("background-color", "#c6cacb");
//             $(".five_content .lunbo").css("left", percent + "%");
//             $(".five_content .lunbo").css("transition", "left 1s");
//         }, 2000);
//     }
//     start();
//     $(".five_content").mouseenter(function() {
//         clearInterval(timer);
//     })
//     $(".five_content").mouseleave(function() {
//         clearInterval(timer);
//         start();
//     })
//     $(".five_content .bar li").click(function() {
//         console.log($(this).index());
//         clearInterval(timer);
//         percent = ($(this).index() - 1) * 100 * -1;
//         start($(this).index() - 1);
//     })
// }
// lunboPlay();