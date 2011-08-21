#
# TYPO3 boilerplate - typoscript setup file
#
# @creator			Michael Schulze (m.schulze@elsigno.de)
# @copyright		2011, Michael Schulze
# @license			GNU GPL
# @package			typo3boilerplate
#

config {
	### set to 0 on live version and to 1 for development
	no_cache = 1
	headerComment = TYPO3 boilerplate by Michael Schulze

	### DOCTYPE
	doctype = html_5
	htmlTag_setParams = class="no-js" lang="{$config.language}"
	# xmlprologue = none
	# xhtml_cleaning = all
	# additionalHeaders = Content-Type:text/html;charset=utf-8

	### Language
	language = {$config.language}
	sys_language_uid = {$config.sys_language_uid}
	locale_all = {$config.locale_all}
	htmlTag_langKey = {$config.htmlTag_langKey}
	linkVars = L
	# sys_language_mode = content_fallback;0
	# sys_language_overlay = 1
	sys_language_mode = content_fallback
	sys_language_overlay = hideNonTranslated
	
	### clean source
	inlineStyle2TempFile = 1
	removeDefaultJS = external
	# removeDefaultJS = 0

	### misc configurations
	pageTitleFirst = 1
	admPanel = 1
	disablePrefixComment = 1
	disableImgBorderAttr = 1
	extTarget = _blank
	index_enable = 1

	### E-Mail Spam-Protect
	spamProtectEmailAddresses = 1
	spamProtectEmailAddresses_atSubst = <span style="font-size:1px; color: #ffffff;">.</span>@<span style="font-size:1px; color: #ffffff;">.</span>
	spamProtectEmailAddresses_lastDotSubst = <span style="font-size:1px; color: #ffffff;">.</span>.<span style="font-size:1px; color: #ffffff;">.</span>
	
	### filenames of images
	meaningfulTempFilePrefix = 20
}

lib.tt_content < tt_content

page = PAGE
page {
	typeNum = 0

	10 = USER
	10.userFunc = tx_templavoila_pi1->main_page
	10.disableExplosivePreview = 1

	headerData{

		10 = TEXT
		10.value (
			<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

			<meta name="viewport" content="width=device-width, initial-scale=1.0">
    	<meta name="apple-mobile-web-app-capable" content="yes" />
		  <meta name="apple-mobile-web-app-status-bar-style" content="black">

			<link rel="shortcut icon" href="{$path.to.tpl}/images/favicon.ico">
			<link rel="icon" href="{$path.to.tpl}/images/favicon.ico" type="image/x-icon">
			<link rel="apple-touch-icon" href="{$path.to.tpl}//images/{$apple.touch.icon}">

			<!--[if lt IE 9]>
			<script type="text/javascript" src="{$path.to.tpl}/js/html5.js"></script>
			<link href="{$path.to.tpl}/css/patches/patch_lt_ie9.css" rel="stylesheet" type="text/css">
			<![endif]-->
			<!--[if lte IE 7]>
			<link href="{$path.to.tpl}/css/patches/patch_ie.css" rel="stylesheet" type="text/css">
			<![endif]-->
			<!--[if lte IE 6]>
			<!-- if you want to use a typoraphy based layout for IE6, than activate this.
			<link rel="stylesheet" href="http://universal-ie6-css.googlecode.com/files/ie6.1.1b.css" media="screen, projection"> -->
			<script type="text/javascript">
				document.write('<style type="text/css">img, .pngtrans { behavior: url(http://'+window.location.hostname+'{$path.to.tpl}/css/patches/hm_iepngfix/hm_iepngfix.htc) }</style>');
			</script>
			<![endif]-->
		)
		
		### only for development
		20 = TEXT
		20.value (
			<!--[if ! lte IE 6]><!-->
			<link rel="stylesheet" href="{$path.to.tpl}/css/yaml/core/slim_base.css?v=2">
			<link rel="stylesheet" href="{$path.to.tpl}/css/navigation/nav.css?v=2">
			<link rel="stylesheet" href="{$path.to.tpl}/css/screen/basemod.css?v=2">
			<link rel="stylesheet" href="{$path.to.tpl}/css/screen/content.css?v=2">
			<link rel="stylesheet" href="{$path.to.tpl}/css/screen/fce.css?v=2">
			<link rel="stylesheet" href="{$path.to.tpl}/css/screen/responsive.css?v=2">
			<link rel="stylesheet" href="{$path.to.tpl}/css/print/print.css?v=2">
			<!--<![endif]-->

			<script type="text/javascript" src="{$path.to.tpl}/js/libs/live.js#css"></script>
		)

		### Google Sitemap, Yahoo & Bing verification
		30 = TEXT
		30.value (
			<meta name="google-site-verification" content="google_sitemap_key" />
			<meta name="y_key" content="yahoo_validation_key" />
			<meta name="msvalidate.01" content="bing_validation_key" />
		)

		### Google Analytics
		40 < lib.googleAnalytics
	}

	meta {
		keywords.field = keywords
		keywords.ifEmpty (
			{$meta.keywords}
		)
		description.field = description
		description.ifEmpty (
			{$meta.description}
		)
		author.field = author
		author.ifEmpty (
			{$meta.author}
		)
		copyright.field = copyright
		copyright.ifEmpty (
			{$meta.copyright}
		)
		robots = noindex,nofollow
	}

	includeCSS {
		file1 = {$path.to.tpl}/css/my_layout.css
		file1.allWrap = <!--[if ! lte IE 6]><!-->|<!--<![endif]-->
	}

	includeJS {
		file1 = {$path.to.tpl}/js/libs/modernizr.js
		file2 = {$path.to.tpl}/js/libs/webfontloadenhancer.min.js
	}

	jsInline {
		10 = TEXT
		10.value = var language = "de";
	}

	### include jQuery at the bottom of the page
	20 = TEXT
	20.value (
		<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/{$version.jquery}/jquery.min.js"></script>
		<script type="text/javascript">!window.jQuery && document.write('<script type="text/javascript" src="{$path.to.tpl}/js/lib/jquery-{$version.jquery}.min.js"><\/script>')</script>
	)

	includeJSFooter {
		file1 = {$path.to.tpl}/js/my_plugins.js
		file2 = {$path.to.tpl}/js/my_layout.js
	}

	### every page gets their uid as css id 
	# bodyTagCObject = HTML
	# bodyTagCObject.value.field = uid
	# bodyTagCObject.value.wrap = <body id="uid|">
}

