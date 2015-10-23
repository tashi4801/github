/* =============================================================================
	jQuery Open Window ver1.04
	Copyright(c) 2013, ShanaBrian
	Dual licensed under the MIT and GPL licenses.
============================================================================= */
(function($) {
	$.fn.openwin = function(settings) {
		settings = $.extend({
			option      : {
				width       : false,
				height      : false,
				top         : false,
				left        : false,
				menubar     : 'no',
				toolbar     : 'no',
				location    : 'no',
				status      : 'no',
				resizable   : 'no',
				scrollbars  : 'no',
				directories : 'no',
				titlebar    : 'yes',
				fullscreen  : 'no'
			},
			target      : '_blank',
			blur        : false,
			focus       : false
		}, settings);

		$(this).on('click', function() {
			var options = [];
			var target  = settings.target;
			var url     = $(this).attr('href');

			if ($(this).attr('rel')) {
				var rel       = $(this).attr('rel').split(',');
				var relOption = {};
				$.each(settings.option, function(i, rel) {
					var a = rel[i].split('=');
					relOption[a[0]] = a[1];
				});
			}

			$.each(settings.option, function(k) {
				var v = settings.option[k];
				if (relOption) {
					if (relOption[k]) {
						v = relOption[k];
					}
				}
				if (v) {
					options.push(k + '=' + v);
				}
			});
			if (relOption) {
				if (relOption['target']) {
					target = relOption['target'];
				}
			}
			var newWin = window.open(url, target, options.join(','));
			if (settings.blur === true) {
				newWin.blur();
			}
			if (settings.focus === true) {
				newWin.focus();
			}
			return false;
		});
		return this;
	};
})(jQuery);