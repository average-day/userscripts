// ==UserScript==
// @name		fYoutube
// @version		0.1
// @copyright	2016 average_day
// @description	Hides annoying recommendations from related videos list
// @grant		none
// @include		http://www.youtube.com/watch?v=*
// @include		https?://www.youtube.com/watch?v=*
// @updateURL	https://github.com/average-day/userscripts/fYoutube.js
// @downloadURL	https://github.com/average-day/userscripts/fYoutube.js
// ==/UserScript==

(function _Sp8F$PigQCJ() {
		$('li[class^=video-list-item] span[data-name=watch-vrec]').each(function(){
				this.parentNode.parentNode.parentNode.parentNode.remove();});
})();
		var yuZ8GHv6T$kC = document.getElementById("watch-more-related-button");
		yuZ8GHv6T$kC.addEventListener("click", _Sp8F$PigQCJ, true);
