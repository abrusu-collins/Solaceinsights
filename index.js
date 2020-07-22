$('.down').on('click',function(){
	const BlogPost=$('#three').position().top;

	$('html,body').animate({
		scrollTop:BlogPost
	},900);
});



