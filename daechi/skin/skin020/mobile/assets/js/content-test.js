/* content.js ~ Renders mobile-friendly HTML of the content pages. This file also handles *
 *              animations and other types of HTML DOM manipulation based upon            *
 *              commands issued by a user.                                                *
 * *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ** */
var jq = jQuery.noConflict();

function buildContentTemplateHTML () {
  /**** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ***
   * @params - NONE
   * 
   * PURPOSE OF FUNCTION 
   *   Returns the HTML which contains the basic 'sections' of the Landing Page such as 
   *   the <DOCTYPE>, <html>, <head> tags along with others.
   *   
   * FUNCTIONS WHICH USE 'buildContentTemplateHTML'
   *   + renderContent
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
    article: "<article></article>", 
    footer: "<footer></footer>", 
    section: "<section></section>"
  };

  // Send 'template_html' for processing by another function.
  return template_html;

} // END of FUNCTION 'buildContentTemplateHTML'



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




function buildContentHeadHTML (base_path) {
/**** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ***
 * @params - 
 *   'base_path - String - Contains the filepath referenced in 'href' attributes within 
 *                         <a> tags.
 * 
 * PURPOSE OF FUNCTION 
 *   Returns the HTML for the logo, links, and search field which is contained within the 
 *   <header> tag of the Landing Page.
 *   
 * FUNCTIONS WHICH USE 'buildContentHeadHTML'
 *   + renderHeadHTML
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
} // END of FUNCTION 'buildContentHeadHTML'
function buildContentHeadHTML () {
  /**** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ***
   * @params - NONE
   * 
   * PURPOSE OF FUNCTION 
   *   Returns the HTML which is contained within the <head> tag of the Landing Page.
   *   
   * FUNCTIONS WHICH USE 'buildContentHeadHTML'
   *   + renderHeadHTML
   * 
    *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ****/

  // Initialize JS object which contains the HTML references used within the <head> tag.
  var head_html = {};

  // Store the HTML references within 'header_html'.
  head_html = {
    title: "<title>Leaders Academy</title>", 
    meta_http: "<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" />", 
    stylesheet: "<link rel=\"stylesheet\" href=\"/skin/skin020/mobile/assets/css/mobile.css\">", 
    jquery: "<script src=\"https://code.jquery.com/jquery-migrate-1.4.1.min.js\"></script>\n<script src=\"https://code.jquery.com/jquery-3.2.1.min.js\"></script>", 
    javascript: "<script src=\"/skin/skin020/mobile/assets/js/content.js\"></script>"
  };

  head_html.google_analytics = "<!-- Global site tag (gtag.js) - Google Analytics -->\n" + 
                               "<script async src=\"https://www.googletagmanager.com/gtag/js?id=UA-112766766-1\"></script>\n" + 
                               "<script>\n" + 
                               "  window.dataLayer = window.dataLayer || [];\n" + 
                               "  function gtag(){dataLayer.push(arguments);}\n" + 
                               "    gtag('js', new Date());\n" + 
                               "    gtag('config', 'UA-112766766-1');\n" + 
                               "</script>\n";

  // Send the HTML out to be processed by another function
  return head_html;

} // END of FUNCTION 'buildHeadHTML'



function storeContentMainNavigationMetadata () {
  /**** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ***
   * @params - NONE
   * 
   * PURPOSE OF FUNCTION 
   *   Returns the metadata such as the HTML attributes, "id", "title", & "href" 
   *   which makes up the Main Navigation of the Landing Page.
   *   
   * FUNCTIONS WHICH USE 'storeContentMainNavigationMetadata'
   *   + renderContentNavigationHTML
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

} // END of FUNCTION 'storeContentMainNavigationMetadata'



function storeContentFooterMetadata () {
  /**** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ***
   * @params - NONE
   * 
   * PURPOSE OF FUNCTION 
   *   Returns the metadata such as the HTML attributes, "href", "title", & "id" 
   *   which makes up the Footer of the Landing Page.
   *   
   * FUNCTIONS WHICH USE 'storeContentFooterMetadata'
   *   + renderContentFooterHTML
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

} // END of FUNCTION 'storeContentFooterMetadata'



function isNotIndexPage ()  {
  /**** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ***
   * @params - NONE
   * 
   * PURPOSE OF FUNCTION 
   *   Returns the location that the string, '?', is located within the file name 
   *   of the HTML loaded from the desktop version of the webpage
   *   
   * FUNCTIONS WHICH USE 'isNotIndexPage'
   *   + storeContentArticleMetadata
   * 
    *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ****/

  var file_name;

  file_name = window.location.href;

  var file_name_search_string;

  var file_name_search_index_num;

  file_name_search_string = "?";

  file_name_search_index_num = file_name.indexOf(file_name_search_string);

  return file_name_search_index_num;
}



