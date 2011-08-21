/**
 * jQuery javascript file for your plugins
 *
 * @creator					Michael Schulze <m.schulze@elsigno.de>
 * @copyright				Copyright 2011, Michael Schulze
 * @license         GNU GPL
 * @link            http://www.typo3boilerplate.com
 * @package         typo3boilerplate
 * @requirements		jquery-1.6.2.min.js
 *
 */

(function( $ ){
	var firstplugin = {
    init : function( options ) {
      var defaults = {
				resize: 1
      }
				, o = $.extend(defaults, options || {});
			
			var firstload = 1;
			el = this;

			/* active update function if window is resized */
			if (o.resize == 1) {
				$(window).resize(function() {
					firstLoad = 0;
					firstplugin.update(o);
				})
			}
			
			return this.each(function(){

				/**
				 * place your plugin code here
				 *
				 */

			});
    },

		/**
		 * Update function
		 *
		 * @param {Object} all options
		 * @return {boolean} true
		 *
		 */
    update: function(o){
			return el.each(function(){
				
				/**
				 * place your plugin code for the update function here
				 *
				 */

			});
    }
  };

  $.fn.firstplugin = function( method ) {
    // Method calling logic
    if ( firstplugin[method] ) {
      return firstplugin[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof method === 'object' || ! method ) {
      return firstplugin.init.apply( this, arguments );
    } else {
      $.error( 'Method ' +  method + ' does not exist on jQuery.firstplugin' );
    }    
  };

	$.secondplugin = function( options ) {
		var defaults = {
			resize: 1
    }
			, o = $.extend(defaults, options || {});
		
		/**
		 * place your plugin code here
		 *
		 */
		
		return true;
	}

})(jQuery);