lib.nav = COA
lib.nav.20 = HMENU
lib.nav.20 {
	wrap = <div id="nav" class="hlist nav" role="navigation">|</div>
	entryLevel = 1
	#excludeUidList = {$tabNavExcludeList}

	1 = TMENU
	1 {
		noBlur = 1
		wrap = <ul>|</ul>
		expAll = 0
			
		NO = 1
		NO {
			ATagTitle.field = abstract // description // subtitle
			wrapItemAndSub = <li class="first">|</li>|*|<li>|</li>|*|<li class="last">|</li>
			#linkWrap = <span>|</span>
			ATagBeforeWrap = 1
			stdWrap.htmlSpecialChars = 1
		}

		CUR = 1
		CUR < .NO
		CUR {
			wrapItemAndSub = <li class="first current">|</li>|*|<li class="current">|</li>|*|<li class="last current">|</li>
		}

		ACT = 1
		ACT < .NO
		ACT {
			wrapItemAndSub = <li class="first active">|</li>|*|<li class="active">|</li>|*|<li class="last active">|</li>
		}
	}
}

# deactivate the navigation on a special page
[PIDinRootline = 99999]
lib.nav >
[global]