function storeContentArticleMetadata () {
  /**** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ***
   * @params - NONE
   * 
   * PURPOSE OF FUNCTION 
   *   Returns the HTML contents extracted from the desktop page for use within the 
   *   mobile-friendly template.
   *   
   * FUNCTIONS WHICH USE 'storeContentArticleMetadata'
   *   + renderContentArticleHTML
   * 
    *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ****/
  

  // Initialize Object which holds HTML which references the title and content of the 
  // desktop page that loaded.
  var article_data = {};
  
  // Initialize Number which holds the index number of the location within the file name 
  // that 'index' appears. 
  var index_search_index_num;
  
  // The location within the file name that the string, 'index' appears is passed on.
  index_search_index_num = isNotIndexPage();

  // Initializes String which contains the character, "/", which is used to find the Section 
  // of content the webpage holds.
  var section_search_string;

  // Initializes Number which contains the index of the last two occurance of 
  // the character, "/", within the path name.
  var section_index_num;

  // Initiaizes String which contains the pathname of the current URL.
  var path_name;
  
  section_search_string = "/";

  path_name = window.location.pathname;

  // The location of the last character within the path name, "/", 
  // is passed onto the first value within, "section_index_num".
  section_index_num = path_name.lastIndexOf(section_search_string);
  
  // Initializes String which contains the Section name of the content the webpage displays.
  var section_value;

  section_value = path_name.slice((section_index_num + 1));

  // Initializes Boolean which is set to true if the landing page for the section 
  // includes links to various pieces of content within that section.
  var run_index = new Boolean;

  // Sets the section value to match the title of the section which the path name 
  // refers to.
  switch (section_value)  {
    case "admission1":
      section_value = "gpa";
      run_index = false;
    break;

    case "program2":
      section_value = "english";
      run_index = true;
    break;

    case "program3":
      section_value = "camps";
      run_index = true;
    break;

    case "community2":
      section_value = "awards";
      run_index = true;
    break;

    case "program1":
      section_value = "debate";
      run_index = true;
    break;

    case "community3":
      section_value = "events";
      run_index = true;
    break;

    case "community1":
      section_value = "announcements";
      run_index = true;
    break;

    case "admission4":
      section_value = "apply_students";
      run_index = false;
    break;

    case "about6":
      section_value = "faculty";
      run_index = true;
    break;

    case "admission3":
      section_value = "apply_faculty";
      run_index = false;
    break;

    case "about1":
      section_value = "about_us";
      run_index = false;
    break;

    case "community4":
      section_value = "media";
      run_index = true;
    break;

    case "login":
      section_value = "login";
      run_index = false;
    break;
  } // END of SWITCH statement

  // IF/ELSE statement which runs 'parseIndexLinks' if the string, 'index' is contained 
  // within the file name. 
  // 
  // If the string, 'index' is not found in the file name, the content of the page is 
  // passed on to the Object, 'article_data'.
  if (index_search_index_num === -1 && 
      run_index === true)  {

    // Initializes String which contains the selector for the <a> tags within the webpage's 
    // content.
    var links_selector;

    // Initializes Object which holds the jQuery object for <a> tags using the selector, 
    // ".bbs_link".
    var links_elements = {};

    if (section_value === "english")  {
      links_selector = "table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(3) > td > table > tbody > tr:nth-child(2) > td > table > tbody > tr";
    } else if (section_value === "camps") {
      links_selector = "table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(2) > td > table > tbody > tr";
    } else if (section_value === "debate")  {
      links_selector = "table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(3) > td > table > tbody > tr:nth-child(2) > td > table > tbody > tr"; 
    } else if (section_value === "awards" || section_value === "events" || section_value === "announcements" || section_value === "media")  {
      links_selector = "table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td > table > tbody > tr";
    } else if (section_value === "faculty") {
      links_selector = "table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td > form > table:nth-child(4) > tbody > tr > td > table > tbody > tr";
    } 
    
    links_elements = jq(links_selector);

    var links_html;

    links_html = ""

    // Initializes String which is used within an EACH loop to identify the unique link under processing.
    var link_selector;

    // Initializes Object which is used with an EACH loop which contains link metadata.
    var link_element;

    var link_id;
    var link_href;
    var link_text;

    var date_selector;
    var date_element;
    var date_text;

    var page_title;
    var page_contents;

    var row_id;

    var media_item_id;

    var inc;

    if (section_value === "faculty")  {
      row_id = 1;

      jq.each(links_elements, 
        function (link_index, links) {
          link_id = (link_index + 1).toString();
          
          if ((link_index + 1) % 2 != 0 || 
              link_index === 0)  {
            links_html = links_html + "<div class=\"article-faculty-row\" id=\"article-faculty-row_" + row_id + "\">\n";
          }

          links_html = links_html + "  <div class=\"article-faculty-member\" id=\"faculty-member-" + link_id + "\">\n" +
                                    jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td > form > table:nth-child(4) > tbody > tr:nth-child(" + link_id + ") > td > table > tbody > tr > td").html() + 
                                    jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td > form > table:nth-child(4) > tbody > tr:nth-child(" + link_id + ") > td > table > tbody > tr > td:nth-child(2)").html() + 
                                    "  </div>\n";
  
          if ((link_index + 1) % 2 === 0 || 
              link_index === jq(links_elements.length))  {
            row_id++;
            links_html = links_html + "</div>\n";
          }
        }
      );

      page_title = "강사소개 (FACULTY)";
    } else if (section_value === "media") {
      row_id = 1;
      media_item_id = 0;

      links_html = "<div class=\"article-media\" id=\"article-content\">\n";
      
      jq.each(links_elements, 
        function (link_index, links) {
          if (link_index < (jq(links_elements).length - 1)) {
            link_id = (link_index + 1).toString();
          
            links_html = links_html + "<div class=\"article-media-row\" id=\"article-media-row_" + link_id + "\">\n";
            
            for (inc = 1; inc <= 2; inc++) {
              media_item_id++;

              links_html = links_html + "  <div class=\"media-item\" id=\"media-item_" + (media_item_id).toString() + "\">\n" +
                                        jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(" + link_id + ") > td:nth-child(" + (inc).toString() + ") > table > tbody > tr > td > table > tbody > tr > td").html() + 
                                        jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(" + link_id + ") > td:nth-child(" + (inc).toString() + ") > table > tbody > tr:nth-child(2) > td").html() + 
                                        "  </div>\n";
            }
    
            links_html = links_html + "</div>\n";
          }
        }
      );

      page_title = "포토갤러리 (MEDIA)";
    
    } else {
      jq.each(links_elements, 
        function (link_index, links)  {
          link_id = (link_index + 1).toString();

          if (section_value === "english")  {
            link_selector = "table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(3) > td > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(" + link_id + ") th > a";
            date_selector = "table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(3) > td > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(" + link_id + ") > td:nth-child(4)";
            page_title = jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(2) > td:nth-child(2) > strong").html();
          } else if (section_value === "camps") {
            link_selector = "table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(" + link_id + ") th > a";
            date_selector = "table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(" + link_id + ") > td:nth-child(4)";
            page_title = "캠프 (CAMPS)";
          } else if (section_value === "awards") {
            link_selector = "table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(" + link_id + ") th > a";
            date_selector = "table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(" + link_id + ") > td:nth-child(4)";
            page_title = "수상실적 (AWARDS)";
          } else if (section_value === "debate")  {
            link_selector = "table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(3) > td > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(" + link_id + ") th > a";
            date_selector = "table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(3) > td > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(" + link_id + ") > td:nth-child(4)";
            page_title = jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(2) > td:nth-child(2) > strong").html();
          } else if (section_value === "events") {
            link_selector = "table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(" + link_id + ") th > a";
            date_selector = "table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(" + link_id + ") > td:nth-child(4)";
            page_title = "토론대회 (EVENTS)";
          } else if (section_value === "announcements") {
            link_selector = "table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(" + link_id + ") th > a";
            date_selector = "table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(" + link_id + ") > td:nth-child(4)";
            page_title = "학원소식 (ANNOUNCEMENTS)";
          }
  
          link_element = jq(link_selector);
  
          link_href = jq(link_element).attr("href");
          link_text = jq(link_element).text();
          links_html = links_html + "<div class=\"article-" + section_value + "-listing\" id=\"" + section_value + "-listing-" + link_id + "\">\n" + 
                                    "  <a href=\"" + link_href + "\" title=\"" + link_text + "\">" + link_text + "</a>\n";
          
          date_element = jq(date_selector);
          
          date_text = jq(date_element).text();
          
          links_html = links_html + "  <span> - " + date_text + "</span>\n" + 
                                    "</div>\n";
        }
      );
    }

    article_data = {
      title: page_title, 
      contents: links_html, 
    }
  } else {
    if (section_value === "gpa") {
      page_title = "(테스트) GPA/TESTING";
      page_contents = jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td").html();
    } else if (section_value === "english") {
      page_title = jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(2) > td:nth-child(2) > strong").html();
      page_contents = jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(3) > td > table > tbody > tr:nth-child(5) > td > table > tbody > tr > td").html();
    } else if (section_value === "camps") {
      page_title = "캠프 (CAMPS)";
      page_contents = jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(5) > td > table > tbody > tr > td").html();
    } else if (section_value === "awards") {
      page_title = "수상실적 (AWARDS)";
      page_contents = jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td > table > tbody > tr:nth-child(5) > td > table > tbody > tr > td").html();
    } else if (section_value === "debate")  {
      page_title = jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(2) > td:nth-child(2) > strong").html();
      page_contents = jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(3) > td > table > tbody > tr:nth-child(5) > td > table > tbody > tr > td").html()
    } else if (section_value === "events") {
      page_title = "토론대회 (EVENTS)";
      page_contents = jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td > table > tbody > tr:nth-child(5) > td > table > tbody > tr > td").html();
    } else if (section_value === "announcements") {
      page_title = "학원소식 (ANNOUNCEMENTS)";
      page_contents = jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td > table > tbody > tr:nth-child(5) > td > table > tbody > tr > td").html();
    } else if (section_value === "apply_students")  {
      page_title = "토론 최상위반 접수 (APPLY STUDENTS)";
      page_contents = jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td").html();
    } else if (section_value === "faculty") {
      page_title = "강사소개 (FACULTY)";
      page_contents = "<h4>" + jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td > table > tbody > tr > td > table > tbody > tr > td").html() + "</h4>\n" + 
                      "<div class=\"article-faculty-member-page\">" + 
                      jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td > table > tbody > tr:nth-child(4) > td > table > tbody > tr > td").html() + 
                      "</div>\n";
    } else if (section_value === "apply_faculty")  {
      page_title = "입학시험&특강 신청 (APPLY FACULTY)";
      page_contents = jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td").html();
    } else if (section_value === "about_us")  {
      page_title = "회사 소개 (ABOUT US)";
      page_contents = jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td").html();
    } else if (section_value === "media")  {
      page_title = "포토갤러리 (MEDIA)";
      page_contents = "<h4>" + jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td > table > tbody > tr > td > table > tbody > tr > td").html() + "</h4>\n" + 
                      "<div class=\"media-item-holder\">" + 
                      jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td > table > tbody > tr:nth-child(4) > td > table > tbody > tr > td").html() + 
                      "</div>\n";
    } else if (section_value === "login") {
      page_title = "로그인 (LOGIN)";
      page_contents = "<div class=\"article-login\" id=\"article-content\">\n" + 
                      " <div class=\"article-header-login\" id=\"article-header\">\n" + 
                      "   <h4>로그인</h4>\n" + 
                      "   <div id=\"article-form-login\">\n" + 
                      "     <form id=\"loginForm\" name=\"loginForm\" method=\"post\" action=\"http://daechi.leadersacademy.com/lib/member/process.php\" onsubmit=\"return checkLoginForm(this);\">\n" + 
                      "       <input type=\"hidden\" name=\"cmd\" value=\"login\">\n" + 
                      "       <input type=\"hidden\" name=\"logintype\" value=\"member\">\n" + 
                      "       <input type=\"hidden\" name=\"aca_number\" value=\"73176\">\n" + 
                      "       <input type=\"hidden\" name=\"nexturl\" value=\"\">\n" + 
                      "       <input type=\"hidden\" name=\"domain\" value=\"daechi.leadersacademy.com\">\n" + 
                      "       <input type=\"hidden\" id=\"PHPSESSID\" name=\"PHPSESSID\" value=\"1dd57c3654430939e5da10ade0f2fc13\">\n" + 
                      "       <div class=\"form-row\" id=\"form-row-1\">\n" + 
                      "         <img src=\"http://daechi.leadersacademy.com/skin/_modules/member/default/img/login_id.gif\"><input type=\"text\" id=\"member_id\" name=\"member_id\" value=\"\" class=\"input_login\" tabindex=\"11\">\n" +
                      "       </div>\n" + 
                      "       <div class=\"form-row\" id=\"form-row-2\">\n" + 
                      "         <img src=\"http://daechi.leadersacademy.com/skin/_modules/member/default/img/login_pw.gif\"><input type=\"password\" id=\"member_passwd\" name=\"member_passwd\" class=\"input_login\" tabindex=\"12\">\n" +
                      "       </div>\n" + 
                      "       <div id=\"form-button\">\n" + 
                      "         <input type=\"image\" src=\"http://daechi.leadersacademy.com/skin/_modules/member/default/img/btn_login.gif\" tabindex=\"13\">\n" +
                      "       </div>\n" + 
                      "       <div class=\"form-row\" id=\"form-row-3\">\n" + 
                      "         <input type=\"checkbox\" id=\"save_member_id\" name=\"save_member_id\" value=\"1\"><label for=\"save_member_id\">아이디 저장</label>\n" +
                      "         <input type=\"checkbox\" name=\"ssl\" id=\"ssl\" value=\"ssl\" checked><label for=\"ssl\">보안접속</label>\n" + 
                      "       </div>\n" + 
                      "     </form>\n" + 
                      "   </div>\n" +  
                      " </div>\n";  
    }
    
    article_data = {
      title: page_title, 
      contents: page_contents
    }
  }

  article_data.section_value = section_value;
  
  return article_data;

} // END of FUNCTION 'storeContentArticleMetadata'



