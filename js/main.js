// ######## ##     ## ########  ########
// ##        ##   ##  ##     ##    ##
// ##         ## ##   ##     ##    ##
// ######      ###    ########     ##
// ##         ## ##   ##           ##
// ##        ##   ##  ##           ##
// ######## ##     ## ##           ##

// DATA SAVING
const FORMAL = true;
const EXPERIMENT_NAME = 'chiral';
const SUBJ_NUM_SCRIPT = 'php/subjNum.php';
const SAVING_SCRIPT = 'php/save.php';
const FILE_GETTING_SCRIPT = 'php/files.php'
const VISIT_FILE = 'visit_' + EXPERIMENT_NAME + '.txt';
const SUBJ_NUM_FILE = 'subjNum_' + EXPERIMENT_NAME + '.txt';
const ATTRITION_FILE = 'attrition_' + EXPERIMENT_NAME + '.txt';
const CHIRAL_DISCRIMINATION_FILE = 'discrimination_' + EXPERIMENT_NAME + '.txt';
const AESTHETIC_RATING_FILE = 'aesthetic_rating_' + EXPERIMENT_NAME + '.txt';
const SUBJ_FILE = 'subj_' + EXPERIMENT_NAME + '.txt';
const SAVING_DIR = 'data';
const ID_GET_VARIABLE_NAME = 'sonacode';

const STIM_PATH = 'media/';
const INTERTRIAL_INTERVAL = 0.5;
const VIEWPORT_MIN_W = 900;
const VIEWPORT_MIN_H = 600;
const INSTR_READING_TIME_MIN = 0.3;

