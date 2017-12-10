var jq = jQuery.noConflict();

/* jq(window).load(
  function () {
    jq("body").css("opacity", 0);
  }
); */

function extractHtmlFromDesktopPage()  {

  /*  ---- ---- ---- FUNCTION OUTLINE ---- ---- ---- ----
          Function extracts the text content from 
          the HTML.

      ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- */
  
  jq(document).ready(
    function () {
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
        'history.htm', 
        'faculty.htm', 
        'rules.htm', 
        'system.htm', 
        'recruiting.htm', 
        'location.htm', 
        'park_sooyoung.htm', 
        'kim_hyerin.htm', 
        'lee_hanyo.htm', 
        'park_sungryul.htm', 
        'abhisheka_dubey.htm', 
        'kevin_han.htm'
      ];

      // Pass on the URL string of the loading page.
      url_string = window.location.href;

      jq.each(urls_Array, 
        function (index, value) {
          var current_URL = value;
          // console.log("current_URL = " + current_URL);
          // console.log("url_string.indexOf(" + current_URL + ") = " + url_string.indexOf(current_URL));
          // console.log("index = " + index);
          // console.log("webpage_index = " + webpage_index);

          if (url_string.indexOf(current_URL) > -1) {
            switch (index)  {
              // Runs if the loading page is for the 'History' section.
              case 0:
                extracted_html[0] = "        <div id=\"article-header\">\n" + 
                                    "          <h2>인사말 (HISTORY)</h2>\n" + 
                                    "        </div>\n" + 
                                    "        <div id=\"article-content\">\n" + 
                                    "          <img src=\"http://chriscjamison.com/la/assets/img/content/about/cont01-01s.png\" width=\"680\" height=\"768\" alt=\"인사말(HISTORY)\" />\n" + 
                                    "        </div>\n";

                webpage_index = 0;
              break;

              // Runs if the loading page is the 'Faculty' page.
              case 1: 
                extracted_html[0] = "        <div id=\"article-header\">\n" + 
                                    "          <h2>강사소개 (FACULTY)</h2>\n" + 
                                    "        </div>\n" + 
                                    "        <div id=\"article-content\">\n";

                extracted_html[1] = "          <div class=\"article-faculty-row\" id=\"article-faculty-row_1\">\n";

                extracted_html[2] = "            <div class=\"article-faculty-member\" id=\"faculty-member-park_sooyoung\">\n" + 
                                    "              <img src=\"http://daechi.leadersacademy.com/skin/_data/board/about6/_150771667908700.JPG\" width=\"78\" height=\"107\" />\n" + 
                                    "              <div class=\"article-faculty-info\">\n" + 
                                    "                <ul>\n" + 
                                    "                  <li><strong>이름</strong> : <a href=\"/la/assets/html/guide/faculty/park_sooyoung.htm\">Park Sooyoung</a></li>\n" + 
                                    "                  <li><strong>담당</strong> : 정규토론(DEBATE)</li>\n" + 
                                    "                  <li><strong>자기소개 </strong></li>\n" + 
                                    "                </ul>\n" + 
                                    "                <p>\n" + 
                                    "                  Yonsei University Humanities, Arts and Social Science Justice and Civil Leadership President of...\n" + 
                                    "                </p>\n" + 
                                    "              </div>\n" + 
                                    "            </div>\n";

                extracted_html[3] = "            <div class=\"article-faculty-member\" id=\"faculty-member-kim_hyerin\">\n" + 
                                    "              <img src=\"http://daechi.leadersacademy.com/skin/_data/board/about6/_150771057387850.JPG\" width=\"78\" height=\"107\" />\n" + 
                                    "              <div class=\"article-faculty-info\">\n" + 
                                    "                <ul>\n" + 
                                    "                  <li><strong>이름</strong> : <a href=\"/la/assets/html/guide/faculty/kim_hyerin.htm\">Kim Hyerin</a></li>\n" + 
                                    "                  <li><strong>담당</strong> : 정규토론(DEBATE)</li>\n" + 
                                    "                  <li><strong>자기소개 </strong></li>\n" + 
                                    "                </ul>\n" + 
                                    "                <p>\n" + 
                                    "                  Ewha Womans University- Major in Bachelor of International Studies; concentration in Law and Diplo...\n" + 
                                    "                </p>\n" + 
                                    "              </div>\n" +
                                    "            </div>\n";

                extracted_html[4] = "          </div>\n" + 
                                    "          <div class=\"article-faculty-row\" id=\"article-faculty-row_2\">\n";
                
                extracted_html[5] = "            <div class=\"article-faculty-member\" id=\"faculty-member-lee_hanyo\">\n" + 
                                    "              <img src=\"http://daechi.leadersacademy.com/skin/_data/board/about6/_150771049407960.JPG\" width=\"78\" height=\"107\" />\n" + 
                                    "              <div class=\"article-faculty-info\">\n" + 
                                    "                <ul>\n" + 
                                    "                  <li><strong>이름</strong> : <a href=\"/la/assets/html/guide/faculty/lee_hanyo.htm\">Lee Hanho</a></li>\n" + 
                                    "                  <li><strong>담당</strong> : 정규토론(DEBATE)</li>\n" + 
                                    "                  <li><strong>자기소개 </strong></li>\n" + 
                                    "                </ul>\n" + 
                                    "                <p>\n" + 
                                    "                  Hankuk Academy of Foreign Studies 한국외국어대학교 부속 용인외국어고등학교Seoul National Universit...\n" + 
                                    "                </p>\n" + 
                                    "              </div>\n" +
                                    "            </div>\n";

                extracted_html[6] = "            <div class=\"article-faculty-member\" id=\"faculty-member-park_sungryul\">\n" + 
                                    "              <img src=\"http://daechi.leadersacademy.com/skin/_data/board/about6/_150771041038790.jpg\" width=\"78\" height=\"107\" />\n" + 
                                    "              <div class=\"article-faculty-info\">\n" + 
                                    "                <ul>\n" + 
                                    "                  <li><strong>이름</strong> : <a href=\"/la/assets/html/guide/faculty/park_sungryul.htm\">Park Sungryul</a></li>\n" + 
                                    "                  <li><strong>담당</strong> : 정규토론(DEBATE)</li>\n" + 
                                    "                  <li><strong>자기소개 </strong></li>\n" + 
                                    "                </ul>\n" + 
                                    "                <p>\n" + 
                                    "                  	in Seoul National University Law School Yonsei University B.A. Political Science and Internatio...\n" + 
                                    "                </p>\n" + 
                                    "              </div>\n" +
                                    "            </div>\n";

                extracted_html[7] = "          </div>\n" + 
                                    "          <div class=\"article-faculty-row\" id=\"article-faculty-row_3\">\n";

                extracted_html[8] = "            <div class=\"article-faculty-member\" id=\"faculty-member-abhisheka_dubey\">\n" + 
                                    "              <img src=\"http://daechi.leadersacademy.com/skin/_data/board/about6/_150771024769050.JPG\" width=\"78\" height=\"107\" />\n" + 
                                    "              <div class=\"article-faculty-info\">\n" + 
                                    "                <ul>\n" + 
                                    "                  <li><strong>이름</strong> : <a href=\"/la/assets/html/guide/faculty/abhisheka_dubey.htm\">Abhisheka Dubey</a></li>\n" + 
                                    "                  <li><strong>담당</strong> : 정규토론(DEBATE)</li>\n" + 
                                    "                  <li><strong>자기소개 </strong></li>\n" + 
                                    "                </ul>\n" + 
                                    "                <p>\n" + 
                                    "                  RSIS, Singapore M.Sc. International Political\n" + 
                                    "                </p>\n" + 
                                    "              </div>\n" +
                                    "            </div>\n";

                extracted_html[9] = "            <div class=\"article-faculty-member\" id=\"faculty-member-kevin_han\">\n" + 
                                    "              <img src=\"http://daechi.leadersacademy.com/skin/_data/board/about6/_144810310775620.jpeg\" width=\"78\" height=\"107\" />\n" + 
                                    "              <div class=\"article-faculty-info\">\n" + 
                                    "                <ul>\n" + 
                                    "                  <li><strong>이름</strong> : <a href=\"/la/assets/html/guide/faculty/kevin_han.htm\">Kevin Han</a></li>\n" + 
                                    "                  <li><strong>담당</strong> : 정규토론(DEBATE) &amp; 모의유엔(MUN)</li>\n" + 
                                    "                  <li><strong>자기소개 </strong></li>\n" + 
                                    "                </ul>\n" + 
                                    "                <p>\n" + 
                                    "                  	Education: Osnabruck University (Germany) - Business Management and Social Sciences Kyunghee Uni...\n" + 
                                    "                </p>\n" + 
                                    "              </div>\n" +
                                    "            </div>\n";

                extracted_html[10]= "          </div>\n" + 
                                    "          <div class=\"article-faculty-row\" id=\"article-faculty-row_4\">\n";

                extracted_html[11]= "            <div class=\"article-faculty-member\" id=\"faculty-member-reece_randall\">\n" + 
                                    "              <img src=\"http://daechi.leadersacademy.com/skin/_data/board/about6/_150313760797340.JPG\" width=\"78\" height=\"107\" />\n" + 
                                    "              <div class=\"article-faculty-info\">\n" + 
                                    "                <ul>\n" + 
                                    "                  <li><strong>이름</strong> : <a href=\"/la/assets/html/guide/faculty/reece_randall.htm\">Reece Randall</a></li>\n" + 
                                    "                  <li><strong>담당</strong> : 정규토론(DEBATE) &amp; 정규영어(ENGLISH)</li>\n" + 
                                    "                  <li><strong>자기소개 </strong></li>\n" + 
                                    "                </ul>\n" + 
                                    "                <p>\n" + 
                                    "                  Reece Randall University of Cape Town | 2017 Teaching English as a Foreign Language (TEFL) Vars...\n" + 
                                    "                </p>\n" + 
                                    "              </div>\n" +
                                    "            </div>\n";

                extracted_html[12]= "            <div class=\"article-faculty-member\" id=\"faculty-member-lee_eunhye\">\n" + 
                                    "              <img src=\"http://daechi.leadersacademy.com/skin/_data/board/about6/_149086887973460.JPG\" width=\"78\" height=\"107\" />\n" + 
                                    "              <div class=\"article-faculty-info\">\n" + 
                                    "                <ul>\n" + 
                                    "                  <li><strong>이름</strong> : <a href=\"/la/assets/html/guide/faculty/lee_eunhye.htm\">Lee Eunhye</a></li>\n" + 
                                    "                  <li><strong>담당</strong> : 정규토론(DEBATE) &amp; 모의유엔(MUN)</li>\n" + 
                                    "                  <li><strong>자기소개 </strong></li>\n" + 
                                    "                </ul>\n" + 
                                    "                <p>\n" + 
                                    "                  	KDI School of Public Policy and Management Candidate for Master of Public Policy College of In...\n" + 
                                    "                </p>\n" + 
                                    "              </div>\n" +
                                    "            </div>\n";

                extracted_html[13]= "          </div>\n" + 
                                    "          <div class=\"article-faculty-row\" id=\"article-faculty-row_5\">\n";

                extracted_html[14]= "            <div class=\"article-faculty-member\" id=\"faculty-member-you_ge_heon\">\n" + 
                                    "              <img src=\"http://daechi.leadersacademy.com/skin/_data/board/about6/_149086687233400.jpg\" width=\"78\" height=\"107\" />\n" + 
                                    "              <div class=\"article-faculty-info\">\n" + 
                                    "                <ul>\n" + 
                                    "                  <li><strong>이름</strong> : <a href=\"/la/assets/html/guide/faculty/you_ge_heon.htm\">You Ge Heon</a></li>\n" + 
                                    "                  <li><strong>담당</strong> : 정규토론(DEBATE)</li>\n" + 
                                    "                  <li><strong>자기소개 </strong></li>\n" + 
                                    "                </ul>\n" + 
                                    "                <p>\n" + 
                                    "                  Yonsei University UIC Political Science &amp; International Relations[심사위원 경력]2016년...\n" + 
                                    "                </p>\n" + 
                                    "              </div>\n" +
                                    "            </div>\n";

                extracted_html[15]= "            <div class=\"article-faculty-member\" id=\"faculty-member-kim_gyumin\">\n" + 
                                    "              <img src=\"http://daechi.leadersacademy.com/skin/_data/board/about6/_149086514026660.jpg\" width=\"78\" height=\"107\" />\n" + 
                                    "              <div class=\"article-faculty-info\">\n" + 
                                    "                <ul>\n" + 
                                    "                  <li><strong>이름</strong> : <a href=\"/la/assets/html/guide/faculty/kim_gyumin.htm\">Kim Gyumin</a></li>\n" + 
                                    "                  <li><strong>담당</strong> : 정규토론(DEBATE)</li>\n" + 
                                    "                  <li><strong>자기소개 </strong></li>\n" + 
                                    "                </ul>\n" + 
                                    "                <p>\n" + 
                                    "                  	Yonsei University UIC International Studies&nbsp;&nbsp;&nbsp;- Korean Minjok Leadership Aca...\n" + 
                                    "                </p>\n" + 
                                    "              </div>\n" +
                                    "            </div>\n";

                extracted_html[16]= "          </div>\n" + 
                                    "          <div class=\"article-faculty-row\" id=\"article-faculty-row_6\">\n";

                extracted_html[17]= "            <div class=\"article-faculty-member\" id=\"faculty-member-brian_moon\">\n" + 
                                    "              <img src=\"http://daechi.leadersacademy.com/skin/_data/board/about6/_147279951758880.bmp\" width=\"78\" height=\"107\" />\n" + 
                                    "              <div class=\"article-faculty-info\">\n" + 
                                    "                <ul>\n" + 
                                    "                  <li><strong>이름</strong> : <a href=\"/la/assets/html/guide/faculty/brian_moon.htm\">Brian Moon</a></li>\n" + 
                                    "                  <li><strong>담당</strong> : 정규토론(DEBATE)</li>\n" + 
                                    "                  <li><strong>자기소개 </strong></li>\n" + 
                                    "                </ul>\n" + 
                                    "                <p>\n" + 
                                    "                  Hanyang University Division of International Studies Division of Chemical Engineer...\n" + 
                                    "                </p>\n" + 
                                    "              </div>\n" +
                                    "            </div>\n";

                extracted_html[18]= "            <div class=\"article-faculty-member\" id=\"faculty-member-chan_keun_kim\">\n" + 
                                    "              <img src=\"http://daechi.leadersacademy.com/skin/_data/board/about6/_146857135048140.jpg\" width=\"78\" height=\"107\" />\n" + 
                                    "              <div class=\"article-faculty-info\">\n" + 
                                    "                <ul>\n" + 
                                    "                  <li><strong>이름</strong> : <a href=\"/la/assets/html/guide/faculty/chan_keun_kim.htm\">Chan Keun Kim</a></li>\n" + 
                                    "                  <li><strong>담당</strong> : 정규토론(DEBATE)</li>\n" + 
                                    "                  <li><strong>자기소개 </strong></li>\n" + 
                                    "                </ul>\n" + 
                                    "                <p>\n" + 
                                    "                  	고려대학교 경영학과 1. Highschool Level 2010 NSDC Champion 2010 KHSDC Gran...\n" + 
                                    "                </p>\n" + 
                                    "              </div>\n" +
                                    "            </div>\n";

                extracted_html[19]= "          </div>\n" + 
                                    "          <div class=\"article-faculty-row\" id=\"article-faculty-row_7\">\n";

                extracted_html[20]= "            <div class=\"article-faculty-member\" id=\"faculty-member-joonpyo_sohn\">\n" + 
                                    "              <img src=\"http://daechi.leadersacademy.com/skin/_data/board/about6/_146857124556520.jpg\" width=\"78\" height=\"107\" />\n" + 
                                    "              <div class=\"article-faculty-info\">\n" + 
                                    "                <ul>\n" + 
                                    "                  <li><strong>이름</strong> : <a href=\"/la/assets/html/guide/faculty/joonpyo_sohn.htm\">Joonpyo Sohn</a></li>\n" + 
                                    "                  <li><strong>담당</strong> : 정규토론(DEBATE)</li>\n" + 
                                    "                  <li><strong>자기소개 </strong></li>\n" + 
                                    "                </ul>\n" + 
                                    "                <p>\n" + 
                                    "                  Brown University A.B.: Economics &amp; Applied Math Daewon Foreign Language HS English-...\n" + 
                                    "                </p>\n" + 
                                    "              </div>\n" +
                                    "            </div>\n";

                extracted_html[21]= "            <div class=\"article-faculty-member\" id=\"faculty-member-matthew_owen\">\n" + 
                                    "              <img src=\"http://daechi.leadersacademy.com/skin/_data/board/about6/_144490127135610.JPG\" width=\"78\" height=\"107\" />\n" + 
                                    "              <div class=\"article-faculty-info\">\n" + 
                                    "                <ul>\n" + 
                                    "                  <li><strong>이름</strong> : <a href=\"/la/assets/html/guide/faculty/matthew_owen.htm\">Matthew Owen</a></li>\n" + 
                                    "                  <li><strong>담당</strong> : 정규영어(ENGLISH)</li>\n" + 
                                    "                  <li><strong>자기소개 </strong></li>\n" + 
                                    "                </ul>\n" + 
                                    "                <p>\n" + 
                                    "                  	경력 l Language Institutes &amp; Academies 2011-2015: S...\n" + 
                                    "                </p>\n" + 
                                    "              </div>\n" +
                                    "            </div>\n";

                extracted_html[22]= "          </div>\n" + 
                                    "          <div class=\"article-faculty-row\" id=\"article-faculty-row_8\">\n";

                extracted_html[23]= "            <div class=\"article-faculty-member\" id=\"faculty-member-joonpyo_sohn\">\n" + 
                                    "              <img src=\"http://daechi.leadersacademy.com/skin/_data/board/about6/_140273568736030.PNG\" width=\"78\" height=\"107\" />\n" + 
                                    "              <div class=\"article-faculty-info\">\n" + 
                                    "                <ul>\n" + 
                                    "                  <li><strong>이름</strong> : <a href=\"/la/assets/html/guide/faculty/joonpyo_sohn.htm\">Roger Hatridge</a></li>\n" + 
                                    "                  <li><strong>담당</strong> : 정규토론(DEBATE)</li>\n" + 
                                    "                  <li><strong>자기소개 </strong></li>\n" + 
                                    "                </ul>\n" + 
                                    "                <p>\n" + 
                                    "                  2012 l   Professor at Sogang University; teaching &ldquo;Humanities Debate&rdquo;...\n" + 
                                    "                </p>\n" + 
                                    "              </div>\n" +
                                    "            </div>\n";


                extracted_html[24]= "          </div>\n" + 
                                    "        </div>\n";

                webpage_index = 1;


              break;

              // Runs if the page loading is the 'Location' page/
              case 5: 
                // Pass on the HTML of the Section header and map.
                extracted_html[0] = "        <div id=\"article-header\">\n" + 
                                    "          <h2 lang=\"ko\">치안내 (LOCATION)</h2>\n" + 
                                    "        </div>\n"+ 
                                    "        <div id=\"map\" style=\"width:85%;height:500px;margin: 0 auto;\"></div>\n" + 

                                    /* "        <div class=\"wrap_content\">\n" + 
                                    "          <div class=\"wrap_map\">\n" + 
                                    "          <div id=\"map\" style=\"width:100%;height:100%\"></div>\n" + 
                                    "          <div class=\"wrap_button\">\n" + 
                                    "            <a href=\"javascript:;\" class=\"btn_comm btn_linkMap\" target=\"_blank\" onclick=\"moveDaumMap(this)\"><span class=\"screen_out\">지도 크게보기</span></a>\n" + 
                                    "            <a href=\"javascript:;\" class=\"btn_comm btn_resetMap\" onclick=\"resetDaumMap()\"><span class=\"screen_out\">지도 초기화</span></a>\n" + 
                                    "          </div>\n" + 
                                    "        </div>\n" + 
                                    "        <div class=\"wrap_roadview\">\n" + 
                                    "          <div id=\"roadview\" style=\"width:100%;height:100%\"></div>\n" + 
                                    "          <div class=\"wrap_button\">\n" + 
                                    "            <a href=\"javascript:;\" class=\"btn_comm btn_linkRoadview\" target=\"_blank\" onclick=\"moveDaumRoadview(this)\"><span class=\"screen_out\">로드뷰 크게보기</span></a>\n" + 
                                    "            <a href=\"javascript:;\" class=\"btn_comm btn_resetRoadview\" onclick=\"resetRoadview()\"><span class=\"screen_out\">로드뷰 크게보기</span></a>\n" + 
                                    "          </div>\n" + 
                                    "        </div>\n"  +  */
                                    "        <!-- Source library for Daum Maps -->\n" + 
                                    "        <script type=\"text/javascript\" src=\"//dapi.kakao.com/v2/maps/sdk.js?appkey=83636625893c769b461dd3298dd45bba\"></script>\n" + 
                                    "        <script>\n" + 
                                    "          var mapContainer = document.getElementById('map'), \n" + 
                                    "          mapCenter = new daum.maps.LatLng(37.500521, 127.051424), \n" + 
                                    "          mapOption = { \n" + 
                                    "            center: mapCenter, \n" + 
                                    "            level: 3\n" + 
                                    "          };\n" +
                                    "\n" +  
                                    "          var map = new daum.maps.Map(mapContainer, mapOption);\n" + 
                                    "\n" + 
                                    "          var markerPosition  = new daum.maps.LatLng(37.500521, 127.051424);\n" + 
                                    "\n" + 
                                    "          var marker = new daum.maps.Marker({ \n" + 
                                    "             position: markerPosition\n" + 
                                    "          });\n" + 
                                    "\n" + 
                                    "          marker.setMap(map);\n" + 
                                    "\n" + 
                                    "          var iwContent = '<div style=\"padding:5px;\">Leaders Academy<br><a href=\"http://map.daum.net/link/map/Leaders Academy,37.500521,127.051424\" style=\"color:blue\" target=\"_blank\">큰지도보기</a> <a href=\"http://map.daum.net/link/to/Hello World!,37.500521,127.051424\" style=\"color:blue\" target=\"_blank\">길찾기</a></div>', \n" + 
                                    "            iwPosition = new daum.maps.LatLng(37.500521, 127.051424);\n" + 
                                    "\n" + 
                                    "          var infowindow = new daum.maps.InfoWindow({ \n" + 
                                    "            position : iwPosition, \n" + 
                                    "            content : iwContent\n" + 
                                    "          });\n" + 
                                    "\n" + 
                                    "          infowindow.open(map, marker);\n" + /*  + 
                                    "              position: mapCenter, \n" + 
                                    "              content: '스페이스 닷원'\n" + 
                                    "          });\n" + 
                                    "          mLabel.open(map, mMarker);\n" + 
                                    "\n" + 
                                    "          var rvContainer = document.getElementById('roadview');\n" + 
                                    "          var rv = new daum.maps.Roadview(rvContainer);\n" + 
                                    "          var rc = new daum.maps.RoadviewClient();\n" + 
                                    "          var rvResetValue = {}\n" + 
                                    "          rc.getNearestPanoId(mapCenter, 50, function(panoId) { \n" + 
                                    "            rv.setPanoId(panoId, mapCenter);\n" + 
                                    "            rvResetValue.panoId = panoId;\n" + 
                                    "          });\n" + 
                                    "\n" + 
                                    "          daum.maps.event.addListener(rv, 'init', function() { \n" + 
                                    "            var rMarker = new daum.maps.Marker({ \n" + 
                                    "              position: mapCenter, \n" + 
                                    "              map: rv\n" + 
                                    "            });\n" + 
                                    "\n" + 
                                    "            var rLabel = new daum.maps.InfoWindow({ \n" + 
                                    "                position: mapCenter, \n" + 
                                    "                content: '스페이스 닷원'\n" + 
                                    "            });\n" + 
                                    "            rLabel.open(rv, rMarker);\n" + 
                                    "\n" + 
                                    "            var projection = rv.getProjection();\n" + 
                                    "\n" + 
                                    "            var viewpoint = projection.viewpointFromCoords(rMarker.getPosition(), rMarker.getAltitude());\n" + 
                                    "                rv.setViewpoint(viewpoint);\n" + 
                                    "\n" + 
                                    "            rvResetValue.pan = viewpoint.pan;\n" + 
                                    "            rvResetValue.tilt = viewpoint.tilt;\n" + 
                                    "            rvResetValue.zoom = viewpoint.zoom;\n" + 
                                    "          });\n" + 
                                    "\n" + 
                                    "          function moveDaumMap(self){ \n" + 
                                    "            var center = map.getCenter(),  \n" + 
                                    "            lat = center.getLat(), \n" + 
                                    "            lng = center.getLng();\n" + 
                                    "            self.href = 'http://map.daum.net/link/map/' + encodeURIComponent('스페이스 닷원') + ',' + lat + ',' + lng;\n" + 
                                    "          }\n" + 
                                    "\n" + 
                                    "          function resetDaumMap(){ \n" + 
                                    "            map.setCenter(mapCenter);\n" + 
                                    "            map.setLevel(mapOption.level);\n" + 
                                    "          }\n" + 
                                    "\n" + 
                                    "          function moveDaumRoadview(self){ \n" + 
                                    "            var panoId = rv.getPanoId();\n" + 
                                    "            var viewpoint = rv.getViewpoint();\n" + 
                                    "            self.href = 'http://map.daum.net/?panoid='+panoId+'&pan='+viewpoint.pan+'&tilt='+viewpoint.tilt+'&zoom='+viewpoint.zoom;\n" + 
                                    "          }\n" + 
                                    "\n" + 
                                    "          function resetRoadview(){ \n" + 
                                    "            rv.setViewpoint({ \n" + 
                                    "              pan: rvResetValue.pan, tilt: rvResetValue.tilt, zoom: rvResetValue.zoom\n" + 
                                    "            });\n" + 
                                    "            rv.setPanoId(rvResetValue.panoId);\n" + 
                                    "          }\n" +  */
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
                extracted_html[10] = "        <h4>Seolleung Station exit two</h4>\n" + 
                                     "        <ul>\n" + 
                                     "          <li>Step out of exit two and go straight for five minutes.</li>\n" + 
                                     "          <li>At the second stoplight, you will see Leaders Academy across the street and slightly to the left.</li>\n" + 
                                     "          <li>After you cross the street, walk 20 meters to Leaders Academy.</li>\n" + 
                                     "          <li>Come to the fourth floor.</li>\n" + 
                                     "        </ul>\n" + 
                                     "        <h4>Hanti Station exit one</h4>\n" + 
                                     "        <ul>\n" + 
                                     "          <li>Step out of exit one and go straight for five minutes until you see Baskin Robbins across the street and Seokwang Eye Glasses shop to your right.</li>\n" + 
                                     "          <li>Do not cross the street.</li>\n" + 
                                     "          <li>Go right.</li>\n" + 
                                     "          <li>You will see Leaders Academy in the second building on your right.</li>\n" + 
                                     "          <li>Come to the fourth floor.</li>\n" + 
                                     "        </ul>\n";

                // Pass on the third row of directions.
                extracted_html[11] = jq("table table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td table > tbody > tr:nth-child(4) > td table > tbody > tr:nth-child(6) > td").html();
                extracted_html[12] = "        <h4>The nearest bus stops and bus numbers:</h4>\n" + 
                                     "        <strong>Dogok Sagori</strong>\n" + 
                                     "        <ul>\n" + 
                                     "          <li>363</li>\n" + 
                                     "        </ul>\n" + 
                                     "        <strong>Dosung Cho Sagori</strong>\n" + 
                                     "        <ul>\n" + 
                                     "          <li>472</li>\n" + 
                                     "          <li>6211</li>\n" + 
                                     "          <li>3420</li>\n" + 
                                     "          <li>330</li>\n" + 
                                     "          <li>3219</li>\n" + 
                                     "          <li>4312</li>\n" + 
                                     "          <li>4412</li>\n" + 
                                     "          <li>9414</li>\n" + 
                                     "          <li>8443</li>\n" +  
                                     "        </ul>" + 
                                     "        <strong>Daechi Dong Hanguk Hagwon</strong>\n" + 
                                     "        <ul>\n" + 
                                     "          <li>363</li>\n" + 
                                     "        </ul>\n" + 
                                     "        <strong>Young dong Apt</strong>\n" + 
                                     "        <ul>\n" + 
                                     "          <li>8443</li>\n" + 
                                     "          <li>147</li>\n" + 
                                     "          <li>472</li>\n" + 
                                     "          <li>6411</li>\n" + 
                                     "          <li>3420</li>\n" + 
                                     "          <li>3219</li>\n" + 
                                     "          <li>4312</li>\n" + 
                                     "          <li>4412</li>\n" + 
                                     "          <li>9414</li>\n" +  
                                     "        </ul>\n";

                // Pass on the fourth row of directions.
                extracted_html[13] = jq("table table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td table > tbody > tr:nth-child(4) > td table > tbody > tr:nth-child(8) > td").html();
                extracted_html[14] = "        <h4>The nearest bus stops and bus numbers:</h4>\n" + 
                                     "        <ul>\n" + 
                                     "          <li>Tell the taxi driver Dosung Elementary Intersection-Dosung Chogyo Sagori - 도성초교 사거리</li>\n" + 
                                     "        </ul>\n";

                webpage_index = 5;
              break;

              // Runs if the loading page is the 'Faculty' page for Park Sooyoung.
              case 6:
                extracted_html[0] = "          <h4>Park Sooyoung</h4>\n" + 
                                    "          <span>[정규토론(DEBATE)]</span>\n" + 
                                    "          <span>관리자</span>\n";

                extracted_html[1] = "            Yonsei University\n" + 
                                    "            <br/>\n" + 
                                    "            Humanities, Arts and Social Science\n" +
                                    "            <br/>\n" + 
                                    "            Justice and Civil Leadership\n";

                extracted_html[2] = "          <h7>President of Yonsei Underwood Union (2016-2017)</h7>\n" + 
                                    "          <h6>[Debating]</h6>\n" + 
                                    "          <ul>\n" + 
                                    "            <li>2017 Worlds University Debate Championship Open Partial Double Octo-finalist</li>\n" + 
                                    "            <li>2017 KIDA Open Grand Finalist / 2<sup>nd</sup> best speaker</li>\n" + 
                                    "            <li>2016 Korea Women’s Debate Open Champion / 2<sup>nd</sup> Best Speaker</li>\n" + 
                                    "            <li>2016 Northeast Asian Open Grand Finalist / 4<sup>th</sup> Best Speaker</li>\n" + 
                                    "            <li>2016 Fall KIDA National Championship Grand Finalist / 3<sup>rd</sup> Best Speaker</li>\n" + 
                                    "            <li>2016 Kyushu Cup Semifinalist</li>\n" + 
                                    "            <li>2015 Korea Debate Open Champion</li>\n" + 
                                    "            <li>2015 Australasians EFL Grand Finalist</li>\n" + 
                                    "            <li>2015 Fall KIDA National Championship Grand Finalist</li>\n" + 
                                    "            <li>2015 SNUDA IV Grand Finalist</li>\n" + 
                                    "          </ul>\n" + 
                                    "          <h6>[Judging]</h6>\n" + 
                                    "          <ul>\n" + 
                                    "            <li>2017 Australasians Deputy Chief Adjudicator</li>\n" + 
                                    "            <li>2017 Spring KIDA National Championship Chief Adjudicator</li>\n" + 
                                    "            <li>2017 CUDS Open Deputy Chief Adjudicator</li>\n" + 
                                    "            <li>2017 Cornell-Yonsei Invitational Chief Adjudicator</li>\n" + 
                                    "            <li>2015 YTN-HUFS Best Adjudicator</li>\n" + 
                                    "            <li>2015 Korea Debate Open Champion</li>\n" + 
                                    "            <li>2015 Australasians EFL Grand Finalist</li>\n" + 
                                    "            <li>2015 Fall KIDA National Championship Grand Finalist</li>\n" + 
                                    "          </ul>\n" +  
                                    "          <h6>[MUN and Speaking]</h6>\n" + 
                                    "          <ul>\n" + 
                                    "            <li>5<sup>th</sup> Gwangju Youth English Debate Championship Breaking Adjudicator</li>\n" + 
                                    "            <li>5<sup>th</sup> ESU Korea English Speaking Competition 4</li>\n" + 
                                    "            <li>12<sup>th</sup> IYF English Speaking Competition 3</li>\n" + 
                                    "            <li>Model United Nations Climate Change Conference Korea Environment Corporation CEO Award</li>\n" + 
                                    "          </ul>\n";
                webpage_index = 6;
              break;

              // Runs if the loading page is the 'Faculty' page for Kim Hyerin.
              case 7:
                extracted_html[0] = "          <h4>Kim Hyerin</h4>\n" + 
                                    "          <span>[정규토론(DEBATE)]</span>\n" + 
                                    "          <span>작성자</span>\n";

                extracted_html[1] = "            Ewha Womans University\n" + 
                                    "            <br/>\n" + 
                                    "            Major in Bachelor of International Studies\n" + 
                                    "            <br/>\n" + 
                                    "            Concentration in Law and Diplomacy &amp; Asian Studies\n" +
                                    "            <br/>\n" + 
                                    "            Minor in International Development Cooperation\n";

                extracted_html[2] = "          <h7>EDiS (Ewha Debate Society)</h7>\n" + 
                                    "          <h6>심사위원 경력</h6>\n" + 
                                    "          <ul>\n" + 
                                    "            <li>2014 YTN-한국외대 청소년 영어토론대회 (초등부) 심사위원</li>\n" + 
                                    "            <li>2014 YTN-한국외대 청소년 영어토론대회 (중등부) 심사위원</li>\n" + 
                                    "            <li>2015 이화여대 High-On 디베이트 캠프 결승전 심사위원</li>\n" + 
                                    "            <li>2015 YTN-한국외대 청소년 영어토론대회 (초등부) 심사위원</li>\n" + 
                                    "            <li>2015 YTN-한국외대 청소년 영어토론대회 (중등부) 심사위원</li>\n" + 
                                    "            <li>2015 GFN 영어방송 광주광역시 전국 청소년 영어토론대회 2위 심사위원상 수상</li>\n" + 
                                    "            <li>2015 한국 국제 토론대회 (KDO) 심사위원</li>\n" + 
                                    "            <li>2016 코넬-연세 고교대항전 4위 심사위원상 수상</li>\n" + 
                                    "            <li>2016 YTN-한국외대 청소년 영어토론대회 (중등부) 심사위원</li>\n" + 
                                    "          </ul>\n" + 
                                    "          <h6>디베이트 경력</h6>\n" + 
                                    "          <ul>\n" + 
                                    "            <li>2014 서강대학교 루키 토너먼트 (SRT) 준결승전 진출</li>\n" + 
                                    "            <li>2014 제16회 전국대학생 영어토론대회 (KNC) 루키 준준결승전 진출</li>\n" + 
                                    "            <li>2015 일본기독교대학 국제토론대회 (ICUT) 준준결승전 진출</li>\n" + 
                                    "            <li>2015 한국 여성 토론대회 (KWDO) 결승전 진출</li>\n" + 
                                    "            <li>2016 한국 여성 토론대회 (KWDO) 결승전 진출</li>\n" + 
                                    "          </ul>\n";

                webpage_index = 7;
              break;

              // Runs if the loading page is the 'Faculty' page for Kim Hyerin.
              case 8:
                extracted_html[0] = "          <h4>Lee Hanyo</h4>\n" + 
                                    "          <span>[정규토론(DEBATE)]</span>\n" + 
                                    "          <span>작성자</span>\n";

                extracted_html[1] = "            Hankuk Academy of Foreign Studies 한국외국어대학교 부속 용인외국어고등학교\n" + 
                                    "            <br/>\n" + 
                                    "            Seoul National University 서울대학교\n";

                extracted_html[2] = "          <ul>\n" + 
                                    "            <li>2009 KYUMUN Outstanding Delegate | Delegate, ECOSOC</li>\n" + 
                                    "            <li>2009 GMUN Best Delegate | Delegate, ECOSOC</li>\n" + 
                                    "            <li>2009 KMCI 1<sup>st</sup> Speaker | Suspect, U.S. Marshalls II</li>\n" + 
                                    "            <li>2009 MUNOS Outstanding Delegate | Delegate, SC</li>\n" + 
                                    "            <li>2009 SEOMUN Delegate, HR Council</li>\n" + 
                                    "            <li>2009 THIMUN - Singapore Delegate, ECOSOC</li>\n" + 
                                    "            <li>2010 Dale Carnegie Presentation Conference 1st Place - Gyeonggi Governor Recognition</li>\n" +
                                    "          </ul>\n" + 
                                    "          <ul>\n" + 
                                    "            <li>2012 11<sup>th</sup> KIDA National Championship Rookie Champion</li>\n" + 
                                    "            <li>2013 12<sup>th</sup> KIDA National Championship Semi-Finalist</li>\n" + 
                                    "            <li>2013 Sogang BP Open Grand-Finalist</li>\n" + 
                                    "            <li>2013 Sogang IV Semi-Finalist | 2<sup>nd</sup> Best Speaker</li>\n" + 
                                    "            <li>2014 13<sup>th</sup> KIDA National Championship Champion | G-F Best Speaker</li>\n" + 
                                    "            <li>2016 18<sup>th</sup> KIDA National Championship Grand-Finalist | 6<sup>th</sup> Best Speaker</li>\n"
                                    "          </ul>\n" + 
                                    "          <ul>\n" + 
                                    "            <li>2016 CUDS Open Invited Adjudicator</li>\n" + 
                                    "            <li>2016 19<sup>th</sup> KIDA National Championship Deputy Chief Adjudicator</li>\n" + 
                                    "          </ul>\n" + 
                                    "          <ul>\n" + 
                                    "            <li>2013 4<sup>th</sup> Gwangju Youth Debating Championship Breaking Adjudicator | 2<sup>nd</sup> Best Adjudicator</li>\n" + 
                                    "            <li>2014 1<sup>st</sup> Cornell-Yonsei Debate Invitational Breaking Adjudicator | 2<sup>nd</sup> Best Adjudicator</li>\n" + 
                                    "            <li>2016 2<sup>nd</sup> YTN-HUFS ES English Debating Championship Breaking Adjudicator</li>\n" +
                                    "            <li>2016 7<sup>th</sup> YTN-HUFS MS English Debating Championship Breaking Adjudicator</li>\n" + 
                                    "            <li>2016 8<sup>th</sup> YTN-HUFS HS English Debating Championship Breaking Adjudicator | 3<sup>rd</sup> Best Adjudicator</li>\n" + 
                                    "            <li>2016 2<sup>nd</sup> MK Economy English Debate Tournament Breaking Adjudicator</li>\n" +
                                    "          </ul>\n";

                webpage_index = 8;
              break;

              // Runs if the loading page is the 'Faculty' page for Park Sungryul.
              case 9:
                extracted_html[0] = "          <h4>Park Sungryul</h4>\n" + 
                                    "          <span>[정규토론(DEBATE)]</span>\n" + 
                                    "          <span>관리자</span>\n";

                extracted_html[1] = "            In Seoul National University Law School\n" + 
                                    "            <br/>\n" + 
                                    "            Yonsei University\n" + 
                                    "            <br/>\n" + 
                                    "            B.A. Political Science and International Relations / Economics\n";

                extracted_html[2] = "          <h6>Coaching</h6>\n" + 
                                    "          <ul>\n" + 
                                    "            <li>Invited Lecturer, Japan Parliamentary Debate Union, 2016 Spring Seminar</li>\n" + 
                                    "          </ul>\n" + 
                                    "          <h6>Competition</h6>\n" + 
                                    "          <ul>\n" + 
                                    "            <li>Champion, 2013 4<sup>th</sup> Hong Kong Debate Open, 10<sup>th</sup> Best Speaker and Grand Finals Best Speaker</li>\n" + 
                                    "            <li>Champion, 2015 Fall KNC, Best Speaker</li>\n" + 
                                    "            <li>Champion, 2015 Korea Debate Open, Best Speaker</li>\n" + 
                                    "            <li>ESL-Semifinalist, 2013 Worlds University Debate Championship</li>\n" + 
                                    "            <li>Grand-Finalist, 2013 4<sup>th</sup></li>\n" + 
                                    "            <li>Grand-Finalist, 2014 5<sup>th</sup> East Asian Intervarsity Invitational</li>\n" + 
                                    "            <li>Grand-Finalist, 2013 Northeast Asian Open, 3<sup>rd</sup> Best Speaker</li>\n" + 
                                    "            <li>Grand-Finalist, 2014 1<sup>st</sup> SNUDA IV, Best Speaker</li>\n" + 
                                    "            <li>Grand-Finalist, 2015 2<sup>nd</sup> SNUDA IV, Best Speaker</li>\n" + 
                                    "            <li>Grand-Finalist, 2017 KIDA Pro-Am</li>\n" + 
                                    "            <li>Quarter-Finalist, 2013 Asian BP</li>\n" + 
                                    "          </ul>\n" + 
                                    "          <h6>Adjudication</h6>\n" + 
                                    "          <ul>\n" + 
                                    "            <li>Chief Adjudicator, 2014 1<sup>st</sup> Cornell-Yonsei High School Invitational</li>\n" + 
                                    "            <li>Deputy Chief Adjudicator, 2016 Kyushu Cup</li>\n" + 
                                    "            <li>Deputy Chief Adjudicator, 2016 YUU-HYDS Open</li>\n" + 
                                    "            <li>Deputy Chief Adjudicator, 2015 Gwangju-Youth English Debate Championships</li>\n" + 
                                    "            <li>Deputy Chief Adjudicator, 2015 Sogang Open</li>\n" + 
                                    "            <li>Deputy Chief Adjudicator, 2014 Korea Debate Open</li>\n" + 
                                    "            <li>Deputy Chief Adjudicator, 2014 Northeast Asian Open</li>\n" + 
                                    "            <li>Deputy Chief Adjudicator, 2014 5<sup>th</sup> Hong Kong Debate Open</li>\n" + 
                                    "            <li>Deputy Chief Adjudicator, 2014 China BP</li>\n" + 
                                    "            <li>Deputy Chief Adjudicator, 2013 Winter KIDA National Championship</li>\n" + 
                                    "          </ul>\n";

                webpage_index = 9;
              break;

              // Runs if the loading page is the 'Faculty' page for Abhisheka Dubey.
              case 10:
                extracted_html[0] = "          <h4>Abhisheka Dubey</h4>\n" + 
                                    "          <span>[정규토론(DEBATE)]</span>\n" + 
                                    "          <span>작성자</span>\n";

                extracted_html[1] = "            RSIS, Singapore\n" + 
                                    "            <br/>\n" + 
                                    "            M.Sc. International Political\n" + 
                                    "            <br/>\n" + 
                                    "            Economy\n";

                extracted_html[2] = "          <h6>Coaching</h6>\n" + 
                                    "          <ul>\n" + 
                                    "            <li>2016 Workshop by Debate Development Initiative, Singapore</li>\n" + 
                                    "            <li>2014-2015 Show &amp; Tell Academy</li>\n" + 
                                    "            <li>2015 WFUNA Youth Camp</li>\n" + 
                                    "            <li>2014 5<sup>th</sup> Global Leadership Workshop by Debate for All</li>\n" + 
                                    "            <li>2013-2014 Samyuk Middle School (Debate for All)</li>\n" +
                                    "          </ul>\n" + 
                                    "          <h6>Debate</h6>\n" + 
                                    "          <ul>\n" + 
                                    "            <li>2015 Korea Debate Open, Grand Finalist &amp; 2<sup>nd</sup> Best Speaker</li>\n" + 
                                    "            <li>2015 17<sup>th</sup> KIDA National Championship, Grand Finalist</li>\n" + 
                                    "            <li>2015 Sogang IV, Quarter Finalist</li>\n" + 
                                    "            <li>2015 7<sup>th</sup> World Water Forum: Asian Sanitations Solutions Debate, Invited Speaker</li>\n" + 
                                    "            <li>2015 CUDS Open, Semi-finalist &amp; 7<sup>th</sup> Best Speaker</li>\n" + 
                                    "            <li>2014 Northeast Asian Open, Semi-finalist &amp; 6<sup>th</sup> Best Speaker</li>\n" + 
                                    "            <li>2014 China BP, Quarter-finalist &amp; 4<sup>th</sup> Best Speaker</li>\n" + 
                                    "            <li>2014 SNUDA IV, Semi-finalist &amp; Best Speaker</li>\n" + 
                                    "            <li>14<sup>th</sup> KIDA National Championship, Champion &amp; Best Speaker</li>\n" + 
                                    "            <li>2013 Sogang BP, Grand Finalist</li>\n" + 
                                    "          </ul>\n" + 
                                    "          <h6>Adjudication</h6>\n" + 
                                    "          <ul>\n" + 
                                    "            <li>2016 Northeast Asian Open, Grand Finals Judge &amp; 4<sup>th</sup> Best Judge</li>\n" + 
                                    "            <li>2016 Asian BP, Adjudication Core</li>\n" + 
                                    "            <li>2016 Yale-NUS pre-ABP, Adjudication Core</li>\n" + 
                                    "            <li>2016 China BP, Invited &amp; Grand Finals Judge</li>\n" + 
                                    "            <li>2016 YTN-HUFS Elementary School Division, Third Best Adjudicator</li>\n" + 
                                    "            <li>18<sup>th</sup> KIDA National Championship, Adjudication Core</li>\n" + 
                                    "            <li>2016 Malaysia Debate Open, Adjudication Core</li>\n" + 
                                    "            <li>2015 Northeast Asian Open, Adjudication Core</li>\n" + 
                                    "            <li>2015 Singapore Debate Open, Invited &amp; Grand Finals Judge</li>\n" + 
                                    "            <li>2015 Hong Kong Debate Open, Invited &amp; Grand Finals Judge</li>\n" + 
                                    "            <li>2015 Asian BP, Invited &amp; Semi-finals Chair</li>\n" + 
                                    "            <li>2015 Australasian Debating Championship, Invited &amp; EFL Grand Finals Judge</li>\n" + 
                                    "            <li>2014 KIDA IV, Invited &amp; Grand Finals Judge</li>\n" + 
                                    "            <li>2013 13<sup>th</sup> KIDA National Championship, Grand Finals Judge &amp; Fourth Best Adjudicator</li>\n" +
                                    "          </ul>\n";

                webpage_index = 10;
              break;

              // Runs if the loading page is the 'Faculty' page for Kevin Han.
              case 11:
                extracted_html[0] = "          <h4>Kevin Han</h4>\n" + 
                                    "          <span>[정규토론(DEBATE) &amp; 모의유엔(MUN)]</span>\n" + 
                                    "          <span>작성자</span>\n";

                extracted_html[1] = "            Osnabruck University (Germany) - Business Management and Social Sciences\n" + 
                                    "            <br/>\n" + 
                                    "            Kyunghee University (Korea) - International Studies\n" + 
                                    "            <br/>\n" + 
                                    "            Myungji High School (Korea)\n" + 
                                    "            <br/>\n" + 
                                    "            Varndean Secondary School (United Kingdom)\n";

                extracted_html[2] = "          <h6>Experience</h6>\n" + 
                                    "          <ul>\n" + 
                                    "            <li>Leaders Academy (2011~) - Instructor</li>\n" + 
                                    "            <li>Kyunghee International Model United Nations (2015) - Head Chair</li>\n" + 
                                    "            <li>Chungshim International Academy (2012) - Instructor</li>\n" + 
                                    "            <li>Global Classrooms MUN: Seoul (2012) - Head Chair</li>\n" + 
                                    "            <li>Gwangju English Debate Competition (2011) - Adjudicator</li>\n" + 
                                    "            <li>Hankuk Academy of Foreign Studies (2011) - Debate Instructor</li>\n" + 
                                    "            <li>Kwonsun Highschool (2011) - Instructor</li>\n" + 
                                    "            <li>UNESCO, Global Seminar (2011) - Instructor and Chair</li>\n" + 
                                    "            <li>Kyunghee University Workshop (2011) - Instructor</li>\n" + 
                                    "            <li>Global Classrooms MUN: Seoul (2011) - Chair</li>\n" + 
                                    "            <li>HUFS Debate Competition (2011) - Instructor and Adjudicator</li>\n" +
                                    "          </ul>\n" + 
                                    "          <h6>Awards</h6>\n" + 
                                    "          <ul>\n" + 
                                    "            <li>Kyunghee Summit G20 (2011) - First Place</li>\n" + 
                                    "            <li>2015 17<sup>th</sup> KIDA National Championship, Grand Finalist</li>\n" + 
                                    "            <li>Kyunghee International MUN (2011) - Best Delegate</li>\n" + 
                                    "            <li>Global Classrooms MUN: New York (2010) - Honorable Mention</li>\n" + 
                                    "            <li>Yonsei University MUN (2010) - Best Delegate</li>\n" + 
                                    "            <li>Yonsei University MCOP (2009) - Best Delegate</li>\n" + 
                                    "            <li>Global Classrooms MUN: Seoul (2009) - Best Delegate</li>\n" + 
                                    "            <li>Yonsei University Leadership Debate (2009) - First Place</li>\n" + 
                                    "          </ul>\n" + 
                                    "          <h6>Event Coaching</h6>\n" + 
                                    "          <ul>\n" + 
                                    "            <li>Harvard University (HMUN)</li>\n" + 
                                    "            <li>Yale University (YMUN)</li>\n" + 
                                    "            <li>Global Classrooms (GCMUN)</li>\n" +
                                    "            <li>Brown University (BMUN)</li>\n" + 
                                    "            <li>YTN Debate Championship</li>\n" + 
                                    "            <li>HUFS Debate Competition</li>\n" + 
                                    "            <li>HAFS Debate Competition</li>\n" + 
                                    "            <li>Seoul National University (SNUMUN)</li>\n" + 
                                    "            <li>Korea University (KMUN)</li>\n" + 
                                    "            <li>Yonsei University (YMUN)</li>\n" + 
                                    "            <li>Seoul Summit (MUNOS)</li>\n" + 
                                    "            <li>Beijing International (BEIMUN)</li>\n" + 
                                    "            <li>The Hague International (THIMUN)</li>\n" + 
                                    "            <li>YTN Conference of the Parties (MCOP)</li>\n" + 
                                    "            <li>Yonsei University (MCOP)</li>\n" + 
                                    "            <li>Global Education City (GECMUN)</li>\n" + 
                                    "            <li>Asian Youth Parliament (AYP)</li>\n" + 
                                    "            <li>World Scholar&#39s Cup (WSC)</li>\n" + 
                                    "            <li>Global Leaders (GLISMUN), etc.</li>\n" +
                                    "          </ul>\n";

                webpage_index = 11;
              break;
            }
          }
        }
      );

      
      setupFinalContent(extracted_html, webpage_index);
    }
  );
} // END of FUNCTION 'extractHtmlFromDesktopPage'

