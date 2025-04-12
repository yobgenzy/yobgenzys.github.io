(function ($) {
	"use strict";

	
	// Theme color control js
	$(document).ready(function () {
		// Ambil preferensi mode gelap dari penyimpanan lokal
		const isDarkMode = localStorage.getItem('darkMode') === 'true';
		
		// Terapkan kelas mode gelap jika preferensi menyatakan mode gelap aktif
		$('body').toggleClass('dark-theme', isDarkMode);
		
		// Tampilkan konten halaman langsung
		$('#page-content').css({
			'display': 'block',
			'opacity': '1'
		});

		// Tambahkan event handler untuk tombol pengendali tema
		$('.theme-control-btn').on("click", function () {
			// Toggle kelas mode gelap pada elemen body
			$('body').toggleClass('dark-theme');
			
			// Simpan status mode gelap di penyimpanan lokal
			const isDark = $('body').hasClass('dark-theme');
			localStorage.setItem('darkMode', isDark);
		});
	});

	// Mobile menu control js
	$(".mobile-menu-control-bar").on("click", function () {
		$(".mobile-menu-overlay").addClass("show");
		$(".navbar-main").addClass("show");
	})
	$(".mobile-menu-overlay").on("click", function () {
		$(".mobile-menu-overlay").removeClass("show");
		$(".navbar-main").removeClass("show");
	})

	// Parallax scroll effect js
	document.querySelectorAll(".move-with-cursor").forEach(a => {
		document.addEventListener("mousemove", function (e) {
			var t = e.clientX,
				e = e.clientY;
			a.style.transition = "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)", a.style.transform = `translate(${.01 * t}px, ${.01 * e}px) rotate(${.01 * (t + e)}deg)`
		})
	}),

		// Email copy button js
		new ClipboardJS('.btn-copy');

	// Email copy button tooltip js
	$(document).ready(function () {
		$(".btn-copy").on("click", function () {
			$(this).addClass("active");

			setTimeout(() => {
				$(this).removeClass("active");
			}, 1000);
		});
	});

	// Magnific popup js
	$(".parent-container").magnificPopup({
		delegate: ".gallery-popup",
		type: "image",
		gallery: {
			enabled: true,
		},
	});

	// Client feedback slider js
	$(".client-feedback-slider").slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: false,
		dots: false,
		infinite: true,
		arrows: true,
		speed: 500,
		prevArrow: '<i class="fas left icon fa-arrow-left"></i>',
		nextArrow: '<i class="fas right icon fa-arrow-right"></i>',
		responsive: [{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		},]
	});

	// Article publications slider js
	$(".article-publications-slider").slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: false,
		dots: false,
		infinite: true,
		arrows: true,
		speed: 500,
		prevArrow: '<i class="fas left icon fa-arrow-left"></i>',
		nextArrow: '<i class="fas right icon fa-arrow-right"></i>',
		responsive: [{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		},]
	});

	// Smooth Page Transitions
	document.addEventListener('DOMContentLoaded', function() {
		// Create transition overlay
		const transitionOverlay = document.createElement('div');
		transitionOverlay.className = 'page-transition';
		document.body.appendChild(transitionOverlay);

		// Handle all internal links
		document.querySelectorAll('a[href^="/"], a[href^="./"], a[href^="../"]').forEach(link => {
			link.addEventListener('click', function(e) {
				// Don't handle if it's a hash link or external link
				if (this.href.includes('#') || this.href.includes('http') && !this.href.includes(window.location.host)) {
					return;
				}

				e.preventDefault();
				const targetUrl = this.href;

				// Add fade-out class to current content
				document.getElementById('page-content').classList.add('fade-out');

				// Activate transition overlay
				setTimeout(() => {
					transitionOverlay.classList.add('active');
				}, 100);

				// After a short delay, navigate to the new page
				setTimeout(() => {
					window.location.href = targetUrl;
				}, 600);
			});
		});

		// Handle page load
		window.addEventListener('load', function() {
			// Remove transition overlay
			transitionOverlay.classList.remove('active');

			// Remove fade-out class from content
			document.getElementById('page-content').classList.remove('fade-out');
		});
	});

	// Mouse interaction effects
	document.addEventListener('DOMContentLoaded', function() {
		// Add hover-shake class to all cards
		document.querySelectorAll('.card').forEach(card => {
			card.classList.add('hover-shake');
		});

		// Add image-hover class to all images
		document.querySelectorAll('img').forEach(img => {
			img.classList.add('image-hover');
		});

		// Mouse move parallax effect
		document.addEventListener('mousemove', function(e) {
			const cards = document.querySelectorAll('.card');
			const mouseX = e.clientX;
			const mouseY = e.clientY;
			const windowWidth = window.innerWidth;
			const windowHeight = window.innerHeight;
			
			// Calculate normalized mouse position (-1 to 1)
			const normalizedX = (mouseX / windowWidth) * 2 - 1;
			const normalizedY = (mouseY / windowHeight) * 2 - 1;
			
			cards.forEach(card => {
				// Apply subtle 3D rotation based on normalized mouse position
				const rotateX = normalizedY * 1.5;
				const rotateY = normalizedX * -1.5;
				
				// Add smooth transition and perspective with very short duration
				card.style.transition = 'transform 0.08s linear';
				card.style.transform = `
					perspective(1000px)
					rotateX(${rotateX}deg)
					rotateY(${rotateY}deg)
					scale(1.01)
					translateZ(5px)
				`;
				
				// Add subtle shadow effect
				const shadowX = normalizedX * 3;
				const shadowY = normalizedY * 3;
				card.style.boxShadow = `
					${shadowX}px ${shadowY}px 10px rgba(0, 0, 0, 0.05)
				`;
			});
		});

		// Reset card transform when mouse leaves
		document.querySelectorAll('.card').forEach(card => {
			card.addEventListener('mouseleave', function() {
				this.style.transition = 'all 0.1s linear';
				this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1) translateZ(0)';
				this.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.05)';
			});
		});
	});

	// Page Transitions
	document.addEventListener('DOMContentLoaded', function() {
		const pageTransition = document.querySelector('.page-transition');
		const pageContent = document.getElementById('page-content');
		
		// Show content when page loads
		setTimeout(() => {
			pageContent.classList.add('active');
		}, 100);

		// Handle navigation
		document.querySelectorAll('a').forEach(link => {
			if (link.href && link.href.indexOf('#') === -1 && link.href.indexOf('javascript:') === -1) {
				link.addEventListener('click', function(e) {
					e.preventDefault();
					const target = this.href;
					
					// Fade out current page
					pageTransition.classList.add('active');
					pageContent.classList.remove('active');
					
					// Navigate to new page after transition
					setTimeout(() => {
						window.location.href = target;
					}, 500);
				});
			}
		});
	});

})(jQuery);
