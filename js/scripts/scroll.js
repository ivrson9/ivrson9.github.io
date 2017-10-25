$(document).ready(function(){
	class StickyNavigation {

		constructor() {
			this.currentId = null;
			this.currentTab = null;
			this.tabContainerHeight = 50;
			this.lastScroll = 0;
			let self = this;
			$('.sticky-nav-tab').click(function() {
				self.onTabClick(event, $(this));
			});
			$(window).scroll(() => { this.onScroll(); });
		}

		onTabClick(event, element) {
			event.preventDefault();
			let scrollTop = $(element.attr('href')).offset().top - this.tabContainerHeight + 1;
			$('html, body').animate({ scrollTop: scrollTop }, 600);
		}

		onScroll() {
			this.checkHeaderPosition();
			this.findCurrentTabSelector();
			this.lastScroll = $(window).scrollTop();
		}

		checkHeaderPosition() {
			let offset = ($('.backstretch').height() - this.tabContainerHeight);
			if($(window).scrollTop() > offset) {
				$('#nav').addClass('sticky-nav');
			} else {
				$('#nav').removeClass('sticky-nav');
			}
		}

		findCurrentTabSelector(element) {
			let newCurrentId;
			let newCurrentTab;
			let self = this;
			$('.sticky-nav-tab').each(function() {
				let id = $(this).attr('href');
				let offsetTop = $(id).offset().top - self.tabContainerHeight;
				let offsetBottom = $(id).offset().top + $(id).height() - self.tabContainerHeight;
				if($(window).scrollTop() > offsetTop && $(window).scrollTop() < offsetBottom) {
					newCurrentId = id;
					newCurrentTab = $(this);
				}
			});
			if(this.currentId != newCurrentId || this.currentId === null) {
				$(this.currentTab).removeClass('active');

				this.currentId = newCurrentId;
				this.currentTab = newCurrentTab;

				$(this.currentTab).addClass('active');
			}
		}

	}

	new StickyNavigation();
});
