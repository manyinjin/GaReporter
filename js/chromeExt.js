(function() {
	var ChromeExt = function() {
	};

	ChromeExt.Account = function() {
		this.loginUrl = "https://www.google.com/accounts/AuthSubRequest?";
		this.exchangeUrl = "https://www.google.com/accounts/AuthSubSessionToken?";
		this.revokeUrl = "https://www.google.com/accounts/AuthSubRevokeToken?";
		this.token = "";
		this.TOKEN_KEY = "GOOGLE_ANALYTICS_ACCOUNT_TOKEN";
		this.scope = "https://www.google.com/analytics/feeds/";
	};

	/**
	 * check if the current extension has a valid token for using
	 * 
	 * @returns {Boolean} true if there is a valid token
	 */
	ChromeExt.Account.prototype.checkLogin = function() {
		// firstly, let's check if the token is retrieved and in localStorage
		if (localStorage.getItem(this.TOKEN_KEY)) {
			this.token = localStorage.getItem(this.TOKEN_KEY);
			console.log("old token 2 : " + this.token);
			return true;
		}
		if (location.search) {
			ret = location.search.match(/token=([\S]*)/);
			if (ret) {
				this.token = unescape(ret[1]);
				localStorage.setItem(this.TOKEN_KEY, this.token);
				this.exchangeToken();
			}
		}
		return this.token != "";
	};

	/**
	 * use google subAuth to login with google account
	 */
	ChromeExt.Account.prototype.login = function() {
		location.href = this.loginUrl + "next=" + location.href + "&scope=" + encodeURIComponent(this.scope)
				+ "&session=1&secure=0&hd=default";
	};

	/**
	 * exchange the one time token to a session token
	 * 
	 * @param analyticsService
	 */
	ChromeExt.Account.prototype.exchangeToken = function(analyticsService) {
		this.operateToken(this.exchangeUrl, this.token);
	};
	/**
	 * revoke the current token
	 */
	ChromeExt.Account.prototype.revokeToken = function() {
		this.operateToken(this.revokeUrl, this.token);
		this.token = "";
	};

	ChromeExt.Account.prototype.operateToken = function(url, token) {
		var t = this;
		$.ajax({
			url : url,
			type : 'GET',
			beforeSend : function(xhr) {
				xhr.setRequestHeader("Authorization", "AuthSub token=\"" + token + "\"");
			},
			async : false,
			success : function(data) {
				if (window.console) {
					console.log(data);
					ret = data.match(/=([\S]*)/);
					if (ret) {
						t.token = unescape(ret[1]);
						localStorage.setItem(t.TOKEN_KEY, t.token);
						console.log("new token 1: " + t.token);
					}
				}
			}
		});
	};

	/**
	 * Utilities class to access Google Analytics
	 */
	ChromeExt.Analytics = function() {
		this.analyticsScope = "https://www.google.com/analytics/feeds";
		this.acctFeedUrl = "https://www.google.com/analytics/feeds/datasources/ga/accounts";
	};

	/**
	 * Get all accessed accounts for the current user
	 * 
	 * @param the
	 *            options of ajax call
	 * @see JQuery $.ajax
	 */
	ChromeExt.Analytics.prototype.getAccountFeed = function(options) {
		this.getFeed($.extend({
			url : "https://www.google.com/analytics/feeds/accounts/default?max-results=50"
		}, options));
	};
	
	ChromeExt.Analytics.prototype.getMetrics = function(options) {
		this.getFeed($.extend({
			url : "https://www.google.com/analytics/feeds/data"
		}, options));
	};
	
	/**
	 * get the data feed from url with the request data
	 * 
	 * @param the
	 *            options of ajax call
	 * @see JQuery $.ajax
	 */
	ChromeExt.Analytics.prototype.getFeed = function(options) {
		var defaults = {
			type : 'GET',
			dataType: 'xml',
			beforeSend : function(xhr) {
				xhr.setRequestHeader("Authorization", "AuthSub token=\"" + googleChromeExtAuth.token + "\"");
			},
			success : function(data) {
				if (window.console) {
					console.log(data);
				}
			},
			error : function() {
				if (window.console) {
					console.log(data);
				}
			}
		};
		$.ajax($.extend({}, defaults, options));
	};

	window.googleChromeExtAuth = new ChromeExt.Account();
	window.googleAnalyticsExt = new ChromeExt.Analytics();

})();
