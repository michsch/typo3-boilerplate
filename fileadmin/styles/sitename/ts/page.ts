RTE.classes {
	align-justify {
		name = Blocksatz
	}
	align-right {
		name = Rechts
	}
	align-center {
		name = Zentriert
	}
}

RTE.default {
	contentCSS = fileadmin/styles/sitename/css/screen/rte.css
	#useCSS = 1
	showTagFreeClasses = 1
	enableWordClean = 0
	disableEnterParagraphs = 0
	#showStatusBar = 1

	#fontstyle, fontsize werden ins html geschrieben, deshalb rausgenommen
	#lefttoright, righttoleft nicht benötigt
	#inserttag rausgenommen, damit redakteure damit keinen unsinn treiben
	hideButtons = fontstyle, fontsize, lefttoright, righttoleft, inserttag
	#showButtons = img
	#PRE nicht benötigt, deshalb rausgenommen
	#H1 aus semantischen Gründen rausgenommen (Überschrift Inhaltselemente ist schon h1)
	hidePStyleItems = H1, PRE, ADDRESS

	#Für sauberes html rausgenommen
	hideTags = font, font (full)

	classesParagraph = align-justify, align-right, align-center
	
	# classesCharacter = gray
	classesAnchor = extern, intern, mailto, pdf

	dontConvAmpInNBSP_rte = 1
	dontHSC_rte = 1
}

RTE.default.proc {
	overruleMode = ts_css
	dontConvBRtoParagraph = 1
	// TAGS ALLOWED OUTSIDE P & DIV
	allowTagsOutside = img,hr
	// TAGS ALLOWED
	allowTags = table, tbody, tr, th, td, h1, h2, h3, h4, h5, h6, div, p, br, span, ul, ol, li, re, blockquote, strong, em, b, i, u, sub, sup, strike, a, img, nobr, hr, tt, q, cite, abbr, acronym
	// TAGS DENIED
	denyTags = font
	// ALLOWED P & DIV ATTRIBUTES
	// keepPDIVattribs = align,class,style
	keepPDIVattribs = align,class
	// CONTENT TO RTE
	HTMLparser_rte {
		// TAGS ALLOWED
		allowTags < RTE.default.proc.allowTags
		removeTags = font
		// DO NOT REMOVE UNMATCHED TAGS
		keepNonMatchedTags = 0
	}

	// CONTENT TO DATABASE
	entryHTMLparser_db = 1
	entryHTMLparser_db {
		// XHTML COMPLIANCE
		xhtml_cleaning = 1
		// CLEAN TAGS
		noAttrib = b, i, u, strike, sub, sup, strong, em, quote, blockquote, cite, tt, br, center
		tags.hr.allowedAttribs = class
		// REMAP B AND I TAGS
		tags.b.remap = strong
		tags.i.remap = em
		rmTagIfNoAttrib = span,div,font,sub
		htmlSpecialChars = 0
	}
	allowedClasses ( 
		align-justify, align-right, align-center
	)
	
	classesCharacter = info, gray
}

RTE.config.tt_content.bodytext.proc.allowedClasses = align-justify, align-right, align-center

# FE RTE configuration (htmlArea RTE only)
RTE.default.FE < RTE.default
RTE.default.FE.proc < RTE.default.proc
RTE.default.FE.userElements >
RTE.default.FE.userLinks >

TCEMAIN.table.pages.disablePrependAtCopy = 1
TCEMAIN.table.tt_content.disablePrependAtCopy = 1