const ALL_IMG_LIST = [
   'social/allotments.jpg', 'social/altars.jpg', 'social/aprons.jpg', 'social/aristocracy.jpg',
    'social/budding.jpg', 'social/burials.jpg', 'social/buses.jpg', 'social/cake.jpg',
    'social/car.jpg', 'social/castor.jpg', 'social/chopping.jpg', 'social/clambering.jpg',
    'social/closely.jpg', 'social/contractor.jpg', 'social/cramming.jpg', 'social/departmental.jpg',
    'social/depressing.jpg', 'social/desert.jpg', 'social/detecting.jpg', 'social/deteriorating.jpg',
    'social/diamonds.jpg', 'social/discoloured.jpg', 'social/droning.jpg', 'social/drummers.jpg',
    'social/enlightened.jpg', 'social/eroding.jpg', 'social/ethnic.jpg', 'social/fattening.jpg',
    'social/fountain.jpg', 'social/fragrant.jpg', 'social/gentle.jpg', 'social/glittering.jpg',
    'social/graduated.jpg', 'social/icelandic.jpg', 'social/infected.jpg', 'social/inhabited.jpg',
    'social/inmates.jpg', 'social/international.jpg', 'social/irretrievably.jpg', 'social/jews.jpg',
    'social/knitters.jpg', 'social/lager.jpg', 'social/lifts.jpg', 'social/living.jpg',
    'social/manufacturing.jpg', 'social/mastering.jpg', 'social/mustered.jpg', 'social/nicotine.jpg',
    'social/observational.jpg', 'social/pillow.jpg', 'social/projecting.jpg', 'social/receptions.jpg',
    'social/resigned.jpg', 'social/restraint.jpg', 'social/retrial.jpg', 'social/runaway.jpg',
    'social/russet.jpg', 'social/saloon.jpg', 'social/simulators.jpg', 'social/smallholders.jpg',
    'social/solids.jpg', 'social/stagecoach.jpg', 'social/straw.jpg', 'social/suction.jpg',
    'social/tides.jpg', 'social/trails.jpg', 'social/undercarriage.jpg', 'social/uneven.jpg',
    'social/vanilla.jpg', 'social/veranda.jpg', 'social/vocals.jpg', 'social/wanderer.jpg',
    'social/water.jpg', 'social/wave.jpg', 'social/wear.jpg', 'social/wharf.jpg',
    'social/whistle.jpg', 'social/wiry.jpg', 'inanimate/allotments.jpg', 'inanimate/altars.jpg',
    'inanimate/aprons.jpg', 'inanimate/aristocracy.jpg', 'inanimate/budding.jpg', 'inanimate/burials.jpg',
    'inanimate/buses.jpg', 'inanimate/cake.jpg', 'inanimate/car.jpg', 'inanimate/castor.jpg',
    'inanimate/chopping.jpg', 'inanimate/clambering.jpg', 'inanimate/closely.jpg', 'inanimate/contractor.jpg',
    'inanimate/cramming.jpg', 'inanimate/departmental.jpg', 'inanimate/depressing.jpg', 'inanimate/desert.jpg',
    'inanimate/detecting.jpg', 'inanimate/deteriorating.jpg', 'inanimate/diamonds.jpg', 'inanimate/discoloured.jpg',
    'inanimate/droning.jpg', 'inanimate/drummers.jpg', 'inanimate/enlightened.jpg', 'inanimate/eroding.jpg',
    'inanimate/ethnic.jpg', 'inanimate/fattening.jpg', 'inanimate/fountain.jpg', 'inanimate/fragrant.jpg',
    'inanimate/gentle.jpg', 'inanimate/glittering.jpg', 'inanimate/graduated.jpg', 'inanimate/icelandic.jpg',
    'inanimate/infected.jpg', 'inanimate/inhabited.jpg', 'inanimate/inmates.jpg', 'inanimate/international.jpg',
    'inanimate/irretrievably.jpg', 'inanimate/jews.jpg', 'inanimate/knitters.jpg', 'inanimate/lager.jpg',
    'inanimate/lifts.jpg', 'inanimate/living.jpg', 'inanimate/manufacturing.jpg', 'inanimate/mastering.jpg',
    'inanimate/mustered.jpg', 'inanimate/nicotine.jpg', 'inanimate/observational.jpg', 'inanimate/pillow.jpg',
    'inanimate/projecting.jpg', 'inanimate/receptions.jpg', 'inanimate/resigned.jpg', 'inanimate/restraint.jpg',
    'inanimate/retrial.jpg', 'inanimate/runaway.jpg', 'inanimate/russet.jpg', 'inanimate/saloon.jpg',
    'inanimate/simulators.jpg', 'inanimate/smallholders.jpg', 'inanimate/solids.jpg', 'inanimate/stagecoach.jpg',
    'inanimate/straw.jpg', 'inanimate/suction.jpg', 'inanimate/tides.jpg', 'inanimate/trails.jpg',
    'inanimate/undercarriage.jpg', 'inanimate/uneven.jpg', 'inanimate/vanilla.jpg', 'inanimate/veranda.jpg',
    'inanimate/vocals.jpg', 'inanimate/wanderer.jpg', 'inanimate/water.jpg', 'inanimate/wave.jpg',
    'inanimate/wear.jpg', 'inanimate/wharf.jpg', 'inanimate/whistle.jpg', 'inanimate/wiry.jpg'
];
const IMAGE_N = ALL_IMG_LIST.length;

const CHIRAL_EXAMPLE_LIST = ['example_chiral/universal.jpg', 'example_chiral/waterfall.jpg'];
const CHIRAL_EXAMPLE_N = CHIRAL_EXAMPLE_LIST.length;

const PRELOAD_IMAGE_LIST = ALL_IMG_LIST.concat(CHIRAL_EXAMPLE_LIST).concat(['maximize_window.png']);

// CHIRAL STIMULI
const CHIRAL_IMG_LIST_TEMP = ALL_IMG_LIST;
const CHIRAL_IMG_N = IMAGE_N;
const FLIP_CHIRAL_TYPE = SHUFFLE_ARRAY( (new Array(CHIRAL_IMG_N/4).fill(true)).concat(new Array(CHIRAL_IMG_N/4).fill(false)) ); // Randomly distributes T and F for social/inanimate images
const FLIP_CHIRAL_TEMP = FLIP_CHIRAL_TYPE.concat(FLIP_CHIRAL_TYPE);
const CHIRAL_ARR_OBJ = SHUFFLE_TWO_ARRAYS(CHIRAL_IMG_LIST_TEMP, FLIP_CHIRAL_TEMP); // Shuffles both image list and flip list in the same manner
const CHIRAL_IMG_LIST = CHIRAL_ARR_OBJ[1]; // SHUFFLE_TWO_ARRAYS returns shuffled arrays in object
const FLIP_CHIRAL = CHIRAL_ARR_OBJ[2];

