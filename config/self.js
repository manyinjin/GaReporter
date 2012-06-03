(function() {
	function SelfChannels() {
				this.hostname = "www.self.com.cn",
				this.channels = [
						{
							version : {
								desc : "Self-2012-05-18",
								num : 1
							},
							channels_arr : [
									{
										name : "全站",
										code : "all_site",
										filter : ""
									},
									{
										name : "首页",
										code : "homePage",
										filter : "ga: customVarValue1 == homePage;ga: hostname == www.self.com.cn;ga: pagePath ! ~ / [ ^ index]",
										sub : []
									},
									{
										name : "潮流穿搭",
										code : "fashion",
										filter : "ga: hostname == fashion.self.com.cn",
										sub : [
												{
													name : "潮流穿搭",
													code : "fashion_selfstyle",
													filter : "ga: pagePath = ~ / selfstyle;ga:hostname==fashion.self.com.cn"
												},
												{
													name : "DOs_Donts",
													code : "fashion_dodont",
													filter : "ga:pagePath=~/dodont/*;ga:hostname==fashion.self.com.cn"
												},
												{
													name : "鞋包配饰",
													code : "fashion_accessories",
													filter : "ga:pagePath=~/accessories/*;ga:hostname==fashion.self.com.cn"
												},
												{
													name : "流行情报",
													code : "fashion_news",
													filter : "ga:pagePath=~/news/*;ga:hostname==fashion.self.com.cn"
												},
												{
													name : "全球街拍",
													code : "fashion_streetsnap",
													filter : "ga:pagePath=~/streetsnap/*;ga:hostname==fashion.self.com.cn"
												},
												{
													name : "明星衣橱",
													code : "fashion_starlook",
													filter : "ga:pagePath=~/starlook/*;ga:hostname==fashion.self.com.cn"
												},
												{
													name : "悦消费",
													code : "fashion_smartbuy",
													filter : "ga:pagePath=~/smartbuy/*;ga:hostname==fashion.self.com.cn"
												},
												{
													name : "时装学院",
													code : "fashion_accademy",
													filter : "ga:pagePath=~/accademy/*;ga:hostname==fashion.self.com.cn"
												} ]
									},
									{
										name : "乐活",
										code : "life",
										filter : "ga:hostname==life.self.com.cn",
										sub : [
												{
													name : "影视",
													code : "life_movie",
													filter : "ga:pagePath=~/movie/*;ga:hostname==life.self.com.cn"
												},
												{
													name : "美食",
													code : "life_cruisine",
													filter : "ga:pagePath=~/cruisine/*;ga:hostname==life.self.com.cn"
												},
												{
													name : "家居",
													code : "life_home",
													filter : "ga:pagePath=~/home/*;ga:hostname==life.self.com.cn"
												},
												{
													name : "旅行",
													code : "life_travel",
													filter : "ga:pagePath=~/travel/*;ga:hostname==life.self.com.cn"
												},
												{
													name : "音乐",
													code : "life_music",
													filter : "ga:pagePath=~/music/*;ga:hostname==life.self.com.cn"
												},
												{
													name : "影剧院",
													code : "life_v",
													filter : "ga:pagePath=~/v/*;ga:hostname==life.self.com.cn"
												},
												{
													name : "公益",
													code : "life_charity",
													filter : "ga:pagePath=~/charity/*;ga:hostname==life.self.com.cn"
												} ]
									},
									{
										name : "悦己美人计",
										code : "beauty",
										filter : "ga:hostname==beauty.self.com.cn",
										sub : [
												{
													name : "开箱报告",
													code : "beauty_openbox",
													filter : "ga:pagePath=~/openbox/*;ga:hostname==beauty.self.com.cn"
												},
												{
													name : "美丽变身",
													code : "beauty_selfgirl",
													filter : "ga:pagePath=~/selfgirl/*;ga:hostname==beauty.self.com.cn"
												},
												{
													name : "DOs_DONTs",
													code : "beauty_dodont",
													filter : "ga:pagePath=~/dodont/*;ga:hostname==beauty.self.com.cn"
												},
												{
													name : "护肤保养",
													code : "beauty_skincare",
													filter : "ga:pagePath=~/skincare/*;ga:hostname==beauty.self.com.cn"
												},
												{
													name : "美妆心机",
													code : "beauty_makeover",
													filter : "ga:pagePath=~/makeover/*;ga:hostname==beauty.self.com.cn"
												},
												{
													name : "悦己美发屋",
													code : "beauty_hairstyle",
													filter : "ga:pagePath=~/hairstyle/*;ga:hostname==beauty.self.com.cn"
												},
												{
													name : "香氛",
													code : "beauty_fragrance",
													filter : "ga:pagePath=~/fragrance/*;ga:hostname==beauty.self.com.cn"
												},
												{
													name : "明星梳妆台",
													code : "beauty_starlook",
													filter : "ga:pagePath=~/starlook/*;ga:hostname==beauty.self.com.cn"
												},
												{
													name : "美容问答",
													code : "beauty_365tips",
													filter : "ga:pagePath=~/365tips/*;ga:hostname==beauty.self.com.cn"
												},
												{
													name : "美容情报",
													code : "beauty_news",
													filter : "ga:pagePath=~/news/*;ga:hostname==beauty.self.com.cn"
												},
												{
													name : "悦己化妆间",
													code : "beauty_selfmirror",
													filter : "ga:pagePath=~/selfmirror/*;ga:hostname==beauty.self.com.cn"
												} ]
									},
									{
										name : "成长",
										code : "women",
										filter : "ga:hostname==women.self.com.cn",
										sub : [
												{
													name : "职场小宇宙",
													code : "women_office",
													filter : "ga:pagePath=~/office/*;ga:hostname==women.self.com.cn"
												},
												{
													name : "悦己书房",
													code : "women_bookshelf",
													filter : "ga:pagePath=~/bookshelf/*;ga:hostname==women.self.com.cn"
												},
												{
													name : "财务独立",
													code : "women_finace",
													filter : "ga:pagePath=~/finace/*;ga:hostname==women.self.com.cn"
												},
												{
													name : "心灵故事",
													code : "women_mememe",
													filter : "ga:pagePath=~/mememe/*;ga:hostname==women.self.com.cn"
												} ]
									},
									{
										name : "悦己健康",
										code : "health",
										filter : "ga:hostname==health.self.com.cn",
										sub : [
												{
													name : "健身主张",
													code : "health_healthtips",
													filter : "ga:pagePath=~/healthtips/*;ga:hostname==health.self.com.cn"
												},
												{
													name : "快乐瘦身",
													code : "health_keepfit",
													filter : "ga:pagePath=~/keepfit/*;ga:hostname==health.self.com.cn"
												},
												{
													name : "心理健康",
													code : "health_mind",
													filter : "ga:pagePath=~/mind/*;ga:hostname==health.self.com.cn"
												},
												{
													name : "养生锦囊",
													code : "health_nurturingdiet",
													filter : "ga:pagePath=~/nurturingdiet/*;ga:hostname==health.self.com.cn"
												},
												{
													name : "性福幸福",
													code : "health_sex",
													filter : "ga:pagePath=~/sex/*;ga:hostname==health.self.com.cn"
												},
												{
													name : "性趣调查",
													code : "health_sexsurvey",
													filter : "ga:pagePath=~/sexsurvey/*;ga:hostname==health.self.com.cn"
												} ,
												{
													name : "Do_Donts",
													code : "health_do_donts",
													filter : "ga:pagePath=~/dodont/*;ga:hostname==health.self.com.cn"
												}]
									},
									{
										name : "男女",
										code : "sex",
										filter : "ga:hostname==sex.self.com.cn",
										sub : [
												{
													name : "两性情感",
													code : "sex_relation",
													filter : "ga:pagePath=~/relation/*;ga:hostname==sex.self.com.cn"
												},
												{
													name : "悦己亚当",
													code : "sex_hisview",
													filter : "ga:pagePath=~/hisview/*;ga:hostname==sex.self.com.cn"
												},
												{
													name : "悦己新娘",
													code : "sex_bride",
													filter : "ga:pagePath=~/bride/*;ga:hostname==sex.self.com.cn"
												} ]
									},
									{
										name : "人物",
										code : "entertainment",
										filter : "ga:hostname==entertainment.self.com.cn",
										sub : [
												{
													name : "明星衣橱",
													code : "entertainment_f_starlook",
													filter : "ga:pagePath=~/starlook/*;ga:hostname==fashion.self.com.cn"
												},
												{
													name : "明星梳妆台",
													code : "entertainment_b_starlook",
													filter : "ga:pagePath=~/starlook/*;ga:hostname==beauty.self.com.cn"
												},
												{
													name : "星话题",
													code : "entertainment_stars",
													filter : "ga:pagePath=~/stars/*;ga:hostname==entertainment.self.com.cn"
												},
												{
													name : "悦己访谈",
													code : "entertainment_interview",
													filter : "ga:pagePath=~/interview/*;ga:hostname==entertainment.self.com.cn"
												} ]
									},
									{
										name : "杂志",
										code : "self_magazine",
										filter : "ga:pagePath=~/magazine/*;ga:hostname==www.self.com.cn",
										sub : []
									},
									{
										name : "个人中心",
										code : "space",
										filter : "ga:hostname==space.self.com.cn",
										sub : [
												{
													name : "注册",
													code : "space_register",
													filter : "ga:pagePath=~/register*;ga:hostname==space.self.com.cn"
												},
												{
													name : "登录",
													code : "space_login",
													filter : "ga:pagePath=~/login/*;ga:hostname==space.self.com.cn"
												},
												{
													name : "博客",
													code : "space_blog",
													filter : "ga:pagePath=~/blog*;ga:hostname==space.self.com.cn"
												} ]
									},
									{
										name : "365",
										code : "b365",
										filter : "ga:pagePath=~/beauty365/*;ga:hostname==beauty.self.com.cn",
										sub : [
												{
													name : "排行",
													code : "b365_top",
													filter : "ga:pagePath=~/beauty365/top*;ga:hostname==beauty.self.com.cn"
												},
												{
													name : "日历",
													code : "b365_cal",
													filter : "ga:pagePath=~/beauty365/cal*;ga:hostname==beauty.self.com.cn"
												},
												{
													name : "标签",
													code : "b365_tag",
													filter : "ga:pagePath=~/beauty365/tag*;ga:hostname==beauty.self.com.cn"
												},
												{
													name : "收藏",
													code : "b365_fa",
													filter : "ga:pagePath=~/beauty365/fa*;ga:hostname==beauty.self.com.cn"
												},
												{
													name : "关注",
													code : "b365_follow",
													filter : "ga:pagePath=~/beauty365/follow*;ga:hostname==beauty.self.com.cn"
												} ]
									},
									{
										name : "论坛",
										code : "bbs",
										filter : "ga:hostname==bbs.self.com.cn",
										sub : []
									},
									{
										name : "悦己美容365",
										code : "beauty_tips365",
										filter : "ga:pagePath=~/tips365/*;ga:hostname==beauty.self.com.cn",
										sub : []
									},
									{
										name : "人物库",
										code : "beauty_people",
										filter : "ga:hostname==people.self.com.cn",
										sub : []
									},
									{
										name : "品牌库",
										code : "beauty_brand",
										filter : "ga:hostname==brand.self.com.cn",
										sub : []
									},
									{
										name : "专题列表页",
										code : "beauty_feature",
										filter : "ga:pagePath=~/feature/*;ga:hostname==＊.self.com.cn",
										sub : []
									},
									{
										name : "视频",
										code : "self_video",
										filter : "ga:pagePath=~/video/*;ga:hostname==www.self.com.cn",
										sub : []
									},
									{
										name : "MSN合作",
										code : "msn",
										filter : "ga:hostname=~^msn",
										sub : [
												{
													name : "美容",
													code : "msn_beauty",
													filter : "ga:pagePath=~/beauty/*;ga:hostname==msn.self.com.cn"
												},
												{
													name : "身心",
													code : "msn_women",
													filter : "ga:pagePath=~/women/*;ga:hostname==msn.self.com.cn"
												},
												{
													name : "社区",
													code : "msn_bbs",
													filter : "ga:hostname==msn.bbs.self.com.cn"
												},
												{
													name : "杂志",
													code : "msn_magazine",
													filter : "ga:pagePath=~/magazine/*;ga:hostname==msn.self.com.cn"
												} ]
									} ]
						},
						{
							"version" : {
								"desc" : "Self-pre-2012-05-18",
								"num" : 2
							},
							"channels_arr" : [
									{
										name : "全站",
										code : "all_site",
										filter : ""
									},
									{
										name : "首页",
										code : "homePage",
										filter : "ga:customVarValue1==homePage;ga:hostname==www.self.com.cn;ga:pagePath!~/[^index]",
										sub : []
									},
									{
										name : "悦己风尚",
										code : "fashion",
										filter : "ga:hostname==fashion.self.com.cn",
										sub : [
												{
													name : "悦己恋物志",
													code : "fashion_gadgets",
													filter : "ga:pagePath=~/gadgets/*;ga:hostname==fashion.self.com.cn"
												},
												{
													name : "DOs_Donts",
													code : "fashion_fashion_dodont",
													filter : "ga:pagePath=~/fashion_dodont/*;ga:hostname==fashion.self.com.cn"
												},
												{
													name : "时装超推荐",
													code : "fashion_selfstyle",
													filter : "ga:pagePath=~/selfstyle/*;ga:hostname==fashion.self.com.cn"
												},
												{
													name : "全球街拍",
													code : "fashion_streetchic",
													filter : "ga:pagePath=~/streetchic/*;ga:hostname==fashion.self.com.cn"
												},
												{
													name : "明星衣橱",
													code : "fashion_partycloset",
													filter : "ga:pagePath=~/partycloset/*;ga:hostname==fashion.self.com.cn"
												},
												{
													name : "全球直击",
													code : "fashion_hotandtop",
													filter : "ga:pagePath=~/hotandtop/*;ga:hostname==fashion.self.com.cn"
												},
												{
													name : "流行情报",
													code : "fashion_fasionnews",
													filter : "ga:pagePath=~/fasionnews/*;ga:hostname==fashion.self.com.cn"
												} ]
									},
									{
										name : "悦己生活",
										code : "life",
										filter : "ga:hostname==life.self.com.cn",
										sub : [
												{
													name : "看电影",
													code : "life_movie",
													filter : "ga:pagePath=~/movie/*;ga:hostname==life.self.com.cn"
												},
												{
													name : "美食",
													code : "life_cruisine",
													filter : "ga:pagePath=~/cruisine/*;ga:hostname==life.self.com.cn"
												},
												{
													name : "家居",
													code : "life_home",
													filter : "ga:pagePath=~/home/*;ga:hostname==life.self.com.cn"
												},
												{
													name : "旅游",
													code : "life_travel",
													filter : "ga:pagePath=~/travel/*;ga:hostname==life.self.com.cn"
												},
												{
													name : "音乐厅",
													code : "life_music",
													filter : "ga:pagePath=~/music/*;ga:hostname==life.self.com.cn"
												},
												{
													name : "看书",
													code : "life_book",
													filter : "ga:pagePath=~/book/*;ga:hostname==life.self.com.cn"
												},
												{
													name : "文娱播报",
													code : "life_artnews",
													filter : "ga:pagePath=~/artnews/*;ga:hostname==life.self.com.cn"
												} ]
									},
									{
										name : "悦己美人计",
										code : "beauty",
										filter : "ga:hostname==beauty.self.com.cn",
										sub : [
												{
													name : "开箱报告",
													code : "beauty_openbox",
													filter : "ga:pagePath=~/openbox/*;ga:hostname==beauty.self.com.cn"
												},
												{
													name : "悦己超推荐",
													code : "beauty_hottips",
													filter : "ga:pagePath=~/hottips/*;ga:hostname==beauty.self.com.cn"
												},
												{
													name : "DOs_DONTs",
													code : "beauty_bdodnts",
													filter : "ga:pagePath=~/bdodnts/*;ga:hostname==beauty.self.com.cn"
												},
												{
													name : "护肤宝典",
													code : "beauty_skincare",
													filter : "ga:pagePath=~/skincare/*;ga:hostname==beauty.self.com.cn"
												},
												{
													name : "美妆心机",
													code : "beauty_makeup",
													filter : "ga:pagePath=~/makeup/*;ga:hostname==beauty.self.com.cn"
												},
												{
													name : "悦己美发屋",
													code : "beauty_hairstyle",
													filter : "ga:pagePath=~/hairstyle/*;ga:hostname==beauty.self.com.cn"
												},
												{
													name : "QA",
													code : "beauty_qa",
													filter : "ga:pagePath=~/qa/*;ga:hostname==beauty.self.com.cn"
												},
												{
													name : "美容情报",
													code : "beauty_beautynews",
													filter : "ga:pagePath=~/beautynews/*;ga:hostname==beauty.self.com.cn"
												} ]
									},
									{
										name : "悦己女人",
										code : "women",
										filter : "ga:hostname==women.self.com.cn",
										sub : [
												{
													name : "金星火星",
													code : "women_love",
													filter : "ga:pagePath=~/love/*;ga:hostname==women.self.com.cn"
												},
												{
													name : "快乐职场",
													code : "women_career",
													filter : "ga:pagePath=~/career/*;ga:hostname==women.self.com.cn"
												},
												{
													name : "情感",
													code : "women_passion",
													filter : "ga:pagePath=~/passion/*;ga:hostname==women.self.com.cn"
												},
												{
													name : "小金库",
													code : "women_money",
													filter : "ga:pagePath=~/money/*;ga:hostname==women.self.com.cn"
												},
												{
													name : "QA",
													code : "women_egoqa",
													filter : "ga:pagePath=~/egoqa/*;ga:hostname==women.self.com.cn"
												} ]
									},
									{
										name : "悦己健康",
										code : "health",
										filter : "ga:hostname==health.self.com.cn",
										sub : [
												{
													name : "健康123",
													code : "health_health",
													filter : "ga:pagePath=~/health/*;ga:hostname==health.self.com.cn"
												},
												{
													name : "心情后花园",
													code : "health_innervoice",
													filter : "ga:pagePath=~/innervoice/*;ga:hostname==health.self.com.cn"
												},
												{
													name : "悦己笑笑",
													code : "health_joke",
													filter : "ga:pagePath=~/joke/*;ga:hostname==health.self.com.cn"
												},
												{
													name : "快乐瘦身",
													code : "health_fitness",
													filter : "ga:pagePath=~/fitness/*;ga:hostname==health.self.com.cn"
												},
												{
													name : "悦己妈妈",
													code : "health_mothering",
													filter : "ga:pagePath=~/mothering/*;ga:hostname==health.self.com.cn"
												},
												{
													name : "悦测试",
													code : "health_test",
													filter : "ga:pagePath=~/test/*;ga:hostname==health.self.com.cn"
												} ]
									},
									{
										name : "杂志",
										code : "magazine",
										filter : "ga:hostname==magazine.self.com.cn",
										sub : []
									},
									{
										name : "专题",
										code : "special",
										filter : "ga:hostname==special.self.com.cn",
										sub : []
									},
									{
										name : "品牌汇",
										code : "brands",
										filter : "ga:hostname==brands.self.com.cn",
										sub : []
									},
									{
										name : "公益",
										code : "welfare",
										filter : "ga:hostname==welfare.self.com.cn",
										sub : []
									},
									{
										name : "团购",
										code : "shop",
										filter : "ga:hostname==shop.self.com.cn",
										sub : []
									},
									{
										name : "送大礼",
										code : "gift",
										filter : "ga:hostname==gift.self.com.cn",
										sub : []
									},
									{
										name : "博客",
										code : "blog",
										filter : "ga:hostname==blog.self.com.cn",
										sub : []
									},
									{
										name : "论坛",
										code : "bbs",
										filter : "ga:hostname==bbs.self.com.cn",
										sub : []
									},
									{
										name : "悦己说",
										code : "t",
										filter : "ga:hostname==t.self.com.cn",
										sub : []
									},
									{
										name : "MSN合作",
										code : "msn",
										filter : "ga:hostname=~^msn",
										sub : [
												{
													name : "美容",
													code : "msn_beauty",
													filter : "ga:pagePath=~/beauty/*;ga:hostname==msn.self.com.cn"
												},
												{
													name : "身心",
													code : "msn_women",
													filter : "ga:pagePath=~/women/*;ga:hostname==msn.self.com.cn"
												},
												{
													name : "社区",
													code : "msn_bbs",
													filter : "ga:hostname==msn.bbs.self.com.cn"
												},
												{
													name : "杂志",
													code : "msn_magazine",
													filter : "ga:pagePath=~/magazine/*;ga:hostname==msn.self.com.cn"
												} ]
									} ]
						} ],
				this.initialValues = {
					"organic_search" : "soso,baidu,jike,bing,google,sogou,yahoo",
					"organic_internal" : "self.com.cn",
					"organic_company" : "vogue.com.cn,gq.com.cn,adstyle.com.cn",
					"organic_syndication" : "ifeng,taobao,msn,sina,youku,tudou,ku6,pptv,qiyi,joy,chinadaily,baike.baidu,news.baidu,163,sohu,firefox,qq.com;t.163,t.qq,qzone.qq,hao.qq,t.sohu",
					"ma_smm" : "weibo,t.sina,tieba.baidu,douban,feixin.10086,diandian,t.163,tianya,qzone.qq,t.qq,t.sohu,t.cn,lofter,kaixin001,renren",
					"mmb_nav" : "hao123,360.cn,123.*sogou,2345,9991,537,3567,v2233,dh818,123.duba.net,1616,1122,haokan123,114la,6789,tao123,chddh.cn,hao.qq,t3j4"
				};
	}
	window._channels = window._channels ? window._channels : {};
	window._channels['www.self.com.cn'] = new SelfChannels();
});