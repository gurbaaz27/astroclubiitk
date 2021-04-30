//refresh scroll
$(document).ready(function(){
    $(this).scrollTop(0);
});
//menu bar
$(document).ready(function() {

	body = $("body");
	topBar = $(".topbar");
	hero = $(".hero");
	toggled = false;
	topBarHeight = topBar.height();


	function toggleTopBarForm(scrollPosition) {

		if (scrollPosition >= 500) {
			topBar.addClass('bar-now')			
		} else {
			if (topBar.hasClass('bar-now')) {
				topBar.removeClass('bar-now');
			}
		}
	}

	$(window).scroll(function(e) {
 
    	scrollTopValue =  $(document).scrollTop();

    	toggleTopBarForm(scrollTopValue);
    	
	});
})

//gallery

	var owl = $('.owl-carousel');
owl.owlCarousel({
    items:1,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})
