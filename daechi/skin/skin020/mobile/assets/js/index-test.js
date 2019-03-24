/* index.js ~ Renders the mobile landing page after the desktop landing page has loaded. */

var jq = jQuery.noConflict();

function buildTemplateHTML () {
  /**** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ***
   * @params - NONE
   * 
   * PURPOSE OF FUNCTION 
   *   Returns the HTML which contains the basic 'sections' of the Landing Page such as 
   *   the <DOCTYPE>, <html>, <head> tags along with others.
   *   
   * FUNCTIONS WHICH USE 'buildTemplateHTML'
   *   + renderLandingPage
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



function buildHeadHTML () {
  /**** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ***
   * @params - NONE
   * 
   * PURPOSE OF FUNCTION 
   *   Returns the HTML which is contained within the <head> tag of the Landing Page.
   *   
   * FUNCTIONS WHICH USE 'buildHeadHTML'
   *   + renderHeadHTML
   * 
    *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ****/

  // Initialize JS object which contains the HTML references used within the <head> tag.
  var head_html = {};

  // Store the HTML references within 'header_html'.
  head_html = {
    // google_analytics: "<!-- Global site tag (gtag.js) - Google Analytics -->\n<script async src=\"https://www.googletagmanager.com/gtag/js?id=UA-112766766-1\"></script>\n<script>\nwindow.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'UA-112766766-1');\n</script>\n", 
    title: "<title>Leaders Academy</title>", 
    meta_http: "<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" />", 
    stylesheet: "<link rel=\"stylesheet\" href=\"/skin/skin020/mobile/assets/css/mobile-test.css\">", 
    jquery: "<script src=\"https://code.jquery.com/jquery-3.2.1.min.js\"></script>", 
    javascript: "<script src=\"/skin/skin020/mobile/assets/js/index-test.js\"></script>"
  };

  // Send the HTML out to be processed by another function
  return head_html;

} // END of FUNCTION 'buildHeadHTML'



function renderTopHeaderHTML (base_path) {
  /**** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ***
   * @params - 
   *   'base_path - String - Contains the filepath referenced in 'href' attributes within 
   *                         <a> tags.
   * 
   * PURPOSE OF FUNCTION 
   *   Returns the HTML for the logo, links, and search field which is contained within the 
   *   <header> tag of the Landing Page.
   *   
   * FUNCTIONS WHICH USE 'buildHeadHTML'
   *   + renderLandingPage
   * 
    *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ****/

  // Initializes String which contains the HTML which displays the logo, Login & Language 
  // links, and Search field.
  var header_html;

  // A String variable which will hold a value which reflects the visitor's acceptance 
  // of the cookie agreement.
  var has_visitor_agreed = "";

  // The current state of visitor's acceptance of the cookie agreement, 'approve', 'declined', 
  // or 'tbd' is determined by calling the function 'determineCookieAgreement'.
  has_visitor_agreed = determineCookieArrangement();

  header_html = "<a href=\"" + base_path + "\" title=\"Leaders Academy - Home\">\n" + 
                "  <img src=\"" + base_path + "skin/skin020/mobile/assets/img/logo/logo.png\" width=\"230\" height=\"170\" alt=\"Leaders Academy - Home\" />\n" + 
                "</a>\n";


  // IF/ELSE statement which includes the search box if the visitor has approved the cookie 
  // agreement or has made a decision either way. Otherwise, the search box is not added.
  if (has_visitor_agreed === "decline")  {
    header_html = header_html + 
                  "<section id=\"header-right\">\n" + 
                  "  <div id=\"header-links\">\n" + 
                  "    <a href=\"" + base_path + "member/login?n=%2Fmypage%2Findex\" title=\"Login\" id=\"link-login\">Login</a>\n" + 
                  "    <a href=\"" + base_path + "/mobile/ko/\" title=\"한국어\" id=\"link-korean\">한국어</a>\n" + 
                  "  </div>\n";
  } else {
    header_html = header_html + 
                  "<section id=\"header-right\">\n" + 
                  "  <div id=\"header-search\">\n" + 
                  "    <script>\n" + 
                  "      (function() {\n" + 
                  "        var cx = '006315930114800819546:bz06kk34ffi';\n" + 
                  "        var gcse = document.createElement('script');\n" + 
                  "        gcse.type = 'text/javascript';\n" + 
                  "        gcse.async = true;\n" + 
                  "        gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;\n" + 
                  "        var s = document.getElementsByTagName('script')[0];\n" + 
                  "        s.parentNode.insertBefore(gcse, s);\n" + 
                  "      })();\n" + 
                  "    </script>\n" + 
                  "    <gcse:searchbox-only></gcse:search>\n" + 
                  "  </div>\n" + 
                  "  <div id=\"header-links\">\n" + 
                  "    <a href=\"" + base_path + "member/login?n=%2Fmypage%2Findex\" title=\"Login\" id=\"link-login\">Login</a>\n" + 
                  "    <a href=\"" + base_path + "/mobile/ko/\" title=\"한국어\" id=\"link-korean\">한국어</a>\n" + 
                  "  </div>\n"
  }

  header_html = header_html + "</section>\n";

  var header_selector;
  var header_element = {};

  header_selector = "header";
  header_element = jq(header_selector);

  jq(header_element).html(header_html);

  jq(header_element).attr("class", "header-index");
} // END of FUNCTION 'renderTopHeaderHTML'



