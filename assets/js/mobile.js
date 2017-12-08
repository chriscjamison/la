var jq = jQuery.noConflict();

/* jq(window).load(
  function () {
    jq("body").css("opacity", 0);
  }
); */

function extractHtmlFromDesktopPage ()  {

  /*  ---- ---- ---- FUNCTION OUTLINE ---- ---- ---- ----
          Function extracts the text content from 
          the HTML.

      ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- */
  
  jq(document).ready(
    function () {
      // Initialize variable to hold content of page.
      var html_content = new String();
      var map_content = new String();

      // Initialize variable to hold URL string.
      var url_string = new String();

      // Initialize array to hold strings which correspond to the URL's of the webpage
      // which the browser loads.
      var urls_Array = new Array;

      // Initialize array to hold the HTML extracted from the HTML of the desktop site.
      var extracted_html = new Array;

      // Initialize number which matches the index within 'urls_Array' for a given 
      // webpage.
      webpage_index = new Number();

      // Pass on the URL's of the pages within the website.
      urls_Array = [
        'contact_us.htm', 
        'history.htm'
      ];

      // Pass on the URL string of the loading page.
      url_string = window.location.href;

      jq.each(urls_Array, 
        function (index, value) {
          var current_URL = value;
          
          if (url_string.indexOf(current_URL) > -1) {
            switch (index)  {
              case 0: 
                

                // jq("table table:nth-child(2) > tbody > tr > td > table:nth-child(2) > tbody > tr:nth-child(2) > td table > tbody > tr:nth-child(2) > td").html("");
                // removed_HTwML = jq("table tbody > tr > td.bg_tops > table.aleft > tbody > tr > td > table + table   > tbody > tr + tr > td > table > tbody > tr").detach();
                
                // Pass on the HTML of the Section header and map.
                extracted_html[0] = "        <div id=\"article-header\">\n" + 
                                    "          <h2>Location</h2>\n" + 
                                    "        </div\n" + 
                                    "        <div id=\"map\"></div>\n" + 
                                    "        <!-- Source library for Daum Maps -->\n" + 
                                    "        <script type=\"text/javascript\" src=\"//dapi.kakao.com/v2/maps/sdk.js?appkey=발급받은 APP KEY를 넣으시면 됩니다.\"></script>\n" + 
                                    "        <script>\n" + 
                                    "          var container = document.getElementById('map')\n" + 
                                    "          var options = {\n" + 
                                    "            center: new daum.maps.LatLng(33.450701, 126.570667), \n" + 
                                    "            level: 3\n" + 
                                    "          };\n" + 
                                    "          var map = new daum.maps.Map(container, options);\n" + 
                                    "        </script>\n";

                // Pass on the first row of contact information.
                extracted_html[1] = jq("table table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td table > tbody > tr:nth-child(3) > td table > tbody > tr:nth-child(2) > td").html();
                extracted_html[2] = jq("table table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td table > tbody > tr:nth-child(3) > td table > tbody > tr:nth-child(2) > td:nth-child(2)").html();

                // Pass on the second row of contact information.
                extracted_html[3] = jq("table table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td table > tbody > tr:nth-child(3) > td table > tbody > tr:nth-child(4) > td").html();
                extracted_html[4] = jq("table table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td table > tbody > tr:nth-child(3) > td table > tbody > tr:nth-child(4) > td:nth-child(2)").html();

                // Pass on the third row of contact information.
                extracted_html[5] = jq("table table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td table > tbody > tr:nth-child(3) > td table > tbody > tr:nth-child(4) > td").html();
                extracted_html[6] = jq("table table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td table > tbody > tr:nth-child(3) > td table > tbody > tr:nth-child(4) > td:nth-child(2)").html();
                
                // Pass on the first row of directions.
                extracted_html[7] = jq("table table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td table > tbody > tr:nth-child(4) > td table > tbody > tr:nth-child(2) > td").html();
                extracted_html[8] = jq("table table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td table > tbody > tr:nth-child(4) > td table > tbody > tr:nth-child(2) > td:nth-child(2)").html();

                // Pass on the second row of directions.
                extracted_html[9] = jq("table table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td table > tbody > tr:nth-child(4) > td table > tbody > tr:nth-child(4) > td").html();
                extracted_html[10] = jq("table table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td table > tbody > tr:nth-child(4) > td table > tbody > tr:nth-child(4) > td:nth-child(2)").html();

                // Pass on the third row of directions.
                extracted_html[11] = jq("table table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td table > tbody > tr:nth-child(4) > td table > tbody > tr:nth-child(6) > td").html();
                extracted_html[12] = jq("table table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td table > tbody > tr:nth-child(4) > td table > tbody > tr:nth-child(6) > td:nth-child(2)").html();

                // Pass on the fourth row of directions.
                extracted_html[13] = jq("table table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td table > tbody > tr:nth-child(4) > td table > tbody > tr:nth-child(8) > td").html();
                extracted_html[14] = jq("table table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td table > tbody > tr:nth-child(4) > td table > tbody > tr:nth-child(8) > td:nth-child(2)").html();
                
                webpage_index = 0;
                
              break;
              
            }
          }
        }
      );
              
      // Make the content of the Desktop site invisible to the visitor.
      jq("body").fadeOut(10);

      // Begin the process to display the content of the Desktop site within 
      // the Mobile template.
      setupFinalContent(extracted_html, webpage_index);
    }
  );
} // END of FUNCTION 'extractHtmlFromDesktopPage'

