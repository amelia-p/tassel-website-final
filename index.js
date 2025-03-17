//FUNCTIONS
//flex is a property that makes elements easier to manipulate in the page with flexbox properties -- better for overall design 
//and layout of a page

function aboutTextDisplay(about_index){ 
    mission_text.style.display = "none";
    mission_heading.style.display = "none";
    history_text.style.display = "none";
    history_heading.style.display = "none";
    heading_students.style.display = "none";
    students_text.style.display = "none";
    heading_national_high_school_graduation_exam_pass_rate.style.display = "none";
    years.style.display = "none";
    types_of_students.style.display = "none";
    resources_text_students_1.style.display = "none";
    resources_text_students_2.style.display = "none";
    button_speaking.style.display = "none";
    button_listening.style.display = "none";
    button_reading.style.display = "none";
    button_writing.style.display = "none";
    heading_resources_students.style.display = "none";
    contacts_text.style.display = "none";
    table_leaders.style.display = "none";
    table_chapters.style.display = "none";
    heading_contacts_text.style.display = "none";
    email_form.style.display= "none";
    right_arrow_about.style.display = "none";
    left_arrow_about.style.display = "none";
    right_arrow_schools.style.display = "none";
    left_arrow_schools.style.display = "none";
    for (let i=0; i<aboutTexts.length; i++){
        aboutTexts[i].style.display = "none";
        aboutTextsHeading[i].style.display = "none";
    }
    for (let i=0; i<schoolsTexts.length; i++){
        schoolsTexts[i].style.display = "none";
        schoolsTextsHeadings[i].style.display = "none";
        big_heading_what_chapters_do.style.display = "none";
    }


    if(about_index<6){
        aboutTexts[about_index].style.display = "flex";
        aboutTextsHeading[about_index].style.display = "flex";
        console.log("ran aboutTextDisplay, index = "+about_index);
    }
 }
 function schoolsTextsDisplay(schools_index){ 
    mission_text.style.display = "none";
    mission_heading.style.display = "none";
    history_text.style.display = "none";
    history_heading.style.display = "none";
    heading_students.style.display = "none";
    students_text.style.display = "none";
    heading_national_high_school_graduation_exam_pass_rate.style.display = "none";
    years.style.display = "none";
    types_of_students.style.display = "none";
    resources_text_students_1.style.display = "none";
    resources_text_students_2.style.display = "none";
    button_speaking.style.display = "none";
    button_listening.style.display = "none";
    button_reading.style.display = "none";
    button_writing.style.display = "none";
    heading_resources_students.style.display = "none";
    contacts_text.style.display = "none";
    table_leaders.style.display = "none";
    table_chapters.style.display = "none";
    heading_contacts_text.style.display = "none";
    email_form.style.display= "none";
    right_arrow_about.style.display = "none";
    left_arrow_about.style.display = "none";
    right_arrow_schools.style.display = "none";
    left_arrow_schools.style.display = "none";
    for (let i=0; i<aboutTexts.length; i++){
        aboutTexts[i].style.display = "none";
        aboutTextsHeading[i].style.display = "none";
    }
    for (let i=0; i<schoolsTexts.length; i++){
        schoolsTexts[i].style.display = "none";
        schoolsTextsHeadings[i].style.display = "none";
        big_heading_what_chapters_do.style.display = "none";
    }


    if(schools_index<6){
        schoolsTexts[schools_index].style.display = "flex";
        schoolsTextsHeadings[schools_index].style.display = "flex";
        big_heading_what_chapters_do.style.display = "flex";
        console.log("ran schoolsTextsDisplay, index = "+schools_index);
    }
 }


 function display(input){
    for (let i=0; i<aboutTexts.length; i++){
        aboutTexts[i].style.display = "none";
        aboutTextsHeading[i].style.display = "none";
    }
    for (let i=0; i<schoolsTexts.length; i++){
        schoolsTexts[i].style.display = "none";
        schoolsTextsHeadings[i].style.display = "none";
        big_heading_what_chapters_do.style.display = "none";
    }
    mission_text.style.display = "none";
    mission_heading.style.display = "none";
    history_text.style.display = "none";
    history_heading.style.display = "none";
    heading_students.style.display = "none";
    students_text.style.display = "none";
    heading_national_high_school_graduation_exam_pass_rate.style.display = "none";
    years.style.display = "none";
    types_of_students.style.display = "none";
    resources_text_students_1.style.display = "none";
    resources_text_students_2.style.display = "none";
    button_speaking.style.display = "none";
    button_listening.style.display = "none";
    button_reading.style.display = "none";
    button_writing.style.display = "none";
    heading_resources_students.style.display = "none";
    contacts_text.style.display = "none";
    table_leaders.style.display = "none";
    table_chapters.style.display = "none";
    heading_contacts_text.style.display = "none";
    email_form.style.display= "none";
    right_arrow_about.style.display = "none";
    left_arrow_about.style.display = "none";
    right_arrow_schools.style.display = "none";
    left_arrow_schools.style.display = "none";
    


    input.style.display = "flex";
}

