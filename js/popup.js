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
