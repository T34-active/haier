//创建一个新的Div
$(function() {
        var $box = $('.intr_img');
        var imgData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
        var currInter = -1;

        function createDiv(index) {
            if (imgData[index]) {
                var $divDom = $('<img src="images/hy_st_pro' + imgData[index] + '.webp"/>');
                return $divDom
            }
        }

        function myshow(num) {
            currInter++;
            var $div = createDiv(currInter);
            if (!$div) return; //如果没有成功创建div,直接停止
            $box.append($div);
            $div.on('load', function() {
                if (currInter < num) {
                    myshow(num);
                }
            })
        }

        var maxnum = -1;
        $(window).scroll(function() {
                //当滚动条滚动距离大于最小盒子距离顶部的距离减去屏幕距离的时候，加载新的图片
                var minHeight = $box.height() + $box.offset().top;
                if ($(window).scrollTop() + $(window).height() > minHeight) {
                    if (currInter < maxnum) return
                    maxnum = currInter + 3;
                    myshow(currInter + 3);
                }

                if ($(window).scrollTop() >= 920) {
                    $('.intr_content').addClass('fixeds')
                    $('.buy').show();
                    $('.buy').addClass('fixeds2')
                } else {
                    $('.buy').hide();
                    $('.intr_content').removeClass('fixeds')
                    $('.buy').removeClass('fixeds2')
                }
            })
            // 购物车加减
        $('.reduce').click(function() {
            var i = parseInt($('.maths .count').html())
            if (i > 1) {
                $('.maths .count').html(i - 1);
            } else {
                $('.reduce').attr('disabled', 'disabled')
            }

        })
        $('.add').click(function() {
            var i = parseInt($('.maths .count').html())
            $('.maths .count').html(i + 1);
            $('.reduce').removeAttr('disabled')
        })

        // 产品介绍与用户评价切换
        $('.productss').click(function() {
            $(this).addClass('qiehuan');
            $('.evaluate').removeClass('qiehuan')
            $('.intr_img').show();
            $('.user_eval').hide();
        })
        $('.evaluate').click(function() {
            $(this).addClass('qiehuan');
            $('.productss').removeClass('qiehuan')
            $('.user_eval').show();
            $('.intr_img').hide();
        })

        $('.tihuanimg>li>img').hover(function() {
            $('.big-img>img').attr('src', $(this).attr('src'))
            $('.hideImg>img').attr('src', $(this).attr('src'))
        })
        $('.big-img>img').mousemove(function() {
            $('#fangda').show();
        }).mouseout(function() {
            $('#fangda').hide();
        })


        // 图片放大
        $('#fangda').mousemove(function(e) {
            $('#fangda').show();
            e = e || window.event;
            var x = e.clientX - $('.big-img')[0].offsetLeft - 100;
            var y = e.clientY - $('.big-img')[0].offsetTop - 100;
            // alert(e.clientY)
            // alert($('.big-img')[0].offsetTop)
            // alert(y)
            if (x < 0) { x = 0 }
            if (x > 270) { x = 270 }
            if (y < 0) { y = 0 }
            if (y > 270) { y = 270 }
            $(this)[0].style.left = x + 'px';
            $(this)[0].style.top = y + 'px';
            $('.hideImg>img')[0].style.left = -x * 2.5 + 'px';
            $('.hideImg>img')[0].style.top = -y * 2.5 + 'px';
        }).mouseout(function() {
            $('#fangda').hide();
        })

        //whj添加
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
            $(".myid .mine").css("background-image", "url(../images/icon-myid.png)");
            localStorage.removeItem("onlineIn");
            $(".myid .mine").get(0).href = "online.html";
        })

        //点击加入购物车
        $(".buys .shopbuy").click(function() {
            if (localStorage.getItem("onlineIn") == "ok") {
                var count = $(".maths .count").html();
                localStorage.setItem("eduRobot", count);
                localStorage.setItem("look", "yes");
                $(this).attr("href", "shopwap.html");
                // if (localStorage.getItem("carCount") == "NaN") {
                //     localStorage.setItem("carCount", "0");
                // }
            } else {
                $(this).attr("href", "online.html");
            }
        })
    })
    //whj添加
window.addEventListener("storage", function() {
    console.log(1);
    headImg();
}, false);
headImg();

function headImg() {
    if (localStorage.getItem("onlineIn") == "ok") {
        document.querySelector(".myid .mine").style.backgroundImage = "url(./images/head_img.jpg)";
        console.log(localStorage.getItem("carCount"));
        document.querySelector(".fixed .car .count").innerHTML = localStorage.getItem("carCount");
    }
}