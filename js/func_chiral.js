function SHUFFLE_ARRAY(input_array) {
    var j, temp;
    var arr = Array.from(input_array);
    for (var i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}

function SHUFFLE_TWO_ARRAYS(input_array_1, input_array_2) { // Shuffles two arrays in the same fashion
    var j, temp1, temp2;
    var arr1 = Array.from(input_array_1);
    var arr2 = Array.from(input_array_2);
    if (arr1.length == arr2.length) {
        for (var i = arr1.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            temp1 = arr1[i];
            temp2 = arr2[i];
            arr1[i] = arr1[j];
            arr2[i] = arr2[j];
            arr1[j] = temp1;
            arr2[j] = temp2;
        }
        return {1:arr1, 2: arr2};
    } else {return []}
}

function CHECK_IF_RESPONDED(open_ended_list, choice_list) {
    var all_responded = true;
    for (var i in open_ended_list) {
        all_responded = all_responded && (open_ended_list[i].replace(/(?:\r\n|\r|\n|\s)/g, '') != '');
    }
    for (var j in choice_list) {
        all_responded = all_responded && (typeof choice_list[j] !== 'undefined');
    }
    return all_responded;
}

function LIST_FROM_ATTRIBUTE_NAMES(obj, string_list) {
    var list = []
    for (var i = 0; i < string_list.length; i++) {
        list.push(obj[string_list[i]]); // Push corresponding elements mentioned in title into a list (for example, if 'rt' is in list, get current 'rt' from object and push it to list)
    }
    return list;
}

function LIST_TO_FORMATTED_STRING(data_list, divider) {
    divider = (divider === undefined) ? '\t' : divider; // If there is \t, change to undefined, or change the \t to the divider parameter
    var string = '';
    for (var i = 0; i < data_list.length - 1; i++) {
        string += data_list[i] + divider;
    }
    string += data_list[data_list.length - 1] + '\n';
    return string;
}

function FORMAT_DATE(date_obj, time_zone, divider, padded) {
    date_obj = (date_obj === undefined) ? new Date() : date_obj;
    time_zone = (time_zone === undefined) ? 'UTC' : time_zone;
    divider = (divider === undefined) ? '.' : divider;
    padded = (padded === undefined) ? true : padded;
    const NOW_YEAR = (time_zone == 'UTC') ? date_obj.getUTCFullYear() : date_obj.getFullYear();
    var now_month = (time_zone == 'UTC') ? date_obj.getUTCMonth()+1 : date_obj.getMonth()+1;
    var now_date = (time_zone == 'UTC') ? date_obj.getUTCDate() : date_obj.getDate();
    if (padded) {
        now_month = ('0' + now_month).slice(-2);
        now_date = ('0' + now_date).slice(-2);
    }
    const NOW_FULL_DATE = NOW_YEAR + divider + now_month + divider + now_date;
    return NOW_FULL_DATE;
}

function FORMAT_TIME(date_obj, time_zone, divider, padded) {
    date_obj = (date_obj === undefined) ? new Date() : date_obj;
    time_zone = (time_zone === undefined) ? 'UTC' : time_zone;
    divider = (divider === undefined) ? ':' : divider;
    padded = (padded === undefined) ? true : padded;
    var now_hours = (time_zone == 'UTC') ? date_obj.getUTCHours() : date_obj.getHours();
    var now_minutes = (time_zone == 'UTC') ? date_obj.getUTCMinutes() : date_obj.getMinutes();
    var now_seconds = (time_zone == 'UTC') ? date_obj.getUTCSeconds() : date_obj.getSeconds();
    if (padded) {
        now_hours = ('0' + now_hours).slice(-2);
        now_minutes = ('0' + now_minutes).slice(-2);
        now_seconds = ('0' + now_seconds).slice(-2);
    }
    const NOW_FULL_TIME = now_hours + divider + now_minutes + divider + now_seconds;
    return NOW_FULL_TIME;
}

function CHECK_FULLY_IN_VIEW(el) {
    el = el.get(0);
    const RECT = el.getBoundingClientRect();
    const TOP = RECT.top;
    const BOTTOM = RECT.bottom;
    const LEFT = RECT.left;
    const RIGHT = RECT.right;

    const W = $(window).width();
    const H = $(window).height();
    const IS_VISIBLE = (TOP >= 0) && (BOTTOM <= H) && (LEFT >= 0) && (RIGHT <= W);
    return IS_VISIBLE;
}

function LOAD_IMG(index, stim_path, img_list, after_func) {
    after_func = (after_func === undefined) ? function() { return; } : after_func;
    if (index >= img_list.length) {
        return;
    }
    const IMAGE = new Image();
    if (index < img_list.length - 1) {
        IMAGE.onload = function() {
            LOAD_IMG(index + 1, stim_path, img_list, after_func);
        };
    } else {
        IMAGE.onload = after_func;
    }
    IMAGE.src = stim_path + img_list[index];
}

// ########  ########  #######  ######## ##     ##  ######  ########
// ##     ## ##       ##     ## ##       ##     ## ##    ##    ##
// ##     ## ##       ##     ## ##       ##     ## ##          ##
// ########  ######   ##     ## ######   ##     ##  ######     ##
// ##   ##   ##       ##  ## ## ##       ##     ##       ##    ##
// ##    ##  ##       ##    ##  ##       ##     ## ##    ##    ##
// ##     ## ########  ##### ## ########  #######   ######     ##

function GET_PARAMETERS(var_name, default_value) {
    const REGEX_STRING = "[\?&]" + var_name + "=([^&#]*)"; // Where in URL to start search ('sonacode', 'PROLIFIC_PID)
    const REGEX = new RegExp(REGEX_STRING);
    const URL = location.href; // Returns entire URL
    const RESULTS = REGEX.exec(URL); // Finds REGEX_STRING in URL, second index iswhat follows '='
    if (RESULTS == null) {
        return default_value;
    } else {
        return RESULTS[1]; // Returns the numbers after '=', i.e. the sona/prolific ID
    }
}

function POST_DATA(page, data, success_func, error_callback) {
    data = (data === undefined) ? null : data; // store 'data' if there is data
    success_func = (success_func === undefined) ? function() { return; } : success_func; // Runs when there is post success
    error_callback = (error_callback === undefined) ? function() { return; } : error_callback;
    $.ajax({
        type: "POST",
        url: page,
        data: data,
        success: success_func,
        error: error_callback
    });
}
