(function() {
	function MsnVogueChannels() {
		this.hostname = 'msn.vogue.com.cn';
		this.channels = [ {
			version : {
				desc : 'MSN Vogue最新',
				num : 1
			},
			channels_arr : [ {
				name : '全站',
				code : 'all_site',
				filter : ''
			}, {
				name : '时装',
				code : 'msn_invogue',
				filter : 'ga:pagePath=~/invogue/*;ga:hostname==msn.vogue.com.cn',
				sub : [ {
					name : '潮流',
					code : 'msn_invogue',
					filter : 'ga:pagePath=~/invogue/*;ga:hostname==msn.vogue.com.cn'
				}, {
					name : '秀场',
					code : 'msn_shows',
					filter : 'ga:hostname==msn.shows.vogue.com.cn'
				}, {
					name : '鞋包',
					code : 'msn_shoes_bags',
					filter : 'ga:pagePath=~/shoes-bags/*;ga:hostname==msn.vogue.com.cn'
				}, {
					name : '宝典',
					code : 'msn_brands',
					filter : 'ga:hostname==msn.brand.vogue.com.cn'
				}, {
					name : '专栏',
					code : 'msn_column',
					filter : 'ga:pagePath=~/column/*;ga:hostname==msn.vogue.com.cn'
				}, {
					name : '腕表',
					code : 'msn_jewelry_watch',
					filter : 'ga:pagePath=~/jewelry-watch/*;ga:hostname==msn.vogue.com.cn'
				} ]
			}, {
				name : '娱乐',
				code : 'msn_people',
				filter : 'ga:pagePath=~/people/*;ga:hostname==msn.vogue.com.cn',
				sub : [ {
					name : '明星',
					code : 'msn_people',
					filter : 'ga:pagePath=~/people/*;ga:hostname==msn.vogue.com.cn'
				}, {
					name : '星座',
					code : 'msn_horoscopes',
					filter : 'ga:pagePath=~/horoscopes/*;ga:hostname==msn.vogue.com.cn'
				} ]
			}, {
				name : '杂志',
				code : 'msn_magazine',
				filter : 'ga:pagePath=~/magazine/*;ga:hostname==msn.self.com.cn'
			} ]
		} ];
		this.initialValues = {
			organic_search : 'soso,baidu,jike,bing,google,sogou,yahoo',
			organic_internal : 'msn.vogue.com.cn',
			organic_company : 'vogue,self,adstyle,gq',
			organic_syndication : 'ifeng,taobao,msn,sina,youku,tudou,ku6,pptv,qiyi,joy,chinadaily,baike.baidu,news.baidu,163,sohu,firefox,qq.com;t.163,t.qq,qzone.qq,hao.qq,t.sohu',
			ma_smm : 'weibo,t.sina,tieba.baidu,douban,feixin.10086,diandian,t.163,tianya,qzone.qq,t.qq,t.sohu,t.cn,lofter,kaixin001,renren',
			mmb_nav : 'hao123,360.cn,123.*sogou,2345,9991,537,3567,v2233,dh818,123.duba.net,1616,1122,haokan123,114la,6789,tao123,chddh.cn,hao.qq,t3j4'
		};
	}

	window._channels = window._channels ? window._channels : {};
	window._channels['msn.vogue.com.cn'] = new MsnVogueChannels();
	console.log('init msn vogue: ' + window._channels['msn.vogue.com.cn']);
})();