function setupFinalContent(html_content, webpage_index)  {

  // Clear out the HTML of the browser.
  jq("html").empty();

  // Add the basic framework of the HTML template.
  renderHTMLFrame();

  // Add the HTML of the <head> HTML element.
  renderHeader();
  
  // Add the basic framework of the <body> HTML element.
  renderBody();

  // Add the HTML which makes up the logo, search, and login.
  renderLogoAndSearch();

  // Add the HTML which makes up the navigation menus.
  renderMenus(webpage_index);

  // Add the HTML which makes up the footer.
  renderFooter();

  // Add the HTML of the page which is loading.
  renderArticle(html_content, webpage_index);

} // END of FUNCTION 'setupFinalContent'

function renderHTMLFrame()  {
  jq("html").removeAttr();
  jq("html").attr("lang", "ko");

  jq("html").html( 
    "  <head>\n" +
    "  </head>\n" + 
    "  <body>" + 
    "  </body>\n"
  );
} // END of FUNCTION 'renderHTMLFrame'

function renderHeader() {
  jq("head").html(
    "    <!-- *** Page Title *** -->\n" + 
    "    <title>Leaders Academy - Contact Us</title>\n" + 
    "\n" + 
    "    <!-- HTML Reference to display Korean characters -->\n" + 
    "    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=euc-kr\">\n" + 
    "\n" + 
    "    <!-- *** CSS Stylesheet References *** -->\n" + 
    "\n" +
    "    <!-- Stylesheet which contains general layout CSS rules for 'index.htm'. -->\n" + 
    "    <link rel=\"stylesheet\" href=\"/la/assets/css/mobile.css\">\n" + 
    /* 
    "    <!-- Stylesheet which contains CSS rules specifically for the English language version. -->\n" + 
    "    <link rel=\"stylesheet\" href=\"/la/assets/css/en.css\">\n" +  */
    "\n" +
    "    <!-- *** JavaScript file references *** -->\n" + 
    "\n" +
    "    <!-- Source library for jQuery -->\n" + 
    "    <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\n" + 
    "\n" +
    "    <!-- JavaScript script which handles general layout for 'index.htm'. -->\n" + 
    "    <script src=\"/la/assets/js/mobile.js\"></script>\n"
  );
  
} // END of FUNCTIION 'renderHeader'\

