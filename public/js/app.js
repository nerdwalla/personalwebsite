const menu_item = document.querySelectorAll('.header ul li a');

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		if (item.textContent === 'Portfolio') {
			$('html, body').animate({
				scrollTop: $("#portfolio").offset().top
			}, 1000);
		} else if (item.textContent === 'Contact') {
			$('html, body').animate({
				scrollTop: $("#contact").offset().top
			}, 1000);
		} else if (item.textContent === 'Home') {
			$('html, body').animate({
				scrollTop: $("#home").offset().top
			}, 1000);
		}
	});
});
