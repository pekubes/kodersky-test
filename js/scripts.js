$(document).ready(function() {
    
    //Carousel
    
    $(".carousel img").each(function(i, elem) {
        var img = $(elem);
        var div = $(".carousel__item").css({
            background: "url(" + img.attr("src") + ") no-repeat",
        });
    $(".carousel img").remove();
    });
    
    $("#carousel").owlCarousel({
        navigation : true, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true
    });
    
    //Navigace
    
    $(function(){
		$('#menu').slicknav();
	});
});