var GaReporter = {
	addCommas : function(nStr) {
		nStr += '';
		x = nStr.split('.');
		x1 = x[0];
		x2 = x.length > 1 ? '.' + x[1] : '';
		var rgx = /(\d+)(\d{3})/;
		while (rgx.test(x1)) {
			x1 = x1.replace(rgx, '$1' + ',' + '$2');
		}
		return x1 + x2;
	}
};

jQuery.fn.toCSV = function(hasDlContent) {
	var table = $(this);
	// let try to calculate how many columns of this table by first row
	var header = table.find("tr:first");
	var columns = 0;
	$("td", header).each(function() {
		var td = $(this);
		if (td.attr("colspan")) {
			cloumns += td.attr("colspan");
		} else {
			columns++;
		}
	});
	var result = [];
	var lastIndex = 0;
	// save all tables to array
	table.find("tr").each(function(rindex) {
		var row = $(this);
		$("td:visible", row).each(function(cindex) {
			var td = $(this);
			result[rindex] = result[rindex] ? result[rindex] : [];
			result[rindex][result[rindex].length] = getTdContent(td);
			if (td.attr("rowspan")) {
				for ( var i = 1; i < td.attr('rowspan'); i++) {
					result[rindex + i] = result[rindex + i] ? result[rindex + i] : [];
					result[rindex + i].push("");
				}
			} else if (td.attr('colspan')) {
				for ( var j = 0; i < td.attr('colspan') - 1; j++) {
					result[rindex].push('');
				}
			}
		});
	});
	var resultHtml = "";
	if (hasDlContent) {
		var channelsResult = [];
		for ( var ir = 0; ir < result.length; ir++) {
			var newRows = convertDlRow(result[ir]);
			for ( var j = 0; j < newRows.length; j++) {
				channelsResult.push(newRows[j]);
			}
		}
		result = channelsResult;
	}
	$.each(result, function(index, value) {
		resultHtml += value.join(",") + "<br/>";
	});
	return resultHtml;

	function getTdContent(td) {
		if ($("dl", td).length > 0) {
			var result = [];
			$("dd:visible", td).each(function() {
				result.push($(this).html());
			});
			return result;
		} else {
			return '"' + td.html() + '"';
		}
	}

	function convertDlRow(row) {
		var actualRows = 1;
		for ( var j = 0; j < row.length; j++) {
			if (row[j] instanceof Array) {
				actualRows = row[j].length;
				break;
			}
		}
		var newRows = [];
		for ( var m = 0; m < actualRows; m++) {
			newRows[m] = [];
			for ( var j = 0; j < row.length; j++) {
				var td = row[j];
				if (td instanceof Array) {
					newRows[m].push('"' + td[m] + '"');
				} else {
					newRows[m].push(m == 0 ? td: ('""'));
				}
			}
		}
		return newRows;
	}
};