// AESTHETIC STIMULI
const AESTHETIC_FIRST_TRIALS = ALL_IMG_LIST.slice();
const FLIP_AES_TYPE = SHUFFLE_ARRAY(new Array(IMAGE_N/4).fill(true).concat(new Array(IMAGE_N/4).fill(false)));
const PRE_SHUFFLE_FLIP_AESTHETIC_FIRST_TRIALS = FLIP_AES_TYPE.concat(SHUFFLE_ARRAY(FLIP_AES_TYPE.slice()));
const AES_FIRST_TRIALS_ARR_OBJ = SHUFFLE_TWO_ARRAYS(AESTHETIC_FIRST_TRIALS, PRE_SHUFFLE_FLIP_AESTHETIC_FIRST_TRIALS);
const AESTHETIC_FIRST_TRIALS_IMG_LIST = AES_FIRST_TRIALS_ARR_OBJ[1];
const FLIP_AESTHETIC_FIRST_TRIALS = AES_FIRST_TRIALS_ARR_OBJ[2];

const AESTHETIC_SECOND_TRIALS_IMG_LIST = AESTHETIC_FIRST_TRIALS_IMG_LIST.slice()
const FLIP_AESTHETIC_SECOND_TRIALS = [];
for (let tf of FLIP_AESTHETIC_FIRST_TRIALS) {
    FLIP_AESTHETIC_SECOND_TRIALS.push(!tf);
}
const AESTHETIC_IMG_LIST = AESTHETIC_FIRST_TRIALS_IMG_LIST.concat(AESTHETIC_SECOND_TRIALS_IMG_LIST);
const FLIP_AESTHETIC = FLIP_AESTHETIC_FIRST_TRIALS.concat(FLIP_AESTHETIC_SECOND_TRIALS);
const AESTHETIC_IMG_N = AESTHETIC_IMG_LIST.length;

var subj, chiral_instr, chiral_trial, aesthetic_instr, aesthetic_trial;

// ########  ########    ###    ########  ##    ##
// ##     ## ##         ## ##   ##     ##  ##  ##
// ##     ## ##        ##   ##  ##     ##   ####
// ########  ######   ##     ## ##     ##    ##
// ##   ##   ##       ######### ##     ##    ##
// ##    ##  ##       ##     ## ##     ##    ##
// ##     ## ######## ##     ## ########     ##

$(document).ready(function() {
    LOAD_IMG(0, STIM_PATH, PRELOAD_IMAGE_LIST, function() {});
    subj = new subjectObject(subj_properties)
    subj.id = subj.getID(ID_GET_VARIABLE_NAME);
    subj.detectVisibilityStart();
    subj.saveVisit();
    if (subj.phone) {
        HALT_EXPERIMENT('It seems that you are using a touchscreen device or a phone. Please use a laptop or desktop instead.<br /><br />If you believe you have received this message in error, please contact the experimenter at yichiachen@ucla.edu<br /><br />Otherwise, please switch to a laptop or a desktop computer for this experiment.');
    } else if (subj.valid_id){
        START_EXPERIMENT();
    }
});

//  ######  ##     ## ########        ## ########  ######  ########
// ##    ## ##     ## ##     ##       ## ##       ##    ##    ##
// ##       ##     ## ##     ##       ## ##       ##          ##
//  ######  ##     ## ########        ## ######   ##          ##
//       ## ##     ## ##     ## ##    ## ##       ##          ##
// ##    ## ##     ## ##     ## ##    ## ##       ##    ##    ##
//  ######   #######  ########   ######  ########  ######     ##

const SUBJ_TITLES = [
    'num',
    'startDate',
    'startTime',
    'id',
    'userAgent',
    'endTime',
    'duration',
    'quizAttemptN',
    'chiralReadingTimes',
    'chiralQuickReadingPageN',
    'aesReadingTimes',
    'aesQuickReadingPageN',
    'hiddenCount',
    'hiddenDurations',
    'serious',
    'maximized',
    'problems',
    'gender',
    'age',
    'debriefingQRt',
    'inView',
    'viewportW',
    'viewportH'
];

