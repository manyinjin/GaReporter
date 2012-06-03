(function() {
	function VogueChannels() {
		this.hostname = 'www.vogue.com.cn';
		this.channels = [ {
			version : {
				desc : '2011-11-07',
				num : 2
			},
			channels_arr : [ {
				name : '全站',
				code : 'all_site',
				pagePath : '',
				type : '',
				filter : ''
			}, {
				name : '首页',
				code : 'homePage',
				pagePath : '/',
				type : 'homePage',
				filter : 'ga:hostname==www.vogue.com.cn;ga:pagePath!~/[^index]',
				sub : []
			}, {
				name : '潮流服饰',
				code : 'invogue',
				pagePath : '/invogue/',
				type : '',
				filter : 'ga:pagePath=~/invogue/*;ga:hostname==www.vogue.com.cn',
				sub : [ {
					name : '风格PK',
					code : 'invogue_style_pk',
					filter : 'ga:pagePath=~/invogue/style-pk/*;ga:hostname==www.vogue.com.cn'
				}, {
					name : '欲望清单',
					code : 'invogue_dream_ticket',
					filter : 'ga:pagePath=~/invogue/dream-ticket/*;ga:hostname==www.vogue.com.cn'
				}, {
					name : '时尚街拍',
					code : 'invogue_street_chic',
					filter : 'ga:pagePath=~/invogue/street-chic/*;ga:hostname==www.vogue.com.cn'
				}, {
					name : '高街百搭',
					code : 'invogue_high_street',
					filter : 'ga:pagePath=~/invogue/high-street/*;ga:hostname==www.vogue.com.cn'
				}, {
					name : '风格示范',
					code : 'invogue_vogue_style',
					filter : 'ga:pagePath=~/invogue/vogue-style/*;ga:hostname==www.vogue.com.cn'
				}, {
					name : '衣Q进阶',
					code : 'invogue_dress_q',
					filter : 'ga:pagePath=~/invogue/dress-q/*;ga:hostname==www.vogue.com.cn'
				}, {
					name : '新潮配饰',
					code : 'invogue_accessory',
					filter : 'ga:pagePath=~/invogue/accessory/*;ga:hostname==www.vogue.com.cn'
				}, {
					name : '海外专栏',
					code : 'invogue_column',
					filter : 'ga:pagePath=~/column/*;ga:hostname==www.vogue.com.cn'
				}, {
					name : '自在穿大牌',
					code : 'invogue_brand_journey',
					filter : 'ga:pagePath=~/invogue/brand-journey/*;ga:hostname==www.vogue.com.cn'
				}, {
					name : '时尚圈',
					code : 'invogue_industry',
					filter : 'ga:pagePath=~/invogue/industry/*;ga:hostname==www.vogue.com.cn'
				}, {
					name : '品牌新闻',
					code : 'invogue_brand_news',
					filter : 'ga:pagePath=~/invogue/brand-news/*;ga:hostname==www.vogue.com.cn'
				}, {
					name : '时装大片',
					code : 'invogue_image_mania',
					filter : 'ga:pagePath=~/invogue/image-mania/*;ga:hostname==www.vogue.com.cn'
				}, {
					name : '办公室',
					code : 'invogue_vogue_office',
					filter : 'ga:pagePath=~/invogue/vogue-office/*;ga:hostname==www.vogue.com.cn'
				}, {
					name : '专题',
					code : 'invogue_feature',
					filter : 'ga:pagePath=~/invogue/feature/*;ga:hostname==www.vogue.com.cn'
				} ]
			}, {
				name : '时装发布',
				code : 'fashion',
				pagePath : '/fashion/',
				type : 'uri',
				filter : 'ga:pagePath=~/fashion/*;ga:hostname==www.vogue.com.cn',
				sub : [ {
					name : '趋势报告',
					code : 'fashion_trend_report',
					filter : 'ga:pagePath=~/fashion/trend-report/*;ga:hostname==www.vogue.com.cn'
				}, {
					name : '秀场花絮',
					code : 'fashion_backstage',
					filter : 'ga:pagePath=~/fashion/backstage/*;ga:hostname==www.vogue.com.cn'
				}, {
					name : '人气超模',
					code : 'fashion_hot_model',
					filter : 'ga:pagePath=~/fashion/hot-model/*;ga:hostname==www.vogue.com.cn'
				}, {
					name : '设计师',
					code : 'fashion_top10',
					filter : 'ga:pagePath=~/fashion/top10/*;ga:hostname==www.vogue.com.cn'
				}, {
					name : 'VOGUE看秀',
					code : 'fashion_editors_view',
					filter : 'ga:pagePath=~/fashion/editors-view/*;ga:hostname==www.vogue.com.cn'
				}, {
					name : '新锐中国',
					code : 'fashion_china',
					filter : 'ga:pagePath=~/fashion/china/*;ga:hostname==www.vogue.com.cn'
				}, {
					name : '专题',
					code : 'fashion_feature',
					filter : 'ga:pagePath=~/fashion/feature/*;ga:hostname==www.vogue.com.cn'
				} ]
			}, {
				name : '名流派对',
				code : 'people',
				pagePath : '/people/',
				type : 'uri',
				filter : 'ga:pagePath=~/people/*;ga:hostname==www.vogue.com.cn',
				sub : [ {
					name : '星秀场',
					code : 'people_celeb_style',
					filter : 'ga:pagePath=~/people/celeb-style/*;ga:hostname==www.vogue.com.cn'
				}, {
					name : '最佳/最差',
					code : 'people_best_worst',
					filter : 'ga:pagePath=~/people/best-worst/*;ga:hostname==www.vogue.com.cn'
				}, {
					name : '明星街拍',
					code : 'people_star_spot',
					filter : 'ga:pagePath=~/people/star-spot/*;ga:hostname==www.vogue.com.cn'
				}, {
					name : '派对与盛事',
					code : 'people_party',
					filter : 'ga:pagePath=~/people/party/*;ga:hostname==www.vogue.com.cn'
				}, {
					name : '圈内名流',
					code : 'people_icons',
					filter : 'ga:pagePath=~/people/icons/*;ga:hostname==www.vogue.com.cn'
				}, {
					name : '红毯风华',
					code : 'people_red_carpet',
					filter : 'ga:pagePath=~/people/red-carpet/*;ga:hostname==www.vogue.com.cn'
				}, {
					name : '星话题',
					code : 'people_talk_of_town',
					filter : 'ga:pagePath=~/people/talk-of-town/*;ga:hostname==www.vogue.com.cn'
				}, {
					name : '超模档案',
					code : 'people_models',
					filter : 'ga:pagePath=~/people/models/*;ga:hostname==www.vogue.com.cn'
				}, {
					name : '专题',
					code : 'people_feature',
					filter : 'ga:pagePath=~/people/feature/*;ga:hostname==www.vogue.com.cn'
				} ]
			}, {
				name : '珠宝腕表',
				code : 'jewelry_watch',
				pagePath : '/jewelry-watch/',
				type : 'uri',
				filter : 'ga:pagePath=~/jewelry-watch/*;ga:hostname==www.vogue.com.cn',
				sub : [ {
					name : '经典搭配',
					code : 'jewelry_classic_new',
					filter : 'ga:pagePath=~/jewelry-watch/classic-new/*;ga:hostname==www.vogue.com.cn'
				}, {
					name : '欲望珠宝',
					code : 'jewelry_season_jewelry',
					filter : 'ga:pagePath=~/jewelry-watch/season-jewelry/*;ga:hostname==www.vogue.com.cn'
				}, {
					name : '摩登腕表',
					code : 'jewelry_season_watch',
					filter : 'ga:pagePath=~/jewelry-watch/season-watch/*;ga:hostname==www.vogue.com.cn'
				}, {
					name : '专家品鉴',
					code : 'jewelry_expert',
					filter : 'ga:pagePath=~/jewelry-watch/expert/*;ga:hostname==www.vogue.com.cn'
				}, {
					name : '珠宝设计师',
					code : 'jewelry_designer',
					filter : 'ga:pagePath=~/jewelry-watch/designer/*;ga:hostname==www.vogue.com.cn'
				}, {
					name : '珍品盛视',
					code : 'jewelry_grand',
					filter : 'ga:pagePath=~/jewelry-watch/grand/*;ga:hostname==www.vogue.com.cn'
				}, {
					name : '特色工艺',
					code : 'jewelry_craft',
					filter : 'ga:pagePath=~/jewelry-watch/craft/*;ga:hostname==www.vogue.com.cn'
				}, {
					name : '礼品推荐',
					code : 'jewelry_gift',
					filter : 'ga:pagePath=~/jewelry-watch/gift/*;ga:hostname==www.vogue.com.cn'
				}, {
					name : '奇品珍品',
					code : 'jewelry_collectables',
					filter : 'ga:pagePath=~/jewelry-watch/collectables/*;ga:hostname==www.vogue.com.cn'
				}, {
					name : '时髦快报',
					code : 'jewelry_fashion_jewelry',
					filter : 'ga:pagePath=~/jewelry-watch/fashion-jewelry/*;ga:hostname==www.vogue.com.cn'
				}, {
					name : '名人秀',
					code : 'jewelry_celeb_jewelry',
					filter : 'ga:pagePath=~/jewelry-watch/celeb-jewelry/*;ga:hostname==www.vogue.com.cn'
				}, {
					name : '专题',
					code : 'jewelry_feature',
					filter : 'ga:pagePath=~/jewelry-watch/feature/*;ga:hostname==www.vogue.com.cn'
				} ]
			}, {
				name : '鞋包',
				code : 'shoes_bags',
				pagePath : '/shoes-bags/',
				type : 'uri',
				filter : 'ga:pagePath=~/shoes-bags/*;ga:hostname==www.vogue.com.cn',
				sub : [ {
					name : '新宽',
					code : 'shoes_bags_new_hot',
					filter : 'ga:pagePath=~/shoes-bags/new-hot/*;ga:hostname==www.vogue.com.cn'
				}, {
					name : '点睛配',
					code : 'shoes_bags_center',
					filter : 'ga:pagePath=~/shoes-bags/center/*;ga:hostname==www.vogue.com.cn'
				}, {
					name : '缪丝示范',
					code : 'shoes_bags_muse',
					filter : 'ga:pagePath=~/shoes-bags/muse/*;ga:hostname==www.vogue.com.cn'
				}, {
					name : '浮世绘',
					code : 'shoes_bags_shopping_fun',
					filter : 'ga:pagePath=~/shoes-bags/shopping-fun/*;ga:hostname==www.vogue.com.cn'
				}, {
					name : '经典工艺',
					code : 'shoes_bags_craft',
					filter : 'ga:pagePath=~/shoes-bags/craft/*;ga:hostname==www.vogue.com.cn'
				}, {
					name : '专题',
					code : 'shoes_bags_feature',
					filter : 'ga:pagePath=~/shoes-bags/feature/*;ga:hostname==www.vogue.com.cn'
				} ]
			}, {
				name : '妆容',
				code : 'beauty',
				pagePath : '/beauty/',
				type : 'uri',
				filter : 'ga:pagePath=~/beauty/*;ga:hostname==www.vogue.com.cn',
				sub : [ {
					name : '彩妆新潮',
					code : 'beauty_makeup',
					filter : 'ga:pagePath=~/beauty/makeup/*;ga:hostname==www.vogue.com.cn'
				}, {
					name : '本月新玩意',
					code : 'beauty_new_in_store',
					filter : 'ga:pagePath=~/beauty/new-in-store/*;ga:hostname==www.vogue.com.cn'
				}, {
					name : '街拍妆容',
					code : 'beauty_street_styling',
					filter : 'ga:pagePath=~/beauty/street-styling/*;ga:hostname==www.vogue.com.cn'
				}, {
					name : '巧手美妆',
					code : 'beauty_howto',
					filter : 'ga:pagePath=~/beauty/howto/*;ga:hostname==www.vogue.com.cn'
				}, {
					name : '明星美颜',
					code : 'beauty_celeb_makeup',
					filter : 'ga:pagePath=~/beauty/celeb-beauty/*;ga:hostname==www.vogue.com.cn'
				}, {
					name : '护肤美体',
					code : 'beauty_skincare',
					filter : 'ga:pagePath=~/beauty/skincare/*;ga:hostname==www.vogue.com.cn'
				}, {
					name : '健康瘦身',
					code : 'beauty_fitness',
					filter : 'ga:pagePath=~/beauty/fitness/*;ga:hostname==www.vogue.com.cn'
				}, {
					name : '美发',
					code : 'beauty_hair',
					filter : 'ga:pagePath=~/beauty/hair/*;ga:hostname==www.vogue.com.cn'
				}, {
					name : '香氛',
					code : 'beauty_fragrance',
					filter : 'ga:pagePath=~/beauty/fragrance/*;ga:hostname==www.vogue.com.cn'
				}, {
					name : '编辑最爱',
					code : 'beauty_editor_pick',
					filter : 'ga:pagePath=~/beauty/editor-pick/*;ga:hostname==www.vogue.com.cn'
				}, {
					name : '品牌新闻',
					code : 'beauty_brand_news',
					filter : 'ga:pagePath=~/beauty/brand-news/*;ga:hostname==www.vogue.com.cn'
				}, {
					name : '专题',
					code : 'beauty_feature',
					filter : 'ga:pagePath=~/beauty/feature/*;ga:hostname==www.vogue.com.cn'
				} ]
			}, {
				name : 'V宝典',
				code : 'voguepedia',
				pagePath : '/voguepedia/',
				type : 'uri',
				filter : 'ga:pagePath=~/voguepedia/*;ga:hostname==www.vogue.com.cn',
				sub : [ {
					name : '时装大师',
					code : 'voguepedia_master',
					filter : 'ga:pagePath=~/voguepedia/master/*;ga:hostname==www.vogue.com.cn'
				}, {
					name : '名人与美女',
					code : 'voguepedia_vogue_icon',
					filter : 'ga:pagePath=~/voguepedia/vogue-icon/*;ga:hostname==www.vogue.com.cn'
				}, {
					name : '时尚人才库',
					code : 'voguepedia_talents',
					filter : 'ga:pagePath=~/voguepedia/talents/*;ga:hostname==www.vogue.com.cn'
				}, {
					name : '时尚史',
					code : 'voguepedia_fashion_history',
					filter : 'ga:pagePath=~/voguepedia/fashion-history/*;ga:hostname==www.vogue.com.cn'
				}, {
					name : '专题',
					code : 'voguepedia_feature',
					filter : 'ga:pagePath=~/voguepedia/feature/*;ga:hostname==www.vogue.com.cn'
				} ]
			}, {
				name : 'V趣味',
				code : 'living',
				pagePath : '/living/',
				type : 'uri',
				filter : 'ga:pagePath=~/living/*;ga:hostname==www.vogue.com.cn',
				sub : [ {
					name : '家居',
					code : 'living_home',
					filter : 'ga:pagePath=~/living/home/*;ga:hostname==www.vogue.com.cn'
				}, {
					name : '旅行',
					code : 'living_travel',
					filter : 'ga:pagePath=~/living/travel/*;ga:hostname==www.vogue.com.cn'
				}, {
					name : '星座',
					code : 'living_astro',
					filter : 'ga:pagePath=~/living/astro/*;ga:hostname==www.vogue.com.cn'
				}, {
					name : '美食',
					code : 'living_dining',
					filter : 'ga:pagePath=~/living/dining/*;ga:hostname==www.vogue.com.cn'
				}, {
					name : '艺术',
					code : 'living_art',
					filter : 'ga:pagePath=~/living/art/*;ga:hostname==www.vogue.com.cn'
				}, {
					name : '快讯',
					code : 'living_info',
					filter : 'ga:pagePath=~/living/info/*;ga:hostname==www.vogue.com.cn'
				}, {
					name : '专题',
					code : 'living_feature',
					filter : 'ga:pagePath=~/living/feature/*;ga:hostname==www.vogue.com.cn'
				} ]
			}, {
				name : 'V杂志',
				code : 'magazine',
				pagePath : '/magazine/',
				type : 'uri',
				filter : 'ga:pagePath=~/magazine/*;ga:hostname==www.vogue.com.cn',
				sub : [ {
					name : '新刊导读',
					code : 'magazine_current_issue',
					filter : 'ga:pagePath=~/magazine/current-issue/*;ga:hostname==www.vogue.com.cn'
				}, {
					name : '幕后花絮',
					code : 'magazine_behind_scene',
					filter : 'ga:pagePath=~/magazine/behind-scene/*;ga:hostname==www.vogue.com.cn'
				}, {
					name : '经典专辑',
					code : 'magazine_mag_features',
					filter : 'ga:pagePath=~/magazine/mag-features/*;ga:hostname==www.vogue.com.cn'
				}, {
					name : '圈中人',
					code : 'magazine_contributors',
					filter : 'ga:pagePath=~/magazine/contributors/*;ga:hostname==www.vogue.com.cn'
				}, {
					name : '微博',
					code : 'magazine_weibo',
					filter : 'ga:pagePath=~/magazine/weibo/*;ga:hostname==www.vogue.com.cn'
				}, {
					name : '盛事',
					code : 'magazine_events',
					filter : 'ga:pagePath=~/magazine/events/*;ga:hostname==www.vogue.com.cn'
				}, {
					name : 'QA',
					code : 'magazine_editor_qa',
					filter : 'ga:pagePath=~/magazine/editor-qa/*;ga:hostname==www.vogue.com.cn'
				} ]
			}, {
				name : '微博',
				code : 'weibo',
				pagePath : '/weibo/',
				type : 'uri',
				filter : 'ga:pagePath=~/weibo/*;ga:hostname==www.vogue.com.cn',
				sub : [ {
					name : '专题',
					code : 'weibo_feature',
					filter : 'ga:pagePath=~/weibo/feature/*;ga:hostname==www.vogue.com.cn'
				} ]
			}, {
				name : 'V视频',
				code : 'video',
				pagePath : '/video/',
				type : 'uri',
				filter : 'ga:pagePath=~/video/*;ga:hostname==www.vogue.com.cn',
				sub : []
			}, {
				name : 'PhotoVOGUE',
				code : 'photo_vogue',
				pagePath : 'photo.vogue.com.cn',
				type : 'host',
				filter : 'ga:pagePath=~/*;ga:hostname==photo.vogue.com.cn',
				sub : [ {
					name : '主题',
					code : 'photo_vogue_topic',
					filter : 'ga:pagePath=~/topic/*;ga:hostname==photo.vogue.com.cn'
				}, {
					name : '摄影师',
					code : 'photo_photographer',
					filter : 'ga:pagePath=~/photographer/*;ga:hostname==photo.vogue.com.cn'
				}, {
					name : '照片集',
					code : 'photo_vogue_gallery',
					filter : 'ga:pagePath=~/gallery-*;ga:hostname==photo.vogue.com.cn'
				}, {
					name : '单独照片',
					code : 'photo_vogue_view',
					filter : 'ga:pagePath=~/view/*;ga:hostname==photo.vogue.com.cn'
				}, {
					name : '单独主题',
					code : 'photo_vogue_topic_1',
					filter : 'ga:pagePath=~/topic-*;ga:hostname==photo.vogue.com.cn'
				}, {
					name : '上传页面',
					code : 'photo_vogue_upload',
					filter : 'ga:pagePath=~/upload/*;ga:hostname==photo.vogue.com.cn'
				} ]
			}, {
				name : 'TAG查询',
				code : 'tag',
				pagePath : '/tag/',
				type : 'uri',
				filter : 'ga:pagePath=~/tag/*;ga:hostname==www.vogue.com.cn',
				sub : []
			}, {
				name : '全文搜索',
				code : 'search',
				pagePath : '/search/',
				type : 'uri',
				filter : 'ga:pagePath=~/search/*;ga:hostname==www.vogue.com.cn',
				sub : []
			}, {
				name : '专题页',
				code : 'feature',
				pagePath : '/feature/',
				type : 'uri',
				filter : 'ga:pagePath=~/feature/*;ga:hostname==www.vogue.com.cn',
				sub : []
			}, {
				name : '销售专题',
				code : 'promo',
				pagePath : '/promo/',
				type : 'uri',
				filter : 'ga:pagePath=~/promo/*;ga:hostname==www.vogue.com.cn',
				sub : []
			}, {
				name : '市场专题',
				code : 'event',
				pagePath : '/event/',
				type : 'uri',
				filter : 'ga:pagePath=~/event/*;ga:hostname==www.vogue.com.cn',
				sub : []
			}, {
				name : '人物库',
				code : 'whoswho',
				pagePath : '/whoswho/',
				type : 'uri',
				filter : 'ga:pagePath=~/whoswho/*;ga:hostname==www.vogue.com.cn',
				sub : []
			}, {
				name : '品牌库',
				code : 'brand',
				pagePath : 'brand.vogue.com.cn',
				type : 'host',
				filter : 'ga:hostname==brand.vogue.com.cn',
				sub : [ {
					name : '服饰品牌',
					code : 'all_fashion',
					filter : 'ga:pagePath=~/all/fashion/*;ga:hostname==brand.vogue.com.cn'
				}, {
					name : '美容品牌',
					code : 'all_cosmetics',
					filter : 'ga:pagePath=~/all/cosmetics/*;ga:hostname==brand.vogue.com.cn'
				} ]
			}, {
				name : '秀场',
				code : 'shows',
				pagePath : 'shows.vogue.com.cn',
				type : 'host',
				filter : 'ga:hostname==shows.vogue.com.cn',
				sub : []
			}, {
				name : '论坛',
				code : 'bbs',
				pagePath : 'bbs.vogue.com.cn',
				type : 'host',
				filter : 'ga:hostname==bbs.vogue.com.cn',
				sub : []
			}, {
				name : '空间',
				code : 'space',
				pagePath : 'space.vogue.com.cn',
				type : 'host',
				filter : 'ga:hostname==space.vogue.com.cn',
				sub : [ {
					name : '注册',
					code : 'space_register',
					filter : 'ga:pagePath=@register;ga:hostname==bbs.vogue.com.cn'
				}, {
					name : '登录',
					code : 'space_login',
					filter : 'ga:pagePath=@logging;ga:hostname==bbs.vogue.com.cn'
				} ]
			}, {
				name : 'MSN合作',
				code : 'msn',
				filter : 'ga:hostname=~^msn',
				sub : [ {
					name : '时装',
					code : 'msn_invogue',
					filter : 'ga:pagePath=~/invogue/*;ga:hostname==msn.vogue.com.cn'
				}, {
					name : '娱乐',
					code : 'msn_people',
					filter : 'ga:pagePath=~/people/*;ga:hostname==msn.vogue.com.cn'
				} ]
			} ]
		}, {
			version : {
				desc : '2011-4-27',
				num : 1
			},
			channels_arr : [ {
				name : '全站',
				code : 'all_site',
				filter : ''
			}, {
				name : '首页',
				code : 'homePage',
				filter : 'ga:customVarValue1==homePage;ga:hostname==www.vogue.com.cn;ga:pagePath!~/[^index]',
				sub : []
			}, {
				name : '时尚定制',
				code : 'invogue',
				filter : 'ga:hostname==invogue.vogue.com.cn',
				sub : [ {
					name : '风格示范',
					code : 'invogue_voguestylist',
					filter : 'ga:pagePath=~/voguestylist/*;ga:hostname==invogue.vogue.com.cn'
				}, {
					name : '编辑推荐',
					code : 'invogue_editorchoices',
					filter : 'ga:pagePath=~/editorchoices/*;ga:hostname==invogue.vogue.com.cn'
				}, {
					name : '圈中热事',
					code : 'invogue_fashiontopics',
					filter : 'ga:pagePath=~/fashiontopics/*;ga:hostname==invogue.vogue.com.cn'
				}, {
					name : '美丽有道',
					code : 'invogue_vogueinbeauty',
					filter : 'ga:pagePath=~/vogueinbeauty*;ga:hostname==invogue.vogue.com.cn'
				}, {
					name : '本期杂志',
					code : 'invogue_magazine',
					filter : 'ga:pagePath=~/magazine/*;ga:hostname==invogue.vogue.com.cn'
				}, {
					name : '最佳秀场',
					code : 'invogue_bestshows',
					filter : 'ga:pagePath=~/bestshows/*;ga:hostname==invogue.vogue.com.cn'
				} ]
			}, {
				name : '珠宝腕表',
				code : 'jewel',
				filter : 'ga:hostname==jewel.vogue.com.cn',
				sub : [ {
					name : '珍品盛视',
					code : 'jewel_top_jewelry',
					filter : 'ga:pagePath=~/top_jewelry/*;ga:hostname==jewel.vogue.com.cn'
				}, {
					name : '璀璨新品',
					code : 'jewel_new_jewelry',
					filter : 'ga:pagePath=~/new_jewelry/*;ga:hostname==jewel.vogue.com.cn'
				}, {
					name : '新店掠影',
					code : 'jewel_new_boutique',
					filter : 'ga:pagePath=~/new_boutique/*;ga:hostname==jewel.vogue.com.cn'
				}, {
					name : '品牌盛举',
					code : 'jewel_brand_event',
					filter : 'ga:pagePath=~/brand_event/*;ga:hostname==jewel.vogue.com.cn'
				}, {
					name : '行业动态',
					code : 'jewel_jewelry_trade',
					filter : 'ga:pagePath=~/jewelry_trade/*;ga:hostname==jewel.vogue.com.cn'
				}, {
					name : '名人珠宝',
					code : 'jewel_celebrity_jewelry',
					filter : 'ga:pagePath=~/celebrity_jewelry/*;ga:hostname==jewel.vogue.com.cn'
				}, {
					name : '珠宝文化',
					code : 'jewel_jewelry_history',
					filter : 'ga:pagePath=~/jewelry_history/*;ga:hostname==jewel.vogue.com.cn'
				}, {
					name : '名表共赏',
					code : 'jewel_famous_watch',
					filter : 'ga:pagePath=~/famous_watch/*;ga:hostname==jewel.vogue.com.cn'
				}, {
					name : '新表上市',
					code : 'jewel_new_watch',
					filter : 'ga:pagePath=~/new_watch/*;ga:hostname==jewel.vogue.com.cn'
				}, {
					name : '腕表新店',
					code : 'jewel_watch_boutique',
					filter : 'ga:pagePath=~/watch_boutique/*;ga:hostname==jewel.vogue.com.cn'
				}, {
					name : '名人腕表',
					code : 'jewel_celebrity_watch',
					filter : 'ga:pagePath=~/celebrity_watch/*;ga:hostname==jewel.vogue.com.cn'
				}, {
					name : '腕表时尚',
					code : 'jewel_fashion_watch',
					filter : 'ga:pagePath=~/fashion_watch/*;ga:hostname==jewel.vogue.com.cn'
				}, {
					name : '表业动态',
					code : 'jewel_watch_trade',
					filter : 'ga:pagePath=~/watch_trade/*;ga:hostname==jewel.vogue.com.cn'
				}, {
					name : '钟表文化',
					code : 'jewel_watch_culture',
					filter : 'ga:pagePath=~/watch_culture/*;ga:hostname==jewel.vogue.com.cn'
				} ]
			}, {
				name : '时装发布',
				code : 'shows',
				filter : 'ga:hostname==shows.vogue.com.cn',
				sub : [ {
					name : '设计师',
					code : 'shows_designer',
					filter : 'ga:pagePath=~/designer/*;ga:hostname==shows.vogue.com.cn'
				}, {
					name : '趋势报告',
					code : 'shows_trends',
					filter : 'ga:pagePath=~/trends/*;ga:hostname==shows.vogue.com.cn'
				}, {
					name : '时装笔记',
					code : 'shows_style_notes',
					filter : 'ga:pagePath=~/style_notes/*;ga:hostname==shows.vogue.com.cn'
				}, {
					name : '秀场风云',
					code : 'shows_celebrity',
					filter : 'ga:pagePath=~/celebrity/*;ga:hostname==shows.vogue.com.cn'
				}, {
					name : '品味升级课',
					code : 'shows_look_update',
					filter : 'ga:pagePath=~/look_update/*;ga:hostname==shows.vogue.com.cn'
				}, {
					name : '时装文化',
					code : 'shows_fashion_story',
					filter : 'ga:pagePath=~/fashion_story/*;ga:hostname==shows.vogue.com.cn'
				} ]
			}, {
				name : '潮流趋势',
				code : 'trends',
				filter : 'ga:hostname==trends.vogue.com.cn',
				sub : [ {
					name : '新衣绝配',
					code : 'trends_mix_match',
					filter : 'ga:pagePath=~/mix_match/*;ga:hostname==trends.vogue.com.cn'
				}, {
					name : '单品橱窗',
					code : 'trends_hot_buy',
					filter : 'ga:pagePath=~/hot_buy/*;ga:hostname==trends.vogue.com.cn'
				}, {
					name : '潮流情报',
					code : 'trends_fashion_trends',
					filter : 'ga:pagePath=~/fashion_trends/*;ga:hostname==trends.vogue.com.cn'
				}, {
					name : '精明衣橱',
					code : 'trends_wardrobe',
					filter : 'ga:pagePath=~/wardrobe/*;ga:hostname==trends.vogue.com.cn'
				}, {
					name : '时髦配饰',
					code : 'trends_accessory',
					filter : 'ga:pagePath=~/accessory/*;ga:hostname==trends.vogue.com.cn'
				}, {
					name : '明星衣品',
					code : 'trends_fashion_star',
					filter : 'ga:pagePath=~/fashion_star/*;ga:hostname==trends.vogue.com.cn'
				}, {
					name : '街头风尚',
					code : 'trends_street_chic',
					filter : 'ga:pagePath=~/street_chic/*;ga:hostname==trends.vogue.com.cn'
				}, {
					name : '内衣小物',
					code : 'trends_belongings',
					filter : 'ga:pagePath=~/belongings/*;ga:hostname==trends.vogue.com.cn'
				}, {
					name : '时尚专题',
					code : 'trends_fashion_feature',
					filter : 'ga:pagePath=~/fashion_feature/*;ga:hostname==trends.vogue.com.cn'
				}, {
					name : '品牌新闻',
					code : 'trends_fashion_news',
					filter : 'ga:pagePath=~/fashion_news/*;ga:hostname==trends.vogue.com.cn'
				}, {
					name : '时装大片',
					code : 'trends_fashion_gallary',
					filter : 'ga:pagePath=~/fashion_gallary/*;ga:hostname==trends.vogue.com.cn'
				} ]
			}, {
				name : '美容保养',
				code : 'beauty',
				filter : 'ga:hostname==beauty.vogue.com.cn',
				sub : [ {
					name : 'T台新妆',
					code : 'trends_firstlook',
					filter : 'ga:pagePath=~/firstlook/*;ga:hostname==beauty.vogue.com.cn'
				}, {
					name : '明星妆容',
					code : 'trends_beauty_star',
					filter : 'ga:pagePath=~/beauty_star/*;ga:hostname==beauty.vogue.com.cn'
				}, {
					name : '护肤保养',
					code : 'trends_skincare',
					filter : 'ga:pagePath=~/skincare/*;ga:hostname==beauty.vogue.com.cn'
				}, {
					name : '风尚彩妆',
					code : 'trends_makeup',
					filter : 'ga:pagePath=~/makeup/*;ga:hostname==beauty.vogue.com.cn'
				}, {
					name : '经典香水',
					code : 'trends_perfume',
					filter : 'ga:pagePath=~/perfume/*;ga:hostname==beauty.vogue.com.cn'
				}, {
					name : '美发丝语',
					code : 'trends_hair',
					filter : 'ga:pagePath=~/hair/*;ga:hostname==beauty.vogue.com.cn'
				}, {
					name : '美妆图库',
					code : 'trends_beauty_gallary',
					filter : 'ga:pagePath=~/beauty_gallary/*;ga:hostname==beauty.vogue.com.cn'
				}, {
					name : '美体瘦身',
					code : 'trends_body_health',
					filter : 'ga:pagePath=~/body_health/*;ga:hostname==beauty.vogue.com.cn'
				}, {
					name : '美容专题',
					code : 'trends_beauty_feature',
					filter : 'ga:pagePath=~/beauty_feature/*;ga:hostname==beauty.vogue.com.cn'
				}, {
					name : '美妆新品',
					code : 'trends_beauty_news',
					filter : 'ga:pagePath=~/beauty_news/*;ga:hostname==beauty.vogue.com.cn'
				}, {
					name : '编辑最爱',
					code : 'trends_vogue_love',
					filter : 'ga:pagePath=~/vogue_love/*;ga:hostname==beauty.vogue.com.cn'
				}, {
					name : '美容问答',
					code : 'trends_qa',
					filter : 'ga:pagePath=~/qa/*;ga:hostname==beauty.vogue.com.cn'
				}, {
					name : '品牌故事',
					code : 'trends_brand_story',
					filter : 'ga:pagePath=~/brand_story/*;ga:hostname==beauty.vogue.com.cn'
				}, {
					name : '美妆情报',
					code : 'trends_beautynews',
					filter : 'ga:pagePath=~/beautynews/*;ga:hostname==beauty.vogue.com.cn'
				} ]
			}, {
				name : '人物派对',
				code : 'people',
				filter : 'ga:hostname==people.vogue.com.cn',
				sub : [ {
					name : '名人访谈',
					code : 'people_interview',
					filter : 'ga:pagePath=~/interview/*;ga:hostname==people.vogue.com.cn'
				}, {
					name : '明星街拍',
					code : 'people_streetchic',
					filter : 'ga:pagePath=~/streetchic/*;ga:hostname==people.vogue.com.cn'
				}, {
					name : '时尚超模',
					code : 'people_model',
					filter : 'ga:pagePath=~/model/*;ga:hostname==people.vogue.com.cn'
				}, {
					name : '设计师',
					code : 'people_designer',
					filter : 'ga:pagePath=~/designer/*;ga:hostname==people.vogue.com.cn'
				}, {
					name : '红毯风华',
					code : 'people_celebrity',
					filter : 'ga:pagePath=~/celebrity/*;ga:hostname==people.vogue.com.cn'
				}, {
					name : '风格明星',
					code : 'people_gallary',
					filter : 'ga:pagePath=~/gallary/*;ga:hostname==people.vogue.com.cn'
				}, {
					name : '社交派对',
					code : 'people_party',
					filter : 'ga:pagePath=~/party/*;ga:hostname==people.vogue.com.cn'
				}, {
					name : '特别报道',
					code : 'people_special_feature',
					filter : 'ga:pagePath=~/special_feature/*;ga:hostname==people.vogue.com.cn'
				}, {
					name : 'Contributor',
					code : 'people_contributor',
					filter : 'ga:pagePath=~/contributor/*;ga:hostname==whatsvogue.vogue.com.cn'
				} ]
			}, {
				name : '专题',
				code : 'feature',
				filter : 'ga:hostname==feature.vogue.com.cn',
				sub : []
			}, {
				name : '品牌',
				code : 'brand',
				filter : 'ga:hostname==brand.vogue.com.cn',
				sub : []
			}, {
				name : '单品',
				code : 'product',
				filter : 'ga:hostname==product.vogue.com.cn',
				sub : []
			}, {
				name : '博客',
				code : 'blog',
				filter : 'ga:hostname==blog.vogue.com.cn',
				sub : []
			}, {
				name : 'BBS',
				code : 'bbs',
				filter : 'ga:hostname==bbs.vogue.com.cn',
				sub : []
			}, {
				name : 'Events',
				code : 'events',
				filter : 'ga:hostname==events.vogue.com.cn',
				sub : [ {
					name : '热点话题',
					code : 'events_coverstory',
					filter : 'ga:pagePath=~/coverstory/*;ga:hostname==events.vogue.com.cn'
				}, {
					name : '其他',
					code : 'events_others',
					filter : 'ga:pagePath=^~/coverstory/*;ga:hostname==events.vogue.com.cn'
				} ]
			}, {
				name : '时尚资讯',
				code : 'newsletter',
				filter : 'ga:pagePath=~/newsletter/*;ga:hostname==www.vogue.com.cn',
				sub : []
			}, {
				name : '不夜城',
				code : 'fno',
				filter : 'ga:pagePath=~/fno/*;ga:hostname==www.vogue.com.cn',
				sub : []
			}, {
				name : '杂志',
				code : 'msn_magazine',
				filter : 'ga:pagePath=~/magazine/*;ga:hostname==msn.vogue.com.cn'
			} ]
		} ];

		this.initialValues = {
			organic_search : 'soso,baidu,jike,bing,google,sogou,yahoo',
			organic_internal : 'vogue.com.cn',
			organic_company : 'gq.com.cn,self.com.cn,adstyle.com.cn',
			organic_syndication : 'ifeng,taobao,msn,sina,youku,tudou,ku6,pptv,qiyi,joy,chinadaily,baike.baidu,news.baidu,163,sohu,firefox,qq.com;t.163,t.qq,qzone.qq,hao.qq,t.sohu',
			ma_smm : 'weibo,t.sina,tieba.baidu,douban,feixin.10086,diandian,t.163,tianya,qzone.qq,t.qq,t.sohu,t.cn,lofter,kaixin001,renren',
			mmb_nav : 'hao123,360.cn,123.*sogou,2345,9991,537,3567,v2233,dh818,123.duba.net,1616,1122,haokan123,114la,6789,tao123,chddh.cn,hao.qq,t3j4'
		};
	}

	window._channels = window._channels ? window._channels : {};
	window._channels['www.vogue.com.cn'] = new VogueChannels();
})();