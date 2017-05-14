var main = function() {
	
	$('.work_play').click(function() {
		var popup_id = $('#' + $(this).attr("rel"));
		$(popup_id).show();
	$('.overlay').show();
	$('.popup').animate({
      top: "0px"
    }, 500);
});

$('.icon-close').click(function() {
$('.popup').animate({
      top: "-100%"
    }, 500);
$('.overlay, .popup').hide(10);
});
};
    $(document).ready(main);
