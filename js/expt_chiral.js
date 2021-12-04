//  ######  ##     ## ########        ## ########  ######  ########
// ##    ## ##     ## ##     ##       ## ##       ##    ##    ##
// ##       ##     ## ##     ##       ## ##       ##          ##
//  ######  ##     ## ########        ## ######   ##          ##
//       ## ##     ## ##     ## ##    ## ##       ##          ##
// ##    ## ##     ## ##     ## ##    ## ##       ##    ##    ##
//  ######   #######  ########   ######  ########  ######     ##

class subjectObject {
    constructor(options = {}) {
        Object.assign(this, {
            num: 'pre-post'
        },
        options);
        if (this.num == 'pre-post') {
            this.obtainSubjNum();
        }
        this.data = LIST_TO_FORMATTED_STRING(this.titles);
        this.dateObj = new Date();
        this.startDate = FORMAT_DATE(this.dateObj);
        this.startTime = FORMAT_TIME(this.dateObj);
        this.userAgent = window.navigator.userAgent;
        this.hiddenCount = 0;
        this.hiddenDurations = [];
    }

    obtainSubjNum() {
        var that = this;
        function SUBJ_NUM_UPDATE_SUCCEEDED(number) {
            that.num = number;
        }
        function SUBJ_NUM_UPDATE_FAILED() {
            that.num = -999;
        }
        POST_DATA(this.subjNumScript, { 'directory_path': this.savingDir, 'file_name': this.subjNumFile }, SUBJ_NUM_UPDATE_SUCCEEDED, SUBJ_NUM_UPDATE_FAILED);
    }

    saveVisit() {
        var data = 'subjNum\tstartDate\tstartTime\tid\tuserAgent\tinView\tviewportW\tviewportH\n';
        this.viewport = this.viewportSize;
        this.inView = this.viewport['inView'];
        this.viewportW = this.viewport['w'];
        this.viewportH = this.viewport['h'];
        var dataList = [this.num, this.startDate, this.startTime, this.id, this.userAgent, this.inView, this.viewportW, this.viewportH];
        data += LIST_TO_FORMATTED_STRING(dataList);
        var postData = {
            'directory_path': this.savingDir,
            'file_name': this.visitFile,
            'data': data
        };
        $.ajax({
            type: 'POST',
            url: this.savingScript,
            data: postData,
        });
    }

    getID(get_variable) {
        var id = GET_PARAMETERS(get_variable, null);
        var valid_id = (id !== null);
        if (valid_id) {
            id = id.replace(/\s+/g, '');
            valid_id = (id !== '');
        }
        if (valid_id) {
            this.valid_id = true;
            return id;
        } else {
            this.valid_id = false;
            return null;
        }
    }

    get phone() {
        var md = new MobileDetect(this.userAgent);
        return md.mobile() ? true : false;
    }

    get viewportSize() {
        var w = $(window).width();
        var h = $(window).height();
        var inView = (w >= this.viewportMinW) && (h >= this.viewportMinH);
        return { 'h': h, 'w': w, 'inView': inView };
    }

    saveAttrition() {
        var data = 'subjNum\tstartDate\tstartTime\tid\tuserAgent\tinView\tviewportW\tviewportH\n';
        this.viewport = this.viewportSize;
        this.inView = this.viewport['inView'];
        this.viewportW = this.viewport['w'];
        this.viewportH = this.viewport['h'];
        var dataList = [this.num, this.startDate, this.startTime, this.id, this.userAgent, this.inView, this.viewportW, this.viewportH];
        data += LIST_TO_FORMATTED_STRING(dataList);
        var postData = {
            'directory_path': this.savingDir,
            'file_name': this.attritionFile,
            'data': data
        };
        $.ajax({
            type: 'POST',
            url: this.savingScript,
            data: postData,
        });
    }

    submitDebriefing() {
        var endTimeObj = new Date();
        this.endTime = FORMAT_TIME(endTimeObj, 'UTC', ':', true);
        this.duration = (endTimeObj - this.dateObj) / 60000; // in minutes

        var debriefList = LIST_FROM_ATTRIBUTE_NAMES(this, this.titles);
        this.data += LIST_TO_FORMATTED_STRING(debriefList);

        var postData = {
            'directory_path': this.savingDir,
            'file_name': this.subjFile,
            'data': this.data
        };
        $.ajax({
            type: 'POST',
            url: this.savingScript,
            data: postData,
        });
    }