function renderBody() {
  jq("body").html(
    "<!--\n" +  
    "  START of Header\n" +  
    "        Contains:\n" + 
    "        + Logo\n" + 
    "        + Search box\n" + 
    "        + Links to:\n" + 
    "            - Login\n" + 
    "            - Korean language mobile page\n" + 
    "-->\n" + 
    "    <header>\n" + 
    "    </header>\n" + 
    "<!--\n" +  
    "  START of Menu \n" +  
    "        Contains links to:\n" + 
    "        + Main Menu\n" + 
    "        + Intrasectional menu\n" + 
    "-->\n" +
    "    <nav>\n" + 
    "    </nav>\n" + 
    "<!--\n" +  
    "  START of Content\n" +  
    "    Contains:\n" + 
    "      + Neighborhood map\n" + 
    "      + List of:\n" + 
    "        - Address\n" + 
    "        - Phone Number\n" + 
    "        - Directions\n" + 
    "-->\n" + 
    "    <article>\n" + 
    "    </article>\n" +
    "<!--\n" +  
    "  START of Footer\n" +  
    "    Contains:\n" + 
    "      + Links to social media platforms\n" + 
    "      + Copyright information\n" + 
    "-->\n" +  
    "    <footer>\n" + 
    "    </footer>\n" 
  );
} // END of FUNCTION 'renderBody'

function renderLogoAndSearch() {
  jq("header").html(
    "      <img src=\"/la/assets/img/logo/logo.png\" width=\"230\" height=\"170\" alt=\"Leaders Academy\" />\n" + 
    "      <section id=\"header-right\">\n" + 
    "        <div id=\"header-search\">\n" + 
    "        <form>\n" + 
    "          <input type=\"search\" width=\"25\" maxwidth=\"75\" value=\"Search\" id=\"mobile-search\">\n" + 
    "        </form>\n" + 
    "        </div>\n" + 
    "        <div id=\"header-links\">\n" + 
    "          <div id=\"header-links-level_1\">\n" + 
    "            <a href=\"/login/\" title=\"Login\" id=\"link-login\">Login</a>\n" + 
    "            <a href=\"/kr/\" title=\"한국어\" id=\"link-korean\">한국어</a>\n" + 
    "          </div>\n" + 
    "          <div id=\"header-links-level_2\">\n" + 
    "            <a href=\"javascript: displayMenu('main');\" title=\"Main Menu\" id=\"link-main_menu\">Main Menu</a>\n" + 
    "            <a href=\"javascript: displayMenu('1');\" title=\"Section Menu\" id=\"link-section_menu\">Section Menu</a>\n" + 
    "          </div>\n" +
    "        </div>\n" + 
    "      </section>\n"
  );
} // END of FUNCTION 'renderLogoAndSearch'

