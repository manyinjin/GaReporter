(function() {
	function AdStyleChannels() {
		this.hostname = 'www.adstyle.com.cn';
		this.channels = [ {
			version : {
				desc : 'AdStyle最新',
				num : 1
			},
			channels_arr : [ {
				name : '全站',
				code : 'all_site',
				filter : ''
			}, {
				name : '首页',
				code : 'homePage',
				filter : 'ga:hostname==www.adstyle.com.cn;ga:pagePath!~/[^index]',
				sub : []
			}, {
				name : '话题',
				code : 'stories',
				filter : 'ga:pagePath=~/stories/*;ga:hostname==www.adstyle.com.cn',
				sub : []
			}, {
				name : '美丽的家',
				code : 'style',
				filter : 'ga:pagePath=~/style/*;ga:hostname==www.adstyle.com.cn',
				sub : []
			}, {
				name : '趋势',
				code : 'choice',
				filter : 'ga:pagePath=~/choice/*;ga:hostname==www.adstyle.com.cn',
				sub : []
			}, {
				name : '指南',
				code : 'solutions',
				filter : 'ga:pagePath=~/solutions/*;ga:hostname==www.adstyle.com.cn',
				sub : []
			}, {
				name : '发现',
				code : 'discovery',
				filter : 'ga:pagePath=~/discovery/*;ga:hostname==www.adstyle.com.cn',
				sub : []
			}, {
				name : '设计-艺术',
				code : 'design_art',
				filter : 'ga:pagePath=~/design_art/*;ga:hostname==www.adstyle.com.cn',
				sub : []
			}, {
				name : "What's Ad",
				code : 'magazine',
				filter : 'ga:pagePath=~/magazine/*;ga:hostname==www.adstyle.com.cn',
				sub : []
			}, {
				name : '活动',
				code : 'events',
				filter : 'ga:pagePath=~/events/*;ga:hostname==www.adstyle.com.cn',
				sub : []
			}, {
				name : '视频',
				code : 'video',
				filter : 'ga:pagePath=~/video/*;ga:hostname==www.adstyle.com.cn',
				sub : []
			} ]
		} ];
		this.initialValues = {
			organic_search : 'soso,baidu,jike,bing,google,sogou,yahoo',
			organic_internal : 'adstyle.com.cn',
			organic_company : 'vogue.com.cn,self.com.cn,gq.com.cn',
			organic_syndication : 'ifeng,taobao,msn,sina,youku,tudou,ku6,pptv,qiyi,joy,chinadaily,baike.baidu,news.baidu,163,sohu,firefox,qq.com;t.163,t.qq,qzone.qq,hao.qq,t.sohu',
			ma_smm : 'weibo,t.sina,tieba.baidu,douban,feixin.10086,diandian,t.163,tianya,qzone.qq,t.qq,t.sohu,t.cn,lofter,kaixin001,renren',
			mmb_nav : 'hao123,360.cn,123.*sogou,2345,9991,537,3567,v2233,dh818,123.duba.net,1616,1122,haokan123,114la,6789,tao123,chddh.cn,hao.qq,t3j4'
		};
	}

	window._channels = window._channels ? window._channels : {};
	window._channels['www.adstyle.com.cn'] = new AdStyleChannels();
	console.log('init adstyle: ' + window._channels['www.adstyle.com.cn']);
})();