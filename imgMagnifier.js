(function($){
	var defaults = {
		smallBoxWidth:0,
		smallBoxHeight:0,
		showBoxSize:300,
		scaleRatio:3
	};
	$.fn.imgMagnifier=function(options){
		var options = $.extend(defaults,options || {});
		function init(){
			var ratio = options.scaleRatio;
			$('.MG-smallImg').css({'width':options.smallBoxWidth,
				'height':options.smallBoxHeight});
			$('.MG-bigImg').css({'width':options.smallBoxWidth*ratio,
				'height':options.smallBoxHeight*ratio});
			$('.MG-bigImgWrap').css({'width':options.showBoxSize,
				'height':options.showBoxSize,'left':options.smallBoxWidth+15});
			$('.magnifier').css({'width':options.showBoxSize/ratio,
				'height':options.showBoxSize/ratio});
		}
		init();
		$('#magnifierWrap .MG-smallImgWrap').on('mouseenter',function(){
			$('.magnifier').show();
			$('.MG-bigImgWrap').show();
		});
		$('#magnifierWrap .MG-smallImgWrap').on('mouseleave',function(){
			$('.magnifier').hide();
			$('.MG-bigImgWrap').hide();
		});
		var reviseX = parseInt($('#magnifierWrap').css('margin-top'));
		var reviseY = parseInt($('#magnifierWrap').css('margin-left'));
		$('#magnifierWrap .MG-smallImgWrap').on('mousemove',function(e){
			var x = e.clientX - $('.magnifier').width()/2 - reviseX;
			var y = e.clientY - $('.magnifier').height()/2 - reviseY;
	
			if(x <= 0){
				x = 0;
			}
			if(x > $('.MG-smallImgWrap').width() - $('.magnifier').width()){
				x = $('.MG-smallImgWrap').width() - $('.magnifier').width();
			}
			if(y <= 0){
				y = 0;
			}
			if(y > $('.MG-smallImgWrap').height() - $('.magnifier').height()){
				y = $('.MG-smallImgWrap').height() - $('.magnifier').height();
			}
			$('.magnifier').css({'left': x, 'top': y});

			var X = x / $('.MG-smallImg').width()*$('.MG-bigImg').width();
			var Y = y / $('.MG-smallImg').height()*$('.MG-bigImg').height();

			$('.MG-bigImg').css({'left': -X, 'top': -Y});
		})
	}
})(jQuery);