function renderMenus(webpage_index) {
  jq("nav").attr("id", "nav-sub_menu");

  jq("nav").html( 
    "      <section id=\"nav-main_menu\">\n" + 
    "        <section id=\"nav-row_1\">\n" + 
    "          <div id=\"link-gpa\">\n" + 
    "            <a href=\"#gpa\" title=\"GPA/Testing\"></a>\n" + 
    "            <span>GPA/Testing</span>\n" + 
    "          </div>\n" + 
    "          <div id=\"link-english\">\n" + 
    "            <a href=\"#english\" title=\"English\"></a>\n" + 
    "             <span>English</span>\n" + 
    "          </div>\n" + 
    "          <div id=\"link-camps\">\n" + 
    "            <a href=\"#camps\" title=\"Camps\"></a>\n" + 
    "            <span>Camps</span>\n" + 
    "          </div>\n" + 
    "          <div id=\"link-lessons\">\n" + 
    "            <a href=\"#lessons\" title=\"Lessons\"></a>\n" + 
    "            <span>Lessons</span>\n" + 
    "          </div>\n" + 
    "        </section>\n" + 
    "        <section id=\"nav-row_2\">\n" + 
    "          <div id=\"link-awards\">\n" + 
    "            <a href=\"#awards\" title=\"Awards\"></a>\n" + 
    "            <span>Awards</span>\n" + 
    "          </div>\n" + 
    "          <div id=\"link-debate\">\n" + 
    "            <a href=\"#debate\" title=\"Debate\"></a>\n" + 
    "            <span>Debate</span>\n" + 
    "          </div>\n" + 
    "          <div id=\"link-events\">\n" + 
    "            <a href=\"#events\" title=\"Events\"></a>\n" + 
    "            <span>Events</span>\n" + 
    "          </div>\n" + 
    "          <div id=\"link-announcements\">\n" + 
    "            <a href=\"#announcements\" title=\"link-announcements\"></a>\n" + 
    "            <span>Announcements</span>\n" + 
    "          </div>\n" + 
    "        </section>\n" + 
    "        <section id=\"nav-row_3\">\n" + 
    "          <div id=\"link-apply_students\">\n" + 
    "            <a href=\"#apply_students\" title=\"Apply (Students)\"></a>\n" + 
    "            <span>Apply (Students)</span>\n" + 
    "          </div>\n" + 
    "          <div id=\"link-faculty\">\n" + 
    "            <a href=\"#faculty\" title=\"Faculty\"></a>\n" + 
    "            <span>Faculty</span>\n" + 
    "          </div>\n" + 
    "          <div id=\"link-apply_faculty\">\n" + 
    "            <a href=\"#apply_faculty\" title=\"Apply (Faculty)\"></a>\n" + 
    "            <span>Apply (Faculty)</span>\n" + 
    "          </div>\n" + 
    "          <div id=\"link-business\">\n" + 
    "            <a href=\"#business\" title=\"Business\"></a>\n" + 
    "            <span>Business</span>\n" + 
    "          </div>\n" + 
    "        </section>\n" + 
    "        <section id=\"nav-row_4\">\n" + 
    "          <div id=\"link-about_us\">\n" + 
    "            <a href=\"#about_us\" title=\"About Us\"></a>\n" + 
    "            <span>About Us</span>\n" + 
    "          </div>\n" + 
    "          <div id=\"link-contact_us\">\n" + 
    "            <a href=\"#contact_us\" title=\"Contact Us\"></a>\n" + 
    "            <span>Contact Us</span>\n" + 
    "          </div>\n" + 
    "          <div id=\"link-location\">\n" + 
    "            <a href=\"#location\" title=\"Location\"></a>\n" + 
    "            <span>Location</span>\n" + 
    "          </div>\n" + 
    "          <div id=\"link-media\">\n" + 
    "            <a href=\"#media\" title=\"Media\"></a>\n" + 
    "            <span>Media</span>\n" + 
    "          </div>\n" + 
    "        </section>\n" + 
    "      </section>\n" + 
    "      <section id=\"nav-section_menu\">\n" + 
    "      </section>\n"
  );

  renderSectionMenu(webpage_index);
} // END of FUNCTION 'renderLogoAndSearch'

function renderSectionMenu(webpage_index) {
  
    var menu_selector = new String();
  
    menu_selector = "#nav-section_menu";
  
    if (webpage_index < 5)  {
      jq(menu_selector).html(
        "        <a href=\"#\" title=\"인사말 (HISTORY)\" id=\"link-section_1-history\">인사말 (HISTORY)</a>\n" + 
        "        <a href=\"#\" title=\"강사소개 (FACULTY)\" id=\"link-section_1-faculty\">강사소개 (FACULTY)</a>\n" + 
        "        <a href=\"#\" title=\"학원규정 (RULES)\" id=\"link-section_1-history\">학원규정 (RULES)</a>\n" + 
        "        <a href=\"#\" title=\"강사채용 (RECRUTING)\" id=\"link-section_1-recruiting\">강사채용 (RECRUTING)</a>\n" + 
        "        <a href=\"#\" title=\"치안내 (LOCATION)\" id=\"link-section_1-location\">치안내 (LOCATION)</a>"
      );
    }
  } // END of FUNCTION 'renderSectionMenu'

