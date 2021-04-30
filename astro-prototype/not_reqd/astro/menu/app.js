


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