var subj_properties = {
    titles: SUBJ_TITLES,
    visitFile: VISIT_FILE,
    subjNumScript: SUBJ_NUM_SCRIPT,
    savingScript: SAVING_SCRIPT,
    subjNumFile: SUBJ_NUM_FILE,
    attritionFile: ATTRITION_FILE,
    subjFile: SUBJ_FILE,
    savingDir: SAVING_DIR,
    viewportMinW: VIEWPORT_MIN_W,
    viewportMinH: VIEWPORT_MIN_H,
    handleVisibilityChange: HANDLE_VISIBILITY_CHANGE
};

function START_EXPERIMENT() {
    chiral_instr = new instrObject(chiral_instr_properties);
    chiral_instr.example_index = 0;
    chiral_instr.start();
}

function HALT_EXPERIMENT(explanation) {
    $('.content-box').hide();
    $('#instr-text-chiral').html(explanation);
    $('#next-button-chiral').hide();
    $('#next-button-aesthetic').hide();
    $('#instr-box-chiral').show();
}

function END_EXPERIMENT() {
    window.location.href = "https://ucla.sona-systems.com/webstudy_credit.aspx?experiment_id=2008&credit_token=3def30686e3e4e8bb150e6c42db9b3b2&survey_code="+subj.id;
}

function HANDLE_VISIBILITY_CHANGE() {
    if (document.hidden) {
        subj.hiddenCount += 1;
        subj.hiddenStartTime = Date.now();
    } else  {
        subj.hiddenDurations.push((Date.now() - subj.hiddenStartTime)/1000);
    }
}

// #### ##    ##  ######  ######## ########
//  ##  ###   ## ##    ##    ##    ##     ##
//  ##  ####  ## ##          ##    ##     ##
//  ##  ## ## ##  ######     ##    ########
//  ##  ##  ####       ##    ##    ##   ##
//  ##  ##   ### ##    ##    ##    ##    ##
// #### ##    ##  ######     ##    ##     ##

const CHIRAL_INSTRUCTIONS_DICT = {
    0: [false, false, 'Welcome!<br /><br />This study is about 40 minutes long. Please read the instructions carefully, and do not use the refresh or back buttons.'],
    1: [SHOW_MAXIMIZE_WINDOW, false, 'For this study to work, the webpage will automatically switch to the full-screen view on the next page. Please stay in the full screen mode until the study automatically switches out from it.'],
    2: [HIDE_INSTR_IMG, SHOW_CHIRAL_PRACTICE_IMAGE, 'We are interested in your perception of photographs.<br /><br />You will view a pair of images on each display (as in the example below). One of the images will be a mirrored version of the other one.'],
    3: [false, false, 'Your job is to decide which one is the original version of the photo, and click on it. Afterwards, the next pair will show up.'],
    4: [SHOW_CHIRAL_PRACTICE_IMAGE, MAKE_CLICKABLE, 'Let’s try it once! Click on the original one:'],
    5: [HIDE_CHIRAL_PRACTICE_IMAGE, false, 'As you may have experienced, this is not exactly easy. It’s okay if you don’t feel very confident about your choices. Just follow your intuitions and do your best.'],
    6: [SHOW_CONSENT, false, "Now we are starting!<br /><br /> Stay focused and don’t switch to other windows or tabs.<br /><br />Press SPACE whenever you are ready."],
};

const AESTHETIC_INSTRUCTIONS_DICT = {
    0: [false, false, 'Great! You are done with the first part!<br /><br />In the next part of this study, we are interested in your aesthetic preferences.'],
    1: [false, false, 'You will view a series of images one by one (some of them will be similar to what you saw earlier).'],
    2: [SHOW_SCALE, false, 'Your job is to indicate how visually pleasing each image appears to you. You will use a rating scale from 1 to 6, with 1 meaning “not at all visually pleasing” and 6 meaning “very visually pleasing”.'],
    3: [HIDE_SCALE, false, "The next page is a quick instructions quiz. (It's very easy!)"],
    4: [SHOW_INSTR_QUESTION_AESTHETIC, false, ''],
    5: [START_TRIAL_AESTHETIC, false, "Great! Now we are starting! Again, please stay focused.<br /><br />Press SPACE to start."],
};

function SHOW_INSTR_IMG(file_name) {
    $('#instr-img').attr('src', STIM_PATH + file_name);
    $('#instr-img').css('display', 'block');
}