function renderFooter() {
  jq("footer").html(
    "      <section id=\"footer-border\">\n" + 
    "        <div></div>\n" + 
    "      </section>\n" + 
    "      <section id=\"footer-row_1\">\n" + 
    "        <a href=\"https://naver.com\" title=\"Naver\" target=\"_blank\" id=\"link-naver\"></a>\n" + 
    "        <a href=\"https://facebook.com\" title=\"Facebook\" target=\"_blank\" id=\"link-facebook\"></a>\n" + 
    "        <a href=\"https://twitter.com\" title=\"Twitter\" target=\"_blank\" id=\"link-twitter\"></a>\n" + 
    "        <a href=\"https://youtube.com\" title=\"YouTube\" target=\"_blank\" id=\"link-you_tube\"></a>\n" + 
    "        <a href=\"https://kakao.com\" title=\"Kakao\" target=\"_blank\" id=\"link-kakao\"></a>\n" + 
    "      </section>\n" + 
    "      <section id=\"footer-row_2\">\n" + 
    "        <a href=\"https://instagram.com\" title=\"Instagram\" target=\"_blank\" id=\"link-instagram\"></a>\n" + 
    "        <a href=\"https://wechat.com\" title=\"WeChat\" target=\"_blank\" id=\"link-wechat\"></a>\n" + 
    "        <a href=\"https://plus.google.com\" title=\"Google+\" target=\"_blank\" id=\"link-google\"></a>\n" + 
    "        <a href=\"https://line.com\" title=\"Line\" target=\"_blank\" id=\"link-line\"></a>\n" + 
    "        <a href=\"https://whatsapp.com\" title=\"WhatsApp\" target=\"_blank\" id=\"link-whatsapp\"></a>\n" + 
    "      </section>\n" + 
    "      <section id=\"footer-row_3\">\n" + 
    "        <span>Leaders Academy &copy; 2017</span>\n" + 
    "      </section>\n"
  );
} // END of FUNCTION 'renderFooter'

function renderArticle(extracted_html, webpage_index) {
  switch (webpage_index)  {
    case 0: 
      jq("article").html(
        extracted_html[0] + "\n" + 

        "        <table>\n" + 
        "          <tbody>\n" + 
        "            <tr>\n" + 
        "              <td>\n" + 
        "                " + extracted_html[1] + "\n" + 
        "              </td>\n" + 
        "              <td>\n" + 
        "                " + extracted_html[2] + "\n" + 
        "              </td>\n" +
        "            </tr>\n" + 
        "            <tr>\n" + 
        "              <td>\n" + 
        "                " + extracted_html[3] + "\n" + 
        "              </td>\n" + 
        "              <td>\n" + 
        "                " + extracted_html[4] + "\n" + 
        "              </td>\n" +
        "            </tr>\n" + 
        "            <tr>\n" + 
        "              <td>\n" + 
        "                " + extracted_html[5] + "\n" + 
        "              </td>\n" + 
        "              <td>\n" + 
        "                " + extracted_html[6] + "\n" + 
        "              </td>\n" +
        "            </tr>\n" + 
        "          </tbody>\n" + 
        "        </table>\n" + 
        "        <table>\n" + 
        "          <tbody>\n" + 
        "            <tr>\n" + 
        "              <td>\n" + 
        "                " + extracted_html[7] + "\n" + 
        "              </td>\n" + 
        "              <td>\n" + 
        "                " + extracted_html[8] + "\n" + 
        "              </td>\n" +
        "            </tr>\n" + 
        "            <tr>\n" + 
        "              <td>\n" + 
        "                " + extracted_html[9] + "\n" + 
        "              </td>\n" + 
        "              <td>\n" + 
        "                " + extracted_html[10] + "\n" + 
        "              </td>\n" +
        "            </tr>\n" + 
        "            <tr>\n" + 
        "              <td>\n" + 
        "                " + extracted_html[11] + "\n" + 
        "              </td>\n" + 
        "              <td>\n" + 
        "                " + extracted_html[12] + "\n" + 
        "              </td>\n" +
        "            </tr>\n" + 
        "            <tr>\n" + 
        "              <td>\n" + 
        "                " + extracted_html[13] + "\n" + 
        "              </td>\n" + 
        "              <td>\n" + 
        "                " + extracted_html[14] + "\n" + 
        "              </td>\n" +
        "            </tr>\n" + 
        "          </tbody>\n" + 
        "        </table>\n"
      );
    break;
  }

  // formatCSS();
  
  jq("body").fadeIn();
} // END of FUNCTION 'renderArticle'