function displayAtSameTime(input){
    input.style.display = "flex";
}

//displays images as well as arrows for slideshow
function imageDisplay(image){
    curious_students_at_window.style.display = "none";
    grandmother_and_student.style.display = "none";
    joji_teaching.style.display = "none";
    opening_of_a_classroom.style.display = "none";
    student_with_microphone.style.display = "none";
    students_peace_sign.style.display = "none";
    XO_game.style.display = "none";
    skulls.style.display = "none";
    in_a_pond.style.display = "none";
    khmer_rouge_in_city.style.display = "none";
    khmer_rouge_soldiers.style.display = "none";
    two_students_smiling.style.display = "none";
    girl_waiting_in_line.style.display = "none";
    school_skeleton.style.display = "none";
    students_resting.style.display = "none";
    students_waving.style.display = "none";
    teacher_and_mother_reunion.style.display = "none";
    student_running_through_arms.style.display = "none";
    khmer_teachers.style.display = "none";
    joji_and_teachers.style.display = "none";
    two_boys.style.display = "none";
    swing.style.display = "none";
    joji_hugs_a_student.style.display = "none";


    image.style.display = "flex";

    if (image == curious_students_at_window){
        about_initiated = true;
        schools_initiated = false;
        image_index=0;
        //console.log("about_initiated = "+about_initiated+" and schools_initiated = "+schools_initiated);
    }
    else if (image == girl_waiting_in_line){
        schools_initiated = true;
        about_initiated = false;
        image_index=0;
        //console.log("about_initiated = "+about_initiated+" and schools_initiated = "+schools_initiated);
    }
    else{
        about_initiated = false; 
        schools_initiated = false;
        //console.log("about_initiated = "+about_initiated+" and schools_initiated = "+schools_initiated);
    }
}

function rightArrowClicked(gallery){
    if(image_index>4){
        return;
    }    
    image_index++;
    imageDisplay(gallery[image_index]);
    if (gallery == about_gallery){
        aboutTextDisplay(image_index);
    }
    else { //gallery == schools_gallery
        schoolsTextsDisplay(image_index);
    }
}

