$(document).ready(function() {
	var imgIndex;

	$('#showedImg').css({
		'marginTop': -parseInt($('#showedImg').css('height')) / 2,
		'marginLeft': -parseInt($('#showedImg').css('width')) / 2
	});
	$('#arrowBox').css({
		'marginTop': -parseInt($('#arrowBox').css('height')) / 2,
		'marginLeft': -parseInt($('#arrowBox').css('width')) / 2
	});

    $(document).scroll(function() {
		if($(document).scrollTop() > 0) {
			$('#main_nav').css('backgroundColor', 'rgba(0, 0, 0, 0.9');
		}
		else {
			$('#main_nav').css('backgroundColor', 'rgba(0, 0, 0, 0.0');
		}
	});

	(function() {
		for(var i=0;i<14;i++) {
			var itemStr = '<img data-index="' + (i + 1) + '" class="imgResize" src="image/picture/' + (i + 1) + '.jpg" />';

			$('<li></li>').addClass('imgOp').html(itemStr).appendTo($('#imgBox > ul'));
		}
	})();

	$('.imgResize').click(function() {
		imgIndex = $(this).attr('data-index');
		$('#showImg').css('visibility', 'visible');

		$('#showedImg').attr('src','image/picture/' + $(this).attr('data-index') + '.jpg');
	});

	$('#showImg').click(function() {
		$(this).css('visibility', 'hidden');
	});

	$('#showedImg').click(function(event) {
		event.stopPropagation();
	});

	var leftArrowImg = true;
	var rightArrowImg = true;

	$('#leftDir').click(function() {
		if(imgIndex != 1) {
			imgIndex--;

			if(imgIndex == 1) {
				$(this).css('opacity', '0');
				leftArrowImg = false;
			}
		}
		if(!rightArrowImg) {
			$('#rightDir').css('opacity', '1');
			rightArrowImg = true;
		}

		$('#showedImg').attr('src','image/picture/' + imgIndex + '.jpg');
		event.stopPropagation();
	});
	$('#rightDir').click(function() {
		if(imgIndex != 14) {
			imgIndex++;

			if(imgIndex == 14) {
				$(this).css('opacity', '0');
				rightArrowImg = false;
			}
		}
		if(!leftArrowImg) {
			$('#leftDir').css('opacity', '1');
			leftArrowImg = true;
		}

		$('#showedImg').attr('src','image/picture/' + imgIndex + '.jpg');
		event.stopPropagation();
	});

	/*지도*/
	// var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
	//     mapOption = { 
	//         center: new daum.maps.LatLng(35.574201396093294, 129.18897732223178), // 지도의 중심좌표
	//         level: 3 // 지도의 확대 레벨
	//     };

	// var map = new daum.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

	// // 마커가 표시될 위치입니다 
	// var markerPosition  = new daum.maps.LatLng(35.574201396093294, 129.18897732223178); 

	// // 마커를 생성합니다
	// var marker = new daum.maps.Marker({
	//     position: markerPosition
	// });

	// // 마커가 지도 위에 표시되도록 설정합니다
	// marker.setMap(map);
});