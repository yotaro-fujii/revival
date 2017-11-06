function memorize_message(){
	// BrowserAction から ContentScript へ MessagePassing
	chrome.tabs.query({active: true, currentWindow: true}, tabs => {
	  chrome.tabs.sendMessage(tabs[0].id, { type: 'MEMORIZE' });
	});
}

function revive_message(){
	// BrowserAction から ContentScript へ MessagePassing
	chrome.tabs.query({active: true, currentWindow: true}, tabs => {
	  chrome.tabs.sendMessage(tabs[0].id, { type: 'REVIVE' });
	});
}

var memorize_btn = document.getElementById('memorize');
var revive_btn = document.getElementById('revive');

memorize_btn.addEventListener('click', memorize_message, false);
revive_btn.addEventListener('click', revive_message, false);

// storage から
chrome.storage.local.get(
  'time',
  function(items) {
  	if (items.time) {
    	window.document.getElementById('memorized_at').innerHTML = items.time
    }
  }
);
chrome.storage.local.get(
  'url',
  function(items) {
  	if (items.url) {
    	window.document.getElementById('memorized_url').innerHTML = items.url
    }
  }
);