function renderContentFrameHTML () {
  /**** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ***
   * @params - NONE
   * 
   * PURPOSE OF FUNCTION 
   *   Assembles the HTML for the 'frame' of the template used for the mobile-friendly 
   *   site. The function also adds the HTML within the browser by inserting the HTML 
   *   into the <html> tag.
   *   
   * FUNCTIONS WHICH USE 'renderContentFrameHTML'
   *   + renderContent
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
   html_data = buildContentTemplateHTML();
 
   // Extract the HTML from the Object variable.
   html_html = html_data.head + html_data.body + html_data.header + html_data.nav + html_data.article + html_data.footer + html_data.section;
 
   // Insert the HTML within the current <html> tag within the browser.
   jq(html_element).html(html_html);

} // END of FUNCTION 'renderContentFrameHTML'



function renderContentHeadHTML ()  {
  /**** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ***
   * @params - NONE
   * 
   * PURPOSE OF FUNCTION 
   *   Assembles the HTML references used within the <head> tag. Also inserts the HTML 
   *   within the browser into the HTML tag <head>
   *   
   * FUNCTIONS WHICH USE 'renderContentHeadHTML'
   *   + renderContent
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
  head_data = buildContentHeadHTML();

  // Extract the HTML from the Object variable.
  head_html = head_data.title + head_data.meta_http + head_data.stylesheet + head_data.jquery + head_data.javascript;

  // Insert the HTML within the <head> tag within the browser.
  jq(head_element).html(head_html);

} // END of FUNCTION 'renderContentHeadHTML'



function renderContentTopHeaderHTML (base_path) {
  /**** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ***
   * @params - 
   *   'base_path - String - Contains the filepath referenced in 'href' attributes within 
   *                         <a> tags.
   * 
   * PURPOSE OF FUNCTION 
   *   Returns the HTML for the logo, links, and search field which is contained within the 
   *   <header> tag of the Landing Page.
   *   
   * FUNCTIONS WHICH USE 'renderContentTopHeaderHTML'
   *   + renderContent
   * 
    *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ****/

  // Initializes String which contains the HTML which displays the logo, Login & Language 
  // links, and Search field.
  var header_html;

  header_html = "<a href=\"" + base_path + "\" title=\"Leaders Academy - Home\">\n" + 
                "  <img src=\"" + base_path + "skin/skin020/mobile/assets/img/logo/logo.png\" width=\"230\" height=\"170\" alt=\"Leaders Academy - Home\" />\n" + 
                "</a>\n" + 
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
                "    <div id=\"header-links-level_1\">\n" + 
                "      <a href=\"" + base_path + "member/login?n=%2Fmypage%2Findex\" title=\"Login\" id=\"link-login\">Login</a>\n" + 
                "      <a href=\"" + base_path + "ko/\" title=\"한국어\" id=\"link-korean\">한국어</a>\n" + 
                "    </div>\n" + 
                "    <div id=\"header-links-level_2\">\n" + 
                "      <a href=\"javascript: displayMenu('main');\" title=\"Main Menu\" id=\"link-main_menu\">Main Menu</a>\n" + 
                "      <a href=\"javascript: displayMenu('section');\" title=\"Section Menu\" id=\"link-section_menu\">Section Menu</a>\n" + 
                "    </div>\n" +
                "  </div>\n" + 
                "</section>\n";

  var header_selector;
  var header_element = {};

  header_selector = "header";
  header_element = jq(header_selector);

  jq(header_element).html(header_html);

} // END of FUNCTION 'renderContentTopHeaderHTML'


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
  
    // A String variable which will hold the date the cookie will expire is passed on.
    var expiration_date = "";
  
    // The date the cookie will expire is passed on.
    expiration_date = "expires=" + current_time.toUTCString();
  
    document.cookie = "warning_agreement=" + acceptance_state + ";" + expiration_date + ";path=/";
  
    setTimeout(
      function () {
        window.location.href = "http://daechi.leadersacad.com/skin/skin020/mobile/index_1.htm";
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

        // Add the "id" attribute, 'nav-sub_menu' to the <nav> tag.
        jq(nav_element).attr("id", "nav-sub_menu");
      }
    } else {
      jq(nav_element).html(nav_html);

      // Add the "id" attribute, 'nav-sub_menu' to the <nav> tag.
      jq(nav_element).attr("id", "nav-sub_menu");
    }  
  } // END of FUNCTION 
  

