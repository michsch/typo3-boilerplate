/**
 * Central jQuery javascript file
 *
 * @creator					Michael Schulze <m.schulze@elsigno.de>
 * @copyright				Copyright 2011, Michael Schulze
 * @license         GNU GPL
 * @link            http://www.typo3boilerplate.com
 * @package         typo3boilerplate
 * @requirements		jquery-1.6.2.min.js
 *
 */

// no conflict mode so jQuery can be used with other libraries, too.
jQuery.noConflict();

// Lang
if (language = 'de' || !language) {
	var llimage = 'Bild';
	var llfrom = 'von';
	var llto = 'bis';
}

jQuery(document).ready(function($){
	$.accessifyhtml5();
	
	/* only if modernizr is not used */
	$('html').removeClass('no-js').addClass('js');
	
	/* hide address bar in mobile browsers like safari on iPhone */
	setTimeout(function() { window.scrollTo(0, 1) }, 100);
	
	/* responsive functions */
	var windowWidth = getWindowWidth($);
	responsive($, windowWidth, 0);
	$(window).resize(function() {
		responsive($, getWindowWidth($), 1);
	});
	
});

/**
 * All functions tha are important for a responsive design
 *
 * @param {Object} jQuery object
 * @param {integer} actual window width
 * @param {boolean} 1 if window is resized, 0 if the script is running for the 1st time
 * @return {boolean} true
 *
 */
function responsive($, windowWidth, resize) {
	/* do everytime when window is resized */
	
	/* in a special range */
	if (windowWidth <= 768 && windowWidth > 480) {
		
	}

	/* smaller than x */
	if (windowWidth <= 768) {
		
	}
	if (windowWidth <= 520) {
		
	}
	if (windowWidth <= 480) {
		
	}

	/* larger than x */
	if (windowWidth > 768) {
		
	}
	if (windowWidth > 520) {

	}

	/* do only after first loading */
	if (resize == 0) {
		
	}
	
	/* do only if window is resizing */
	if (resize == 1) {
		
	}

	return true;
}

/**
 * Gets the actual window width
 *
 * @param {Object} jQuery object
 * @return {Int} window width in pixel
 *
 */
function getWindowWidth($) {
	var windowWidth = window.innerWidth;
	if (!windowWidth) {
		var ielt9 = true;
		var windowWidth = $('body').width();
	}
	return windowWidth;
}