    detectVisibilityStart() {
        var that = this;
        document.addEventListener('visibilitychange', that.handleVisibilityChange);
    }

    detectVisibilityEnd() {
        var that = this;
        document.removeEventListener('visibilitychange', that.handleVisibilityChange);
    }
}


// ######## ########  ####    ###    ##
//    ##    ##     ##  ##    ## ##   ##
//    ##    ##     ##  ##   ##   ##  ##
//    ##    ########   ##  ##     ## ##
//    ##    ##   ##    ##  ######### ##
//    ##    ##    ##   ##  ##     ## ##
//    ##    ##     ## #### ##     ## ########

class trialObject {
    constructor(options = {}) {
        Object.assign(this, {
            subj: false,
            titles: '',
            savingScript: '',
            dataFile: '',
            stimPath: 'media/',
            savingDir: 'data',
        }, options);
        this.complete = false;
        this.num = this.subj.num;
        this.date = this.subj.startDate;
        this.subjStartTime = this.subj.startTime;
        this.trialNum = 0;
        this.allData = LIST_TO_FORMATTED_STRING(this.titles);
    }

    run() {
        var that = this;
        if (this.progressInfo) {
            this.progress = Math.round(100*(this.trialNum)/(this.trialN));
        }

        this.trialNum++;
        this.thisTrial = this.trialList[this.trialNum-1];
        if (this.trialNum == this.trialN) { // If this is the last item
            this.last = true;
            this.nextTrial = false;
        } else {
            this.nextTrial = this.trialList[this.trialNum];
        }

        this.updateFunc(this.last, this.thisTrial, this.nextTrial, this.stimPath);

        const START_STIM = function() {
            that.trialFunc();
            that.startTime = Date.now();
        };

        setTimeout(START_STIM, this.intertrialInterval * 1000);
    }

    end(resp) {
        var currentTime = Date.now();
        this.rt = (currentTime - this.startTime) / 1000; // in seconds
        this.response = resp;
        var dataList = LIST_FROM_ATTRIBUTE_NAMES(this, this.titles);
        this.allData += LIST_TO_FORMATTED_STRING(dataList);

        if (this.trialNum < this.trialN) {
            this.run();
        } else {
            this.complete = true;
            this.endExptFunc();
        }
    }

    save() {
        var postData = {
            'directory_path': this.savingDir,
            'file_name': this.dataFile,
            'data': this.allData // data to save
        };
        $.ajax({
            type: 'POST',
            url: this.savingScript,
            data: postData,
        });
    }
}

// #### ##    ##  ######  ######## ########
//  ##  ###   ## ##    ##    ##    ##     ##
//  ##  ####  ## ##          ##    ##     ##
//  ##  ## ## ##  ######     ##    ########
//  ##  ##  ####       ##    ##    ##   ##
//  ##  ##   ### ##    ##    ##    ##    ##
// #### ##    ##  ######     ##    ##     ##

class instrObject {
    constructor(options = {}) {
        Object.assign(this, {
            textBox: false,
            textElement: false,
        }, options);
        this.index = 0;
        this.readingTimes = {};
        this.attempts = 0;
    }

    advance() {
        this.textElement.html(this.dict[this.index][2]);
        const PRE_FUNCTION = this.dict[this.index][0];
        if (PRE_FUNCTION !== false) {
            PRE_FUNCTION();
        }
        this.textBox.show();
        const POST_FUNCTION = this.dict[this.index][1];
        if (POST_FUNCTION !== false) {
            POST_FUNCTION();
        }
        this.startTime = Date.now();
    }

    start() {
        this.advance();
    }

    next() {
        this.textBox.hide();
        this.saveReadingTime();
        this.index += 1;
        if (this.index < Object.keys(this.dict).length) {
            this.advance();
        }
    }

    saveReadingTime() {
        var readingTime = (Date.now() - this.startTime)/1000;
        if (typeof(this.readingTimes[this.index])=='undefined'){
            this.readingTimes[this.index] = readingTime;
        }
        else{
            if (this.readingTimes[this.index] < readingTime){
                this.readingTimes[this.index] = readingTime;
            }
        }
    }
}