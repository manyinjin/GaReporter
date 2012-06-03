(function() {
	function GQChannels() {
		this.hostname = 'www.gq.com.cn';
		this.channels = [ {
			version : {
				desc : 'GQ最新',
				num : 1
			},
			channels_arr : [ {
				name : '全站',
				code : 'all_site',
				filter : ''
			}, {
				name : '首页',
				code : 'homePage',
				filter : 'ga:customVarValue1==homePage;ga:hostname==www.gq.com.cn;ga:pagePath!~/[^index]',
				sub : []
			}, {
				name : '好玩',
				code : 'fun',
				filter : 'ga:pagePath=~/fun/*;ga:hostname==www.gq.com.cn',
				sub : [ {
					name : '雷达',
					code : 'fun_radar',
					filter : 'ga:pagePath=~/fun/radar/*;ga:hostname==www.gq.com.cn'
				}, {
					name : '研究',
					code : 'fun_research',
					filter : 'ga:pagePath=~/fun/research/*;ga:hostname==www.gq.com.cn'
				}, {
					name : '绯闻男人',
					code : 'fun_gossip',
					filter : 'ga:pagePath=~/fun/gossip/*;ga:hostname==www.gq.com.cn'
				}, {
					name : '数据',
					code : 'fun_data',
					filter : 'ga:pagePath=~/fun/data/*;ga:hostname==www.gq.com.cn'
				}, {
					name : '语录',
					code : 'fun_quote',
					filter : 'ga:pagePath=~/fun/quote/*;ga:hostname==www.gq.com.cn'
				}, {
					name : '玩意儿',
					code : 'fun_cool-stuff',
					filter : 'ga:pagePath=~/fun/cool-stuff/*;ga:hostname==www.gq.com.cn'
				} ]
			}, {
				name : '男装秀场',
				code : 'shows',
				filter : 'ga:hostname==shows.gq.com.cn',
				sub : []
			}, {
				name : '潮流',
				code : 'fashion',
				filter : 'ga:pagePath=~/fashion/*;ga:hostname==www.gq.com.cn',
				sub : [ {
					name : '搭配指南',
					code : 'fashion_dressing_tips',
					filter : 'ga:pagePath=~/fashion/dressing-tips/*;ga:hostname==www.gq.com.cn'
				}, {
					name : '流行趋势',
					code : 'fun_trends',
					filter : 'ga:pagePath=~/fashion/trends/*;ga:hostname==www.gq.com.cn'
				}, {
					name : '必备单品',
					code : 'fun_item',
					filter : 'ga:pagePath=~/fashion/item/*;ga:hostname==www.gq.com.cn'
				}, {
					name : '时尚圈',
					code : 'fun_news',
					filter : 'ga:pagePath=~/fashion/news/*;ga:hostname==www.gq.com.cn'
				} ]
			}, {
				name : '器物',
				code : 'gadget',
				filter : 'ga:pagePath=~/gadget/*;ga:hostname==www.gq.com.cn',
				sub : [ {
					name : '腕表',
					code : 'gadget_watch',
					filter : 'ga:pagePath=~/gadget/watch/*;ga:hostname==www.gq.com.cn'
				}, {
					name : '汽车',
					code : 'gadget_car',
					filter : 'ga:pagePath=~/gadget/car/*;ga:hostname==www.gq.com.cn'
				}, {
					name : '数码',
					code : 'gadget_digital',
					filter : 'ga:pagePath=~/gadget/digital/*;ga:hostname==www.gq.com.cn'
				} ]
			}, {
				name : '生活',
				code : 'living',
				filter : 'ga:pagePath=~/living/*;ga:hostname==www.gq.com.cn',
				sub : [ {
					name : '吃喝享乐',
					code : 'living_leisure',
					filter : 'ga:pagePath=~/living/leisure/*;ga:hostname==www.gq.com.cn'
				}, {
					name : '型男保养',
					code : 'living_grooming',
					filter : 'ga:pagePath=~/living/grooming/*;ga:hostname==www.gq.com.cn'
				}, {
					name : '运动健身',
					code : 'living_fitness',
					filter : 'ga:pagePath=~/living/fitness/*;ga:hostname==www.gq.com.cn'
				}, {
					name : '性情男人',
					code : 'living_dating_and_sex',
					filter : 'ga:pagePath=~/living/dating-and-sex/*;ga:hostname==www.gq.com.cn'
				} ]
			}, {
				name : '女人',
				code : 'girl',
				filter : 'ga:pagePath=~/girl/*;ga:hostname==www.gq.com.cn',
				sub : [ {
					name : '女人',
					code : 'girl_gq_woman',
					filter : 'ga:pagePath=~/girl/GQ-Woman/*;ga:hostname==www.gq.com.cn'
				}, {
					name : 'HotBabe',
					code : 'girl_hot_babe',
					filter : 'ga:pagePath=~/girl/hot-babe/*;ga:hostname==www.gq.com.cn'
				} ]
			}, {
				name : '杂志',
				code : 'magazine',
				filter : 'ga:pagePath=~/magazine/*;ga:hostname==www.gq.com.cn',
				sub : [ {
					name : '主编卷首',
					code : 'magazine_editors_letter',
					filter : 'ga:pagePath=~/magazine/editors_letter/*;ga:hostname==www.gq.com.cn'
				}, {
					name : '后台故事',
					code : 'magazine_backstage',
					filter : 'ga:pagePath=~/magazine/backstage/*;ga:hostname==www.gq.com.cn'
				} ]
			}, {
				name : '人物',
				code : 'celebrity',
				filter : 'ga:pagePath=~/celebrity/*;ga:hostname==www.gq.com.cn',
				sub : []
			}, {
				name : '话题',
				code : 'topic',
				filter : 'ga:pagePath=~/topic/*;ga:hostname==www.gq.com.cn',
				sub : []
			}, {
				name : '专栏',
				code : 'column',
				filter : 'ga:pagePath=~/column/*;ga:hostname==www.gq.com.cn',
				sub : []
			}, {
				name : '视频',
				code : 'video',
				filter : 'ga:pagePath=~/video/*;ga:hostname==www.gq.com.cn',
				sub : []
			}, {
				name : 'HowTo',
				code : 'how_to',
				filter : 'ga:pagePath=~/how-to/*;ga:hostname==www.gq.com.cn',
				sub : []
			}, {
				name : '专题',
				code : 'feature',
				filter : 'ga:pagePath=~/feature/*;ga:hostname==www.gq.com.cn',
				sub : []
			}, {
				name : '关键词',
				code : 'tag',
				filter : 'ga:pagePath=~/tag/*;ga:hostname==www.gq.com.cn',
				sub : []
			}, {
				name : '搜索',
				code : 'search',
				filter : 'ga:pagePath=~/search/*;ga:hostname==www.gq.com.cn',
				sub : []
			}, {
				name : '品牌库',
				code : 'brand',
				filter : 'ga:hostname==brand.gq.com.cn',
				sub : [ {
					name : '产品库',
					code : 'brand_all',
					filter : 'ga:pagePath=~/all/*;ga:hostname==brand.gq.com.cn'
				} ]
			}, {
				name : 'BBS',
				code : 'bbs',
				filter : 'ga:hostname==bbs.gq.com.cn',
				sub : []
			}, {
				name : '空间',
				code : 'space',
				filter : 'ga:hostname==space.gq.com.cn',
				sub : []
			}, {
				name : 'MSN合作',
				code : 'msn',
				filter : 'ga:hostname=~^msn',
				sub : [ {
					name : '产品库',
					code : 'msn_brand_all',
					filter : 'ga:hostname==msn.brand.gq.com.cn'
				}, {
					name : '空间',
					code : 'msn_space',
					filter : 'ga:hostname==msn.space.gq.com.cn'
				}, {
					name : 'BBS',
					code : 'msn_bbs',
					filter : 'ga:hostname==msn.bbs.gq.com.cn'
				}, {
					name : '秀场',
					code : 'msn_shows',
					filter : 'ga:hostname==msn.shows.gq.com.cn'
				}, {
					name : '其他',
					code : 'msn_others',
					filter : 'ga:hostname==msn.gq.com.cn'
				} ]
			} ]
		} ];
		this.initialValues = {
			organic_search : 'soso,baidu,jike,bing,google,sogou,yahoo',
			organic_internal : 'gq.com.cn',
			organic_company : 'vogue.com.cn,self.com.cn,adstyle.com.cn',
			organic_syndication : 'ifeng,taobao,msn,sina,youku,tudou,ku6,pptv,qiyi,joy,chinadaily,baike.baidu,news.baidu,163,sohu,firefox,qq.com;t.163,t.qq,qzone.qq,hao.qq,t.sohu',
			ma_smm : 'weibo,t.sina,tieba.baidu,douban,feixin.10086,diandian,t.163,tianya,qzone.qq,t.qq,t.sohu,t.cn,lofter,kaixin001,renren',
			mmb_nav : 'hao123,360.cn,123.*sogou,2345,9991,537,3567,v2233,dh818,123.duba.net,1616,1122,haokan123,114la,6789,tao123,chddh.cn,hao.qq,t3j4'
		};
	}

	window._channels = window._channels ? window._channels : {};
	window._channels['www.gq.com.cn'] = new GQChannels();
	console.log('init gq: ' + window._channels['www.gq.com.cn']);
})();