$(function(){
    var erectDom = document.getElementsByClassName("erect");
    for (var i = 0; i < erectDom.length; i++) {
        erectDom[i].onclick = function() {
            this.style.display = "none";
            this.previousElementSibling.style.display = "block";
            this.parentNode.style.width = "50%";
            $(this).parent().siblings().find(".across").css("display","none");
            $(this).parent().siblings().find(".erect").css("display", "block");
            $(this).parent().siblings(":not('h2')").css("width", "12.5%");
        }
    }
})