function storeNavigationMetadata () {
  /**** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ***
   * @params - NONE
   * 
   * PURPOSE OF FUNCTION 
   *   Returns the metadata such as the HTML attributes, "id", "title", & "href" 
   *   which makes up the Main Navigation of the Landing Page.
   *   
   * FUNCTIONS WHICH USE 'storeNavigationMetadata'
   *   + renderMainContentHTML
   * 
    *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ****/

  // Initialize Object which contains the metadata for the various sections.
  var nav_data = {};
  
  // Store the HTML attributes, "id", "title", & "href" for the various sections within 'nav_data'.
  nav_data = {
    row_1_data : {
      row_number: 1, 
      link_data : {  
        gap_data : {
          id: "gpa",  
          title: "GPA/Testing", 
          href: "admission/admission1"
        }, 
        english_data : {
          id: "english", 
          title: "English", 
          href: "program/program2"
        }, 
        camps_data : {
          id: "camps", 
          title: "Camps", 
          href: "program/program3"
        }, 
        lessons_data : { 
          id: "lessons", 
          title: "Lessons", 
          href: "skin/skin020/mobile/lessons/index_lessons.htm"
        }
      }
    }, 
    row_2_data : { 
      row_number: 2, 
      link_data : { 
        awards_data : { 
          id: "awards", 
          title: "Awards", 
          href: "community/community2"
        }, 
        debate_data : { 
          id: "debate", 
          title: "Debate", 
          href: "program/program1"
        }, 
        events_data : { 
          id: "events", 
          title: "Events", 
          href: "community/community3"
        }, 
        announcements_data : { 
          id: "announcements", 
          title: "Announcements", 
          href: "community/community1"
        }
      }
    }, 
    row_3_data : {
      row_number: 3,
      link_data : {    
        apply_students_data : { 
          id: "apply_students", 
          title: "Apply (Students)", 
          href: "admission/admission4"
        }, 
        faculty_data : { 
          id: "faculty", 
          title: "Faculty", 
          href: "about/about6"
        }, 
        apply_faculty_data : { 
          id: "apply_faculty", 
          title: "Apply (Faculty)", 
          href: "admission/admission3"
        }, 
        business_data : { 
          id: "business", 
          title: "Business", 
          href: "skin/skin020/mobile/business/index_business.htm"
        }
      }
    }, 
    row_4_data : {
      row_number: 4, 
      link_data : { 
        about_us_data : { 
          id: "about_us", 
          title: "About Us", 
          href: "about/about1"
        }, 
        contact_us_data : { 
          id: "contact_us", 
          title: "Contact Us", 
          href: "skin/skin020/mobile/contact_us/index_contact_us.htm"
        }, 
        location_data : { 
          id: "location", 
          title: "Location", 
          href: "skin/skin020/mobile/location/index_location.htm"
        }, 
        media_data : { 
          id: "media", 
          title: "Media", 
          href: "community/community4"
        }
      }
    }
  }

  // Send the metadata out for processing by another function.
  return nav_data;

} // END of FUNCTION 'buildNavigationHTML'



