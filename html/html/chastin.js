document.addEventListener('DOMContentLoaded', function () {
	// Останавливаем все видео на странице
	var videos = document.querySelectorAll('video');
	videos.forEach(function (video) {
		 video.pause();
		 video.autoplay = false;
	});

	// Отключаем автопроигрывание у всех встроенных видео (например, YouTube)
	var iframes = document.querySelectorAll('iframe');
	iframes.forEach(function (iframe) {
		 var src = iframe.src;
		 if (src.indexOf('autoplay=1') !== -1) {
			  iframe.src = src.replace('autoplay=1', 'autoplay=0');
		 }
	});
});