function renderContentSectionNavigationHTML (base_path) {
  /**** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ***
   * @params - 
   *   'base_path - String - Contains the filepath referenced in 'href' attributes within 
   *                         <a> tags.
   * 
   * PURPOSE OF FUNCTION 
   *   Assembles the links and HTML elements used to allow for navigation among the Debate 
   *   section.
   *   
   * FUNCTIONS WHICH USE 'renderContentSectionNavigationHTML'
   *   + renderContent
   * 
    *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ****/


  // Initialize String which contains the pathname, sans filename, to a unique page of links.
  var section_path;

  // The value of 'window.location.pathname' is passed to 'section_path'.
  section_path = window.location.pathname;

  // Initialize String which contains the path to 'static' mobile pages, 
  // '/skin/skin020/mobile/'.
  var section_search_string;

  // Initialize Number which contains the index number within 'section_path' that the final 
  // '/' character within the pathname is locted.
  var section_search_index_num;

  
  section_search_string = "/skin/skin020/mobile/";
  
  // Search 'section_path' for the location within the string contained 
  // within 'section_search_string'.
  section_search_index_num = section_path.lastIndexOf(section_search_string);

  if (section_search_index_num > -1 || 
      section_path === "/about/about1" || 
      section_path === "/admission/admission1" || 
      section_path === "/admission/admission3" || 
      section_path === "/admission/admission4") {
    nav_html = "<span>There is no menu for this section.</span>\n";
  } else {
    nav_html = "<a href=\"" + section_path + "\" title=\"Page #1\" id=\"link-page_1\">Page #1</a>\n"
  }

  // Initialize String which holds the selector identifying the <section> tag that contains 
  // the Section navigation.
  var section_menu_selector;
  
  // Initialize Object which contains the jQuery object for the <section> tag using the 
  // selector, "#nav-section_menu".
  var section_menu_element;

  section_menu_selector = "#nav-section_menu";
  section_menu_element = jq(section_menu_selector);

  // Add the HTML for the Section navigation into the mobile-friendly template.
  jq(section_menu_element).html(nav_html);

} // END of FUNCTION 'renderContentSectionNavigationHTML'