function storeFooterMetadata () {
  /**** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ***
   * @params - NONE
   * 
   * PURPOSE OF FUNCTION 
   *   Returns the metadata such as the HTML attributes, "href", "title", & "id" 
   *   which makes up the Footer of the Landing Page.
   *   
   * FUNCTIONS WHICH USE 'storeFooterMetadata'
   *   + renderFooterHTML
   * 
    *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ****/

  // Initialize JS object which contains the HTML references used within the <footer> tag.
  var footer_data = {};

  // Store the HTML references within 'footer_html'.
  footer_data = {
    row_1_data : {
      row_number: 1, 
      link_data : {
        naver : {
          href: "https://blog.naver.com/leadersacademtybd/", 
          title: "Naver",
          id: "naver"
        }, 
        facebook : {
          href: "https://www.facebook.com/JoinLeadersAcademy/", 
          title: "Facebook", 
          id: "facebook"
        }, 
        twitter : {
          href: "https://twitter.com/", 
          title: "Twitter", 
          id: "twitter"
        },
        youtube : {
          href: "https://youtube.com/", 
          title: "YouTube", 
          id: "youtube"
        }, 
        kakao : {
          href: "https://kakao.com/", 
          title: "Kakao", 
          id: "kakao"
        }
      }
    }, 
    row_2_data : {
      row_number: 2, 
      link_data : {
        instagram : {
          href: "https://instagram.com/", 
          title: "Instagram",
          id: "instagram"
        }, 
        wechat : {
          href: "https://wechat.com/", 
          title: "WeChat", 
          id: "wechat"
        }, 
        google : {
          href: "https://plus.google.com/", 
          title: "Google+", 
          id: "google"
        },
        line : {
          href: "https://line.com/", 
          title: "Line", 
          id: "line"
        }, 
        whatsapp : {
          href: "https://whatsapp.com/", 
          title: "WhatsApp", 
          id: "whatsapp"
        }
      }
    }
  }

  // Send the HTML out to be processed by another function
  return footer_data;

} // END of FUNCTION 'buildFooterHTML'



function renderFrameHTML () {
  /**** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ***
   * @params - NONE
   * 
   * PURPOSE OF FUNCTION 
   *   Assembles the HTML for the 'frame' of the template used for the mobile-friendly 
   *   site. The function also adds the HTML within the browser by inserting the HTML 
   *   into the <html> tag.
   *   
   * FUNCTIONS WHICH USE 'renderLandingPage'
   *   + renderLandingPage
   * 
    *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ****/

   // Initialize String which holds the selector for the HTML tag, <html>.
   var html_selector;
  
   // Initialize Object which contains the jQuery object for the HTML tag, "html".
   var html_element = {};
 
   html_selector = "html";
   html_element = jq(html_selector);
 
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
  // html_html = html_data.head + html_data.body;
   // Insert the HTML within the current <html> tag within the browser.
   jq(html_element).html("");
   jq(html_element).html(html_html);

} // END of FUNCTION 'renderFrame'


function renderCookieWarningHTML()  {
  /**** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ***
   * @params - NONE
   * 
   * PURPOSE OF FUNCTION 
   *   Displays a message, warning visitors based in Europe that the search feature 
   *   uses cookies. If the visitor does not want cookies to be placed within the browser 
   *   a Boolean will be passed on to 'buildContentHeadHTML' which will remove HTML 
   *   referring to the Google Search feature within the website.
   *   
   * FUNCTIONS WHICH USE 'renderCookieWarningHTML'
   *   + renderMainContentHTML
   * 
    *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ****/ 
    
  // A String variable which will hold the HTML which contains the content of the 
  // cookie warning is initialized.
  var warning_html = "";

  // The HTML which contains the content of the cookie is passed on.
  warning_html = "<aside>\n" + 
                  "  <h1>GDPR Cookie Law Compliance</h1>\n" + 
                  "  <p>\n" + 
                  "    This website collects browing data during searches \n" + 
                  "    for content located on leadersacademy.com.\n" + 
                  "  </p>\n" + 
                  "  <p>\n" + 
                  "    If you do not want your browsing data sent to \n" + 
                  "    third-party companies, please press the 'Opt Out' \n" + 
                  "    button below. The search box will no longer appear \n" + 
                  "    as you use leadersacademy.com.\n" + 
                  "  </p>\n" + 
                  "  <p>\n" + 
                  "    Otherwise, press the 'Okay' button. The search feature \n" + 
                  "    will continue to be available.\n" + 
                  "  </p>" + 
                  "  <p>\n" + 
                  "    <a href=\"http://ec.europa.eu/ipg/basics/legal/cookies/index_en.htm\" target=\"_blank\">For more information, please press here.</a>\n" + 
                  "  </p>\n" +
                  "  <div id=\"div-cookie-buttons\">\n" + 
                  "    <a href=\"javascript:setCookie('decline');\" id=\"link-opt_out\"\">Opt Out</a>\n" + 
                  "    <a href=\"javascript:setCookie('approve');\">Okay</a>\n" + 
                  "  </div>\n" + 
                  "</aside>";

  return warning_html;
} // END of FUNCTION 'renderCookieWarningHTML'



