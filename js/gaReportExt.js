(function() {
    var counter = 0;
    var processed = 0;
    var allResult = {
        organic : {},
        ma : {},
        mmb : {}
    };
    var chartData = {
        organic : {},
        ma : {},
        mmb : {}
    };
    var allChannels = [];
    var GaReportExt = function() {
    };

    GaReportExt.prototype.checkAuth = function() {
        if (googleChromeExtAuth.checkLogin()) {
            $("#mainContent").load("profiles.html", function() {
                loadProfiles();
            });
        }
        // } else {
        // googleChromeExtAuth.grantAccess();
        // }
    };

    function loadProfiles() {
        googleAnalyticsExt.getAccountFeed({
            success : function(data) {
                if (data) {
                    $(data).find("feed").each(function() {
                        var feed = $(this);
                        $("#account_title").html(feed.children("title").text());
                        var entries = [];
                        var index = 1;
                        feed.children("entry").each(function() {
                            var entry = $(this);
                            var entryData = {
                                index : index++
                            };
                            entry.children("[name^='ga:']").each(function() {
                                var ga = $(this);
                                entryData[ga.attr("name").substring(3)] = ga.attr("value");
                            });
                            entry.children("[name^='dxp:']").each(function() {
                                var dxp = $(this);
                                entryData[dxp.attr("name").substring(4)] = dxp.attr("value");
                            });
                            // entryData.tableId =
                            // entry.children(":last").text();
                            entries.push(entryData);
                        });
                        $.tmpl($("#account_tmpl").html(), entries).appendTo($("#accounts_container"));
                        $("table#profiles_table").tablesorter({
                            sortList : [ [ 1, 0 ] ]
                        });
                        $("input[name='account_radio']").click(function() {
                            $("#view_report_btn").show();
                        });
                    });
                }
            }
        });
    }

    GaReportExt.prototype.showReportPage = function() {
        var profileRadio = $("input[name='account_radio']:checked");
        // save selected profileId to localstorage
        localStorage.setItem("selected_profile_id", profileRadio.val());
        localStorage.setItem("selected_table_id", profileRadio.attr("tableId"));
        localStorage.setItem("selected_title", profileRadio.attr("title"));
        $("#mainContent").load("gaReporter.html", function() {
            formInitialize();
        });
    };

    function formInitialize() {
        var dates = $("#startDate, #endDate").datepicker(
                {
                    changeMonth : true,
                    numberOfMonths : 1,
                    dateFormat : 'yy-mm-dd',
                    constrainInput : true,
                    onSelect : function(selectedDate) {
                        var option = this.id == "startDate" ? "minDate" : "maxDate", instance = $(this).data(
                                "datepicker"), date = $.datepicker.parseDate(instance.settings.dateFormat
                                || $.datepicker._defaults.dateFormat, selectedDate, instance.settings);
                        dates.not(this).datepicker("option", option, date);
                    }
                });
        $("#createBtn").click(function() {
            if (checkDate()) {
                preClear("#result_table");
                retrieveData(localStorage.getItem("selected_table_id"), $("#startDate").val(), $("#endDate").val());
                $("#common_result_container").show();
                $("#channels_result_container").hide();
                $("#loading_tooltips").show();
            }
        });
        $("#exportBtn").click(function() {
            exportData();
        });
        $("#editBtn").click(function() {
            $("#conditions_form").slideToggle(1000, function() {
                $("#editBtn").html($("#conditions_form").is(":visible") ? "Hide Conditions" : "Show Conditions");
                $("#createBtn").show();
                $("#createByChannelBtn").show();
                $("#reloadBtn").show();
            });
        });
        $("#createByChannelBtn").click(function() {
            if (getSiteConfigs()) {
                if (checkDate()) {
                    preClear("#channels_result_table");
                    retrieveDataByChannels();
                    $("#common_result_container").hide();
                    $("#channels_result_container").show();
                    $("#loading_tooltips").show();
                    $("#no_channels_tips").hide();
                }
            } else {
                $("#no_channels_tips").show();
            }
        });
        $("#reloadBtn").click(function() {
            loadConfiguration();
        });
        $("input[name='pvChbox']").click(function() {
            var chbox = $(this);
            if (chbox.attr("checked")) {
                $("." + chbox.val()).show();
            } else {
                $("." + chbox.val()).hide();
            }
        });
        $("#source_filter").change(function() {
            var val = $(this).val().split(",");
            createCharts(val[0], val[1]);
        });
        loadFromStorage(localStorage.getItem("selected_profile_id"));
        fillSiteStructure();
    }

    function retrieveDataByChannels(tableId, startDate, endDate) {
        var tableId = localStorage.getItem("selected_table_id");
        var startDate = $("#startDate").val();
        var endDate = $("#endDate").val();
        var channels = getSelectedChannels();
        if (channels) {
            // Let's build the result table first
            showResultTableForChannels(channels);
            // then start to retrieve data
            for ( var i = 0; i < channels.length; i++) {
                var channel = channels[i];
                allChannels.push(channel);
                // if unchecked sub channels, don't retrieve it
                if ($("input[value='subChannel']:checked").length > 0) {
                    if (channel.sub && channel.sub.length > 0) {
                        var subChannels = channel.sub;
                        for ( var j = 0; j < subChannels.length; j++) {
                            var schannel = subChannels[j];
                            allChannels.push(schannel);
                        }
                    }
                }
            }
            retrieveChannels(tableId, startDate, endDate);
        }
    }

    function retrieveChannels(tableId, startDate, endDate) {
        if (counter == 0 || processed == counter && allChannels.length > 0) {
            retrieveData(tableId, startDate, endDate, true);
        }
        if (allChannels.length > 0) {
            setTimeout(function() {
                retrieveChannels(tableId, startDate, endDate, true);
            }, 1000);
        } else {
            $(".exportBtn").show();
            $("#loading_tooltips").hide();
            createCharts('organic', 'search');
        }
    }

    function preClear(resultTableSelector) {
        allResult = {
            organic : {},
            ma : {},
            mmb : {}
        };
        chartData = {
            organic : {},
            ma : {},
            mmb : {}
        };
        allChannels = [];
        counter = 0;
        processed = 0;
        allChannels = [];
        $(".exportBtn").hide();
        $("#charts_container").hide();
        $("#conditions_form").slideToggle(1000, function() {
            $("#editBtn").show();
            $("#createBtn").hide();
            $("#createByChannelBtn").hide();
            $("#reloadBtn").hide();
            $(resultTableSelector).show();
            $("#editBtn").html($("#conditions_form").is(":visible") ? "Hide Conditions" : "Show Conditions");
        });
        // store the input data
        storeData(localStorage.getItem("selected_profile_id"));
        return true;
    }

    function showResultTableForChannels(channels) {
        $.tmpl($("#channels_result_tmpl").html(), [ {
            channels : channels
        } ]).appendTo($("#channels_result_container").empty());
        hideUncheckedMetrics();
    }

    function hideUncheckedMetrics() {
        $("input[name='pvChbox']").each(function() {
            var chbox = $(this);
            if (chbox.attr("checked")) {
                $("." + chbox.val()).show();
            } else {
                $("." + chbox.val()).hide();
            }
        });
    }

    function retrieveData(tableId, startDate, endDate, byChannel) {
        if (byChannel && (!allChannels || allChannels.length == 0)) {
            return;
        }
        var channel = byChannel ? allChannels.shift() : null;
        // get organic search data
        getOrganicSearch(tableId, $("#organic_search").val().replace(/,/g, "|"), startDate, endDate, channel);
        // get organic internal referral
        setTimeout(function() {
            getOrganicInternalRef(tableId, $("#organic_internal_referral").val(), startDate, endDate, channel);
        }, 100);
        // get company referral
        setTimeout(
                function() {
                    getCompanyRef(tableId, $("#organic_company_referral").val().replace(/,/g, "|"), startDate, endDate,
                            channel);
                }, 200);
        // get direct
        setTimeout(function() {
            getDirect(tableId, startDate, endDate, channel);
        }, 300);
        // get syndication
        setTimeout(function() {
            getSyndication(tableId, $("#organic_syndication").val(), startDate, endDate, channel);
        }, 400);
        // get marketing crm
        setTimeout(function() {
            getMaCRM(tableId, startDate, endDate, channel);
        }, 500);
        // get marketing social medial
        setTimeout(function() {
            getMaSMM(tableId, $("#ma_smm").val(), startDate, endDate, channel);
        }, 600);
        // get marketing buy cpm
        setTimeout(function() {
            getMmbCPM(tableId, startDate, endDate, channel);
        }, 700);
        // get marketing social medial
        setTimeout(function() {
            getMmbNav(tableId, $("#mmb_navigation").val(), startDate, endDate, channel);
        }, 800);
        // get marketing social medial
        setTimeout(function() {
            getTotal(tableId, startDate, endDate, channel);
        }, 900);

        counter += 10;
    }

    function checkDate() {
        var startDate = $("#startDate").val();
        var endDate = $("#endDate").val();
        if (!(startDate && endDate)) {
            $("#startDate").parent().parent().addClass("error");
            return false;
        } else {
            $("#startDate").parent().parent().removeClass("error");
            return true;
        }
    }

    function getOrganicSearch(tableId, organicSearch, startDate, endDate, channel) {
        if ($.trim(organicSearch)) {
            var organicSearch = organicSearch.replace(/,/g, "|");
            var filters = "ga:medium==organic,ga:medium=~" + organicSearch + ",ga:source=~" + organicSearch;
            filters = channel ? filters + ";" + channel.filter : filters;
            googleAnalyticsExt.getMetrics({
                data : buildData(tableId, filters, startDate, endDate),
                success : function(data) {
                    if (channel) {
                        allResult.organic.search = allResult.organic.search ? allResult.organic.search : {};
                        allResult.organic.search[channel.code] = showResultForChannel(data, channel,
                                "#organic_search_result");
                        chartData.organic.search = chartData.organic.search ? chartData.organic.search : {};
                        chartData.organic.search[channel.code] = getEntries(data);
                    } else {
                        allResult.organic.search = showResult(data, "#organic_search_result",
                                [ 6, 'Organic', 'Search' ]);
                        chartData.organic.search = getEntries(data);
                    }
                }
            });
        }
    }

    function getOrganicInternalRef(tableId, organicInternalReferral, startDate, endDate, channel) {
        if ($.trim(organicInternalReferral)) {
            var filters = "";
            if (channel && channel.type == 'homePage') {
                filters = "ga:referralPath!=" + channel.pagePath + ";ga:source=@" + organicInternalReferral;
            } else if (channel && channel.type == 'uri' && channel.pagePath) {
                filters = "ga:referralPath!~" + channel.pagePath + ";ga:source=@" + organicInternalReferral;
            } else {
                // it's not accurate to full site
                filters = "ga:medium==referral;ga:source=@" + organicInternalReferral;
            }
            filters = channel ? filters + ";" + channel.filter : filters;
            googleAnalyticsExt.getMetrics({
                data : buildData(tableId, filters, startDate, endDate),
                success : function(data) {
                    if (channel) {
                        allResult.organic.inref = allResult.organic.inref ? allResult.organic.inref : {};
                        allResult.organic.inref[channel.code] = showResultForChannel(data, channel,
                                "#organic_internal_result");
                        chartData.organic.inref = chartData.organic.inref ? chartData.organic.inref : {};
                        chartData.organic.inref[channel.code] = getEntries(data);
                    } else {
                        allResult.organic.inref = showResult(data, "#organic_internal_result", [ 0, 'Organic',
                                'Internal Referral' ]);
                        chartData.organic.inref = getEntries(data);
                    }
                }
            });
        }
    }
    function getCompanyRef(tableId, campanySites, startDate, endDate, channel) {
        if ($.trim(campanySites)) {
            var filters = "ga:source=~" + campanySites.replace(/,/g, "|");
            filters = channel ? filters + ";" + channel.filter : filters;
            googleAnalyticsExt.getMetrics({
                data : buildData(tableId, filters, startDate, endDate),
                success : function(data) {
                    if (channel) {
                        allResult.organic.comref = allResult.organic.comref ? allResult.organic.comref : {};
                        allResult.organic.comref[channel.code] = showResultForChannel(data, channel,
                                "#organic_company_result");
                        chartData.organic.comref = chartData.organic.comref ? chartData.organic.comref : {};
                        chartData.organic.comref[channel.code] = getEntries(data);
                    } else {
                        allResult.organic.comref = showResult(data, "#organic_company_result", [ 0, 'Organic',
                                'Condenast Referral' ]);
                        chartData.organic.comref = getEntries(data);
                    }
                }
            });
        }
    }
    /**
     * the result of direct will not include the CPM
     */
    function getDirect(tableId, startDate, endDate, channel) {
        var filters = "ga:source=~direct;ga:landingPagePath!~index([0-9]+)|(-lp)";
        filters = channel ? filters + ";" + channel.filter : filters;
        googleAnalyticsExt.getMetrics({
            data : buildData(tableId, filters, startDate, endDate),
            success : function(data) {
                if (channel) {
                    allResult.organic.direct = allResult.organic.direct ? allResult.organic.direct : {};
                    allResult.organic.direct[channel.code] = showResultForChannel(data, channel,
                            "#organic_direct_result");
                    chartData.organic.direct = chartData.organic.direct ? chartData.organic.direct : {};
                    chartData.organic.direct[channel.code] = getEntries(data);
                } else {
                    allResult.organic.direct = showResult(data, "#organic_direct_result", [ 0, 'Organic', 'Direct' ]);
                    chartData.organic.direct = getEntries(data);
                }
            }
        });
    }
    function getSyndication(tableId, syndications, startDate, endDate, channel) {
        if ($.trim(syndications)) {
            var filters = "";
            var synds = syndications.split(";");
            if (synds[0]) {
                filters = "ga:source=~" + synds[0].replace(/,/g, "|");
            }
            if (synds[1]) {
                filters = filters + ";ga:source!~" + synds[1].replace(/,/g, "|");
            }
            filters = channel ? filters + ";" + channel.filter : filters;
            googleAnalyticsExt.getMetrics({
                data : buildData(tableId, filters, startDate, endDate),
                success : function(data) {
                    if (channel) {
                        allResult.organic.syn = allResult.organic.syn ? allResult.organic.syn : {};
                        allResult.organic.syn[channel.code] = showResultForChannel(data, channel,
                                "#organic_syndication_result");
                        chartData.organic.syn = chartData.organic.syn ? chartData.organic.syn : {};
                        chartData.organic.syn[channel.code] = getEntries(data);
                    } else {
                        allResult.organic.syn = showResult(data, "#organic_syndication_result", [ 0, 'Organic',
                                'Syndication' ]);
                        chartData.organic.syn = getEntries(data);
                    }
                }
            });
        }
    }
    function getMaCRM(tableId, startDate, endDate, channel) {
        var filters = "ga:source==DMdelivery;ga:medium==email";
        filters = channel ? filters + ";" + channel.filter : filters;
        googleAnalyticsExt.getMetrics({
            data : buildData(tableId, filters, startDate, endDate),
            success : function(data) {
                if (channel) {
                    allResult.ma.crm = allResult.ma.crm ? allResult.ma.crm : {};
                    allResult.ma.crm[channel.code] = showResultForChannel(data, channel, "#ma_crm_result");
                    chartData.ma.crm = chartData.ma.crm ? chartData.ma.crm : {};
                    chartData.ma.crm[channel.code] = getEntries(data);
                } else {
                    allResult.ma.crm = showResult(data, "#ma_crm_result", [ 3, 'Marketing Activities', 'CRM' ]);
                    chartData.ma.crm = getEntries(data);
                }
            }
        });
    }
    function getMaSMM(tableId, smms, startDate, endDate, channel) {
        if ($.trim(smms)) {
            var filters = "";
            var smmArr = smms.split(";");
            if (smmArr[0]) {
                filters = "ga:source=~" + smmArr[0].replace(/,/g, "|");
            }
            if (smmArr[1]) {
                filters = filters + ";ga:source!~" + smmArr[1].replace(/,/g, "|");
            }
            filters = channel ? filters + ";" + channel.filter : filters;
            googleAnalyticsExt.getMetrics({
                data : buildData(tableId, filters, startDate, endDate),
                success : function(data) {
                    if (channel) {
                        allResult.ma.sm = allResult.ma.sm ? allResult.ma.sm : {};
                        allResult.ma.sm[channel.code] = showResultForChannel(data, channel, "#ma_smm_result");
                        chartData.ma.sm = chartData.ma.sm ? chartData.ma.sm : {};
                        chartData.ma.sm[channel.code] = getEntries(data);
                    } else {
                        allResult.ma.sm = showResult(data, "#ma_smm_result", [ 0, 'Marketing Activities',
                                'Social Media Marketing' ]);
                        chartData.ma.sm = getEntries(data);
                    }
                }
            });
        }
    }
    function getMmbCPM(tableId, startDate, endDate, channel) {
        var filters = "ga:landingPagePath=~index([0-9]+)|(-lp),ga:medium==cpm";
        filters = channel ? filters + ";" + channel.filter : filters;
        googleAnalyticsExt.getMetrics({
            data : buildData(tableId, filters, startDate, endDate),
            success : function(data) {
                if (channel) {
                    allResult.mmb.cpm = allResult.mmb.cpm ? allResult.mmb.cpm : {};
                    allResult.mmb.cpm[channel.code] = showResultForChannel(data, channel, "#mmb_cpm_result");
                    chartData.mmb.cpm = chartData.mmb.cpm ? chartData.mmb.cpm : {};
                    chartData.mmb.cpm[channel.code] = getEntries(data);
                } else {
                    allResult.mmb.cpm = showResult(data, "#mmb_cpm_result", [ 3, 'Marketing Media-buy', 'CPM' ]);
                    chartData.mmb.cpm = getEntries(data);
                }
            }
        });
    }
    function getMmbNav(tableId, navs, startDate, endDate, channel) {
        if ($.trim(navs)) {
            var filters = "";
            var navsArr = navs.split(";");
            if (navsArr[0]) {
                filters = "ga:source=~" + navsArr[0].replace(/,/g, "|");
            }
            if (navsArr[1]) {
                filters = filters + ";ga:source!~" + navsArr[1].replace(/,/g, "|");
            }
            filters = channel ? filters + ";" + channel.filter : filters;
            googleAnalyticsExt
                    .getMetrics({
                        data : buildData(tableId, filters, startDate, endDate),
                        success : function(data) {
                            if (channel) {
                                allResult.mmb.nav = allResult.mmb.nav ? allResult.mmb.nav : {};
                                allResult.mmb.nav[channel.code] = showResultForChannel(data, channel,
                                        "#mmb_navigation_result");
                                chartData.mmb.nav = chartData.mmb.nav ? chartData.mmb.nav : {};
                                chartData.mmb.nav[channel.code] = getEntries(data);
                            } else {
                                allResult.mmb.nav = showResult(data, "#mmb_navigation_result", [ 0,
                                        'Marketing Media-buy', 'Navigation' ]);
                                chartData.mmb.nav = getEntries(data);
                            }
                        }
                    });
        }
    }

    function getTotal(tableId, startDate, endDate, channel) {
        var filters = channel ? channel.filter : "";
        googleAnalyticsExt.getMetrics({
            data : buildData(tableId, filters, startDate, endDate),
            success : function(data) {
                if (channel) {
                    allResult.total = allResult.total ? allResult.total : {};
                    allResult.total[channel.code] = showResultForChannel(data, channel, "#total_result");
                    chartData.total = chartData.total ? chartData.total : {};
                    chartData.total[channel.code] = getEntries(data);
                } else {
                    allResult.total = showResult(data, "#total_result", [ 1, 'Total', '' ]);
                    chartData.total = getEntries(data);
                }
            }
        });
    }
    function buildData(tableId, filters, startDate, endDate) {
        var options = {
            ids : tableId,
            metrics : "ga:visitors,ga:visits,ga:pageviews,ga:bounces,ga:timeOnPage,ga:timeOnSite",
            dimensions : $("#dataDivider").val(),
            'start-date' : startDate,
            'end-date' : endDate
        };
        if (filters) {
            options["filters"] = filters;
        }
        return options;
    }

    function showResultForChannel(data, channel, containerSelector) {
        processed++;
        var hasSub = channel.sub ? 1 : 0;
        var result = renderResults(getAggregates(data), containerSelector + channel.code, "#channel_result_tmpl", null,
                0, hasSub);
        if (processed == counter) {
            setTimeout(function() {
                showSubTotalForChannels(channel, containerSelector);
            }, 200);
        }
        hideUncheckedMetrics();
        return result;
    }

    function showSubTotalForChannels(channel, containerSelector) {
        // calculate sub total for all channel on metrics
        if (!allResult.organic.stotal || !allResult.organic.stotal[channel.code]) {
            showSubTotalForChannel(channel, allResult.organic, "#organic_total");
        }
        // calculate sub total for all channel on metrics
        if (!allResult.ma.stotal || !allResult.ma.stotal[channel.code]) {
            showSubTotalForChannel(channel, allResult.ma, "#ma_total");
        }
        // calculate sub total for all channel on metrics
        if (!allResult.mmb.stotal || !allResult.mmb.stotal[channel.code]) {
            showSubTotalForChannel(channel, allResult.mmb, "#mmb_total");
        }
    }

    function showSubTotalForChannel(channel, data, containerSelector) {
        var result = {};
        for (itemKey in data) {
            var item = data[itemKey];
            // item is search, intf...
            for ( var channelCode in item) {
                if (data.stotal && data.stotal[channelCode]) {
                    continue;
                }
                result[channelCode] = result[channelCode] ? result[channelCode] : [];
                result[channelCode].push(item[channelCode]);
            }
        }
        data.stotal = data.stotal ? data.stotal : {};
        for ( var channelCode in result) {
            if (!data.stotal[channelCode]) {
                data.stotal[channelCode] = renderResults(result[channelCode], containerSelector + channelCode,
                        "#channel_result_tmpl", null, 1, (channel.sub ? 1 : 0));
            }
        }
        hideUncheckedMetrics();
    }
    function showResult(data, containerSelector, rowTitles) {
        processed++;
        var result = renderResults(getAggregates(data), containerSelector, "#result_tmpl", rowTitles, 0, 0);
        if (processed == counter) {
            setTimeout(showSubTotals, 100);
        }
        return result;
    }
    function showSubTotals() {
        allResult.organic.stotal = showSubTotal(allResult.organic, "#organic_total", [ 0, 'Organic', 'Sub Total' ]);
        allResult.ma.stotal = showSubTotal(allResult.ma, "#ma_total", [ 0, 'Marketing Activities', 'Sub Total' ]);
        allResult.mmb.stotal = showSubTotal(allResult.mmb, "#mmb_total", [ 0, 'Marketing Media-buy', 'Sub Total' ]);
        $(".exportBtn").show();
        $("#loading_tooltips").hide();
        createCharts('organic', 'search');
    }
    function getAggregates(data) {
        var aggregatesData = [];
        $(data).find("feed").each(function() {
            var feed = $(this);
            feed.children().each(function() {
                if (this.tagName == "dxp:aggregates") {
                    var aggregates = $(this);
                    var aggregateData = {};
                    aggregates.children().each(function() {
                        if (this.tagName == "dxp:metric") {
                            var dxp = $(this);
                            aggregateData[dxp.attr("name").substring(3)] = dxp.attr("value");
                        }
                    });
                    aggregatesData.push(aggregateData);
                }
            });
        });
        return aggregatesData;
    }
    function getEntries(data) {
        var entries = [];
        $(data).find("feed").each(function() {
            var feed = $(this);
            feed.children().each(function() {
                if (this.tagName == "entry") {
                    var entry = $(this);
                    var entryData = {};
                    entry.children().each(function() {
                        if (this.tagName == "dxp:metric" || this.tagName == "dxp:dimension") {
                            var dxp = $(this);
                            entryData[dxp.attr("name").substring(3)] = dxp.attr("value");
                        }
                    });
                    entries.push(entryData);
                }
            });
        });
        return entries;
    }
    function showSubTotal(resultHash, targetSelector, rowTitles) {
        var results = [];
        for ( var key in resultHash) {
            results.push(resultHash[key]);
        }
        return renderResults(results, targetSelector, "#result_tmpl", rowTitles, 1, 0);
    }
    function renderResults(entries, targetSelector, tmplSelector, rowTitles, subTotal, parentChannel) {
        var result = {
            rowspan : 0,
            category : '',
            dimension : '',
            visitors : 0,
            visits : 0,
            pageviews : 0,
            bounces : 0,
            timeOnPage : 0,
            timeOnSite : 0
        };
        if (rowTitles) {
            result.rowspan = rowTitles[0];
            result.category = rowTitles[1];
            result.dimension = rowTitles[2];
        }
        result.subTotalClass = subTotal ? 'subTotal' : '';
        result.parentChannelClass = parentChannel ? 'blue' : '';
        for ( var i = 0; i < entries.length; i++) {
            var ret = entries[i];
            result.visitors += parseFloat(ret.visitors);
            result.visits += parseFloat(ret.visits);
            result.pageviews += parseFloat(ret.pageviews);
            result.bounces += parseFloat(ret.bounces);
            result.timeOnPage += parseFloat(ret.timeOnPage);
            result.timeOnSite += parseFloat(ret.timeOnSite);
        }
        $.tmpl($(tmplSelector).html(), [ result ], {
            getAvgTimeOnPage : function(timeOnPage, pageviews) {
                if (pageviews > 0) {
                    return convertTimeToStr(timeOnPage / pageviews);
                }
                return 0;
            },
            getAvgTimeOnSite : function(timeOnSite, visits) {
                if (visits > 0) {
                    return convertTimeToStr(timeOnSite / visits);
                }
                return 0;
            }
        }).appendTo($(targetSelector).empty());
        return result;
    }
    function loadFromStorage(profileId) {
        var savedData = JSON.parse(localStorage.getItem(profileId));
        if (savedData) {
            $("#organic_search").val(savedData.organic_search);
            $("#organic_internal_referral").val(savedData.organic_internal_referral);
            $("#organic_company_referral").val(savedData.organic_company_referral);
            $("#organic_syndication").val(savedData.organic_syndication);
            $("#ma_smm").val(savedData.ma_smm);
            $("#mmb_navigation").val(savedData.mmb_navigation);
        } else {
            loadConfiguration();
        }
    }
    function loadConfiguration() {
        // load from config data
        var configData = getSiteConfigs();
        if (configData) {
            $("#organic_search").val(configData.initialValues.organic_search);
            $("#organic_internal_referral").val(configData.initialValues.organic_internal);
            $("#organic_company_referral").val(configData.initialValues.organic_company);
            $("#organic_syndication").val(configData.initialValues.organic_syndication);
            $("#ma_smm").val(configData.initialValues.ma_smm);
            $("#mmb_navigation").val(configData.initialValues.mmb_nav);
        }
    }
    function storeData(profileId) {
        localStorage.setItem(profileId, JSON.stringify({
            organic_search : $("#organic_search").val(),
            organic_internal_referral : $("#organic_internal_referral").val(),
            organic_company_referral : $("#organic_company_referral").val(),
            organic_syndication : $("#organic_syndication").val(),
            ma_smm : $("#ma_smm").val(),
            mmb_navigation : $("#mmb_navigation").val()
        }));
    }
    function convertTimeToStr(intTime) {
        intTime = Math.round(intTime);
        return Math.floor(intTime / 3600) + ":" + Math.floor((intTime % 3600) / 60) + ":" + intTime % 60;
    }
    function exportData() {
        var table = $(".results_table").filter(":visible");
        var hasDl = table.attr("id") == "channels_result_table";
        localStorage.setItem("exportedData", table.toCSV(hasDl));
        // close all old windows
        var winId = sessionStorage.getItem("exportWinId");
        if (winId) {
            try {
                chrome.windows.remove(parseInt(winId));
            } catch (e) {
            }
        }
        chrome.windows.create({
            url : "export.html",
            type : "popup",
            width : 820,
            height : 550
        }, function(win) {
            sessionStorage.setItem("exportWinId", win.id);
        });
    }
    function fillSiteStructure() {
        var siteConfig = getSiteConfigs();
        if (siteConfig) {
            var channels = siteConfig.channels;
            $("#site_structure").empty();
            for ( var i = 0; i < channels.length; i++) {
                var site = channels[i];
                $("#site_structure").append(
                        "<option value='" + site.version.num + "' " + (i == 0 ? "selected" : "") + " >"
                                + site.version.desc + "</option>");
            }
        }
    }
    function getSelectedChannels() {
        var siteConfig = getSiteConfigs();
        if (siteConfig) {
            var channels = siteConfig.channels;
            for ( var i = 0; i < channels.length; i++) {
                var site = channels[i];
                if ($("#site_structure").val() == site.version.num) {
                    return site.channels_arr;
                }
            }
        }
    }
    function getSiteConfigs() {
        return window._channels[localStorage.getItem("selected_title")];
    }
    /**
     * create charts for certain category and item. Will auto sum the values of
     * all items under the category if the item == 'all' Note, it's
     * case-sensetive eg, createCharts('organic', 'search')
     */
    function createCharts(category, item) {
        if ($("#dataDivider").val() == "ga:date") {
            $("#charts_container").show();
            var table = $(".results_table").filter(":visible");
            var series = buildChartData(category, item, table.attr("id") == "channels_result_table");
            createLineChart("pv_charts", "Pageviews trend chart", "pageview", category, item, series.pv);
            createLineChart("visitor_charts", "Visitors trend chart", "visitor", category, item, series.visitor);
            createLineChart("visit_charts", "Visits trend chart", "visit", category, item, series.visit);
            createLineChart("pv_visit_charts", "Pages per Visit trend chart", "page per visit", category, item,
                    series.pv_visit);
            createLineChart("bounce_rate_charts", "Bounce Rate trend chart", "bounce rate", category, item,
                    series.bounce_rate);

            // use time formatter for time on page/time on site
            formatter = function() {
                var str = new Date(this.x).toLocaleDateString();
                points = this.points;
                if (points) {
                    for ( var i = 0; i < points.length; i++) {
                        point = points[i];
                        str += "<br/>" + point.series.name + ": " + convertTimeToStr(point.y);
                    }
                    return str;
                } else {
                    return new Date(this.x).toLocaleDateString() + "<br/>" + this.series.name + ': '
                            + convertTimeToStr(this.y);
                }
            };
            createLineChart("time_page_charts", "Avg. Time on Page trend chart", "avg. time on page", category, item,
                    series.time_page, formatter);
            createLineChart("time_site_charts", "Avg. Time on Site trend chart", "avg. time on site", category, item,
                    series.time_site, formatter);
        }
    }

    function buildChartData(category, item, hasChannels) {
        var datasource = {};
        if (item == "all") {
            var categoryData = chartData[category];
            // source names': search, interef
            for ( var name in categoryData) {
                var itemData = categoryData[name];
                if (hasChannels) {
                    // channel code
                    for ( var channelCode in itemData) {
                        var entries = itemData[channelCode];
                        datasource[channelCode] = datasource[channelCode] ? datasource[channelCode] : [];
                        if (datasource[channelCode].length == 0) {
                            datasource[channelCode] = entries;
                        } else {
                            // merge the current entires to existed one
                            for ( var l = 0; l < entries.length; l++) {
                                var obj = entries[l];
                                for ( var pname in obj) {
                                    if (pname != "date") {
                                        datasource[channelCode][l][pname] = parseInt(datasource[channelCode][l][pname])
                                                + parseInt(obj[pname]);
                                    }
                                }
                            }
                        }
                    }
                } else {
                    // no channels
                    if (!datasource.length) {
                        datasource = itemData;
                    } else {
                        // merge the current entires to existed one
                        for ( var l = 0; l < itemData.length; l++) {
                            var obj = itemData[l];
                            for ( var pname in obj) {
                                if (pname != "date") {
                                    datasource[l][pname] = parseInt(datasource[l][pname]) + parseInt(obj[pname]);
                                }
                            }
                        }
                    }
                }
            }
        } else if (item == "") {
            datasource = chartData[category];
        } else {
            datasource = chartData[category][item];
        }
        var series = {
            pv : [],
            visitor : [],
            visit : [],
            pv_visit : [],
            bounce_rate : [],
            time_page : [],
            time_site : []
        };
        if (hasChannels) {
            var channels = getSelectedChannels();
            for ( var i = 0; i < channels.length; i++) {
                var channel = channels[i];
                buildSerieData(datasource[channel.code], channel.name, series);
            }
        } else {
            buildSerieData(datasource, "Whole Site", series);
        }
        return series;
    }

    function buildSerieData(entries, serieName, series) {
        if (entries) {
            var startDate = entries[0].date;
            var pvSerie = getDefaultSerie(serieName, startDate);
            var visitorSerie = getDefaultSerie(serieName, startDate);
            var visitSerie = getDefaultSerie(serieName, startDate);
            var pvVisitSerie = getDefaultSerie(serieName, startDate);
            var bounceRateSerie = getDefaultSerie(serieName, startDate);
            var timePageSerie = getDefaultSerie(serieName, startDate);
            var timeSiteSerie = getDefaultSerie(serieName, startDate);
            for ( var j = 0; j < entries.length; j++) {
                var entry = entries[j];
                pvSerie.data.push(parseInt(entry.pageviews));
                visitorSerie.data.push(parseInt(entry.visitors));
                visitSerie.data.push(parseInt(entry.visits));
                pvVisitSerie.data.push(Math.round(entry.visits == 0 ? 0 : parseFloat(entry.pageviews)
                        / parseFloat(entry.visits) * 100) / 100.0);
                bounceRateSerie.data.push(Math.round(entry.visits == 0 ? 0 : parseFloat(entry.bounces)
                        / parseFloat(entry.visits) * 100));
                timePageSerie.data.push(Math.round(entry.pageviews == 0 ? 0 : parseFloat(entry.timeOnPage)
                        / parseFloat(entry.pageviews) * 100) / 100.0);
                timeSiteSerie.data.push(Math.round(entry.visits == 0 ? 0 : parseFloat(entry.timeOnSite)
                        / parseFloat(entry.visits) * 100) / 100.0);
            }
            series.pv.push(pvSerie);
            series.visitor.push(visitorSerie);
            series.visit.push(visitSerie);
            series.pv_visit.push(pvVisitSerie);
            series.bounce_rate.push(bounceRateSerie);
            series.time_page.push(timePageSerie);
            series.time_site.push(timeSiteSerie);
        }
    }

    function getDefaultSerie(serieName, startDate) {
        return {
            name : serieName,
            data : [],
            pointStart : Date.UTC(startDate.substring(0, 4), startDate.substring(4, 6) - 1, startDate.substring(6)),
            pointInterval : 24 * 3600 * 1000
        // one day
        };
    }

    function createLineChart(containerId, chartTitle, yTitle, category, item, seriesData, tooltipFormatter) {
        $("#" + containerId).empty();
        if (!tooltipFormatter) {
            tooltipFormatter = function() {
                for ( var m in this) {
                    console.log(m + ": " + this[m]);
                }
                var str = new Date(this.x).toLocaleDateString();
                points = this.points;
                if (points) {
                    for ( var i = 0; i < points.length; i++) {
                        point = points[i];
                        str += "<br/>" + point.series.name + ": " + point.y;
                    }
                    return str;
                } else {
                    return new Date(this.x).toLocaleDateString() + "<br/>" + this.series.name + ': ' + this.y;
                }
            };
        }
        chart = new Highcharts.Chart({
            chart : {
                renderTo : containerId
            },
            title : {
                text : chartTitle
            },
            subtitle : {
                text : 'Source: ' + category + ", " + item
            },
            xAxis : {
                type : 'datetime',
                dateTimeLabelFormats : {
                    day : '%e of %b'
                }
            },
            yAxis : {
                title : {
                    text : yTitle
                },
                min : 0,
                lineWidth : 1
            },
            legend : {
                layout : 'vertical',
                align : 'right',
                verticalAlign : 'top',
                x : -10,
                y : 100,
                borderWidth : 0
            },
            tooltip : {
                formatter : tooltipFormatter,
                shared : true
            },
            series : seriesData
        });
    }
    ;
    window.gaReportExt = window.gaReportExt ? window.gaReportExt : new GaReportExt();
})();