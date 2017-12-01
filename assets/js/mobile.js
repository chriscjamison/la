function loadDesktopPage ()  {
  
  /*  ---- ---- ---- FUNCTION OUTLINE ---- ---- ---- ----
          Function loads the HTML content of the webpage

      ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- */

  // Initialize variable which will contain the HTML.
  var html_content;

  // Store HTML inside a variable, 'html_content'.
  html_content = jq(html).html;

  // Send the HTML to be parsed by another function.
  return html_content;
} // END of FUNCTION 'loadDesktopPage'

function extractHtmlFromDesktopPage ()  {

  /*  ---- ---- ---- FUNCTION OUTLINE ---- ---- ---- ----
          Function extracts the text content from 
          the HTML.

      ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- */

  // Initialize variable to hold content of page.
  var html_content = new String();

  // Store relavent content in 'html_content'.
  html_content = jq("table:nth-child(2) table:nth-child(2) table:nth-child(1)").html;
  jq("html").html(
    "<!DOCTYPE html>/n" + 
    "<html lang=\"en\">/n" + 
    "  <head>\n" + 
    "    <!-- *** Page Title *** -->\n" + 
    "    <title>Leaders Academy - Contact Us</title>\n" + 
    "\n" + 
    "    <!-- HTML Reference to display Korean characters -->\n" + 
    "    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" />\n" + 
    "\n" + 
    "    <!-- *** CSS Stylesheet References *** -->\n" + 
    "\n" +
    "    <!-- Stylesheet which contains general layout CSS rules for 'index.htm'. -->\n" + 
    "    <link rel=\"stylesheet\" href=\"assets/css/mobile.css\">\n" + 
    "    <!-- Stylesheet which contains CSS rules specifically for the English language version. -->\n" + 
    "    <link rel=\"stylesheet\" href=\"assets/css/en.css\">\n" + 
    "\n" +
    "    <!-- *** JavaScript file references *** -->\n" + 
    "\n" +
    "    <!-- Source library for jQuery -->\n" + 
    "    <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\n" + 
    "\n" +
    "    <!-- JavaScript script which handles general layout for 'index.htm'. -->\n" + 
    "    <script src=\"assets/js/mobile.js\"></script>\n" + 
    "  </head>\n" + 
    "  <body>"
    "<!--\n" +  
    "  START of header\n" +  
    "        Contains:\n" + 
    "        + Logo\n" + 
    "        + Search box\n" + 
    "        + Links to:\n" + 
    "            - Login\n" + 
    "            - Korean language mobile page\n" + 
    "-->\n" + 
        <header>
          <img src="assets/img/logo/logo.png" width="230" height="170" alt="Leaders Academy" />
          <section id="header-right">
            <div id="header-search">
            <form>
              <input type="search" width="25" maxwidth="75" value="Search" id="mobile-search">
            </form>
            </div>
            <div id="header-links">
              <a href="/login/" title="Login" id="link-login">Login</a>
              <a href="/kr/" title="한국어" id="link-korean">한국어</a>
            </div>
          </section>
        </header>

    <!-- 
      START of Content 
        Contains:
          + Neighborhood map
          + List of:
            - Address
            - Phone Number
            - Directions
    -->
        <article>

        </article>
    <!-- 
      START of Footer 
        Contains:
          + Links to social media platforms
          + Copyright information
    -->
        <footer>
          <section id="footer-border">
            <div></div>
          </section>
          <section id="footer-row_1">
            <a href="https://naver.com" title="Naver" target="_blank" id="link-naver"></a>
            <a href="https://facebook.com" title="Facebook" target="_blank" id="link-facebook"></a>
            <a href="https://twitter.com" title="Twitter" target="_blank" id="link-twitter"></a>
            <a href="https://youtube.com" title="YouTube" target="_blank" id="link-you_tube"></a>
            <a href="https://kakao.com" title="Kakao" target="_blank" id="link-kakao"></a>
          </section>
          <section id="footer-row_2">
            <a href="https://instagram.com" title="Instagram" target="_blank" id="link-instagram"></a>
            <a href="https://wechat.com" title="WeChat" target="_blank" id="link-wechat"></a>
            <a href="https://plus.google.com" title="Google+" target="_blank" id="link-google"></a>
            <a href="https://line.com" title="Line" target="_blank" id="link-line"></a>
            <a href="https://whatsapp.com" title="WhatsApp" target="_blank" id="link-whatsapp"></a>
          </section>
          <section id="footer-row_3">
            <span>Leaders Academy &copy; 2017</span>
          </section>
        </footer>
      </body>
    </html>
  )
  
  jq("article").html()
} // END of FUNCTION 'extractHtmlFromDesktopPage'