function renderContentFooterHTML () {
  /**** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ***
   * @params - NONE
   * 
   * PURPOSE OF FUNCTION 
   *   Returns the HTML for the icons and links contained within the <footer> tag of the 
   *   Landing Page.
   *   
   * FUNCTIONS WHICH USE 'renderContentFooterHTML'
   *   + renderContent
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

  // Pull the HTML contained within the <footer> tag by calling the Function, 'storeContentFooterMetadata'.
  footer_data = storeContentFooterMetadata();

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

} // END of FUNCTION 'renderContentFooterHTML'



function renderContentArticleHTML (article_data)  {
  /**** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ***
   * @params - NONE
   * 
   * PURPOSE OF FUNCTION 
   *   Returns the HTML which is contained within the <article> tag of the content.
   *   
   * FUNCTIONS WHICH USE 'renderContentArticleHTML'
   *   + renderContentArticleHTML
   * 
    *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ****/

  // Initializes String which contains the selector of the <article> tag.
  var article_selector;

  // Initializes Object which contains the jQuery Object for the <article> tag.
  var article_element = {};

  article_selector = "article";
  article_element = jq(article_selector);

  // Initialize String which contains the HTML which renders the content of the page.
  var article_html;

  article_html = "<div class=\"article-header-" + article_data.section_value + "\" id=\"article-header\">\n" + 
                 "  <h2>" + article_data.title + "</h2>\n" + 
                 "</div>\n" + 
                 "<div class=\"article-" + article_data.section_value + "\" id=\"article-content\">\n" + 
                 "  " + article_data.contents + "\n" + 
                 "</div>\n";
// console.log("article_html = " + article_html);
  jq(article_element).html(article_html);

} // END of FUNCTION 'renderContentArticleHTML'


