$(function(){
	$(".hezi").click(function(){
		$(this).children('.titleshow2').hide();
		$(this).siblings().children('.titleshow2').show();
		$(this).siblings().css('opacity','.5');
		$(this).css('opacity','1');
		$(this).animate({
			'width':'595px'
		},300);
		$(this).siblings().animate({
			'width':'150px',
		},300)
	})
})