### META Tags robots to noindex
[globalVar = TSFE:id=99999]
page.meta.robots = noindex,nofollow
[global]

### overwrite the body-tag if is the start page
[PIDinRootline = 2]
# page.bodyTagCObject.value.wrap = <body id="uid|" class="start">
[global]

### Define title attribute of a-tags
NO.ATagTitle.field = description // subtitle // title

### create a better page title for SEO
includeLibs.pagetitle = typo3conf/ext/mf_pagetitle/pagetitle.php
plugin.mf_pagetitle.title = {page:title} » {$site.title}
config.titleTagFunction = user_pagetitle_class->changetitle

### Disable the standard stylesheets
plugin.tx_cssstyledcontent._CSS_DEFAULT_STYLE >
plugin.tx_felogin_pi1._CSS_DEFAULT_STYLE >

### insert canonical tag
temp.canonical = COA
temp.canonical {
	10 = TEXT
	10.value = <link rel="canonical" href="

	20 = TEXT
	20.value < config.baseURL

	30 = TEXT
	30.typolink {
    		parameter.data = TSFE:id
    		returnLast = url   
	}

	40 = TEXT
	40.value = " />
}
page.headerData.211 < temp.canonical

### insert skiplinks
lib.skiplinks = TEXT
lib.skiplinks.wrap = <ul id="skiplinks" role="navigation">|</ul>
lib.skiplinks.value (
	<li><a class="skip" href="#navigation">{$site.skipnav}</a></li>
	<li><a class="skip" href="#content">{$site.skipcontent}</a></li>
	<li><a class="skip" href="#contentinfo">{$site.skipcontentinfo}</a></li>
)

### RSS2 for tt_news
rss2 = PAGE
rss2 {
  typeNum = 100
  10 >
  10 < plugin.tt_news
  10.pid_list >
  10.pid_list = {$plugin.tt_news.pid_list}
  10.singlePid = {$plugin.tt_news.singlePid}
  10.defaultCode = XML
  10.displayXML.xmlFormat = rss2
  config {
    disableAllHeaderCode = 1
    additionalHeaders = Content-type:text/xml
    no_cache = 1
    xhtml_cleaning = 0
  }
}
rss2 >