function formatCSS() {
    /*  ---- ---- ---- FUNCTION OUTLINE ---- ---- ---- ----
        Function formats the CSS properties of the 
        extracted HTML.
    ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- */

    // Initialize variables to hold HTML selectors.
    var table_selector = new String();
    var td_selector = new String();
    var div_selector = new String();
    var sj_title_sj_contents_selector = new String();
    var sj_title_selector = new String();
    var sj_contents_selector = new String();
    var top_table_top_cell_selector = new String();
    var top_table_bottom_two_cells_selector = new String();
    var address_cell_selector = new String();
    var third_cell_selector = new String();
    var subway_cell_selector = new String();

    // Initialize variables to hold CSS values.
    var table_css = new Object();
    var td_css = new Object();
    var div_css = new Object();
    var sj_title_sj_contents_css = new Object();
    var sj_title_css = new Object();
    var sj_contents_css = new Object();
    var top_table_top_cell_css = new Object();
    var top_table_bottom_two_cells_selector = new Object();
    var address_cell_css = new Object();
    var third_cell_css = new Object();
    var subway_cell_css = new Object();

    // Pass on CSS values to variables.
    
    /* For HTML tags using the selector, '<table>'. */
    table_css = {
      width: "100%"
    };

    /* For HTML tags using the selector, '<td>'. */
    td_css = {
      padding: "0.2em 0", 
      verticalAlign: "top", 
      fontSize: "28pt"
    };

    /* For HTML tags using the selector, 'article > div:nth-child(1)'. */
    div_css = {
      marginBottom: "0.25em", 
      fontFamily: "Arial, Helvetica, sans-serif", 
      fontSize: "1.5em", 
      fontWeight: "600"
    };

    /* For HTML tags using the selectors, '.sj_title' and '.sj_contents'. */
    sj_title_sj_contents_css = {
      fontFamily: "Arial, Helvetica, sans-serif", 
      lineHeight: "28pt"
    };

    /* For HTML tags using the selector, '.sj_title'. */
    sj_title_css = {
      width: "25%", 
      fontWeight: "600"
    };

    /* For HTML tags using the selector, '.sj_contents'. */
    sj_contents_css = {
      width: "75%"
    };

    /* For the top cell of the top table in the Location page. */
    top_table_top_cell_css = {
      fontSize:  "11pt"
    };

    /* For the bottom two cells of the top table in the Location page. */
    top_table_bottom_two_cells_css = {
      fontSize:  "25pt"
    };

    /* For the 'Address' cell of the table.. */
    address_cell_css = {
      fontSize: "25pt"
    };
    
    /* For the last cell on the right of the table above the table used to 
        display the directions. */
    third_cell_css = {
      fontSize: "11pt"
    };
    
    /* For the cell of the bottom table which offers directions from the 
        subway. */
    subway_cell_css = {
      fontSize: "11pt"
    };

    // Pass on the HTML selectors to variables.
    table_selector = "table";
    td_selector = "td";
    div_selector = "article > div";
    sj_title_sj_contents_selector = ".sj_title, .sj_contents";
    sj_title_selector = ".sj_title";
    sj_contents_selector = ".sj_contents";
    top_table_top_cell_selector = "table table > tbody > tr:nth-child(2) > td:nth-child(2)";
    top_table_bottom_two_cells_selector = "table table > tbody > tr:nth-child(4) > td:nth-child(2), " +
                                          "table table > tbody > tr:nth-child(6) > td:nth-child(2)";
    third_cell_selector = "article > table > tbody > tr:nth-child(3) > td > table > tbody > tr:nth-child(6) > td:nth-child(2)";
    address_cell_selector = "article > table > tbody > tr:nth-child(4) > td > table > tbody > tr:nth-child(2) > td:nth-child(2)";
    subway_cell_selector = "article > table > tbody > tr:nth-child(4) > td > table > tbody > tr:nth-child(4) > td:nth-child(2), " + 
                            "article > table > tbody > tr:nth-child(4) > td > table > tbody > tr:nth-child(6) > td:nth-child(2), " + 
                            "article > table > tbody > tr:nth-child(4) > td > table > tbody > tr:nth-child(8) > td:nth-child(2)";

    // HTML will be formatted using the variables holding the CSS values
    // jq(table_selector).css(table_css);
    // jq(td_selector).css(td_css);
    jq(div_selector).css(div_css);
    jq(sj_title_sj_contents_selector).css(sj_title_sj_contents_css);
    jq(sj_title_selector).css(sj_title_css);
    jq(sj_contents_selector).css(sj_contents_css);
    jq(top_table_top_cell_selector).css(top_table_top_cell_css);
    jq(top_table_bottom_two_cells_selector).css(top_table_bottom_two_cells_css);
    // jq(third_cell_selector).css(third_cell_css);
    jq(address_cell_selector).css(address_cell_css);
    jq(subway_cell_selector).css(subway_cell_css);

} // END of FUNCTION 'formatCSS'

