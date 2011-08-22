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

// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function(){
  log.history = log.history || [];   // store logs to an array for reference
  log.history.push(arguments);
  if(this.console) {
    arguments.callee = arguments.callee.caller;
    var newarr = [].slice.call(arguments);
    (typeof console.log === 'object' ? log.apply.call(console.log, console, newarr) : console.log.apply(console, newarr));
  }
};

// make it safe to use console.log always
(function(b){function c(){}for(var d="assert,clear,count,debug,dir,dirxml,error,exception,firebug,group,groupCollapsed,groupEnd,info,log,memoryProfile,memoryProfileEnd,profile,profileEnd,table,time,timeEnd,timeStamp,trace,warn".split(","),a;a=d.pop();){b[a]=b[a]||c}})((function(){try
{console.log();return window.console;}catch(err){return window.console={};}})());

(function( $ ){
	
	/**
	 * Accessifyhtml5.js
	 * Adds ARIA to new elements in browsers which don’t do it by themselves.
	 *
	 * originally by Eric Eggert
	 * https://github.com/yatil/accessifyhtml5.js/blob/master/accessifyhtml5.js
	 *
	 **/
	$.accessifyhtml5 = function ( options ){
		var fixes = {
			'header.site'   : { 'role':          'banner'        },
			'footer.site'   : { 'role':          'contentinfo'   },
			'article'       : { 'role':          'article'       },
			'aside'         : { 'role':          'complementary' },
			'nav'           : { 'role':          'navigation'    },
			'output'        : { 'aria-live':     'polite'        },
			'section'       : { 'role':          'region'        },
			'[required]'    : { 'aria-required': 'true'          }
		};

		$.each(fixes, function(index, item) {
			$(index).attr(item);
		});
	}
	
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

/**
 * "Yet Another Multicolumn Layout" - (X)HTML/CSS Framework
 *
 * (en) Workaround for IE8 und Webkit browsers to fix focus problems when using skiplinks
 * (de) Workaround für IE8 und Webkit browser, um den Focus zu korrigieren, bei Verwendung von Skiplinks
 *
 * @note			inspired by Paul Ratcliffe's article 
 *					http://www.communis.co.uk/blog/2009-06-02-skip-links-chrome-safari-and-added-wai-aria
 *                  Many thanks to Mathias Schäfer (http://molily.de/) for his code improvements
 *
 * @copyright       Copyright 2005-2011, Dirk Jesse
 * @license         CC-A 2.0 (http://creativecommons.org/licenses/by/2.0/),
 *                  YAML-C (http://www.yaml.de/en/license/license-conditions.html)
 * @link            http://www.yaml.de
 * @package         yaml
 * @version         3.3.1
 * @revision        $Revision: 501 $
 * @lastmodified    $Date: 2011-06-18 17:27:44 +0200 (Sa, 18 Jun 2011) $
 */
 
(function () {
	var YAML_focusFix = { 
		skipClass : 'skip',
		
		init : function () {
			var userAgent = navigator.userAgent.toLowerCase();
			var	is_webkit = userAgent.indexOf('webkit') > -1;
			var	is_ie = userAgent.indexOf('msie') > -1;
			
			if (is_webkit || is_ie) {
				var body = document.body,
					handler = YAML_focusFix.click;
				if (body.addEventListener) {
					body.addEventListener('click', handler, false);
				} else if (body.attachEvent) {
					body.attachEvent('onclick', handler);
				}
			}
		},
		
		trim : function (str) {
			return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
		},
		
		click : function (e) {
			e = e || window.event;
			var target = e.target || e.srcElement;
			var a = target.className.split(' ');
			
			for (var i=0; i < a.length; i++) {
				var cls = YAML_focusFix.trim(a[i]);
				if ( cls === YAML_focusFix.skipClass) {
					YAML_focusFix.focus(target);
					break;			
				}
			}
		},
		
		focus : function (link) {		
			if (link.href) {
				var href = link.href,
					id = href.substr(href.indexOf('#') + 1),
					target = document.getElementById(id);
				if (target) {
					target.setAttribute("tabindex", "-1");
					target.focus();
				}				
			}
		}
	};
	YAML_focusFix.init();
})();