function renderHeadHTML ()  {
  /**** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ***
   * @params - NONE
   * 
   * PURPOSE OF FUNCTION 
   *   Assembles the HTML references used within the <head> tag. Also inserts the HTML 
   *   within the browser into the HTML tag <head>
   *   
   * FUNCTIONS WHICH USE 'renderLandingPage'
   *   + renderLandingPage
   * 
    *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ****/


  // Initialize String which holds the selector for the HTML tag, "<head>".
  var head_selector;
   
  // Initialize Object which contains the jQuery object for the HTML tag, "<head>".
  var head_element = {};

  head_selector = "head";
  head_element = jq(head_selector);

  // Initialize variable which holds the Object which contains the HTML references contained 
  // within the <head> tag.
  var head_data;

  // Initialize String which contains the raw HTML used contained within the <head> tag.
  var head_html;

  // Pull the HTML contained within the <head> tag by calling the Function, 'buildHeadHTML'.
  head_data = buildHeadHTML();

  // Extract the HTML from the Object variable.
  // head_html = head_data.google_analytics + head_data.title + head_data.meta_http + head_data.stylesheet + head_data.jquery + head_data.javascript;
  head_html = head_data.title + head_data.meta_http + head_data.stylesheet + head_data.jquery + head_data.javascript;

  // jq(head_element).html("");
  // Insert the HTML within the <head> tag within the browser.
  jq(head_element).html(head_html);

} // END of FUNCTION 'renderHeadHTML'


function setCookie(acceptance_state)  {
/**** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ***
 * @params 
 *   acceptance_state - Holds a string which causes the function to set the value of 
 *                      the cookie to note the visitor has accepted the cookie agreement 
 *                      or declined the agreement.
 * 
 * PURPOSE OF FUNCTION 
 *   Sets the value of the cookie to reflect the visitor has accepted the terms of the 
 *   cookie agreement or declined the agreement.
 *   
 * FUNCTIONS WHICH USE 'setCookie'
 *   + Triggered while the 'button' within the cookie warning content is clicked.
 * 
  *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ****/

  // A Date variable which will hold the current date is initialized.
  var current_time = new Date();

  // The time which will determine the length of time the cookie is valid is passed on.
  current_time.setTime(current_time.getTime() + (365 * 24 * 60 * 60 * 1000));

  // A String variable which will hold the date the cookie will expire is on.
  var expiration_date = "";

  // The date the cookie will expire is passed on.
  expiration_date = "expires=" + current_time.toUTCString();

  document.cookie = "warning_agreement=" + acceptance_state + ";" + expiration_date + ";path=/";

  setTimeout(
    function () {
      window.location.href = "http://daechi.leadersacademy.com/skin/skin020/mobile/index_1.htm";
    }, 250
  );

} // END of FUNCTION 'setCookie'


function isVisitorInEurope()  {
/**** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ***
 * @params - NONE
 * 
 * PURPOSE OF FUNCTION 
 *   Determines if the time zone of the visitor's browser lies in Europe. 
 *   within the browser into the HTML tag <nav>
 *   
 * FUNCTIONS WHICH USE 'isVisitorInEurope'
 *   + renderMainContentHTML
 * 
  *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ****/
  
  // A Date variable which will hold the UTC Date value for the visitors browser is initialzed.
  var current_time = new Date();

  // A String variable which will hold the string referring to the current date is initialized.
  var time_string = "";

  // The string which refers to the visitor's browser's date is passed on.
  time_string = current_time.toTimeString();

  // An Array variable which will hold time zone related data to search for within 'time_string' 
  // is initialized.
  time_zone_search_values_Array = [];

  // The search values which will be searched for within the value of 'time_string' are passed on.
  time_zone_search_values_Array = [
    "GMT+0000", 
    "GMT+0100", 
    "GMT+0200"
  ];

  // A Number variable which will hold the location within the value of 'time_string' searched 
  // for strings lie.
  var time_zone_search_result;
  
  var is_visitor_in_europe;

  // The values held by 'time_zone_search_values_Array' are searched for within 'time_string'.
  time_zone_search_values_Array.forEach(
    function (value, index) {
      time_zone_search_result = time_string.indexOf(value);

      // IF statement which sets 'is_visitor_in_europe' to true if one of the values held 
      // within 'time_zone_search_values_Array' is found within 'time_string'.
      if (time_zone_search_result >= 0) {
        is_visitor_in_europe = true;
      } else {
        is_visitor_in_europe = false;
      }
    }
  );

  return true;

} // END of FUNCTION 'isVisitorInEurope'