function HIDE_INSTR_IMG() {
    $('#instr-img').css('display', 'none');
    MAXIMIZE_WINDOW();
    document.addEventListener('fullscreenchange', exitHandler);
    document.addEventListener('webkitfullscreenchange', exitHandler);
    document.addEventListener('mozfullscreenchange', exitHandler);

    function exitHandler() {
        if (!document.fullscreenElement && !document.webkitIsFullScreen && !document.mozFullScreen && !$('#debriefing-box').is(':visible')) {
            $('.full-screen-button').show();
        }
    }
}

function SHOW_MAXIMIZE_WINDOW() {
    SHOW_INSTR_IMG('maximize_window.png');
}

function MAXIMIZE_WINDOW() {
    let el = document.documentElement;
    if (el.requestFullscreen) {
        el.requestFullscreen();
    } else if (el.mozRequestFullScreen) { /* Firefox */
        el.mozRequestFullScreen();
    } else if (el.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        el.webkitRequestFullscreen();
    } else { /* IE/Edge */
        el.msRequestFullscreen();
    }
    $('.full-screen-button').hide();
}

function EXIT_MAXIMIZE_WINDOW() {
    let el = document;
    if (el.exitFullscreen) {
        el.exitFullscreen();
    } else if (el.mozCancelFullScreen) { /* Firefox */
        el.mozCancelFullScreen();
    } else if (el.webkitExitFullscreen) { /* Chrome, Safari and Opera */
        el.webkitExitFullscreen();
    } else { /* IE/Edge */
        el.msExitFullscreen();
    }
}

function PREP_CHIRAL_PRACTICE_IMG(file_name) {
    $('#example-left').attr('src', STIM_PATH + file_name);
    $('#example-right').attr('src', STIM_PATH + file_name);
}

function SHOW_CHIRAL_PRACTICE_IMAGE() {
    PREP_CHIRAL_PRACTICE_IMG(CHIRAL_EXAMPLE_LIST[chiral_instr.example_index]);
    chiral_instr.example_index++;
    $('.img-box').show();
    $('#example-left').show();
    $('#example-right').show();
    SHOW_CAPTION();
}

function SHOW_CAPTION() {
    $('#caption-left').show();
    $('#caption-right').show();
}

function MAKE_CLICKABLE() { // Let subjects click on example chiral discrimination trial
    $('#next-button-chiral').hide();
    $('#caption-left').hide();
    $('#caption-right').hide();
    $('#example-left').css('cursor', 'pointer');
    $('#example-right').css('cursor', 'pointer');
    $('#example-left').mouseup(NEXT_IMAGE);
    $('#example-right').mouseup(NEXT_IMAGE);
    function NEXT_IMAGE(e) {
        if (e.button == 0) {
            $('#example-left').unbind('mouseup');
            $('#example-right').unbind('mouseup');
            chiral_instr.next();
            $('#next-button-chiral').show();
        }
    }
}

function HIDE_CHIRAL_PRACTICE_IMAGE() {
    $('.img-box').hide();
}

function SHOW_SCALE() {
    $('#instruction-rating-area').show();
}

function HIDE_SCALE() {
    $('#instruction-rating-area').hide();
}

function SHOW_INSTR_QUESTION_AESTHETIC() {
    $('#instr-box-aesthetic').hide();
    $('#next-button-aesthetic').hide();
    $('#quiz-box-aesthetic').show();
}

function SUBMIT_INSTR_Q_AESTHETIC() {
    const CHOICE = $('input[name="quiz"]:checked').val();
    aesthetic_instr.attempts += 1;
    if (typeof CHOICE == 'undefined') {
        $('#quiz-warning-aesthetic').text('Please answer the question. Thank you!');
        $('#quiz-warning-aesthetic').show();
    } else if (CHOICE != 'aesSelf') {
        aesthetic_instr.index+=1;
        $('#instr-text-aesthetic').text('You have given an incorrect answer. Please read the instructions again carefully.');
        $('#instr-box-aesthetic').show();
        $('#next-button-aesthetic').show();
        $('#quiz-box-aesthetic').hide();
        $('input[name="quiz"]:checked').prop('checked', false);
        aesthetic_instr.index = -1;
    } else {
        aesthetic_instr.next();
        $('#quiz-box-aesthetic').hide();
        $('#instr-box-aesthetic').show();
    }
}