function renderContent () {
  /**** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ***
   * @params - NONE
   * 
   * PURPOSE OF FUNCTION 
   *   Using the jQuery Method, '.html()', the HTML of the desktop landing page is swapped 
   *   out for a mobile-friendly HTML template.
   *   
   * FUNCTIONS WHICH USE 'renderContent'
   *   + document.ready()
   * 
    *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ****/

  var base_path = "/";
  
  // Initialize Object which contains the HTML which renders the content within the desktop 
  // page.
  var article_data = {};

  // Extract content from desktop version of webpage.
  article_data = storeContentArticleMetadata();

  jq("table").css("opacity", "1");

  // Add mobile-friendly HTML into the browser.
  renderContentFrameHTML();

  renderContentHeadHTML();

  renderContentTopHeaderHTML(base_path);

  renderMainContentHTML(base_path);

  renderContentSectionNavigationHTML(base_path);

  renderContentArticleHTML(article_data);
  
  renderContentFooterHTML();

} // END of FUNCTION 'renderContent'



function displayMenu(section_value) {
  /**** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ***
   * @params - 
   *   'section_value' - String - String which describes the type of menu the user 
   *                              wishes to display, the Main Sub menu or the Section menu.
   * 
   * PURPOSE OF FUNCTION 
   *   Displays either the Main Sub menu or the Section menu within the mobile-friendly 
   *   template.
   *   
   * FUNCTIONS WHICH USE 'renderDebateSectionHTML'
   *   + User activated
   * 
    *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ****/

  // Initialize variable to hold the HTML selector of the <section> element 
  // which holds the main menu.
  var menu_selector

  var menu_element = {};

  // Initialize variable to hold the value of the CSS property, 'display', 
  // of the <section> element which holds the main menu.
  var menu_css_value;

  // Initialize variables to hold CSS values which will be used to show/hide 
  // the main menu.
  var menu_visible_css = {};
  var menu_not_visible_css = {};

  // IF/ELSE statment which determines the value of the selector for the menu 
  // under processing.
  if (section_value === "main") {
    menu_selector = "#nav-main_menu";
  } else if (section_value === "section") {
    menu_selector = "#nav-section_menu";
  } // END of IF statement

  menu_element = jq(menu_selector);

  // Pass on the value of "block" to the CSS variable which will be used 
  // to show the main menu.
  menu_visible_css = {
    display: "block"
  };
  
  // Pass on the value of "none" to the CSS variable which will be used 
  // to hide the main menu.
  menu_not_visible_css = {
    display: "none", 
    margin: "0"
  };

  // Store the value of the CSS property, 'display' of the <section> element 
  // which holds the main menu.
  menu_css_value = jq(menu_selector).css("display");

  // IF/ELSE statement which displays the menu if it is currently hidden and 
  // hides the menu if it is currently visible.
  if (menu_css_value === "none")  {
    jq(menu_element).css(menu_visible_css);
  } else {
    jq(menu_element).css(menu_not_visible_css);
  } // END of IF statement
  
} // END of FUNCTION 'displayMainMenu'