### META keywords and description for tt_news
[globalVar = TSFE:id=99999]
page.meta.description >
page.meta.description = TEXT
page.meta.description.data = register:newsSubheader

page.meta.keywords >
page.meta.keywords = TEXT
page.meta.keywords.data = register:newsKeywords
[global]

### insert a logo
lib.logo = COA
lib.logo {
	### including the logo as TEXT because of width and height attributes which we don't want here
	10 = TEXT
	10.value (
		<img src="{$path.to.tpl}/images/logo.png" alt="Logo" />
	)
	10.typolink.parameter = 2
	
	### special logo for print version
	20 = IMAGE
	20.file = {$path.to.tpl}/images/logo.png
	20.altText = Logo
	20.params = class="print"
	20 >
}

### TYPO3 SEO - disable all the **** comments
lib {
	stdheader {
		stdWrap {
			# remove the DIV tag from any headline
			dataWrap =
			# remove comments for headlines
			prefixComment =
		}
		# remove the class of the first headline
		3.headerClass =
		3.headerClass.noTrimWrap =
		# <br /> nach Überschriften entfernen
		10.stdWrap.wrap =
	}
	# remove unused elements
	parseFunc_RTE.nonTypoTagStdWrap {
		encapsLines {
			addAttributes.P.class =
			innerStdWrap_all.ifEmpty =
		}
		# make semantic HTML
		HTMLparser {
			tags {
				b.remap = strong
				i.remap = em
			}
		}
	}
}
tt_content {
	stdWrap.prefixComment =
	text.20.prefixComment =
	bullets.20.stdWrap.prefixComment =
	table.20.stdWrap.prefixComment =
	stdWrap.dataWrap =
	stdWrap.prepend.dataWrap =
	html.prefixComment =
	div.wrap =
	stdWrap.innerWrap >
}

### CSS styled content
tt_content.image.20 = USER
tt_content.image.20 {
	imageStdWrap.dataWrap = <div class="csc-textpic-imagewrap" style="width:{register:totalwidth}px;"> | </div>
	imageStdWrapNoWidth.wrap = <div class="csc-textpic-imagewrap"> | </div>
	imageColumnStdWrap.dataWrap = <div class="csc-textpic-imagecolumn" style="width:{register:columnwidth}px;"> | </div>

	layout = CASE
	layout {
		key.field = imageorient
		default = TEXT
		default.value = <div class="csc-textpic csc-textpic-center csc-textpic-above###CLASSES###">###IMAGES######TEXT###</div><div class="csc-textpic-clear"><!-- --></div>
		1 = TEXT
		1.value = <div class="csc-textpic csc-textpic-right csc-textpic-above###CLASSES###">###IMAGES######TEXT###</div><div class="csc-textpic-clear"><!-- --></div>
		2 = TEXT
		2.value = <div class="csc-textpic csc-textpic-left csc-textpic-above###CLASSES###">###IMAGES######TEXT###</div><div class="csc-textpic-clear"><!-- --></div>
		8 = TEXT
		8.value = <div class="csc-textpic csc-textpic-center csc-textpic-below###CLASSES###">###TEXT######IMAGES###</div><div class="csc-textpic-clear"><!-- --></div>
		9 = TEXT
		9.value = <div class="csc-textpic csc-textpic-right csc-textpic-below###CLASSES###">###TEXT######IMAGES###</div><div class="csc-textpic-clear"><!-- --></div>
		10 = TEXT
		10.value = <div class="csc-textpic csc-textpic-left csc-textpic-below###CLASSES###">###TEXT######IMAGES###</div><div class="csc-textpic-clear"><!-- --></div>
		17 = TEXT
		17.value = <div class="csc-textpic csc-textpic-intext-right###CLASSES###">###IMAGES######TEXT###</div>
		18 = TEXT
		18.value = <div class="csc-textpic csc-textpic-intext-left###CLASSES###">###IMAGES######TEXT###</div>
		25 = TEXT
		25.value = <div class="csc-textpic csc-textpic-intext-right-nowrap###CLASSES###">###IMAGES###<div style="margin-right:{register:rowWidthPlusTextMargin}px;">###TEXT###</div></div><div class="csc-textpic-clear"><!-- --></div>
		25.insertData = 1
		26 = TEXT
		26.value = <div class="csc-textpic csc-textpic-intext-left-nowrap###CLASSES###">###IMAGES###<div style="margin-left:{register:rowWidthPlusTextMargin}px;">###TEXT###</div></div><div class="csc-textpic-clear"><!-- --></div>
		26.insertData = 1
	}
	rendering {
		dl {
			imageRowStdWrap.dataWrap = <div class="csc-textpic-imagerow" style="width:{register:rowwidth}px;"> | </div>
			noRowsStdWrap.wrap =
			oneImageStdWrap.dataWrap = <dl class="csc-textpic-image###CLASSES###" style="width:{register:imagespace}px;"> | </dl>
			# eigene Anpassung
			#oneImageStdWrap.dataWrap = <dl class="csc-textpic-image###CLASSES###" > | </dl>
			imgTagStdWrap.wrap = <dt> | </dt>
			editIconsStdWrap.wrap = <dd> | </dd>
			caption.wrap = <dd class="csc-textpic-caption"> | </dd>
		}
		ul {
			imageRowStdWrap.dataWrap = <div class="csc-textpic-imagerow" style="width:{register:rowwidth}px;"><ul> | </ul></div>
			noRowsStdWrap.wrap = <ul> | </ul>
			oneImageStdWrap.dataWrap = <li class="csc-textpic-image###CLASSES###" style="width:{register:imagespace}px;"> | </li>
			imgTagStdWrap.wrap =
			editIconsStdWrap.wrap = <div> | </div>
			caption.wrap = <div class="csc-textpic-caption"> | </div>
		}
		div {
			imageRowStdWrap.dataWrap = <div class="csc-textpic-imagerow" style="width:{register:rowwidth}px;"> | </div>
			noRowsStdWrap.wrap =
			oneImageStdWrap.dataWrap = <div class="csc-textpic-image###CLASSES###" style="width:{register:imagespace}px;"> | </div>
			imgTagStdWrap.wrap = <div> | </div>
			editIconsStdWrap.wrap = <div> | </div>
			caption.wrap = <div class="csc-textpic-caption"> | </div>
		}
	}
	renderMethod = dl
}