function SHOW_CONSENT() {
    $('#next-button-chiral').hide();
    $('#consent-box').show();
    $(document).keyup(function(e) {
        if (e.key == ' ') {
            $(document).off('keyup');
            chiral_instr.next();
            $('#instr-box-chiral').hide();
            subj.saveAttrition();
            SHOW_CHIRAL();
        }
    });
}

function START_TRIAL_AESTHETIC() {
    $('#next-button-aesthetic').hide();
    $(document).keyup(function(e) {
        if (e.key == ' ') {
            $(document).off('keyup');
            aesthetic_instr.next();
            $('#instr-box-aesthetic').hide();
            SHOW_AESTHETIC();
        }
    });
}

function SUBMIT_DEBRIEFING_Q() {
    subj.serious = $('input[name=serious]:checked').val();
    subj.maximized = $('input[name=maximized]:checked').val();
    subj.problems = $('#problems').val();
    subj.gender = $('input[name=gender]:checked').val();
    subj.age = $('#age').val();
    const OPEN_ENDED_LIST = [subj.problems, subj.age];
    const OPEN_ENDED_ATTRIBUTE_NAMES = ['problems', 'age'];
    const CHOICE_LIST = [subj.serious, subj.maximized, subj.gender];
    const ALL_RESPONDED = CHECK_IF_RESPONDED(OPEN_ENDED_LIST, CHOICE_LIST);
    if (ALL_RESPONDED) {
        subj.debriefingQRt = (Date.now() - subj.debriefStartTime)/1000;
        for (var i = 0; i < OPEN_ENDED_LIST.length; i++) {
            subj[OPEN_ENDED_ATTRIBUTE_NAMES[i]] = subj[OPEN_ENDED_ATTRIBUTE_NAMES[i]].replace(/(?:\r\n|\r|\n)/g, '<br />'); // Replaced returns with space
        }
        subj.quizAttemptN = aesthetic_instr.attempts;
        subj.chiralReadingTimes = JSON.stringify(chiral_instr.readingTimes);
        subj.aesReadingTimes = JSON.stringify(aesthetic_instr.readingTimes);
        subj.aesQuickReadingPageN = Object.values(aesthetic_instr.readingTimes).filter(d => d < INSTR_READING_TIME_MIN).length;
        subj.chiralQuickReadingPageN = Object.values(chiral_instr.readingTimes).filter(d => d < INSTR_READING_TIME_MIN).length;
        subj.submitDebriefing();
        EXIT_MAXIMIZE_WINDOW();
        $('.full-screen-button').hide(); // Handles when window is not in fullscreen when debriefing is submitted
        subj.detectVisibilityEnd();
        $('#questions-box').hide();
        $('#debriefing-box').show();
        $(document).scrollTop(0);
    } else {
        $('#questions-warning').text('Please give valid response to all questions. Thank you!');

    }
}

var chiral_instr_properties = {
    textBox: $('#instr-box-chiral'),
    textElement: $('#instr-text-chiral'),
    dict: CHIRAL_INSTRUCTIONS_DICT,
};

var aesthetic_instr_properties = {
    textBox: $('#instr-box-aesthetic'),
    textElement: $('#instr-text-aesthetic'),
    dict: AESTHETIC_INSTRUCTIONS_DICT
};

// ########    ###     ######  ##    ##
//    ##      ## ##   ##    ## ##   ##
//    ##     ##   ##  ##       ##  ##
//    ##    ##     ##  ######  #####
//    ##    #########       ## ##  ##
//    ##    ##     ## ##    ## ##   ##
//    ##    ##     ##  ######  ##    ##

const CHIRAL_TITLES = [
    'num',
    'date',
    'subjStartTime',
    'trialNum',
    'stimName',
    'flipLeft',
    'inView',
    'response',
    'rt'
];

const AES_TITLES = [
    'num',
    'date',
    'subjStartTime',
    'trialNum',
    'stimName',
    'mirrored',
    'inView',
    'response',
    'rt'
];

// CHIRAL DISCRIMINATION
function SHOW_CHIRAL() {
    chiral_properties['subj'] = subj;
    chiral_trial = new trialObject(chiral_properties);
    $('#chiral-task').show();
    $('.img-box').show();
    chiral_trial.run();
}

