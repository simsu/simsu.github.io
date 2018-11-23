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

	/*지도*/
	var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
	    mapOption = { 
	        center: new daum.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
	        level: 3 // 지도의 확대 레벨
	    };

	var map = new daum.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

	// 마커가 표시될 위치입니다 
	var markerPosition  = new daum.maps.LatLng(33.450701, 126.570667); 

	// 마커를 생성합니다
	var marker = new daum.maps.Marker({
	    position: markerPosition
	});

	// 마커가 지도 위에 표시되도록 설정합니다
	marker.setMap(map);
});