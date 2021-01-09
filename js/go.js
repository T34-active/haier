function tiaoZhuan() {
    var spanDom = document.querySelector("span");
    var num = spanDom.innerHTML;
    var timer = setInterval(function() {
        num--;
        spanDom.innerHTML = num;
        if (num == 0) {
            clearTimeout(timer);
            location.href = "index.html"; //跳转首页

        }
    }, 1000);
}
tiaoZhuan();