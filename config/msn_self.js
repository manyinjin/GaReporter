(function() {
	function MsnSelfChannels() {
		this.hostname = 'msn.self.com.cn';
		this.channels = [ {
			version : {
				desc : 'MSN Self最新',
				num : 1
			},
			channels_arr : [ {
				name : '全站',
				code : 'all_site',
				filter : ''
			}, {
				name : '首页',
				code : 'homePage',
				filter : 'ga:hostname==msn.self.com.cn;ga:pageTitle==女人频道_MSN中文网',
				sub : []
			}, {
				name : '美容',
				code : 'msn_beauty',
				filter : 'ga:pagePath=~/beauty/*;ga:hostname==msn.self.com.cn',
				sub : [ {
					name : '开箱',
					code : 'msn_beauty_openbox',
					filter : 'ga:pagePath=~/beauty/openbox/*;ga:hostname==msn.self.com.cn'
				}, {
					name : '护肤',
					code : 'msn_beauty_skincare',
					filter : 'ga:pagePath=~/beauty/skincare/*;ga:hostname==msn.self.com.cn'
				}, {
					name : '彩妆',
					code : 'msn_beauty_makeup',
					filter : 'ga:pagePath=~/beauty/makeup/*;ga:hostname==msn.self.com.cn'
				}, {
					name : '美发',
					code : 'msn_beauty_hair',
					filter : 'ga:pagePath=~/beauty/hair/*;ga:hostname==msn.self.com.cn'
				}, {
					name : '香氛',
					code : 'msn_beauty_perfume',
					filter : 'ga:pagePath=~/beauty/perfume/*;ga:hostname==msn.self.com.cn'
				}, {
					name : '化妆品',
					code : 'msn_beauty_cosmetics',
					filter : 'ga:pagePath=~/beauty/cosmetics/*;ga:hostname==msn.self.com.cn'
				} ]
			}, {
				name : '身心',
				code : 'msn_women',
				filter : 'ga:pagePath=~/women/*;ga:hostname==msn.self.com.cn',
				sub : [ {
					name : '情爱',
					code : 'msn_love',
					filter : 'ga:pagePath=~/love/*;ga:hostname==msn.self.com.cn'
				}, {
					name : '两性',
					code : 'msn_love_passion',
					filter : 'ga:pagePath=~/love/passion/*;ga:hostname==msn.self.com.cn'
				}, {
					name : '人物',
					code : 'msn_entertainment',
					filter : 'ga:pagePath=~/entertainment/*;ga:hostname==msn.self.com.cn'
				}, {
					name : '成长',
					code : 'msn_women',
					filter : 'ga:pagePath=~/women/*;ga:hostname==msn.self.com.cn'
				}, {
					name : '职场',
					code : 'msn_women_office',
					filter : 'ga:pagePath=~/women/office/*;ga:hostname==msn.self.com.cn'
				}, {
					name : '理财',
					code : 'msn_women_finace',
					filter : 'ga:pagePath=~/women/finace/*;ga:hostname==msn.self.com.cn'
				}, {
					name : '健康',
					code : 'msn_health',
					filter : 'ga:pagePath=~/health/*;ga:hostname==msn.self.com.cn'
				}, {
					name : '乐活',
					code : 'msn_lifestyle',
					filter : 'ga:pagePath=~/lifestyle/*;ga:hostname==msn.self.com.cn'
				} ]
			}, {
				name : '论坛',
				code : 'msn_bbs',
				filter : 'ga:hostname==msn.bbs.self.com.cn'
			}, {
				name : '博客',
				code : 'msn_blog',
				filter : 'ga:hostname==msn.blog.self.com.cn'
			}, {
				name : '杂志',
				code : 'msn_magazine',
				filter : 'ga:pagePath=~/magazine/*;ga:hostname==msn.self.com.cn'
			} ]
		} ];
		this.initialValues = {
			organic_search : 'soso,baidu,jike,bing,google,sogou,yahoo',
			organic_internal : 'msn.self.com.cn',
			organic_company : 'vogue,self,adstyle,gq',
			organic_syndication : 'ifeng,taobao,msn,sina,youku,tudou,ku6,pptv,qiyi,joy,chinadaily,baike.baidu,news.baidu,163,sohu,firefox,qq.com;t.163,t.qq,qzone.qq,hao.qq,t.sohu',
			ma_smm : 'weibo,t.sina,tieba.baidu,douban,feixin.10086,diandian,t.163,tianya,qzone.qq,t.qq,t.sohu,t.cn,lofter,kaixin001,renren',
			mmb_nav : 'hao123,360.cn,123.*sogou,2345,9991,537,3567,v2233,dh818,123.duba.net,1616,1122,haokan123,114la,6789,tao123,chddh.cn,hao.qq,t3j4'
		};
	}

	window._channels = window._channels ? window._channels : {};
	window._channels['msn.self.com.cn'] = new MsnSelfChannels();
	console.log('init self: ' + window._channels['msn.self.com.cn']);
})();