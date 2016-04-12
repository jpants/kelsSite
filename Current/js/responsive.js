$(function() {

	$('#menuButton').click(function(){
		$('#nav').toggle('slide', {direction:'right'}, 'slow');
	});

	$(window).resize(function(){
		if ($(window).width()<643) {
			$('#nav').css({display: 'none'});
		}
		else  {
			$('#nav').css({display: 'table-cell'});
		};
	});

});