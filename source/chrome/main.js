chrome.extension.onRequest.addListener(
	function(message, sender, sendResponse) {
		if (message.action && sender.tab) {
			switch (message.action) {
				default:
					break;
			}
		}
	}
);