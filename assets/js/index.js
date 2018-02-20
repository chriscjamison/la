/* index.js ~ Renders the mobile landing page after the desktop landing page has loaded. */

$(document).ready(
  function () {

  }
);

function buildTemplateHTML () {
  /**** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ***
   * @params - NONE
   * 
   * PURPOSE OF FUNCTION 
   *   Returns the HTML which contains the basic 'sections' of the Landing Page such as 
   *   the <DOCTYPE>, <html>, <head> tags along with others.
   *   
   * FUNCTIONS WHICH USE 'buildHeaderHTML'
   * 
    *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ****/

  // Initialize Object which contains the basic semantic HTML which makes up the Landing Page.
  var template_html = {};

  // Store the HTML references within 'template'.
  template_html = {
    head: "<head></head>", 
    body: "<body></body>", 
    header: "<header></header>", 
    nav: "<nav></nav>", 
    footer: "<footer></footer>", 
    section: "<section></section>"
  };

  // Send 'template_html' for processing by another function.
  return template_html;

} // END of FUNCTION 'buildTemplateHTML'

function buildHeaderHTML () {
  /**** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ***
   * @params - NONE
   * 
   * PURPOSE OF FUNCTION 
   *   Returns the HTML which is contained within the <head> tag of the Landing Page.
   *   
   * FUNCTIONS WHICH USE 'buildHeaderHTML'
   * 
    *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ****/

  // Initialize JS object which contains the HTML references used within the <head> tag.
  var header_html = {};

  // Store the HTML references within 'header_html'.
  header_html = {
    title: "<title>Leaders Academy</title>", 
    meta_http: "<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" />", 
    stylesheet: "<link rel=\"stylesheet\" href=\"/skin/skin020/mobile/assets/css/mobile.css\">", 
    jquery: "<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>", 
    javascript: "<script src=\"/skin/skin020/mobile/assets/js/mobile.js\"></script>"
  };

  // Send the HTML out to be processed by another function
  return header_html;

} // END of FUNCTION 'buildHeaderHTML'

function storeNavigationMetadata () {
  /**** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ***
   * @params - 
   *   'semantic_html' - Object - Contains semantic HTML which holds the links to the 
   *                              Landing Page.
   *   'nav_data' ------ Object - Contains the metadata for the various sections.
   * 
   * PURPOSE OF FUNCTION 
   *   Returns the metadata such as the HTML attributes, "id", "title", & "href" 
   *   which makes up the Main Navigation of the Landing Page.
   *   
   * FUNCTIONS WHICH USE 'storeNavigationMetadata'
   * 
    *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ****/

  // Initialize Object which contains the metadata for the various sections.
  var nav_data = {};
  
  // Initialize String which contains the basic filepath to the landing pages for each section.
  var base_path;

  // Store the HTML attributes, "id", "title", & "href" for the various sections within 'nav_data'.
  nav_data = {
    gap_data : {
      id: "gpa",  
      title: "GPA/Testing", 
      href: "gpa/index_gpa.htm"
    }, 
    english_data : {
      id: "english", 
      title: "English", 
      href: "english/index_english.htm"
    }, 
    camps_data : {
      id: "camps", 
      title: "Camps", 
      href: "camps/index_camps.htm"
    }, 
    lessons_data : { 
      id: "lessons", 
      title: "Lessons", 
      href: "lessons/index_lessons.htm"
    }, 
    awards_data : { 
      id: "awards", 
      title: "Awards", 
      href: "awards/index_awards.htm"
    }, 
    debate_data : { 
      id: "debate", 
      title: "Debate", 
      href: "debate/index_debate.htm"
    }, 
    events_data : { 
      id: "events", 
      title: "Events", 
      href: "events/index_events.htm"
    }, 
    announcements_data : { 
      id: "announcements", 
      title: "Announcements", 
      href: "announcements/index_announcements.htm"
    }, 
    apply_students_data : { 
      id: "apply_students", 
      title: "Apply (Students)", 
      href: "apply_students/index_apply_students.htm"
    }, 
    faculty_data : { 
      id: "faculty", 
      title: "Faculty", 
      href: "faculty/index_faculty.htm"
    }, 
    apply_faculty_data : { 
      id: "apply_faculty", 
      title: "Apply (Faculty)", 
      href: "apply_faculty/index_apply_faculty.htm"
    }, 
    business_data : { 
      id: "business", 
      title: "Business", 
      href: "business/index_business.htm"
    }, 
    about_us_data : { 
      id: "about_us", 
      title: "About Us", 
      href: "about_us/index_about_us.htm"
    }, 
    contact_us_data : { 
      id: "contact_us", 
      title: "Contact Us", 
      href: "contact_us/index_contact_us.htm"
    }, 
    location_data : { 
      id: "location", 
      title: "Location", 
      href: "location/index_location.htm"
    }, 
    media_data : { 
      id: "media", 
      title: "Media", 
      href: "media/index_media.htm"
    }
  }

  // Send the metadata out for processing by another function.
  return nav_data;

} // END of FUNCTION 'buildNavigationHTML'

function renderLandingPage () {
  /**** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ***
   * @params - NONE
   * 
   * PURPOSE OF FUNCTION 
   *   Using the jQuery Method, '.html()', the HTML of the desktop landing page is swapped 
   *   out for a mobile-friendly HTML template.
   *   
   * FUNCTIONS WHICH USE 'renderLandingPage'
   * 
    *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ****/

  // Initialize String which holds the selector for the HTML tag, <html>.
  var html_selector;
  
  // Initialize Object which contains the jQuery object for the HTML tag, "html".
  var html_element = {};

  html_selector = "html";
  html_element = $(html_selector);

  // Initialize variable which holds the Object which contains the HTML used for the 'frame' 
  // of the mobile-friendly template.
  var html_data;

  // Initialize String which contains the raw HTML used for the 'frame' of the mobile-friendly 
  // template.
  var html_html;

  // Pull the HTML for the 'frame' by calling the Function, 'buildTemplateHTML'.
  html_data = buildTemplateHTML();

  // Extract the HTML from the Object variable.
  html_html = html_data.head + html_data.body + html_data.header + html_data.nav + html_data.footer + html_data.section;

  $(html_element).html(html_html);
  
} // END of FUNCTION 'renderLandingPage'