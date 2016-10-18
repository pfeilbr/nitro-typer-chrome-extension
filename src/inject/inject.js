

chrome.extension.sendMessage({}, function(response) {
	// NOTE: this delay is critical.  if injected too early / before track is
	// displayed, it won't work
	var delayInMilliseconds = 2000;
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		var s = document.createElement('script');
		// NOTE: 'src/inject/script.js' needs to be added to web_accessible_resources in manifest.json
		s.src = chrome.extension.getURL('src/inject/script.js');
		s.onload = function() {
		    this.remove();
		};
		(document.head || document.documentElement).appendChild(s);
		// ----------------------------------------------------------

	}
}, delayInMilliseconds);
});
