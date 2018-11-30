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
    stylesheet: "<link rel=\"stylesheet\" href=\"/assets/css/mobile.css\">", 
    jquery: "<script src=\"https://code.jquery.com/jquery-migrate-1.4.1.min.js\"></script>\n<script src=\"https://code.jquery.com/jquery-3.2.1.min.js\"></script>", 
    javascript: "<script src=\"/assets/js/content.js\"></script>"
  };

/*   head_html.google_analytics = "<!-- Global site tag (gtag.js) - Google Analytics -->\n" + 
                               "<script async src=\"https://www.googletagmanager.com/gtag/js?id=UA-112766766-1\"></script>\n" + 
                               "<script>\n" + 
                               "  window.dataLayer = window.dataLayer || [];\n" + 
                               "  function gtag(){dataLayer.push(arguments);}\n" + 
                               "    gtag('js', new Date());\n" + 
                               "    gtag('config', 'UA-112766766-1');\n" + 
                               "</script>\n";
 */
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
        leaders_jr_data : {
          id: "leaders_jr", 
          title: "Leaders Jr.", 
          href: "leaders_jr/index_leaders_jr.htm"
        },
        gpa_data : {
          id: "gpa",  
          title: "GPA/Testing", 
          href: "gpa/index_gpa.htm"
        }, 
        english_data : {
          id: "english", 
          title: "English", 
          href: "english/index_english.htm"
        }
      }
    }, 
    row_2_data : { 
      row_number: 2, 
      link_data : { 
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
        }
      }
    }, 
    row_3_data : {
      row_number: 3,
      link_data : {    
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
        }
      }
    }, 
    row_4_data : {
      row_number: 4, 
      link_data : { 
        apply_students_data : { 
          id: "apply_students", 
          title: "Apply (Students)", 
          href: "apply_students/apply_students.htm"
        }, 
        faculty_data : { 
          id: "faculty", 
          title: "Faculty", 
          href: "faculty/index_faculty.htm"
        }, 
        apply_faculty_data : { 
          id: "apply_faculty", 
          title: "Apply (Faculty)", 
          href: "apply_faculty/apply_faculty.htm"
        }
      }
    }, 
    row_5_data : {
      row_number: 5, 
      link_data : { 
        about_us_data : { 
          id: "about_us", 
          title: "About Us", 
          href: "about_us/about_us.htm"
        }, 
        contact_us_data : { 
          id: "contact_us", 
          title: "Contact Us", 
          href: "contact_us/contact_us.htm"
        }, 
        location_data : { 
          id: "location", 
          title: "Location", 
          href: "location/location.htm"
        }    
      }
    }, 
    row_6_data : {
      row_number: 6, 
      link_data : { 
        business_data : { 
          id: "business", 
          title: "Business", 
          href: "business/index_business.htm"
        }, 
        media_data : { 
          id: "media", 
          title: "Media", 
          href: "media/index_media.htm"
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
          href: "https://www.naver.com/", 
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
          href: "https://instagram.com/leaders_academy_busan", 
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
                "  <img src=\"" + base_path + "assets/img/logo/logo.png\" width=\"230\" height=\"170\" alt=\"Leaders Academy - Home\" />\n" + 
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
/*                "    <div id=\"header-links-level_1\">\n" + 
                "      <a href=\"" + base_path + "member/login?n=%2Fmypage%2Findex\" title=\"Login\" id=\"link-login\">Login</a>\n" + 
                "      <a href=\"" + base_path + "ko/\" title=\"한국어\" id=\"link-korean\">한국어</a>\n" + 
                "    </div>\n" + 
 */                "    <div id=\"header-links-level_2\">\n" + 
                "      <a href=\"javascript: displayMenu('main');\" title=\"Main Menu\" id=\"link-main_menu\">Main Menu</a>\n" + 
                // "      <a href=\"javascript: displayMenu('section');\" title=\"Section Menu\" id=\"link-section_menu\">Section Menu</a>\n" + 
                "    </div>\n" +
                "  </div>\n" + 
                "</section>\n";

  var header_selector;
  var header_element = {};

  header_selector = "header";
  header_element = jq(header_selector);

  jq(header_element).html(header_html);

} // END of FUNCTION 'renderContentTopHeaderHTML'



function renderContentMainNavigationHTML (base_path)  {
    /**** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ***
   * @params - 
   *   'base_path - String - Contains the filepath referenced in 'href' attributes within 
   *                         <a> tags.
   * 
   * PURPOSE OF FUNCTION 
   *   Assembles the links and HTML elements used within the <nav> tag. Also inserts the HTML 
   *   within the browser into the HTML tag <nav>
   *   
   * FUNCTIONS WHICH USE 'renderContentMainNavigationHTML'
   *   + renderContent
   * 
    *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ****/


  // Initialize String which holds the selector for the HTML tag, "<nav>".
  var nav_selector;
  
  // Initialize Object which contains the jQuery object for the HTML tag, "<nav>".
  var nav_element = {};

  nav_selector = "nav";
  nav_element = jq(nav_selector);

  // Initialize variable which holds the Object which contains the HTML references contained 
  // within the <nav> tag.
  var nav_data;

  // Initialize String which contains the raw HTML used contained within the <nav> tag.
  var nav_html;

  // Pull the HTML contained within the <nav> tag by calling the Function, 'storeContentMainNavigationMetadata'.
  nav_data = storeContentMainNavigationMetadata();

  nav_html = "";

  // Add the <section> tag which contains the main navigation HTML references
  nav_html = "<section id=\"nav-main_menu\">\n";

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

  // Close the <section> tag which contains the main navigation HTML references
  nav_html = nav_html + "</section>\n" + 
                        "<section id=\"nav-section_menu\">\n" + 
                        "</section>\n";

  // Insert the HTML within the <nav> tag within the browser.
  jq(nav_element).html(nav_html);

  // Add the "id" attribute, 'nav-sub_menu' to the <nav> tag.
  jq(nav_element).attr("id", "nav-sub_menu");

} // END of FUNCTION renderContentMainNavigationHTML



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
  // var article_data = {};

  // Extract content from desktop version of webpage.
  // article_data = storeContentArticleMetadata();

  jq("table").css("opacity", "1");

  // Add mobile-friendly HTML into the browser.
  // renderContentFrameHTML();

  // renderContentHeadHTML();

  renderContentTopHeaderHTML(base_path);

  renderContentMainNavigationHTML(base_path);

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

/*   jq(document).ready(
    function () { */
      // IF/ELSE statement which displays the menu if it is currently hidden and 
      // hides the menu if it is currently visible.
      if (menu_css_value === "none")  {
        jq(menu_element).css(menu_visible_css);
        // jq(menu_element).fadeTo(400, 1);
      } else {
        // jq(menu_element).fadeTo(400, 0);
        jq(menu_element).css(menu_not_visible_css);
      } // END of 'if' STATEMENT
 /*    }
  ); */
} // END of FUNCTION 'displayMainMenu'
