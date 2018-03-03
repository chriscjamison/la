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
    stylesheet: "<link rel=\"stylesheet\" href=\"/skin/skin020/mobile/assets/css/mobile.css\">", 
    jquery: "<script src=\"https://code.jquery.com/jquery-3.2.1.min.js\"></script>", 
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

// console.log("section_value = " + section_value);

  // IF/ELSE statement which runs 'parseIndexLinks' if the string, 'index' is contained 
  // within the file name. 
  // 
  // If the string, 'index' is not found in the file name, the content of the page is 
  // passed on to the Object, 'article_data'.
  if (index_search_index_num === -1)  {
    // Initializes String which contains the selector for the <a> tags within the webpage's 
    // content.
    var links_selector;
console.log("index");
     // Initializes Object which holds the jQuery object for <a> tags using the selector, 
    // ".bbs_link".
    var links_elements = {};

    links_selector = "table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) td > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td > table > tbody > tr";
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

    jq.each(links_elements, 
      function (link_index, links)  {
        link_id = (link_index + 1).toString();

        link_selector = "table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) td > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(" + link_id + ") th > a";
        link_element = jq(link_selector);

        link_href = jq(link_element).attr("href");
        link_text = jq(link_element).text();
         links_html = links_html + "<div class=\"article-" + section_value + "-listing\" id=\"" + section_value + "-listing-" + link_id + "\">\n" + 
                                  "  <a href=\"" + link_href + "\" title=\"" + link_text + "\">" + link_text + "</a>\n";

        date_selector = "table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) td > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(" + link_id + ") > td:nth-child(4)";
        date_element = jq(date_selector);
        
        date_text = jq(date_element).text();
        
        links_html = links_html + "  <span> - " + date_text + "</span>\n" + 
                                  "</div>\n";
      }
    );

    article_data = {
      title: jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(2) > td:nth-child(2) > strong").html(), 
      contents: links_html
    }
  } else {
// console.log("not_index");
    article_data = {
      title: jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(2) > td:nth-child(2) > strong").html(), 
      contents: jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td").html()
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

  // Initialize String which acts as the selector for page numbers referencing the number 
  // of pages of links for a given section.
  var pages_selector;

  // Initialize Object which contains the jQuery object referencing the selector,
  // '.page-number'.
  var pages_elements = {};

  pages_selector = ".page-number";
  pages_elements = jq(pages_selector);

  if (jq(pages_elements).length >= 1)  {
    // Initialize Number which contains the number of pages which contains links leading to 
    // content.
    //
    // 'num_of_pages' will equal the number of links within the Section navigation.
    var num_of_pages;

    num_of_pages = jq(pages_elements).length;

    // Initialize Number which contains a loop incrementer.
    var inc;

    // Initialize String which contains the value of 1 plus the value of the loop incrementer 
    // converted into a String.
    // 
    // The variable is used in an HTML tag to uniquely identify the link under processing 
    // by the loop.
    var inc_string;

    // Initialize String which contains the pathname, sans filename, to a unique page of links.
    var section_path;

    // The value of 'window.location.pathname' is passed to 'section_path'.
    section_path = window.location.pathname;

    // Initialize String which contains the "/" character which will seperate the pathname 
    // from the filename.
    var section_search_string;

    // Initialize Number which contains the index number within 'section_path' that the final 
    // '/' character within the pathname is locted.
    var section_search_index_num;

    section_search_string = "/";

    // Search 'section_path' for the location within the string that the last "/" character 
    // appears.
    section_search_index_num = section_path.lastIndexOf(section_search_string);

    // Extract the path from the old pathname which included the filename.
    section_path = section_path.slice(0, section_search_index_num);
    
    // Add a new filename, without the suffix, to 'section_path' which serves as the 
    // unique location for links to content within the Section.
    section_path = section_path + "/page_";

    // Initialize String which contains the HTML links which make up the Section navigation.
    var nav_html;

    // Generate the links which make up the Section navigation.
    for (inc = 0; inc < num_of_pages; inc++)  {
      inc_string = (inc + 1).toString();

      nav_html = nav_html + "<a href=\"" + base_path + section_path + inc_string + ".htm\" title=\"Page " + inc_string + "\" id=\"link-section_nav" + inc_string + "\"> Page #" + inc_string + "</a>\n";
    }
  } else {
    nav_html = "<span>There is no menu for this section.</span>\n";
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

  // Add row that contains the copyright information.
  footer_html = footer_html + "<section id=\"footer-row_3\">\n" + 
                              "  <span>Leaders Academy &copy; 2018</span>\n" + 
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

  // Add mobile-friendly HTML into the browser.
  renderContentFrameHTML();

  renderContentHeadHTML();

  renderContentTopHeaderHTML(base_path);

  renderContentMainNavigationHTML(base_path);

  renderContentSectionNavigationHTML(base_path);
// console.log("article_data.title = " + article_data.title);
// console.log("article_data.contents = " + article_data.contents);
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
