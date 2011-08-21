lib.breadcrumb = COA
lib.breadcrumb {
	10 = HMENU
	10 {
		wrap = <div id="breadcrumb" role="navigation">|</div>
		special = rootline
		special.range = 1|-1

		1 = TMENU
		1 {
			noBlur = 1
			# wrap = <ul>|</ul>
			NO = 1
			NO {
				# linkWrap = <li class="first">|</li>|*|<li><span class="arrow">&gt;</span>&nbsp;|</li>|*|<li class="last"><span class="arrow">&gt;</span>&nbsp;|</li>
				linkWrap = |&nbsp;&raquo;&nbsp;|*||&nbsp;&raquo;&nbsp;|*||
				ATagTitle.field = title
				ATagTitle.noTrimWrap = | zur Seite: |
			}
			
			CUR = 1
			CUR < .NO
			CUR.doNotLinkIt = 1
		}
	}
}

### deactivate breadcrumb on homepage
[globalVar = TSFE:id=2]
#lib.breadcrumb >
[global]