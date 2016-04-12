$(function() {

	var ypos,
	    homeImage,
	    keysImage;

	function parallax() {
		windowHeight = $(window).height();
		ypos = window.pageYOffset;
		speed = ypos*.8;

		if ($('body').is('.else')) {
			elseImage = document.getElementById('elseImage');
			elseImage.style.top = speed + 'px';
		}
		else {
			homeImage = document.getElementById('homeImage');
			homeImage.style.top = speed + 'px';
			keysImage = document.getElementById('linkBoxImage');
			keysImage.style.top = (-windowHeight*.8) + speed + "px";	
		}

	}

	window.addEventListener("scroll", parallax);

/**********************************************/

	$(window).load(function(){

		function resizeHandler() {
			var headerHeight = $('#navWrapper').outerHeight(true);
			    windowHeight = $(window).height();
			    imageContainer2Height = $('#imageContainer2').outerHeight(true);
			    lessHeaderHeight = imageContainer2Height-headerHeight;
			    bgImage = $('.bgImage');

			$('.fullScreen').each(function(index) {
				currentEle = $(this);
				newHeight = windowHeight;
				if (index === 0) {
					newHeight -= headerHeight;
				}
		    	currentEle.css('height', newHeight);
			});

		    $('#bgImage1').css('height', windowHeight);

		    $('#elseHome').css('height', lessHeaderHeight);

		    blockCheck();

		    linkBoxResize();

		    parallax();

		}

		function linkBoxResize() {
			var mainHomeHeight = $('#mainHome').height();
				blockContainerHeight = $('#blockContainer').height();
				windowHeight = $(window).height();
				windowWidth = $(window).width();
				heightDiff = mainHomeHeight-windowHeight;
				perc = heightDiff*.8;
				linkBoxHeight = mainHomeHeight-perc;

			if (windowWidth<613) {
			    $('#bgImage2').css('height', mainHomeHeight);
			    $('#linkBoxImage').css('height', linkBoxHeight);
			    $('#mainHome').css('height', 'initial');
					$('#blockContainer').css('transform', 'initial');

			}
			else {
				if (blockContainerHeight<=windowHeight) {
			    $('#bgImage2').css('height', windowHeight);
			    $('#linkBoxImage').css('height', windowHeight);
			    $('#mainHome').css('height', windowHeight);
					$('#blockContainer').css('transform', 'translateY(-50%)');
				}
				else {
					console.log('what');
			    $('#mainHome').css('height', 'initial');
			    $('#bgImage2').css('height', mainHomeHeight);
			    $('#linkBoxImage').css('height', linkBoxHeight);
			    $('#blockContainer').css('transform', 'initial');
				}
			}
		}

		function blockCheck() {
			width = $('.daBlock').width();
			$('.daBlock').css('height', width*.5625 + "px");
		}

		function init() {
			$(window).resize(resizeHandler);
			resizeHandler();
			blockCheck();
		}

		init();

	});

	


});