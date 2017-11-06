// BrowserAction からのイベント監視
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.type === "MEMORIZE") {
    	var k_v = {
    		html: window.document.documentElement.innerHTML,
    		url: window.location.href,
    		time: (new Date()).toString()
    	}
    	chrome.storage.local.set(k_v, function(){ alert('Memorized!') });
    } else if (request.type === "REVIVE") {
		chrome.storage.local.get(
		  'html',
		  function(items) {
		    window.document.documentElement.innerHTML = items.html
		  }
		);
    }
});