function determineCookieArrangement()  {
/**** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ***
 * @params - NONE
 * 
 * PURPOSE OF FUNCTION 
 *   Determines if the visitor has agreed to the cookie policy.
 *   
 * FUNCTIONS WHICH USE 'determineCookieArrangement'
 *   + renderMainContentHTML
 * 
  *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ****/

  // A String variable which will hold the data stored in 'document.cookie' is initialized.
  var cookie_data = "";

  // The value of the cookie is passed on.
  cookie_data = document.cookie;

  // An Array variable which will hold data to be searched for within 'cookie_data' 
  // is initialized.
  var cookie_search_string_Array = [];

  // The value of strings which will be searched for within 'cookie_data' are passed on.
  cookie_search_string_Array = [
    "warning_agreement=approve", 
    "warning_agreement=decline"
  ];
  
  // A Number variable which will hold the location within 'cookie_data' the value 
  // of 'cookie_search_string' is initialized.
  var cookie_search_result;

  // A String variable which will hold 'true' if the cookie data reflects the visitor 
  // has accepted the cookie agreeement is initialized.
  var has_visitor_agreed = "";

  // The data of the cookie is searched within to determine if the visitor has previously 
  // approved of the cookie agreement.
  cookie_search_string_Array.forEach(
    function (value, index) {
      cookie_search_result = cookie_data.indexOf(value);
      
      // IF/ELSE statement which passes on the value of 'true' to 'has_visitor_agreed' 
      // if the cookie data reflects a visitor's agreement. Otherwise the value 
      // of 'false' will be passed on to 'has_visitor_agreed'.
      if (cookie_search_result >= 0 && index === 0) {
        has_visitor_agreed = "approve";      
      } else if (cookie_search_result >= 0 && index === 1) {
        has_visitor_agreed = "decline";
      }
    }
  );

  // IF statement which will set the value of 'has_visitor_agreed' to 'tbd' 
  // the the value of the cookie shows the agreement has been neither 
  // approved or declined.
  if (has_visitor_agreed === "")  {
    has_visitor_agreed = "tbd";
  }

  // The findings of the script - that the visitor has accepted the agreement, declined 
  // the agreement, or has yet to see the document is passed on.
  return has_visitor_agreed;

} // END of FUNCTION 'determineCookieArrangement'


function renderMainContentHTML (base_path)  {
/**** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ***
 * @params
 *   'base_path - String - Contains the filepath referenced in 'href' attributes within 
 *                         <a> tags.
 * 
 * PURPOSE OF FUNCTION 
 *   Assembles the links and HTML elements used within the <nav> tag. Also inserts the HTML 
 *   within the browser into the HTML tag <nav>
 *   
 * FUNCTIONS WHICH USE 'renderMainContentHTML'
 *   + renderLandingPage
 * 
  *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ****/
    
  var is_visitor_in_europe;

  is_visitor_in_europe = isVisitorInEurope();

  // Initialize String which holds the selector for the HTML tag, "<nav>".
  var nav_selector;

  // Initialize Object which contains the jQuery object for the HTML tag, "<nav>".
  var nav_element = {};

  nav_selector = "nav";
  nav_element = jq(nav_selector);

  // A String variable which will hold a flag which refers to the visitor's agreement 
  // to allow cookies is initalized.
  var does_visitor_allow_cookies = "";

  // The function calls 'determineCookieArrangement' which parses the cookie data and 
  // passes on if the visitor has accepted the cookie agreement, declined the agreement 
  // or has yet to see the agreement. That value is passed on.
  does_visitor_allow_cookies = determineCookieArrangement();

  // IF statement which creates HTML which will hold the content of the cookie warning.
  if (does_visitor_allow_cookies === "tbd" && is_visitor_in_europe === true) {
    nav_html = renderCookieWarningHTML();
  } else {
    // Initialize variable which holds the Object which contains the HTML references contained 
    // within the <nav> tag.
    var nav_data;

    // Initialize String which contains the raw HTML used contained within the <nav> tag.
    var nav_html;

    // Pull the HTML contained within the <nav> tag by calling the Function, 'storeNavigationMetadata'.
    nav_data = storeNavigationMetadata();

    nav_html = "";

    // Extract the HTML from the Object variable.
    jq.each(nav_data, 
      function (row_index, rows) {
        nav_html = nav_html + "<section id=\"nav-row_" + rows.row_number + "\">\n";
        
        jq.each(rows.link_data,
          function (link_index, link_metadata) {
            nav_html = nav_html + "<div id=\"link-" + link_metadata.id + "\">\n";
            nav_html = nav_html + "  <a href=\"" + base_path + link_metadata.href + "\" title=\"" + link_metadata.title + "\"></a>\n"; 
            nav_html = nav_html + "  <span>" + link_metadata.title + "</span>\n";
            nav_html = nav_html + "</div>\n";
          }
        );

        nav_html = nav_html + "</section>\n";
      } 
    );
  }

  // IF/ELSE statement which replaces the <nav> tag with the content needed for the 
  // cookie warning or allows the HTML needed for the main navigation to be placed 
  // within the webpage's HTML.
  if (does_visitor_allow_cookies) {

    // IF statement which replaces the <nav> tag with the content needed for the 
    // cookie warning if the value of 'does_visitor_allow_cookies' is 'tbd'.
    if (does_visitor_allow_cookies === "tbd") {
      jq(nav_element).replaceWith(nav_html);
    } else {
      jq(nav_element).html(nav_html);
    }
  } else {
    jq(nav_element).html(nav_html);
  }  
} // END of FUNCTION 


