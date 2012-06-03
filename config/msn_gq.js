(function() {
	function MsnGQChannels() {
		this.hostname = 'msn.gq.com.cn';
		this.channels = [ {
			version : {
				desc : 'MSN GQ最新',
				num : 1
			},
			channels_arr : [ {
				name : '全站',
				code : 'all_site',
				filter : ''
			}, {
				name : '首页',
				code : 'homePage',
				filter : 'ga:hostname==msn.gq.com.cn;ga:pageTitle==男人频道_MSN中文网',
				sub : []
			}, {
				name : '好玩',
				code : 'fun',
				filter : 'ga:pagePath=~/fun/*;ga:hostname==msn.gq.com.cn',
				sub : [ {
					name : '雷达',
					code : 'fun_radar',
					filter : 'ga:pagePath=~/fun/radar/*;ga:hostname==msn.gq.com.cn'
				}, {
					name : '研究',
					code : 'fun_research',
					filter : 'ga:pagePath=~/fun/research/*;ga:hostname==msn.gq.com.cn'
				}, {
					name : '绯闻男人',
					code : 'fun_gossip',
					filter : 'ga:pagePath=~/fun/gossip/*;ga:hostname==msn.gq.com.cn'
				}, {
					name : '数据',
					code : 'fun_data',
					filter : 'ga:pagePath=~/fun/data/*;ga:hostname==msn.gq.com.cn'
				}, {
					name : '语录',
					code : 'fun_quote',
					filter : 'ga:pagePath=~/fun/quote/*;ga:hostname==msn.gq.com.cn'
				}, {
					name : '玩意儿',
					code : 'fun_cool-stuff',
					filter : 'ga:pagePath=~/fun/cool-stuff/*;ga:hostname==msn.gq.com.cn'
				} ]
			}, {
				name : '男装秀场',
				code : 'shows',
				filter : 'ga:hostname==msn.shows.gq.com.cn',
				sub : []
			}, {
				name : '潮流',
				code : 'fashion',
				filter : 'ga:pagePath=~/fashion/*;ga:hostname==msn.gq.com.cn',
				sub : [ {
					name : '搭配指南',
					code : 'fashion_dressing_tips',
					filter : 'ga:pagePath=~/fashion/dressing-tips/*;ga:hostname==msn.gq.com.cn'
				}, {
					name : '流行趋势',
					code : 'fun_trends',
					filter : 'ga:pagePath=~/fashion/trends/*;ga:hostname==msn.gq.com.cn'
				}, {
					name : '必备单品',
					code : 'fun_item',
					filter : 'ga:pagePath=~/fashion/item/*;ga:hostname==msn.gq.com.cn'
				}, {
					name : '时尚圈',
					code : 'fun_news',
					filter : 'ga:pagePath=~/fashion/news/*;ga:hostname==msn.gq.com.cn'
				} ]
			}, {
				name : '器物',
				code : 'gadget',
				filter : 'ga:pagePath=~/gadget/*;ga:hostname==msn.gq.com.cn',
				sub : [ {
					name : '腕表',
					code : 'gadget_watch',
					filter : 'ga:pagePath=~/gadget/watch/*;ga:hostname==msn.gq.com.cn'
				}, {
					name : '汽车',
					code : 'gadget_car',
					filter : 'ga:pagePath=~/gadget/car/*;ga:hostname==msn.gq.com.cn'
				}, {
					name : '数码',
					code : 'gadget_digital',
					filter : 'ga:pagePath=~/gadget/digital/*;ga:hostname==msn.gq.com.cn'
				} ]
			}, {
				name : '生活',
				code : 'living',
				filter : 'ga:pagePath=~/living/*;ga:hostname==msn.gq.com.cn',
				sub : [ {
					name : '吃喝享乐',
					code : 'living_leisure',
					filter : 'ga:pagePath=~/living/leisure/*;ga:hostname==msn.gq.com.cn'
				}, {
					name : '型男保养',
					code : 'living_grooming',
					filter : 'ga:pagePath=~/living/grooming/*;ga:hostname==msn.gq.com.cn'
				}, {
					name : '运动健身',
					code : 'living_fitness',
					filter : 'ga:pagePath=~/living/fitness/*;ga:hostname==msn.gq.com.cn'
				}, {
					name : '性情男人',
					code : 'living_dating_and_sex',
					filter : 'ga:pagePath=~/living/dating-and-sex/*;ga:hostname==msn.gq.com.cn'
				} ]
			}, {
				name : '女人',
				code : 'girl',
				filter : 'ga:pagePath=~/girl/*;ga:hostname==msn.gq.com.cn',
				sub : [ {
					name : '女人',
					code : 'girl_gq_woman',
					filter : 'ga:pagePath=~/girl/GQ-Woman/*;ga:hostname==msn.gq.com.cn'
				}, {
					name : 'HotBabe',
					code : 'girl_hot_babe',
					filter : 'ga:pagePath=~/girl/hot-babe/*;ga:hostname==msn.gq.com.cn'
				} ]
			}, {
				name : '杂志',
				code : 'magazine',
				filter : 'ga:pagePath=~/magazine/*;ga:hostname==msn.gq.com.cn',
				sub : [ {
					name : '主编卷首',
					code : 'magazine_editors_letter',
					filter : 'ga:pagePath=~/magazine/editors_letter/*;ga:hostname==msn.gq.com.cn'
				}, {
					name : '后台故事',
					code : 'magazine_backstage',
					filter : 'ga:pagePath=~/magazine/backstage/*;ga:hostname==msn.gq.com.cn'
				} ]
			}, {
				name : '人物',
				code : 'celebrity',
				filter : 'ga:pagePath=~/celebrity/*;ga:hostname==msn.gq.com.cn',
				sub : []
			}, {
				name : '话题',
				code : 'topic',
				filter : 'ga:pagePath=~/topic/*;ga:hostname==msn.gq.com.cn',
				sub : []
			}, {
				name : '专栏',
				code : 'column',
				filter : 'ga:pagePath=~/column/*;ga:hostname==msn.gq.com.cn',
				sub : []
			}, {
				name : '视频',
				code : 'video',
				filter : 'ga:pagePath=~/video/*;ga:hostname==msn.gq.com.cn',
				sub : []
			}, {
				name : 'HowTo',
				code : 'how_to',
				filter : 'ga:pagePath=~/how-to/*;ga:hostname==msn.gq.com.cn',
				sub : []
			}, {
				name : '专题',
				code : 'feature',
				filter : 'ga:pagePath=~/feature/*;ga:hostname==msn.gq.com.cn',
				sub : []
			}, {
				name : '关键词',
				code : 'tag',
				filter : 'ga:pagePath=~/tag/*;ga:hostname==msn.gq.com.cn',
				sub : []
			}, {
				name : '搜索',
				code : 'search',
				filter : 'ga:pagePath=~/search/*;ga:hostname==msn.gq.com.cn',
				sub : []
			}, {
				name : '品牌库',
				code : 'brand',
				filter : 'ga:hostname==msn.brand.gq.com.cn',
				sub : [ {
					name : '产品库',
					code : 'brand_all',
					filter : 'ga:pagePath=~/all/*;ga:hostname==msn.brand.gq.com.cn'
				} ]
			}, {
				name : 'BBS',
				code : 'bbs',
				filter : 'ga:hostname==msn.bbs.gq.com.cn',
				sub : []
			}, {
				name : '空间',
				code : 'space',
				filter : 'ga:hostname==msn.space.gq.com.cn',
				sub : []
			} ]
		} ];
		this.initialValues = {
			organic_search : 'soso,baidu,jike,bing,google,sogou,yahoo',
			organic_internal : 'msn.gq.com.cn',
			organic_company : 'vogue,self,adstyle,gq',
			organic_syndication : 'ifeng,taobao,msn,sina,youku,tudou,ku6,pptv,qiyi,joy,chinadaily,baike.baidu,news.baidu,163,sohu,firefoxchina,qq;t.163,t.qq,qzone.qq,hao.qq,t.sohu',
			ma_smm : 'weibo,t.sina,tieba.baidu,douban,feixin.10086,diandian,t.163,tianya,qzone.qq,t.qq,t.sohu,t.cn,lofter,kaixin001,renren',
			mmb_nav : 'hao123,360.cn,123.*sogou,2345,9991,537,3567,v2233,dh818,123.duba.net,1616,1122,haokan123,114la,6789,tao123,chddh.cn,hao.qq,t3j4'
		};
	}

	window._channels = window._channels ? window._channels : {};
	window._channels['msn.gq.com.cn'] = new MsnGQChannels();
	console.log('init gq: ' + window._channels['msn.gq.com.cn']);
})();