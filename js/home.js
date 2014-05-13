$(function() {
	$("#ajax_loading_div").ajaxStart(
			function() {
				$(this).css(
						"top",
						($(window).height() - $(this).height()) / 2
								+ $(window).scrollTop() + "px");
				$(this).css(
						"left",
						($(window).width() - $(this).width()) / 2
								+ $(window).scrollLeft() + "px");
				$(this).show();
			});
	$("#ajax_loading_div").ajaxComplete(function() {
		$(this).hide();
	});
	gaReportExt.checkAuth();

	$("#start_btn").on("click", function() {
		googleChromeExtAuth.grantAccess();
	});
});