function displayMenu(section_value) {

  // Initialize variable to hold the HTML selector of the <section> element 
  // which holds the main menu.
  var menu_selector = new String();

  // Initialize variable to hold the value of the CSS property, 'display', 
  // of the <section> element which holds the main menu.
  var menu_css_value = new String();

  // Initialize variables to hold CSS values which will be used to show/hide 
  // the main menu.
  var menu_visible_css = new Object();
  var menu_not_visible_css = new Object();

  // IF/ELSE statment which determines the value of the selector for the menu 
  // under processing.
  if (section_value === "main") {
    menu_selector = "#nav-main_menu";
  } else {
    menu_selector = "#nav-section_menu";
  } // END of IF statement

  // Pass on the value of "block" to the CSS variable which will be used 
  // to show the main menu.
  menu_visible_css = {
    display: "block"
  };
  
  // Pass on the value of "none" to the CSS variable which will be used 
  // to hide the main menu.
  menu_not_visible_css = {
    display: "none"
  };

  // Store the value of the CSS property, 'display' of the <section> element 
  // which holds the main menu.
  menu_css_value = jq(menu_selector).css("display");

  jq(document).ready(
    function () {
      // IF/ELSE statement which displays the menu if it is currently hidden and 
      // hides the menu if it is currently visible.
      if (menu_css_value === "none")  {
        jq(menu_selector).css(menu_visible_css);
        jq(menu_selector).fadeIn(400);
      } else {
        jq(menu_selector).fadeOut(400);
        jq(menu_selector).css(menu_not_visible_css);
      } // END of 'if' STATEMENT
    }
  );
} // END of FUNCTION 'displayMainMenu'

function displaySectionMenu(section_value)  {

  // Initialize variable to hold the selector for the <section> element 
  // which will hold the Section Menu.
  var menu_selector = new String();

  // Initialize variable which will hold the value of the CSS property, 'display', 
  // of the <section> element which will hold the Section Menu.
  var menu_css_value = new String();

  // Initialize variables which will hold CSS values which will be used 
  // to show/hide the Section Menu.
  var menu_visible_css = new Object();
  var menu_not_visible_css = new Object();

  // Pass on the selector of the <section> element which will hold the Section Menu.
  menu_selector = "#nav-section_menu";

  // Pass on the value of "block" to the CSS variable which will show the Section Menu.
  menu_visible_css = {
    display: "block"
  };

  // Pass on the value of "none" to the CSS variable which will hide the Section Menu.
  menu_not_visible_css = {
    display: "none"
  };



  // IF/ELSE statement which shows the menu if it is currently hidden or hides the menu 
  // if it is not visible.
  jq(document).ready(
    function () {
      if (menu_css_value === "none")  {
        jq(menu_selector).css(menu_visible_css);
        jq(menu_selector).fadeIn(400);
      } else {
        jq(menu_selector).fadeOut(400);
        jq(menu_selector).css(menu_not_visible_css);
      } // END of 'if' STATEMENT
    }
  );

  // Switch statement which determines which set of links are displayed in the Section Menu.
  /* switch (section_value)  {
    case 1:

    break; 
  }*/
} // END of FUNCTION 'displaySectionMenu'