tt_content.image.20.1 {

	titleText.field = titleText
	titleText.htmlSpecialChars = 1
	
	# Removing the default "imageLinkWrap" TS code, and add new one to enable Lightbox effect.
	imageLinkWrap >
	imageLinkWrap = 1
	imageLinkWrap {

		# Enable linkwrapping if either click-enlarge is selected or a link is defined.
		enable.field = image_zoom
		enable.ifEmpty.typolink.parameter.field = image_link
		enable.ifEmpty.typolink.parameter.listNum.stdWrap.data = register : IMAGE_NUM_CURRENT
		enable.ifEmpty.typolink.returnLast = url

		# Add new typolink wrapping code
		typolink {
			target = {$styles.content.links.target}
			extTarget = {$styles.content.links.extTarget}

			# This returns a link, pointing to the path + name of the original image.
			# or to the path + name of the resized lightbox image (if maxH or maxW is reached.)
			parameter.cObject = IMG_RESOURCE
			parameter.cObject.file.import.data = TSFE:lastImageInfo|origFile
			parameter.cObject.file.maxW = {$lightbox.maxW}
			parameter.cObject.file.maxH = {$lightbox.maxH}
	
			# Except if the linkfield is not empty
			parameter.override.field = image_link
			parameter.override.listNum.stdWrap.data = register : IMAGE_NUM_CURRENT
			parameter.override.if.isTrue.field = image_link
		
			# Add the "rel" attribute needed to activate the lightbox effect.
			ATagParams = class="jqfancybox" rel="jqfancybox"
			ATagParams.override = class="jqfancybox" rel="jqfancybox-{field:uid}"
			#ATagParams.override.if.isTrue = {$plugin.pmkslimbox.imgtext.navigable}
			ATagParams.insertData = 1
			ATagParams.if.isTrue.field = image_zoom
			# wrap = |<span class="magnifier"></span>
			# ATagBeforeWrap = 1
		}
	}
}

lib.stdheader.5.date >
lib.stdheader.5.strftime = <div class="date"><div class="dateBox"><div class="month">%b</div><div class="day>%d</div></div><div class="year">%Y</div></div>