function UPDATE_CHIRAL(last, this_trial, next_trial, path) {
    chiral_trial.stimName = this_trial;
    $('#trial-progress-chiral').text(chiral_trial.progress);
    $('#img-left').attr('src', path + this_trial);
    $('#img-right').attr('src', path + this_trial);
    chiral_trial.flipLeft = FLIP_CHIRAL[chiral_trial.trialNum-1];
    if (chiral_trial.flipLeft) {
        $('#img-left').addClass('flip');
    } else {
        $('#img-right').addClass('flip');
    }
    if (!last) {
        $('#buffer-img').attr('src', path + next_trial);
    }
}

function CHIRAL() {
    $('#img-left').show();
    $('#img-right').show();
    $('.img-selection').mouseup(
        function(event) {
            if (event.button == 0) {
                $('.img-selection').unbind('mouseup');
                chiral_trial.inView = CHECK_FULLY_IN_VIEW($('#img-left')) && CHECK_FULLY_IN_VIEW($('#img-right'));
                $('#img-left').hide();
                $('#img-right').hide();
                var id = $(event.target).attr('id');
                $('#img-left').removeClass('flip');
                $('#img-right').removeClass('flip');
                chiral_trial.end(id.replace('img-',''));
            }
        }
    );
}

function END_CHIRAL() {
    $('#chiral-task').hide();
    chiral_trial.save();
    aesthetic_instr = new instrObject(aesthetic_instr_properties);
    aesthetic_instr.start();
}

var chiral_properties = {
    titles: CHIRAL_TITLES,
    trialN: CHIRAL_IMG_N,
    trialNum: 0, // Keeps track of which trial we are on
    stimPath: STIM_PATH,
    savingDir: SAVING_DIR,
    dataFile: CHIRAL_DISCRIMINATION_FILE,
    savingScript: SAVING_SCRIPT,
    trialList: CHIRAL_IMG_LIST,
    intertrialInterval: INTERTRIAL_INTERVAL,
    updateFunc: UPDATE_CHIRAL,
    trialFunc: CHIRAL,
    endExptFunc: END_CHIRAL,
    progressInfo: true
};

// AESTHETIC RATING
function SHOW_AESTHETIC() {
    $('#aesthetic-task').show();
    aesthetic_properties['subj'] = subj;
    aesthetic_trial = new trialObject(aesthetic_properties);
    aesthetic_trial.run();
}

function UPDATE_AESTHETIC(last, this_trial, next_trial, path) {
    aesthetic_trial.stimName = this_trial;
    $('#trial-progress-aesthetic').text(aesthetic_trial.progress);
    $('#img-center').attr('src', path + this_trial);
    aesthetic_trial.mirrored = FLIP_AESTHETIC[aesthetic_trial.trialNum-1]
    if (aesthetic_trial.mirrored) {
        $('#img-center').addClass('flip');
    }
    if (!last) {
        $('#buffer-img').attr('src', path + next_trial);
    }
}

function AESTHETIC() {
    $('#img-center').show();
    $('.rating-button').mouseup(
        function(event) {
            $('.rating-button').unbind('mouseup');
            aesthetic_trial.inView = CHECK_FULLY_IN_VIEW($('#img-center'));
            $('#img-center').hide();
            $('#img-center').removeClass('flip');
            var target = $(event.target).closest('.rating-button');
            aesthetic_trial.end(target.attr('id'));
        }
    );
}

function END_AESTHETIC() {
    $('#aesthetic-task').hide();
    $('#questions-box').show();
    subj.debriefStartTime = Date.now();
    aesthetic_trial.save();
}

var aesthetic_properties = {
    titles: AES_TITLES,
    trialN: AESTHETIC_IMG_N,
    trialNum: 0, // Keeps track of which trial we are on
    stimPath: STIM_PATH,
    savingDir: SAVING_DIR,
    dataFile: AESTHETIC_RATING_FILE,
    savingScript: SAVING_SCRIPT,
    trialList: AESTHETIC_IMG_LIST,
    intertrialInterval: INTERTRIAL_INTERVAL,
    updateFunc: UPDATE_AESTHETIC,
    trialFunc: AESTHETIC,
    endExptFunc: END_AESTHETIC,
    progressInfo: true
};