function leftArrowClick(gallery){
    if(image_index<1){
        return;
    }
    image_index--;
    imageDisplay(gallery[image_index]);
    if (gallery == about_gallery){
        aboutTextDisplay(image_index);
    }
    else { //gallery == schools_gallery
        schoolsTextsDisplay(image_index);
    }
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//HTML ELEMENTS
//front page


//about
let about_button = document.getElementById("b_about");
let about_text = document.getElementById("about_text");
let aboutTexts = [6];

let english_education = document.getElementById("english_education"); //about
aboutTexts[0]=english_education;

let teaching = document.getElementById("teaching"); //about
aboutTexts[1]=teaching;

let teaching_jobs = document.getElementById("teaching_jobs"); //about
aboutTexts[2]=teaching_jobs;

let food_aid = document.getElementById("food_aid"); //about
aboutTexts[3]=food_aid;

let medical_aid = document.getElementById("medical_aid"); //about
aboutTexts[4]=medical_aid;

let emotional_care = document.getElementById("emotional_care"); //about
aboutTexts[5]=emotional_care;


let aboutTextsHeading = [6];
let about_heading1 = document.getElementById("heading_paee");
aboutTextsHeading[0] = about_heading1;

let about_heading2 = document.getElementById("heading_t");
aboutTextsHeading[1] = about_heading2;

let about_heading3 = document.getElementById("heading_tj");
aboutTextsHeading[2] = about_heading3;

let about_heading4 = document.getElementById("heading_fa");
aboutTextsHeading[3] = about_heading4;

let about_heading5 = document.getElementById("heading_ma");
aboutTextsHeading[4] = about_heading5;

let about_heading6 = document.getElementById("heading_ec");
aboutTextsHeading[5] = about_heading6;



//mission
let mission_button = document.getElementById("b_mission");
let mission_text = document.getElementById("mission_text");
let mission_heading = document.getElementById("mission_heading");


//history
let history_button = document.getElementById("b_history");
let history_text = document.getElementById("history_text");
let history_heading = document.getElementById("history_heading");


//schools
let schools_button = document.getElementById("b_schools");
let schools_text = document.getElementById("schools_text");


let schoolsTexts = [5];
let schoolsTextsHeadings = [5];

let big_heading_what_chapters_do = document.getElementById("big_heading_what_chapters_do");

let schools_and_chapters = document.getElementById("schools_and_chapters"); //1
schoolsTexts[0] = schools_and_chapters;
let heading_schools_and_chapters = document.getElementById("heading_schools_and_chapters");
schoolsTextsHeadings[0] = heading_schools_and_chapters;

let teach_remotely = document.getElementById("teach_remotely"); //2
schoolsTexts[1] = teach_remotely;
let heading_teach_remotely = document.getElementById("heading_teach_remotely");
schoolsTextsHeadings[1] = heading_teach_remotely;

let fundraise = document.getElementById("fundraise"); //3
schoolsTexts[2] = fundraise;
let heading_fundraise = document.getElementById("heading_fundraise");
schoolsTextsHeadings[2] = heading_fundraise;

let spread_awareness = document.getElementById("spread_awareness"); //4
schoolsTexts[3] = spread_awareness;
let heading_spread_awareness = document.getElementById("heading_spread_awareness");
schoolsTextsHeadings[3] = heading_spread_awareness;

let teach_and_serve = document.getElementById("teach_and_serve"); //5
schoolsTexts[4] = teach_and_serve;
let heading_teach_and_serve = document.getElementById("heading_teach_and_serve");
schoolsTextsHeadings[4] = heading_teach_and_serve;

let tassel_origins = document.getElementById("tassel_origins");
schoolsTexts[5] = tassel_origins;
let heading_tassel_origins = document.getElementById("heading_tassel_origins");
schoolsTextsHeadings[5] = heading_tassel_origins;



//students
let students_button = document.getElementById("b_students");
let students_text = document.getElementById("students_text");
let heading_students = document.getElementById("heading_students");
let heading_national_high_school_graduation_exam_pass_rate = document.getElementById("heading_national_high_school_graduation_exam_pass_rate");
let years = document.getElementById("years");
let types_of_students = document.getElementById("types_of_students");

//resources
let resources_button = document.getElementById("b_resources");
let resources_text_students_1 = document.getElementById("resources_text_students_1");
let resources_text_students_2 = document.getElementById("resources_text_students_2");
let heading_resources_students = document.getElementById("heading_resources_students");

//contacts
let contacts_button = document.getElementById("b_contacts");
let contacts_text = document.getElementById("contacts_text");
let heading_contacts_text = document.getElementById("heading_contacts_text");
    //send a message option - contact form
let email_form = document.getElementById("email_form");


//images + gallery (array)
    //about

let about_gallery = [6];

let curious_students_at_window = document.getElementById("curious_students_at_window");
about_gallery[0] = curious_students_at_window;
let grandmother_and_student = document.getElementById("grandmother_and_student");
about_gallery[1] = grandmother_and_student;
let joji_teaching = document.getElementById("joji_teaching");
about_gallery[2] = joji_teaching;
let opening_of_a_classroom = document.getElementById("opening_of_a_classroom");
about_gallery[3] = opening_of_a_classroom;
let student_with_microphone = document.getElementById("student_with_microphone");
about_gallery[4] = student_with_microphone;
let students_peace_sign = document.getElementById("students_peace_sign");
about_gallery[5] = students_peace_sign;

    //mission image
let XO_game = document.getElementById("XO_game");
let two_students_smiling = document.getElementById("two_students_smiling");
    //history images
let skulls = document.getElementById("skulls");
let khmer_rouge_in_city = document.getElementById("khmer_rouge_in_city");
let khmer_rouge_soldiers = document.getElementById("khmer_rouge_soldiers");

    //schools
let schools_gallery = [6];

let girl_waiting_in_line = document.getElementById("girl_waiting_in_line");
schools_gallery[0] = girl_waiting_in_line;
let school_skeleton = document.getElementById("school_skeleton");
schools_gallery[1] = school_skeleton;
let students_resting = document.getElementById("students_resting");
schools_gallery[2] = students_resting;
let students_waving = document.getElementById("students_waving");
schools_gallery[3] = students_waving;
let teacher_and_mother_reunion = document.getElementById("teacher_and_mother_reunion");
schools_gallery[4] = teacher_and_mother_reunion;
let student_running_through_arms = document.getElementById("student_running_through_arms");
schools_gallery[5] = student_running_through_arms;



    //students
//let in_a_pond = document.getElementById("in_a_pond");
let khmer_teachers = document.getElementById("khmer_teachers");
let joji_and_teachers = document.getElementById("joji_and_teachers");
let two_boys = document.getElementById("two_boys");
    //resources
let swing = document.getElementById("swing");
let button_speaking = document.getElementById("speaking");
let button_listening = document.getElementById("listening");
let button_reading = document.getElementById("reading");
let button_writing = document.getElementById("writing");

    //contacts
let joji_hugs_a_student = document.getElementById("joji_hugs_a_student");
let table_chapters = document.getElementById("table_1");
let table_leaders = document.getElementById("table_2");



//arrows
let right_arrow_about = document.getElementById("right_arrow_about");
let left_arrow_about = document.getElementById("left_arrow_about");

let right_arrow_schools = document.getElementById("right_arrow_schools");
let left_arrow_schools = document.getElementById("left_arrow_schools");


//CODE///////////////////////////////////////////////////////////////////////////////////

let image_index = 0;
//.bind makes it so that the eventListener doesn't run because of the () --> (parameter) which makes it run immediately
image_index = 0;
let about_initiated = false;
let schools_initiated = false;
//console.log("image_index is = "+image_index);
about_button.addEventListener("click", aboutTextDisplay.bind(this, image_index));
about_button.addEventListener("click", imageDisplay.bind(this, curious_students_at_window));
about_button.addEventListener("click", displayAtSameTime.bind(this, right_arrow_about));
about_button.addEventListener("click", displayAtSameTime.bind(this, left_arrow_about));
right_arrow_about.addEventListener("click", rightArrowClicked.bind(this, about_gallery));
right_arrow_about.addEventListener("click", displayAtSameTime.bind(this, right_arrow_about));
right_arrow_about.addEventListener("click", displayAtSameTime.bind(this, left_arrow_about));
left_arrow_about.addEventListener("click", leftArrowClick.bind(this, about_gallery));
left_arrow_about.addEventListener("click", displayAtSameTime.bind(this, left_arrow_about));
left_arrow_about.addEventListener("click", displayAtSameTime.bind(this, right_arrow_about));


mission_button.addEventListener("click", display.bind(this, mission_text));
mission_button.addEventListener("click", displayAtSameTime.bind(this, mission_heading));
mission_button.addEventListener("click", imageDisplay.bind(this, XO_game));
mission_button.addEventListener("click", displayAtSameTime.bind(this, two_students_smiling));


history_button.addEventListener("click", display.bind(this, history_text));
history_button.addEventListener("click", displayAtSameTime.bind(this, history_heading));
history_button.addEventListener("click", imageDisplay.bind(this, skulls));
history_button.addEventListener("click", displayAtSameTime.bind(this, khmer_rouge_in_city));
history_button.addEventListener("click", displayAtSameTime.bind(this, khmer_rouge_soldiers));

image_index = 0;
schools_button.addEventListener("click", schoolsTextsDisplay.bind(this, image_index));
schools_button.addEventListener("click", imageDisplay.bind(this, girl_waiting_in_line));
schools_button.addEventListener("click", displayAtSameTime.bind(this, left_arrow_schools));
schools_button.addEventListener("click", displayAtSameTime.bind(this, right_arrow_schools));
right_arrow_schools.addEventListener("click", rightArrowClicked.bind(this, schools_gallery));
right_arrow_schools.addEventListener("click", displayAtSameTime.bind(this, left_arrow_schools));
right_arrow_schools.addEventListener("click", displayAtSameTime.bind(this, right_arrow_schools));
left_arrow_schools.addEventListener("click", leftArrowClick.bind(this, schools_gallery));
left_arrow_schools.addEventListener("click", displayAtSameTime.bind(this, left_arrow_schools));
left_arrow_schools.addEventListener("click", displayAtSameTime.bind(this, right_arrow_schools));

students_button.addEventListener("click", display.bind(this, students_text));
students_button.addEventListener("click", displayAtSameTime.bind(this, heading_students));
students_button.addEventListener("click", imageDisplay.bind(this, khmer_teachers));
students_button.addEventListener("click", displayAtSameTime.bind(this, joji_and_teachers));
students_button.addEventListener("click", displayAtSameTime.bind(this, two_boys));
students_button.addEventListener("click", displayAtSameTime.bind(this, heading_national_high_school_graduation_exam_pass_rate));
students_button.addEventListener("click", displayAtSameTime.bind(this, years));
students_button.addEventListener("click", displayAtSameTime.bind(this, types_of_students));

resources_button.addEventListener("click", display.bind(this, resources_text_students_1));
resources_button.addEventListener("click", displayAtSameTime.bind(this, resources_text_students_2));
resources_button.addEventListener("click", displayAtSameTime.bind(this, heading_resources_students));
resources_button.addEventListener("click", displayAtSameTime.bind(this, button_listening));
resources_button.addEventListener("click", displayAtSameTime.bind(this, button_reading));
resources_button.addEventListener("click", displayAtSameTime.bind(this, button_speaking));
resources_button.addEventListener("click", displayAtSameTime.bind(this, button_writing));

resources_button.addEventListener("click", imageDisplay.bind(this, swing));


contacts_button.addEventListener("click", display.bind(this, contacts_text));
contacts_button.addEventListener("click", displayAtSameTime.bind(this, heading_contacts_text));
contacts_button.addEventListener("click", imageDisplay.bind(this, joji_hugs_a_student));
contacts_button.addEventListener("click", displayAtSameTime.bind(this, table_chapters));
contacts_button.addEventListener("click", displayAtSameTime.bind(this, table_leaders));
contacts_button.addEventListener("click", displayAtSameTime.bind(this, email_form));
//email_form.addEventListener("click", function!!!);
