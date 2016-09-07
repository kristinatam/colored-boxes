$(document).ready(function () {

	$('.box').on('click', function () {
		var animations = [ 'slideDown', 'translateRotate', 'scale', 'rotate', 'Yrotate', 'rotateX', 'skew', 'YXrotate', 'TRrotate', 'xxy' ];
		var box = this;
		var animation = animations[Math.floor(Math.random() * 10)];

		$(box).addClass(animation);

		setTimeout(function () {
			$(box).removeClass(animation);
		}, 3000);
	});
});