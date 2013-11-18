(function($) {
    $.fn.blinkr = function( options ) {
		$(this).addClass('blinkr');
		
		var defaults = {
			speed : 800			
		};
		
		var settings = $.extend(defaults, options);	
		
        this.each( function() {
			setInterval(function() {				
				if ( $('.blinkr').css('visibility') == 'hidden') {
					$('.blinkr').css({'visibility':'visible'})				
				} else {
					$('.blinkr').css({'visibility':'hidden'})
				}
				
			}, settings.speed);		
		});		
    }

}(jQuery));