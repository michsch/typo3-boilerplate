site {
	copyright = Copyright &copy; 2011 TYPO3 boilerplate
	email = info@typo3boilerplate.com
	title = TYPO3 boilerplate
	skipnav = Zur Navigation springen
	skipcontent = Zum Inhalt springen
	skipsidebar = Zur Sidebar springen
	skipcontentinfo = Zum Footer und Impressum springen
	admin.name = Michael Schulze
	admin.email = m.schulze@elsigno.de
	tostart = zur Startseite
}
meta {
	### your default metatags
	keywords = 
	description = 
	author = 
	copyright = 
}

### language 1
[globalVar = GP:L=1]
site {
	title = 
	skipnav = skip to navigation
	skipcontent = skip to content
	skipsidebar = skip to sidebar
	skipcontentinfo = skip to footer
	tostart = to homepage
}
meta {
	keywords = 
	description = 
	author = 
	copyright = 
}
[global]

### path to template directory
path.to {
	tpl = fileadmin/styles/sitename
}
### some versions
version {
	jquery = 1.6.2
	jquery.tools = 1.2.5
}

baseURL = sitename.com

apple.touch.icon = images/apple-touch-icon-114.png

config {
	language = de
	sys_language_uid = 0
	locale_all = de_DE
	htmlTag_langKey = de_DE
}

[globalVar = GP:L=1]
config {
	language = en
	sys_language_uid = 1
	locale_all = en_EN
	htmlTag_langKey = en_EN
}
[global]

### image configurations
styles.content.imgtext.maxW = 960
styles.content.imgtext.linkWrap.width = 646px
styles.content.imgtext.linkWrap.height = 600px