function renderFooterHTML () {
  /**** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ***
   * @params - NONE
   * 
   * PURPOSE OF FUNCTION 
   *   Returns the HTML for the icons and links contained within the <footer> tag of the 
   *   Landing Page.
   *   
   * FUNCTIONS WHICH USE 'renderFooterHTML'
   *   + renderLandingPage
   * 
    *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ****/

  // Initialize String which holds the selector for the HTML tag, "<footer>".
  var nav_selector;
  
  // Initialize Object which contains the jQuery object for the HTML tag, "<footer>".
  var footer_element = {};

  footer_selector = "footer";
  footer_element = jq(footer_selector);

  // Initialize variable which holds the Object which contains the HTML references contained 
  // within the <footer> tag.
  var footer_data;

  // Initialize String which contains the raw HTML used contained within the <footer> tag.
  var footer_html;

  // Pull the HTML contained within the <footer> tag by calling the Function, 'storeFooterMetadata'.
  footer_data = storeFooterMetadata();

  footer_html = "";

  footer_html = "  <section id=\"footer-border\">\n" + 
                "    <div></div>\n" + 
                "  </section>\n";
  
  // Extract the HTML from the Object variable.
  jq.each(footer_data, 
    function (row_index, rows) {
      footer_html = footer_html + "<section id=\"footer-row_" + rows.row_number + "\">\n";

      jq.each(rows.link_data,
        function (link_index, link_metadata) {
          footer_html = footer_html + "<a href=\"" + link_metadata.href + "\" title=\"" + link_metadata.title + "\" target=\"_blank\" id=\"link-" + link_metadata.id + "\"></a>\n";
        }
      );

      footer_html = footer_html + "</section>\n";
    } 
  );

  var date = new Date;

  year = date.getFullYear();

  // Add row that contains the copyright information.
  footer_html = footer_html + "<section id=\"footer-row_3\">\n" + 
                              "  <span>Leaders Academy &copy; " + year.toString() + "</span>\n" + 
                              "</section>\n";

  // Insert the HTML within the <footer> tag within the browser.
  jq(footer_element).html(footer_html);

} // END of FUNCTION 'renderTopHeaderHTML'


function renderLandingPage () {
  /**** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ***
   * @params - NONE
   * 
   * PURPOSE OF FUNCTION 
   *   Using the jQuery Method, '.html()', the HTML of the desktop landing page is swapped 
   *   out for a mobile-friendly HTML template.
   *   
   * FUNCTIONS WHICH USE 'renderLandingPage'
   *   + document.ready()
   * 
    *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ****/

  base_path = "/";

  // Add mobile-friendly HTML into the browser.
  renderFrameHTML();

  renderHeadHTML();

  renderTopHeaderHTML(base_path);

  renderMainContentHTML(base_path);
  
  renderFooterHTML();
  
} // END of FUNCTION 'renderLandingPage'