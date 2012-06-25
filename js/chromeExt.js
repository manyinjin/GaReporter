(function() {
    var ChromeExt = function() {
    };

    var googleAuth = new OAuth2('google', {
        client_id : '346352551068.apps.googleusercontent.com',
        client_secret : 'uo6q61Ltl2jWdFxfckwoJjfH',
        api_scope : 'https://www.googleapis.com/auth/analytics.readonly'
    });

    ChromeExt.Account = function() {
    };

    /**
     * check if the current extension has a valid token for using
     * 
     * @returns {Boolean} true if there is a valid token
     */
    ChromeExt.Account.prototype.checkLogin = function() {
        return googleAuth.getAccessToken() && !googleAuth.isAccessTokenExpired();
    };

    /**
     * use google subAuth to login with google account
     */
    ChromeExt.Account.prototype.grantAccess = function() {
        googleAuth.authorize(function() {
        });
    };

    /**
     * Utilities class to access Google Analytics
     */
    ChromeExt.Analytics = function() {
    };

    /**
     * Get all accessed accounts for the current user
     * 
     * @param the
     *            options of ajax call
     * @see JQuery $.ajax
     */
    ChromeExt.Analytics.prototype.getAccountFeed = function(options) {
        var fullUrl = "https://www.googleapis.com/analytics/v2.4/management/accounts/~all/webproperties/~all/profiles?max-results=50&access_token="
                + googleAuth.getAccessToken();
        this.getFeed($.extend({
            url : fullUrl
        }, options));
    };

    ChromeExt.Analytics.prototype.getMetrics = function(options) {
        this.getFeed($.extend({
            url : "https://www.googleapis.com/analytics/v2.4/data?access_token=" + googleAuth.getAccessToken()
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
            dataType : 'xml',
            success : function(data) {
                if (window.console) {
                    console.log(data);
                }
            },
            error : function(data) {
                if (data && data.status == 401) {
                    googleAuth.openAuthorizationCodePopup(function() {
                    });
                }
            }
        };
        $.ajax($.extend({}, defaults, options));
    };

    window.googleChromeExtAuth = new ChromeExt.Account();
    window.googleAnalyticsExt = new ChromeExt.Analytics();

})();
