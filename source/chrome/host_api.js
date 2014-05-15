var hostAPI = {
	'getURL':			function(path) {
		return chrome.extension.getURL(path);
	},

	'sendRequest':		function(message, callback) {
		callback = callback || function() {};

		chrome.extension.sendRequest(message, callback);
	}
}