function setupFinalContent(html_content, webpage_index)  {

  // Clear out the HTML of the browser.
  jq("html").empty();

  // Add the basic framework of the HTML template.
  renderHTMLFrame();
// console.log("webpage_index = " + webpage_index);
  // Add the HTML of the <head> HTML element.
  renderHeader(webpage_index);
  
  // Add the basic framework of the <body> HTML element.
  renderBody();

  // Add the HTML which makes up the logo, search, and login.
  renderLogoAndSearch();

  // Add the HTML which makes up the navigation menus.
  renderMenus(webpage_index);

  // Add the HTML which makes up the footer.
  renderFooter();
// console.log("webpage_index = " + webpage_index);
  // Add the HTML of the page which is loading.
  renderArticle(html_content, webpage_index);

} // END of FUNCTION 'setupFinalContent'

function renderHTMLFrame()  {
  jq("html").removeAttr();
  // jq("html").attr("lang", "ko");

  jq("html").html( 
    "  <head>\n" +
    "  </head>\n" + 
    "  <body>" + 
    "  </body>\n"
  );
} // END of FUNCTION 'renderHTMLFrame'

function renderHeader(webpage_index) {

  var title_html = new String();

  title_html = "Leaders Academy - ";
  
  switch (webpage_index)  {
    // Runs if the loading page is the History page.
    case 0: 
      title_html = title_html + "인사말(HISTORY)";
    break;

    // Runs if the loading page is the Faculty page.
    case 1: 
      title_html = title_html + "강사소개 (FACULTY)";
    break;

    // Runs if the loading page is the Location page.
    case 5:
      title_html = title_html + "치안내 (LOCATION)";
    break;

    // Runs if the loading page is the Faculty page for Park Sooyoung.
    case 6: 
      title_html = title_html + "강사소개 (FACULTY) - Park Sooyoung";
    break;

    // Runs if the loading page is the Faculty page for Kim Hyerin.
    case 7: 
      title_html = title_html + "강사소개 (FACULTY) -  Kim Hyerin";
    break;

    // Runs if the loading page is the Faculty page for Lee Hanyo.
    case 8: 
      title_html = title_html + "강사소개 (FACULTY) - Lee Hanyo";
    break;
    
    // Runs if the loading page is the Faculty page for Park Sungryul.
    case 9: 
      title_html = title_html + "강사소개 (FACULTY) -  Park Sungryul";
    break;

    // Runs if the loading page is the Faculty page for Abhisheka Dubey.
    case 10: 
      title_html = title_html + "강사소개 (FACULTY) -  Abhisheka Dubey";
    break;

    // Runs if the loading page is the Faculty page for Abhisheka Dubey.
    case 11: 
      title_html = title_html + "강사소개 (FACULTY) -  Kevin Han";
    break;
  } // END of SWITCH statement

  jq("head").html(
    "    <!-- *** Page Title *** -->\n" + 
    "    <title>" + title_html + "</title>\n" + 
    "\n" + 
    "    <!-- HTML Reference to display Korean characters -->\n" + 
    "    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\">\n" + 
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
  // jq("body").attr("style", "display:block;");

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
    "            <a href=\"/ko/\" lang=\"ko\" title=\"한국어\" id=\"link-korean\">한국어</a>\n" + 
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
    "            <a href=\"/la/assets/html/guide/faculty.htm\" title=\"Faculty\"></a>\n" + 
    "            <span>Faculty</span>\n" + 
    "          </div>\n" + 
    "          <div id=\"link-apply_faculty\">\n" + 
    "            <a href=\"/la/assets/html/guide/faculty.htm\" title=\"Apply (Faculty)\"></a>\n" + 
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
    "            <a href=\"/la/assets/html/guide/location.htm\" title=\"Location\"></a>\n" + 
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
console.log("webpage_index = " + webpage_index);

  renderSectionMenu(webpage_index);
} // END of FUNCTION 'renderLogoAndSearch'

function renderSectionMenu(webpage_index) {
  
    var menu_selector = new String();
  
    menu_selector = "#nav-section_menu";
// console.log("webpage_index = " + webpage_index);
    if (webpage_index < 22)  {
      jq(menu_selector).html(
        "        <a href=\"/la/assets/html/guide/history.htm\" title=\"인사말 (HISTORY)\" id=\"link-section_1-history\">인사말 (HISTORY)</a>\n" + 
        "        <a href=\"/la/assets/html/guide/faculty.htm\" title=\"강사소개 (FACULTY)\" id=\"link-section_1-faculty\">강사소개 (FACULTY)</a>\n" + 
        "        <a href=\"/la/assets/html/guide/rules.htm\" title=\"학원규정 (RULES)\" id=\"link-section_1-history\">학원규정 (RULES)</a>\n" + 
        "        <a href=\"/la/assets/html/guide/system.htm\" title=\"학원제도(SYSTEM)\" id=\"link-section_1-history\">학원제도(SYSTEM)</a>\n" + 
        "        <a href=\"/la/assets/html/guide/recruiting.htm\" title=\"강사채용 (RECRUTING)\" id=\"link-section_1-recruiting\">강사채용 (RECRUTING)</a>\n" + 
        "        <a href=\"/la/assets/html/guide/location.htm\" title=\"치안내 (LOCATION)\" id=\"link-section_1-location\">치안내 (LOCATION)</a>"
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

  var updated_html = new String();

// console.log("webpage_index = " + webpage_index);
  switch (webpage_index)  {
    // Runs if the loading page is the History page.
    case 0:
      jq("article").html(extracted_html[0]);
    break;

    // Runs if the loading page is the Faculty page.
    case 1:
      jq("article").html(extracted_html[0] + 
                         extracted_html[1] + 
                         extracted_html[2] + 
                         extracted_html[3] + 
                         extracted_html[4] + 
                         extracted_html[5] + 
                         extracted_html[6] + 
                         extracted_html[7] + 
                         extracted_html[8] + 
                         extracted_html[9] + 
                         extracted_html[10]+ 
                         extracted_html[11]+ 
                         extracted_html[12]+ 
                         extracted_html[13]+ 
                         extracted_html[14]+ 
                         extracted_html[15]+ 
                         extracted_html[16]+ 
                         extracted_html[17]+ 
                         extracted_html[18]+ 
                         extracted_html[19]+ 
                         extracted_html[20]+ 
                         extracted_html[21]+ 
                         extracted_html[22]+ 
                         extracted_html[23]+ 
                         extracted_html[24]);
    break;
    
    // Runs if the loading page is the Location page.
    case 5: 
      jq("article").html(
        extracted_html[0] + "\n" + 
        "        <table>\n" + 
        "          <tbody>\n" + 
        "            <tr>\n" + 
        "              <td lang=\"ko\">\n" + 
        "                " + extracted_html[1] + "\n" + 
        "              </td>\n" + 
        "              <td lang=\"ko\">\n" + 
        "                " + extracted_html[2] + "\n" + 
        "              </td>\n" +
        "            </tr>\n" + 
        "            <tr>\n" + 
        "              <td lang=\"ko\">\n" + 
        "                " + extracted_html[3] + "\n" + 
        "              </td>\n" + 
        "              <td lang=\"ko\">\n" + 
        "                " + extracted_html[4] + "\n" + 
        "              </td>\n" +
        "            </tr>\n" + 
        "            <tr>\n" + 
        "              <td lang=\"ko\">\n" + 
        "                " + extracted_html[5] + "\n" + 
        "              </td>\n" + 
        "              <td lang=\"ko\">\n" + 
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
        "              <td lang=\"ko\">\n" + 
        "                " + extracted_html[14] + "\n" + 
        "              </td>\n" +
        "            </tr>\n" + 
        "          </tbody>\n" + 
        "        </table>\n"
      );
      
    break;
  }

  if ((webpage_index > 5) && (webpage_index < 22))  {
    jq("article").html(
      "        <div id=\"article-header\">\n" + 
      "          <h2>강사소개 (FACULTY)</h2>\n" + 
      "        </div>\n" + 
      "        <div class=\"article-faculty-member-page\" id=\"article-content\">\n" + 
      extracted_html[0] + 
      "          <p>\n" + 
      extracted_html[1] + 
      "          </p>\n" + 
      extracted_html[2] + 
      "          <a href=\"/la/assets/html/guide/faculty.htm\" title=\"목록\">목록</a>\n" + 
      "        </div>\n"
    );
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
