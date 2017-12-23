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
        'index_faculty.htm', // index = 0
        'park_sooyoung.htm', 
        'kim_hyerin.htm', 
        'lee_hanyo.htm', 
        'park_sungryul.htm', 
        'abhisheka_dubey.htm', // index = 5 
        'kevin_han.htm', 
        'reece_randall.htm', 
        'lee_eunhye.htm', 
        'you_ge_heon.htm', 
        'kim_gyumin.htm', // index = 10 
        'brian_moon.htm', 
        'chan_keun_kim.htm', 
        'joonpyo_sohn.htm', 
        'matthew_owen.htm', 
        'roger_hatridge.htm', // index = 15 
        'about_us.htm',
        'rules.htm', 
        'recruiting.htm', 
        'location.htm', 
        'index_debate.htm', // index = 20
        'debate_schedule_2017.htm', 
        'debate_schedule_2016.htm', 
        'debate_discussion_english.htm', 
        'debate_schedule_2018.htm', 
        'recruitment.htm', // index = 25
        'debate_discussion_2015.htm', 
        'debate_2014.htm', 
        'index_english.htm',  
        'booklist_2016.htm', 
        'admissions_2017.htm', // index = 30 
        'application_2016.htm', 
        'english_schedule_2016.htm', 
        'application_2018.htm', 
        'application_2016_update.htm', 
        'talk_2016.htm', // index = 35 
        'english_schedule_english.htm', 
        'english_advanced.htm', 
        'english_schedule_2014.htm', 
        'login.htm', 
        'index_announcements.htm', // index = 40 
        'announcement_1.htm', 
        'announcement_2.htm', 
        'announcement_3.htm', 
        'announcement_4.htm', 
        'announcement_5.htm', // index = 45 
        'announcement_6.htm', 
        'announcement_7.htm', 
        'announcement_8.htm', 
        'announcement_9.htm', 
        'announcement_10.htm', // index = 50
        'announcement_11.htm', 
        'announcement_12.htm', 
        'announcement_13.htm', 
        'announcement_14.htm', 
        'announcement_15.htm', // index = 55
        'announcement_16.htm', 
        'announcement_17.htm', 
        'announcement_18.htm', 
        'announcement_19.htm', 
        'announcement_20.htm', // index = 60
        'index_awards.htm', 
        'award_1.htm', 
        'award_2.htm', 
        'award_3.htm', 
        'award_4.htm', // index = 65 
        'award_5.htm', 
        'award_6.htm', 
        'award_7.htm', 
        'award_8.htm', 
        'award_9.htm', // index = 70
        'award_10.htm', 
        'award_11.htm', 
        'award_12.htm', 
        'award_13.htm', 
        'award_14.htm', // index = 75
        'award_15.htm', 
        'award_16.htm', 
        'award_17.htm', 
        'award_18.htm', 
        'award_19.htm', // index = 80
        'award_20.htm', 
        'apply_faculty.htm', 
        'apply_students.htm', 
        'index_media.htm', 
        'item_1.htm', // index = 85
        'item_2.htm', 
        'item_3.htm', 
        'item_4.htm', 
        'item_5.htm', 
        'item_6.htm', // index = 90
        'item_7.htm', 
        'item_8.htm', 
        'item_9.htm', 
        'item_10.htm', 
        'item_11.htm', // index = 95
        'item_12.htm', 
        'item_13.htm', 
        'item_14.htm', 
        'item_15.htm' // index = 99

      ];

      // Pass on the URL string of the loading page.
      url_string = window.location.href;

      jq.each(urls_Array, 
        function (index, value) {
          var current_URL = value;

          if (url_string.indexOf(current_URL) > -1) {
            switch (index)  {
              // Runs if the loading page is the 'Faculty' page.
              case 0: 
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

                extracted_html[23]= "            <div class=\"article-faculty-member\" id=\"faculty-member-roger_hatridge\">\n" + 
                                    "              <img src=\"http://daechi.leadersacademy.com/skin/_data/board/about6/_140273568736030.PNG\" width=\"78\" height=\"107\" />\n" + 
                                    "              <div class=\"article-faculty-info\">\n" + 
                                    "                <ul>\n" + 
                                    "                  <li><strong>이름</strong> : <a href=\"/la/assets/html/guide/faculty/roger_hatridge.htm\">Roger Hatridge</a></li>\n" + 
                                    "                  <li><strong>담당</strong> : 정규토론(DEBATE)</li>\n" + 
                                    "                  <li><strong>자기소개 </strong></li>\n" + 
                                    "                </ul>\n" + 
                                    "                <p>\n" + 
                                    "                  2012 l Professor at Sogang University; teaching &ldquo;Humanities Debate&rdquo;...\n" + 
                                    "                </p>\n" + 
                                    "              </div>\n" +
                                    "            </div>\n";


                extracted_html[24]= "          </div>\n" + 
                                    "        </div>\n";

                webpage_index = 0;


              break;

              // Runs if the loading page is the 'Faculty' page for Park Sooyoung.
              case 1:
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
                                    "            <li>2016 Korea Women&rsquo;s Debate Open Champion / 2<sup>nd</sup> Best Speaker</li>\n" + 
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
                webpage_index = 1;
              break;

              // Runs if the loading page is the 'Faculty' page for Kim Hyerin.
              case 2:
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

                webpage_index = 2;
              break;

              // Runs if the loading page is the 'Faculty' page for Lee Hanyo.
              case 3:
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

                webpage_index = 3;
              break;

              // Runs if the loading page is the 'Faculty' page for Park Sungryul.
              case 4:
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

                webpage_index = 4;
              break;

              // Runs if the loading page is the 'Faculty' page for Abhisheka Dubey.
              case 5:
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

                webpage_index = 5;
              break;

              // Runs if the loading page is the 'Faculty' page for Kevin Han.
              case 6:
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

                webpage_index = 6;
              break;

              // Runs if the loading page is the 'Faculty' page for Reece Randall.
              case 7:
                extracted_html[0] = "          <h4>Reece Randall</h4>\n" + 
                                    "          <span>[정규토론(DEBATE) &amp; 정규영어(ENGLISH)]</span>\n" + 
                                    "          <span>관리자</span>\n";

                extracted_html[1] = "            University of Cape Town\n" + 
                                    "            <br/>\n" + 
                                    "            2017 Teaching English as a Foreign Language (TEFL)\n" + 
                                    "            <br/>\n" + 
                                    "            Varsity College\n" + 
                                    "            <br/>\n" + 
                                    "            2014-2016 Independent Institute of Education B.Com. Financial Management\n";
                                    "            <br/>\n" + 
                                    "            GEMS World Academy, Dubai\n" + 
                                    "            <br/>\n" + 
                                    "            2011-2013 International Baccalaureate Diploma\n";
                extracted_html[2] = "          <h6>경 력</h6>\n" + 
                                    "          <ul>\n" + 
                                    "            <li>English Teacher | University of Cape Town - English Language Center | 2017</li>\n" + 
                                    "            <li>Co-Founder & Tutor | GEMS World Academy - The Writing Center | 2011 – 2013</li>\n" + 
                                    "            <li>Committee Chair | GEMS World Academy - Student Council | 2012 – 2013</li>\n" + 
                                    "            <li>Top 3 National Speaker | Murdoch University Business Cup Challenge | 2012</li>\n" + 
                                    "            <li>Student Leader & Volunteer Teacher | World Challenge China Expedition | 2012</li>\n" + 
                                    "            <li>Top 3 Senior Debater | World Scholar's Cup | 2012</li>\n" + 
                                    "            <li>Ambassador, Speaker & Fundraiser | Room to Read | 2012</li>\n" + 
                                    "            <li>Award-Winning Delegate | Model United Nations | 2011 – 2012</li>\n" + 
                                    "            <li>Member & Speaker | Toastmasters Society International | 2009 – 2010</li>\n" + 
                                    "          </ul>\n";

                webpage_index = 7;
              break;

              // Runs if the loading page is the 'Faculty' page for Lee Eunhye.
              case 8:
                extracted_html[0] = "          <h4>Lee Eunhye</h4>\n" + 
                                    "          <span>[정규토론(DEBATE) &amp; 모의유엔(MUN)]</span>\n" + 
                                    "          <span>작성자</span>\n";

                extracted_html[1] = "            KDI School of Public Policy and Management\n" + 
                                    "            <br/>\n" + 
                                    "            Candidate for Master of Public Policy\n" + 
                                    "            <br/>\n" + 
                                    "            College of International Studies, KyungHee University\n" + 
                                    "            <br/>\n" + 
                                    "            Bachelor of International Studies\n";
                                    "            <br/>\n" + 
                                    "            Study Abroad, University of California Davis\n" + 
                                    "            <br/>\n" + 
                                    "            Completion of a term\n";
                                    "            <br/>\n" + 
                                    "            Study Abroad, Johns Hopkins School of Advanced International Studies, Washington D.C.\n" + 
                                    "            <br/>\n" + 
                                    "            Completion of a course on &ldquo;American Foreign Policy&rdquo;\n";
                extracted_html[2] = "          <h6>Model United Nations</h6>\n" +
                                    "          <span>(Participating as a delegate)</span>\n" + 
                                    "          <ul>\n" + 
                                    "            <li>1<sup>st</sup> prize best delegate award, Asian International Model United Nations, 2016</li>\n" + 
                                    "            <li>1<sup>st</sup> prize best delegate award, Japan-China-Korea Model United Nations, 2016</li>\n" + 
                                    "            <li>1<sup>st</sup> prize best delegate GCS President&rsquo;s award, Sustainable Development Goals Model UN, 2016</li>\n" + 
                                    "            <li>Finalist, Model AU, 2014, UNA of the ROK President&rsquo;s award, National Model UN, 2016</li>\n" + 
                                    "          </ul>\n" + 
                                    "          <span>(Judging / Chairing)</span>\n" + 
                                    "          <ul>\n" + 
                                    "            <li>Adjudicator, Chosun-Ilbo Asia Youth Parliament, 2014</li>\n" + 
                                    "            <li>Chair, Global Classrooms: Seoul, 2013</li>\n" + 
                                    "            <li>Chair, Yeosu Expo Model United Nations, 2012</li>\n" + 
                                    "            <li>Chair, Kyung Hee International Model United Nations, 2013-2014</li>\n" + 
                                    "            <li>Secretary General, Copion Model United Nations, 2011</li>\n" + 
                                    "          </ul>\n" + 
                                    "          <span>(Lecturing / Others)</span>\n" + 
                                    "          <ul>\n" + 
                                    "            <li>Lecturer, World Federation of United Nations Associations youth camp, 2013</li>\n" + 
                                    "            <li>Lecturer, Kyung Hee International Model UN workshop, 2012-2014</li>\n" + 
                                    "            <li>Invited participant, Model UN Workshop at UN headquarters in New York, 2014</li>\n" + 
                                    "            <li>Invited participant, Korea-China-Japan Model UN Forum, 2016</li>\n" + 
                                    "            <li>Secretariat and Chair trainer, KICMUN Education and Academic Resources, 2012-2014</li>\n" + 
                                    "          </ul>\n" + 
                                    "          <h6>Parliamentary Debate</h6>\n" +
                                    "          <span>(Judging)</span>\n" + 
                                    "          <ul>\n" + 
                                    "            <li>Breaking adjudicator, 16<sup>th</sup> KIDA National Championship, 2015</li>\n" + 
                                    "            <li>Breaking adjudicator, 14<sup>th</sup> KIDA National Championship, 2014</li>\n" + 
                                    "            <li>Breaking adjudicator, Global Korea Debate Championship, 2015</li>\n" + 
                                    "            <li>Breaking adjudicator, Korean English Debating Championship, 2013</li>\n" + 
                                    "            <li>Breaking adjudicator, Ytn-Hufs Debate Championship, 2015</li>\n" + 
                                    "          </ul>\n" + 
                                    "          <span>(Lecturing / Coaching)</span>\n" + 
                                    "          <ul>\n" + 
                                    "            <li>Debate lecturer, World Federation of United Nations Association youth camp, 2013</li>\n" + 
                                    "            <li>Debate lecturer, Debate for all Osan Summer Debate Camp, 2014</li>\n" + 
                                    "            <li>Debate lecturer, Sema high school/Wonil middle school / Woonam middle school, 2014-2015</li>\n" + 
                                    "            <li>Debate coach, P&E Academy Cheongdam campus, 2014-2016</li>\n" + 
                                    "            <li>President, Kyung Hee university debate society, 2015</li>\n" + 
                                    "          </ul>\n" + 
                                    "          <span>(Debating)</span>\n" + 
                                    "          <ul>\n" + 
                                    "            <li>Octo Finalist, Hong Kong Debate Open, 2014</li>\n" + 
                                    "            <li>Efl Grand Finalist, North East Asian Open, 2012</li>\n" + 
                                    "            <li>Semi Finalist, Sogang Invitation, 2013</li>\n" + 
                                    "            <li>2<sup>nd</sup> prize Dong-A Ilbo CEO award, National Collegiate Competition, 2014</li>\n" + 
                                    "            <li>3<sup>rd</sup> prize Seoul Nat&rsquo;l Univ. Institute Chair&rsquo;s award, Korea HR and Peace Debate tournament, 2015</li>\n" + 
                                    "          </ul>\n";

                webpage_index = 8;
              break;

              // Runs if the loading page is the 'Faculty' page for You Ge Heon.
              case 9:
                extracted_html[0] = "          <h4>You Ge Heon</h4>\n" + 
                                    "          <span>[정규토론(DEBATE)]</span>\n" + 
                                    "          <span>작성자</span>\n";

                extracted_html[1] = "            Yonsei University\n" + 
                                    "            <br/>\n" + 
                                    "            UIC Political Science & International Relations\n";

                extracted_html[2] = "          <h6>심사위원 경력</h6>\n" +
                                    "          <ul>\n" + 
                                    "            <li>2016년 YTN-한국외대 청소년 영어토론대회(초등부): 심사위원</li>\n" + 
                                    "            <li>2016년 매일경제 영어토론대회 고등부 결승전 심사위원</li>\n" + 
                                    "            <li>2016년 코넬-연세 고교대항전 결승전 심사위원</li>\n" + 
                                    "            <li>2016년 제 8회 연세대학교 토론대회 심사위원장</li>\n" + 
                                    "            <li>2016년 서강대학교 루키 토론대회 (SRT) 심사위원</li>\n" + 
                                    "            <li>2015년 YTN-한국외대 청소년 영어토론대회(중등부): 심사위원</li>\n" + 
                                    "            <li>2015년 YTN-한국외대 청소년 영어토론대회(고등부): 심사위원</li>\n" + 
                                    "            <li>2015년 서강대학교 루키 토론대회(하반기) (SRT) 심사위원</li>\n" + 
                                    "            <li>2016년 2016 제2회 오산시 전국학생 토론대회 부심사위원장 (DCA)</li>\n" + 
                                    "            <li>GFN영어방송 광주광역시 전국 청소년 영어토론대회 부심사위원장 (DCA)</li>\n" + 
                                    "          </ul>\n" + 
                                    "          <h6>디베이트 경력</h6>\n" + 
                                    "          <ul>\n" + 
                                    "            <li>2015년 동북아시아 영어토론대회 (NEAO): 준준결승전 진출</li>\n" + 
                                    "            <li>2015년 서강대학교 루키 토론대회(SRT) 준결승전 진출</li>\n" + 
                                    "            <li>2016년 제18회 전국대학생 영어토론대회 (KNC): 준준결승전 진출</li>\n" + 
                                    "            <li>2016년 제19회 전국대학생 영어토론대회 (KNC): 준준결승전 진출</li>\n" + 
                                    "            <li>2016년 제 1회 한양대학교-연세대학교 영어 토론대회 결승 진출, 2등 스피커상</li>\n" + 
                                    "            <li>2016년 전국 대학생 영어 토론 총연합 대회 (KIDA Open): Pre-Semi Finalist</li>\n" + 
                                    "            <li>2016년 동북아시아 영어토론대회 (NEAO): 준준결승전 진출, 4등 스피커상</li>\n" + 
                                    "          </ul>\n" + 
                                    "          <h6>강의 경력</h6>\n" + 
                                    "          <ul>\n" + 
                                    "            <li>전) 한국 디베이트 리그 강사</li>\n" + 
                                    "            <li>전) 디베이트포올 열린교실 강사 (2016.7월-2016.12월18일)</li>\n" + 
                                    "          </ul>\n";

                webpage_index = 9;
              break;

              // Runs if the loading page is the 'Faculty' page for Kim Gyumin.
              case 10:
                extracted_html[0] = "          <h4>Kim Gyumin</h4>\n" + 
                                    "          <span>[정규토론(DEBATE)]</span>\n" + 
                                    "          <span>작성자</span>\n";

                extracted_html[1] = "            Yonsei University\n" + 
                                    "            <br/>\n" + 
                                    "            UIC International Studies\n" + 
                                    "            <br/>\n" + 
                                    "            Korean Minjok Leadership Academy\n";

                extracted_html[2] = "          <h6>심사위원 및 인턴 경력</h6>\n" +
                                    "          <ul>\n" + 
                                    "            <li>2016-현재 KIDA National Championship 심사위원장</li>\n" + 
                                    "            <li>2016 YTN-HUFS 청소년영어토론대회 부심사위원장</li>\n" + 
                                    "            <li>2015 광주광역시 청소년영어토론대회 부심사위원장</li>\n" + 
                                    "            <li>2016년 제 8회 연세대학교 토론대회 심사위원장</li>\n" + 
                                    "            <li>2015 Global Korea Debate Championship 부심사위원장</li>\n" + 
                                    "            <li>2013 KEDC 영어토론대회 최우수 심사위원 3위</li>\n" + 
                                    "            <li>2012 필리핀 인트라무로스 국제 토론대회 최우수 심사위원</li>\n" + 
                                    "            <li>2015년 서강대학교 루키 토론대회(하반기) (SRT) 심사위원</li>\n" + 
                                    "            <li>2014 청와대 대통령비서실 대변인실 외신대변인턴</li>\n" + 
                                    "            <li>2013 산업통상자원부 통상교섭실 FTA정책기획과 Research Associate인턴</li>\n" + 
                                    "          </ul>\n" + 
                                    "          <h6>디베이트 경력</h6>\n" + 
                                    "          <ul>\n" + 
                                    "            <li>2015. 11 한국디베이트오픈 영어토론대회 준우승, 3등 스피커</li>\n" + 
                                    "            <li>2015. 08 호주-오세아니아 국제대학생영어토론대회 EFL부 우승</li>\n" + 
                                    "            <li>2015. 08 서강대학교 영어토론대회 준결승</li>\n" + 
                                    "            <li>2015. 08 서울대학교 영어토론대회 준결승</li>\n" + 
                                    "            <li>2016년 제 1회 한양대학교-연세대학교 영어 토론대회 결승 진출, 2등 스피커상</li>\n" + 
                                    "            <li>2014. 04 National Model United Nations-New York, Outstanding Delegation 최우등대표상</li>\n" + 
                                    "            <li>Best Position Paper 최우수 국가 보고서</li>\n" + 
                                    "          </ul>\n" + 
                                    "          <h6>강의 경력</h6>\n" + 
                                    "          <ul>\n" + 
                                    "            <li>RealPREP, SAT Reading 강사</li>\n" + 
                                    "            <li>Debate For All 글로벌리더의 자격/ 열린토론교실, 영어토론 강사</li>\n" + 
                                    "            <li>세계유엔연맹 청소년캠프, 모의유엔 강사</li>\n" + 
                                    "            <li>삼육중학교 방과후 교실, 영어토론 강사</li>\n" + 
                                    "            <li>EnKo어학원, 특별반 강사</li>\n" + 
                                    "            <li>닥터정 E-Class, 외국인학교 특별반 강사</li>\n" + 
                                    "          </ul>\n";

                webpage_index = 10;
              break;

              // Runs if the loading page is the 'Faculty' page for Brian Moon.
              case 11:
                extracted_html[0] = "          <h4>Brian Moon</h4>\n" + 
                                    "          <span>[정규토론(DEBATE)]</span>\n" + 
                                    "          <span>작성자</span>\n";

                extracted_html[1] = "            Hanyang University\n" + 
                                    "            <br/>\n" + 
                                    "            Division of International Studies\n" + 
                                    "            <br/>\n" + 
                                    "            Division of Chemical Engineering\n" + 
                                    "            <br/><br/>\n" + 
                                    "            Georgia Institute of Technology\n" + 
                                    "            <br/>\n" + 
                                    "            Chemical & Biomedical Engineering\n" + 
                                    "            <br/><br/>\n" + 
                                    "            Parsippany High School\n" + 
                                    "            <br/>\n" + 
                                    "            Parsippany, New Jersey, USA\n";

                extracted_html[2] = "          <h6>Debate</h6>\n" +
                                    "          <ul>\n" + 
                                    "            <li> 2015 SNUDA IV</li>\n" + 
                                    "          </ul>\n";

                webpage_index = 11;
              break;

              // Runs if the loading page is the 'Faculty' page for Chan Keun Kim.
              case 12:
                extracted_html[0] = "          <h4>Chan Keun Kim</h4>\n" + 
                                    "          <span>[정규토론(DEBATE)]</span>\n" + 
                                    "          <span>작성자</span>\n";

                extracted_html[1] = "\n";

                extracted_html[2] = "          <h6>고려대학교 경영학과</h6>\n" +
                                    "          <span>Highschool Level</span>\n" + 
                                    "          <ul>\n" + 
                                    "            <li>2010 NSDC Champion</li>\n" + 
                                    "            <li>2010 KHSDC Grand Finalist</li>\n" + 
                                    "            <li>2010 High-On Debate Grand Finalist</li>\n" + 
                                    "            <li>2010 YTN Semi-Finalist</li>\n" + 
                                    "            <li>2010 Asian Schools Debate Championship Octo-Finalist</li>\n" + 
                                    "            <li>2010 European Schools Debate Championship Semi-Finalist</li>\n" + 
                                    "            <li>2011 Korea University Debate Championship Champion / Best Speaker</li>\n" + 
                                    "            <li>2011 Asian Schools Debate Championship Semi Finalist / Best Speaker</li>\n" + 
                                    "            <li>2011 Korea Schools Debate Championship Semi Finalist / Best Speaker</li>\n" + 
                                    "            <li>2011 World Schools Debate Championship Octo-Finalist / EFL Best Speaker</li>\n" + 
                                    "            <li>2012 World Schools Debate Championship Octo-Finalist/EFL Best Speaker/13th Best Speaker Overall</li>\n" + 
                                    "          </ul>\n" + 
                                    "          <span>I only mentioned the Best Speaker Awards for the competitions where I placed first</span>\n" + 
                                    "          <h6>University Level</h6>\n" + 
                                    "          <ul>\n" + 
                                    "            <li>2012 Fall KNC Semi Finalist</li>\n" + 
                                    "            <li>2012 NEAO Semi Finalist</li>\n" + 
                                    "            <li>2013 IOC Quarter Finalist</li>\n" + 
                                    "            <li>2015. 08 서울대학교 영어토론대회 준결승</li>\n" + 
                                    "            <li>2016년 제 1회 한양대학교-연세대학교 영어 토론대회 결승 진출, 2등 스피커상</li>\n" + 
                                    "            <li>2013 Spring KNC Grand Finalist / 4th Best Spea</li>\n" + 
                                    "          </ul>\n";

                webpage_index = 12;
              break;

              // Runs if the loading page is the 'Faculty' page for Joonpyo Sohn.
              case 13:
                extracted_html[0] = "          <h4>Joonpyo Sohn</h4>\n" + 
                                    "          <span>[정규토론(DEBATE)]</span>\n" + 
                                    "          <span>작성자</span>\n";

                extracted_html[1] = "            Brown University\n" + 
                                    "            <br/>\n" + 
                                    "            A.B.: Economics & Applied Math\n" + 
                                    "            <br/><br/>\n" + 
                                    "            Daewon Foreign Language HS\n" + 
                                    "            <br/>\n" + 
                                    "            English-Spanish Major\n";

                extracted_html[2] = "          <h6>경력</h6>\n" +
                                    "          <ul>\n" + 
                                    "            <li>Worlds Universities Debate Championship 2015, Open Octo-Finalist, ESL 5<sup>th</sup> Best Speaker</li>\n" + 
                                    "            <li>North American Universities Debate Championship 2014, Semi-Finalist</li>\n" + 
                                    "            <li>US Universities Debate Championship 2016, Octo-Finalist</li>\n" + 
                                    "            <li>American Parliamentary Debate National Championship 2016, Octo-Finalist</li>\n" + 
                                    "            <li>Seoul National University DA IV 2015, Champion, Top 10 speaker</li>\n" + 
                                    "            <li>KIDA Pro-Ams 2015, Finalist, 2nd Best Speaker</li>\n" + 
                                    "            <li>Harvard University Invitational 2014, Octo-Finalist</li>\n" + 
                                    "            <li>Yale University Pro-Ams tournament 2016, Quarter-Finalist</li>\n" + 
                                    "            <li>Sogang BP 2014, Champion, Best Speaker </li>\n" + 
                                    "          </ul>\n" + 
                                    "          <h6>Judging</h6>\n" + 
                                    "          <ul>\n" + 
                                    "            <li>Austral-Asian Debating Championship 2015, Breaking judge (Open Quarters</li>\n" + 
                                    "            <li>Korea National Championship 2015, Breaking judge (Finals), Best Adj award</li>\n" + 
                                    "            <li>YTN-HUFS Jr. Debate Championship 2014, Deputy Chief Adjudicator</li>\n" + 
                                    "            <li>Asian Schools Debate Championship 2014/2013, Breaking/subsidized judge</li>\n" + 
                                    "          </ul>\n" + 
                                    "          <h6>Coaching/Teaching</h6>\n" + 
                                    "          <ul>\n" + 
                                    "            <li>Coach, Daewon Foreign Language HS Debate Team (Winners of 2014 YTN-HUFS Sr.)</li>\n" + 
                                    "            <li>Vice President of Training, Brown Debating Union (2014-2016; 2<sup>nd</sup> College of the Year)</li>\n" + 
                                    "            <li>Speech and Debate Instructor at Daewon FLHS 2012-2013</li>\n" + 
                                    "            <li>Speech and Debate Instructor at Daewon International Middle School 2012-2013</li>\n" + 
                                    "          </ul>\n";

                webpage_index = 13;
              break;

              // Runs if the loading page is the 'Faculty' page for Matthew Owen.
              case 14:
                extracted_html[0] = "          <h4>Matthew Owen</h4>\n" + 
                                    "          <span>[정규영어(ENGLISH)]</span>\n" + 
                                    "          <span>작성자</span>\n";

                extracted_html[1] = "\n";

                extracted_html[2] = "          <h6>경력</h6>\n" +
                                    "          <ul>\n" + 
                                    "            <li>Language Institutes & Academies 2011-2015: Social Science & Debate<br/><br/>Course focused on public forum, N.F.L, debate of current events, world history, introduction to world politics & rhetoric essay and script writing</li>\n" + 
                                    "            <li>Hankuk University of Foreign Studies 2009-2011: E.S.L & TOEFL Instructor<br/><br/>Developed semester courses including critical thinking, public speaking & confidence building activities / TOEFL to all grade levels</li>\n" + 
                                    "            <li>Research Writer & Self-employed Immigration Consultant 2008-2009</li>\n" + 
                                    "            <li>Law Society of Upper Canada 2009: Exam Proctor</li>\n" + 
                                    "            <li>Technical Recruitment Specialist 2006-2008</li>\n" + 
                                    "          </ul>\n";

                webpage_index = 14;
              break;

              // Runs if the loading page is the 'Faculty' page for Roger Hatridge.
              case 15:
                extracted_html[0] = "          <h4>Roger Hatridge</h4>\n" + 
                                    "          <span>[정규토론(DEBATE)]</span>\n" + 
                                    "          <span>작성자</span>\n";

                extracted_html[1] = "";
                extracted_html[2] = "          <h6>2012</h6>\n" +
                                    "          <ul>\n" + 
                                    "            <li>Professor at Sogang University; teaching &ldquo;Humanities Debate&rdquo;</li>\n" + 
                                    "            <li>World Schools Debating Championship 2012: Co-coached Korea&rsquo;s national team: <br/><br/>Korea was the only team that beat the champion team (Scotland) in the tournament, the team broke to octo-finals, all five speakers ranked in top 50, two in the top 20, best Korean speaker (12<sup>th</sup> in the world) was new record for Korea.</li>\n" + 
                                    "            <li> At the 2012 WSDC, leadership roles included being chair of Complaints Committee. selected to be WSDC Complaints Officer for 2013 WSDC by convener of Turkish event, unanimously elected WSDC Vice President.</li>\n" + 
                                    "          </ul>\n" + 
                                    "          <h6>2011</h6>\n" +
                                    "          <ul>\n" + 
                                    "            <li>Professor at Sogang University; taught &ldquo;Humanities Debate&rdquo;</li>\n" + 
                                    "            <li>Coached several top speakers in a variety of speech competitions.</li>\n" + 
                                    "            <li>Coached Korean students at National Forensics League (NFL) Tournament in Dallas, Texas: Parliamentary Debate round six (best yet).</li>\n" + 
                                    "            <li>Coached successful teams at a variety of tournaments in Korea: KSDC, KHSDC, KEDC, NSDC, NSDC Jr, KUDC, KFLDT & ASDC.</li>\n" + 
                                    "            <li>Coached majority of qualifiers for ESDC (EurOpen) 2011.</li>\n" + 
                                    "            <li>HAFS Debate Tournament: Coached winning elementary team.</li>\n" + 
                                    "            <li>Selected as Complaints Committee Chair for WSDC 2011.</li>\n" + 
                                    "            <li>World Schools Debating Championship 2011: Solo Coached Korea&rsquo;s national team: 7-1 preliminary round record (best yet), the team broke sixth, won top ESL team, won top ESL speaker, won top EFL speaker, all speakers ranked in top 50 (best yet), and two speakers ranked in the top 20 (best yet).</li>\n" + 
                                    "            <li>WSDC 2011 Leadership: elected WSDC executive secretary, oversaw rewriting of WSDC rules, re-elected to Complaints Committee.</li>\n" + 
                                    "          </ul>\n" + 
                                    "          <h6>2010</h6>\n" +
                                    "          <ul>\n" + 
                                    "            <li>Coached Team Korea for International World Schools Debate Tournament in Slovenia. 2<sup>nd</sup> place team. 2<sup>nd</sup> place speaker.</li>\n" + 
                                    "            <li>Coached two teams at 2010 EurOpen (formerly European Debate Championship), including semi-finalist & quarter-finalist.</li>\n" + 
                                    "            <li>Selected as coach for European Open 2010.</li>\n" + 
                                    "            <li>Middle School Public Debate Program: All top ten speakers, both finalist teams, and top rookie speaker.</li>\n" + 
                                    "            <li>Coached Korean students at National Forensics League Tournament in Kansas City, Missouri: Impromptu  quarterfinalist.</li>\n" + 
                                    "            <li>NSDC Jr.: Coached half quarter-finalists, semi-finalists, & finalists.</li>\n" + 
                                    "            <li>World Schools Debating Championship 2010: Co-coached Korea&rsquo;s national team, 17<sup>th</sup> place, top EFL team.</li>\n" + 
                                    "            <li>World Individuals 2010: Coached five Koreans in Lithuania: <br/><br/>Finalists: 2 debaters, 1 impromptu & 1 after-dinner speech.</li>\n" + 
                                    "            <li>Trained Korean diplomats and led Korea&rsquo's first diplomatic debate tournament for Institute of Foreign Affairs and National Security.</li>\n" + 
                                    "          </ul>\n" + 
                                    "          <h6>2009</h6>\n" +
                                    "          <ul>\n" + 
                                    "            <li>National Schools Debate Championship: Coached all finalists, top three speakers, and rookie winning team.</li>\n" + 
                                    "            <li>Coached two teams at 2009 European Debate Championship, both teams in semifinals, coached 1st place team.</li>\n" + 
                                    "            <li>Co-wrote the debate textbook High School Debate Primer.</li>\n" + 
                                    "            <li>Wrote weekly debate column for Teen Times called How to Debate.</li>\n" + 
                                    "            <li>World Individuals Qualifier for 2010: Coached grand champion</li>\n" + 
                                    "            <li>Coached Korean students at National Junior Forensic League tournament in San Antonio, Texas USA: Advertising 2<sup>nd</sup> place</li>\n" + 
                                    "            <li>Coached Korean team at National Forensic League tournament in Birmingham, Alabama USA: Prose Semi-finalist</li>\n" + 
                                    "            <li>Freely coached Chung-Ang students for People Speak debates.</li>\n" + 
                                    "            <li>Re-elected national coach for Korea&rsquo;s World Schools Debating Championship team (a second two-year term).</li>\n" + 
                                    "            <li>World Individuals 2009: coached five Koreans that attended World Individuals in England; included a debate finalist and an after-dinner finalist; we had the highest individual ranking yet.</li>\n" + 
                                    "            <li>World Schools Debating Championship 2009: Co-coached Korea&rsquo;s national team: team broke 8th (best yet) & 15th ranks (best yet) speaker, top EFL speaker, top ESL speaker, & top EFL team.</li>\n" + 
                                    "            <li>Elected to WSDC Complaints Committee: first person from Korea voted into a WSDC committee since Korea hosted WSDC.</li>\n" + 
                                    "          </ul>\n" + 
                                    "          <h6>2008</h6>\n" +
                                    "          <ul>\n" + 
                                    "            <li>World Schools Debating Championship 2008: Co-coached Korea&rsquo;s national team: octofinalists, and students performed well at the event.</li>\n" + 
                                    "            <li>NSDC: Directed tournament in November 2008 that helped raise registration fee for WSDC Team Korea in 2009.</li>\n" + 
                                    "            <li>World Individuals 2008: coached four Koreans in Germany, Korea&rsquo;s first finalist, 3 of 4 students ranked in the top 50 overall.</li>\n" + 
                                    "            <li>Debate Columnist: Wrote That&rsquo;s Debatable for Korea Times.</li>\n" + 
                                    "            <li> Coached at a free weekend debate camp at Gimhae (near Busan) with Ian Yovdoshuk and Darren Daley.</li>\n" + 
                                    "          </ul>\n" + 
                                    "          <h6>2007</h6>\n" +
                                    "          <ul>\n" + 
                                    "            <li>First elected coach to WSDC Team Korea.</li>\n" + 
                                    "            <li>KHSDC III: coach of winning team</li>\n" + 
                                    "          </ul>\n";

                webpage_index = 15;
              break;
              
              // Runs if the loading page is for the 'History' section.
              case 16:
                extracted_html[0] = "        <div id=\"article-header\">\n" + 
                                    "          <h2>회사 소개 (ABOUT US)</h2>\n" + 
                                    "        </div>\n" + 
                                    "        <div class=\"article-about_us\" id=\"article-content\">\n" + 
                                    "          <img src=\"http://daechi.leadersacademy.com//skin/skin020/about/images/cont01-01s.png\" width=\"680\" height=\"768\" alt=\"인사말(HISTORY)\" />\n" + 
                                    "        </div>\n";

                webpage_index = 16;
              break;

              // Runs if the page loading is the 'Location' page/
              case 19: 
                // Pass on the HTML of the Section header and map.
                extracted_html[0] = "        <div id=\"article-header\">\n" + 
                                    "          <h2 lang=\"ko\">치안내 (LOCATION)</h2>\n" + 
                                    "        </div>\n"+ 
                                    "        <div id=\"map\" style=\"width:85%;height:500px;margin: 0 auto;\"></div>\n" + 
                                    "\n" + 
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
                                    "          infowindow.open(map, marker);\n" +
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
                extracted_html[10]= "        <h4>Seolleung Station exit two</h4>\n" + 
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
                extracted_html[11]= jq("table table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td table > tbody > tr:nth-child(4) > td table > tbody > tr:nth-child(6) > td").html();
                extracted_html[12]= "        <h4>The nearest bus stops and bus numbers:</h4>\n" + 
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
                extracted_html[13]= jq("table table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td table > tbody > tr:nth-child(4) > td table > tbody > tr:nth-child(8) > td").html();
                extracted_html[14]= "        <h4>The nearest bus stops and bus numbers:</h4>\n" + 
                                    "        <ul>\n" + 
                                    "          <li>Tell the taxi driver Dosung Elementary Intersection-Dosung Chogyo Sagori - 도성초교 사거리</li>\n" + 
                                    "        </ul>\n";

                webpage_index = 19;
              break;

              // Runs if the loading page is the 'Debate' page.
              case 20:
                extracted_html[0] = "        <div class=\"article-debate-links\" id=\"article-content\">\n" + 
                                    "          <a href=\"debate_schedule_2017.htm\" title=\"2017년 정규토론 수업 일정 업데이트\">2017년 정규토론 수업 일정 업데이트</a>\n" + 
                                    "          <a href=\"debate_schedule_2016.htm\" title=\"2016 정규토론수업 일정 업데이트\">2016 정규토론수업 일정 업데이트</a>\n" + 
                                    "          <a href=\"debate_discussion_english.htm\" title=\"주중 영어토론반 일정안내\">주중 영어토론반 일정안내</a>\n" +
                                    "          <a href=\"debate_schedule_2018.htm\" title=\"2018 토론수업일정\">2018 토론수업일정</a>\n" +  
                                    "          <a href=\"recruitment.htm\" title=\"초등 저학년 토론반을 모집합니다.\">초등 저학년 토론반을 모집합니다.</a>\n" + 
                                    "          <a href=\"debate_discussion_2015.htm\" title=\"정규토론 2015년 2분기 수업일정\">정규토론 2015년 2분기 수업일정</a>\n" + 
                                    "          <a href=\"debate_debate_2014.htm\" title=\"정규토론 2014년 4분기 일정\">정규토론 2014년 4분기 일정</a>\n" + 
                                    "        </div>\n";  
                                    

                webpage_index = 20;
              break;

              // Runs if the loading page is the 'Debate' page for the 2017 schedule.
              case 21:
                extracted_html[0] = "        <div class=\"article-debate\" id=\"article-content\">\n" + 
                                    "          <h4>Updated regular meeting<br/>class schedule for 2017</h4>\n" + 
                                    "          <img src=\"http://daechi.leadersacademy.com/data/editor/1705/0_2017년%20정규%20일정표.jpg\" width=\"680\" height=\"837\" />\n" + 
                                    "        </div>\n";  
                                    

                webpage_index = 21;
              break;

              // Runs if the loading page is the 'Debate' page for the 2016 schedule.
              case 22:
                extracted_html[0] = "        <div class=\"article-debate\" id=\"article-content\">\n" + 
                                    "          <h4>2016 regular discussion<br/>class schedule update</h4>\n" + 
                                    "          <h6>Discussion class schedule<br/>(Talk 3 hours rekchyeo lecture 2.5 hours)</h6>\n" + 
                                    "          <span>2016 is the reference grade year</span>\n";

                extracted_html[1] = "          <table>\n" + 
                                    "            <thead>\n" + 
                                    "              <tr>\n" + 
                                    "                <th scope=\"col\">\n" +  
                                    "                  학년\n" + 
                                    "                </th>\n" + 
                                    "                <th scope=\"col\">\n" +  
                                    "                  토론수업일정\n" + 
                                    "                </th>\n" + 
                                    "                <th scope=\"col\">\n" +  
                                    "                  수업료\n" + 
                                    "                </th>\n" + 
                                    "                <th scope=\"col\">\n" +  
                                    "                  토론수업일정\n" + 
                                    "                </th>\n" + 
                                    "                <th scope=\"col\">\n" +  
                                    "                  수업료\n" + 
                                    "                </th>\n" + 
                                    "                <th scope=\"col\">\n" +  
                                    "                  학년\n" + 
                                    "                </th>\n" + 
                                    "              </tr>\n" + 
                                    "            </thead>\n" + 
                                    "            <tbody>\n" + 
                                    "              <tr>\n" + 
                                    "                <td rowspan=\"4\">\n" + 
                                    "                  초등토론\n" + 
                                    "                  <br/>\n" + 
                                    "                  (3,4/5,6)\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  수요일, 4-7 (5,6)\n" + 
                                    "                  <br/>\n" + 
                                    "                  (2/3일개강, 접수중)\n" + 
                                    "                </td>\n" + 
                                    "                <td rowspan=\"5\">\n" + 
                                    "                  4주만원\n" + 
                                    "                  <br/>\n" + 
                                    "                  5주45만원\n" + 
                                    "                </td>\n" + 
                                    "                <td rowspan=\"4\">\n" + 
                                    "                  중등토론(1,2)\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  수요일, 7-10 (중1,2)\n" + 
                                    "                  <br/>\n" + 
                                    "                  (1/6일개강, 접수중)\n" + 
                                    "                </td>\n" + 
                                    "                <td rowspan=\"5\">\n" + 
                                    "                  4주: 36만원\n" + 
                                    "                  <br/>\n" + 
                                    "                  5주45만원\n" + 
                                    "                </td>\n" + 
                                    "              </tr>\n" + 
                                    "              <tr>\n" + 
                                    "                <td>\n" + 
                                    "                  목요일, 4-7 (초3,4)(1/7일 개강, 접수중)" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  수요일, 7-10 (중2,3)\n" + 
                                    "                  <br/>\n" + 
                                    "                  (1/6일개강, 접수중)\n" + 
                                    "                </td>\n" + 
                                    "              </tr>\n" + 
                                    "              <tr>\n" + 
                                    "                <td>\n" + 
                                    "                  토요일, 12-3PM\n" + 
                                    "                  <br/>\n" + 
                                    "                  (초3,4/5,6)\n" + 
                                    "                  <br/>\n" + 
                                    "                  4-7 (초5,6)\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  토요일,12-3 (중)" + 
                                    "                  <br/>\n" + 
                                    "                  4-7 (중1,2)\n" + 
                                    "                  <br/>\n" + 
                                    "                  7-10 (중2,3)\n" + 
                                    "                </td>\n" + 
                                    "              </tr>\n" + 
                                    "              <tr>\n" + 
                                    "                <td>\n" + 
                                    "                  일요일, 1-4 (5,6)" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  일요일, 4-7 (2)" + 
                                    "                </td>\n" + 
                                    "              </tr>\n" +
                                    "              <tr>\n" +  
                                    "                <td>\n" +
                                    "                  고등토론(중이상)\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  일요일, 1-4 (1,3)" + 
                                    "                  <br/>\n" + 
                                    "                  4-7 (중3이상)\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  중등토론(중3이상)\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  일요일, 4-7 (중3)" + 
                                    "                </td>\n" + 
                                    "             </tr>\n" + 
                                    "            </tbody>\n" + 
                                    "          </table>\n" + 
                                    "          <span>\n" + 
                                    "            *초등 렉쳐일정 <em>(2월부터 수강가능</em>: 매주 금요일 시 중등이상 렉쳐일정: 매주 금요일 7-9:30재(학생 Only)\n" + 
                                    "          </span>\n";

                extracted_html[2] = "          <h4>대회프렙 최상위반 (토론3시간렉쳐강의2.5시간)</h4>\n" + 
                                    "          <table>\n" + 
                                    "            <tbody>\n" + 
                                    "              <tr>\n" + 
                                    "                <td scope=\"col\" rowspan=\"4\">\n" + 
                                    "                  KAIROS\n" + 
                                    "                  <br/>\n" + 
                                    "                  (대회프렙최상위반)\n" + 
                                    "                </td>\n" + 
                                    "                <td scope=\"col\">\n" + 
                                    "                  학년\n" + 
                                    "                </td>\n" + 
                                    "                <td scope=\"col\">\n" + 
                                    "                  토론수업일정\n" + 
                                    "                </td>\n" + 
                                    "                <td scope=\"col\">\n" + 
                                    "                  렉쳐일정\n" + 
                                    "                </td>\n" + 
                                    "                <td scope=\"col\">\n" + 
                                    "                  수업료\n" + 
                                    "                </td>\n" + 
                                    "              </tr>\n" +
                                    "              <tr>\n" + 
                                    "               <td>\n" + 
                                    "                  KAIROS-ED (초등)\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  토요일, 12-3PM\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  금요일, 4:30-7PM\n" + 
                                    "                </td>\n" + 
                                    "                <td rowspan=\"3\">\n" + 
                                    "                  4주: 36만원\n" + 
                                    "                  <br/>\n" + 
                                    "                  5주 45만원\n" + 
                                    "                </td>\n" + 
                                    "              </tr>\n" +
                                    "              <tr>\n" +  
                                    "                <td>\n" + 
                                    "                  KAIROS-PD (중등)\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  토요일 4-7PM\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  금요일, 7-9:30PM\n" + 
                                    "                </td>\n" + 
                                    "              </tr>\n" +
                                    "              <tr>\n" +  
                                    "                <td>\n" + 
                                    "                  KAIROS-LD (고등)\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  토요일 7-10PM\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  금요일, 7-9:30PM\n" + 
                                    "                </td>\n" + 
                                    "              </tr>\n" + 
                                    "            </tbody>\n" + 
                                    "          </table>\n" + 
                                    "          <span>\n" + 
                                    "            *응시일정년에 번 상반기, 하반기진행 (1차:싸이트 온라인접수, 2차오디션:1차 합격자에 한함)\n" + 
                                    "          </span>\n" + 
                                    "        </div>\n";

                webpage_index = 22;
              break;

              // Runs if the loading page is the 'Debate' page for the weekly English discussion.
              case 23:
                extracted_html[0] = "        <div class=\"article-debate\" id=\"article-content\">\n" + 
                                    "          <h4>Weekly English Discussion Class Schedule</h4>\n" + 
                                    "          <p>\n" + 
                                    "            주중 가능한 토론수업일정안내 드리오니 확인하시고 \n" + 
                                    "            <br/>\n" + 
                                    "            많이 참여해 주시기 바랍니다.\n" + 
                                    "          </p>\n" + 
                                    "          <ul>\n" +
                                    "            <li>초등 5학년반 - 매주 수요일 4-7시</li>\n" + 
                                    "            <li>초등 6학년반 - 매주 </li>\n" + 
                                    "          </ul>\n" + 
                                    "          <ul>\n" +
                                    "            <li>중등 1학년반 - 매주 수요일 7-10시</li>\n" + 
                                    "            <li>중등 2학년반 - 매주 목요일 7-10시</li>\n" + 
                                    "          </ul>\n" + 
                                    "          <p>\n" + 
                                    "            => 주1회 3시간 정규영어토론을 수강하는 학생들은\n" +  
                                    "            <br/>\n" + 
                                    "            매주 금요일 4:30-7시(초등), 7:30-10시(중등)에 진행하는\n" + 
                                    "            <br/>\n" + 
                                    "            토론 렉쳐 & 클리닉을 추가 수강할 수 있습니다.\n" + 
                                    "            <br/>\n" + 
                                    "            (수업내용 -해당주 토픽강의1시간,개별스피치 클리닉으로구성,예약제)\n" + 
                                    "          </p>\n" + 
                                    "          <p>\n" + 
                                    "            감사합니다. 02-562-9799\n" + 
                                    "          </p>\n"
                                    "        </div>\n";  

                webpage_index = 23;
              break;

              // Runs if the loading page is the 'Debate' page for the 2018 Lesson Schedule.
              case 24:
                extracted_html[0] = "        <div class=\"article-debate\" id=\"article-content\">\n" + 
                                    "          <h4>2018 Lesson Schedule</h4>\n" + 
                                    "          <img src=\"http://daechi.leadersacademy.com/data/editor/1711/2018%20토론수업%20일정.png\" width=\"714\" height=\"920\" />\n" + 
                                    "        </div>\n";  

                webpage_index = 24;
              break;

              // Runs if the loading page is the 'Debate' page for recruitment.
              case 25:
                extracted_html[0] = "        <div class=\"article-debate\" id=\"article-content\">\n" + 
                                    "          <h4>We raise recruitment class for elementary school lower grades</h4>\n" + 
                                    "          <h6>수업일정</h6>\n" + 
                                    "          <p>\n" + 
                                    "            매주 화요일 6-9시\n" + 
                                    "            <br/>\n" + 
                                    "            매주 수요일 6-9시 \n" + 
                                    "          </p>\n" + 
                                    "          <h6>해당학년</h6>\n" + 
                                    "          <ol>\n" +
                                    "            <li>외국인학교 2,3학년</li>\n" + 
                                    "            <li>한국학교, 3,4학년</li>\n" + 
                                    "          </ol>\n" + 
                                    "          <span>\n" + 
                                    "            (2016년 5월 기준입니다) \n" + 
                                    "          </span>\n" + 
                                    "          <p>\n" + 
                                    "            관심있는 학생들은 입학시험을\n" +  
                                    "            <br/>\n" + 
                                    "            예약해 주세요.\n" + 
                                    "          </p>\n" + 
                                    "          <p>\n" + 
                                    "            감사합니다.\n" + 
                                    "          </p>\n"
                                    "        </div>\n";  

                webpage_index = 25;
              break;

              // Runs if the loading page is the 'Debate' page for regular discussions of 2015.
              case 26:
                extracted_html[0] = "        <div class=\"article-debate\" id=\"article-content\">\n" + 
                                    "          <h4>Regular discussions Q2 of 2015</h4>\n" + 
                                    "          <h6>토론 정규수업 일정표</h6>\n" + 
                                    "          <span>(팀수업별도 문의)</span>\n";

                extracted_html[1] = "          <table>\n" + 
                                    "            <thead>\n" + 
                                    "              <tr>\n" + 
                                    "                <th scope=\"col\">\n" +  
                                    "                  학년\n" + 
                                    "                </th>\n" + 
                                    "                <th scope=\"col\">\n" +  
                                    "                  요일\n" + 
                                    "                </th>\n" + 
                                    "                <th scope=\"col\">\n" +  
                                    "                  시간\n" + 
                                    "                </th>\n" + 
                                    "                <th scope=\"col\">\n" +  
                                    "                  학년\n" + 
                                    "                </th>\n" + 
                                    "                <th scope=\"col\">\n" +  
                                    "                  요일\n" + 
                                    "                </th>\n" + 
                                    "                <th scope=\"col\">\n" +  
                                    "                  시간\n" + 
                                    "                </th>\n" + 
                                    "              </tr>\n" + 
                                    "            </thead>\n" + 
                                    "            <tbody>\n" + 
                                    "              <tr>\n" + 
                                    "                <td>\n" + 
                                    "                  초등오픈\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  화수\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  4PM ~ 7PM\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  중등오픈\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  화수\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  7PM ~ 10PM\n" + 
                                    "                </td>\n" + 
                                    "              </tr>" +
                                    "              <tr>\n" + 
                                    "                <td>\n" + 
                                    "                  초5학년\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  토요일\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  1PM ~ 4PM\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  중1학년\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  토요일\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  4PM ~ 7PM\n" + 
                                    "                </td>\n" + 
                                    "              </tr>" + 
                                    "              <tr>\n" + 
                                    "                <td rowspan=\"2\">\n" + 
                                    "                  초6학년\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  토요일\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  1PM ~ 4PM\n" +
                                    "                </td>\n" + 
                                    "                <td rowspan=\"2\">\n" + 
                                    "                  중2학년\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  토요일\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  4PM ~ 7PM\n" + 
                                    "                </td>\n" + 
                                    "              </tr>" + 
                                    "              <tr>\n" + 
                                    "                <td>\n" + 
                                    "                  일요일\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  1PM ~ 4PM\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                 토요일\n" +
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  7PM ~ 10PM\n" + 
                                    "                </td>\n" + 
                                    "              </tr>" + 
                                    "              <tr>\n" + 
                                    "                <td rowspan=\"2\">\n" + 
                                    "                  최상위반 (LOGOS / KAIROS)\n" + 
                                    "                </td>\n" + 
                                    "                <td rowspan=\"2\">\n" + 
                                    "                  토요일\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  1PM ~ 4PM\n" +
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  중3학년\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  토요일\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  7PM ~ 10PM\n" + 
                                    "                </td>\n" + 
                                    "              </tr>" + 
                                    "              <tr>\n" + 
                                    "                <td>\n" + 
                                    "                  7PM ~ 10PM\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  고등오픈\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  일요일\n" +
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  1PM ~ 4PM\n" + 
                                    "                </td>\n" + 
                                    "              </tr>" + 
                                    "              <tr>\n" + 
                                    "                <td>\n" + 
                                    "                  Ethos Debate Lecture & Clinic (초등)\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  수요일\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  4:30PM ~ 6PM\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  Pathos Debate Lecture & Clinic (중등)\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  수요일\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  7PM ~ 8:30PM\n" + 
                                    "                </td>\n" + 
                                    "              </tr>" + 
                                    "            </tbody>\n" + 
                                    "          </table>\n" + 
                                    "        </div>\n";  

                webpage_index = 26;
              break;

              // Runs if the loading page is the 'Debate' page for the debate information of 2014.
              case 27:
                extracted_html[0] = "        <div class=\"article-debate\" id=\"article-content\">\n" + 
                                    "          <h4>2018 Lesson Schedule</h4>\n" + 
                                    "          <img src=\"http://daechi.leadersacademy.com/data/editor/1411/1_Debate%20Lv.jpg\" width=\"500\" height=\"300\" />\n" + 
                                    "          <img src=\"http://daechi.leadersacademy.com/data/editor/1411/1_Themes.jpg\" width=\"500\" height=\"300\" />\n" + 
                                    "          <img src=\"http://daechi.leadersacademy.com/data/editor/1411/3_%ED%86%A0%EB%A1%A0%EC%A0%95%EA%B7%9C.jpg\" width=\"500\" height=\"200\">\n" + 
                                    "          <a href=\"/la/assets/html/admissions/admissions.htm\" title=\"Admissions\">Admissions</a>\n" + 
                                    "        </div>\n";  

                webpage_index = 27;
              break;

              // Runs if the loading page is the 'English' page.
              case 28:
                extracted_html[0] = "        <div class=\"article-english-links\" id=\"article-content\">\n" + 
                                    "          <a href=\"booklist_2016.htm\" title=\"2016년 원서강독 Booklist\">2016년 원서강독 Booklist</a>\n" + 
                                    "          <a href=\"admissions_2017.htm\" title=\"2017년 원서강독 수업 일정 업데이트\">2017년 원서강독 수업 일정 업데이트</a>\n" + 
                                    "          <a href=\"application_2016.htm\" title=\"2016년 1,2분기 원서안내\">2016년 1,2분기 원서안내</a>\n" +
                                    "          <a href=\"application_2018.htm\" title=\"2018 원서강독 수업일정\">2018 원서강독 수업일정</a>\n" + 
                                    "          <a href=\"application_2016_update.htm\" title=\"2016 원서강독 수업 일정 업데이트\">2016 원서강독 수업 일정 업데이트</a>\n" + 
                                    "          <a href=\"talk_2016.htm\" title=\"2016 토론수업 일정 업데이트\">2016 토론수업 일정 업데이트</a>\n" + 
                                    "          <a href=\"english_schedule_english.htm\" title=\"주중 영어원서강독반 일정안내\">주중 영어원서강독반 일정안내</a>\n" + 
                                    "          <a href=\"english_advanced.htm\" title=\"고급영어 2015년 2분기 수업일정\">고급영어 2015년 2분기 수업일정</a>\n" + 
                                    "          <a href=\"schedule_2014.htm\" title=\"정규영어 2014년 4분기 일정\">정규영어 2014년 4분기 일정</a>\n" + 
                                    "        </div>\n";  
                                    

                webpage_index = 28;
              break;  

              // Runs if the loading page is the 'English' page for the booklist of 2016.
              case 29:
                extracted_html[0] = "        <div class=\"article-english\" id=\"article-content\">\n" + 
                                    "          <h4>2016년 원서강독 Booklist</h4>\n" + 
                                    "          <table>\n" + 
                                    "            <thead>\n" + 
                                    "              <tr>\n" + 
                                    "                <th scope=\"col\">\n" + 
                                    "                  Month\n" + 
                                    "                </th>\n" + 
                                    "                <th scope=\"col\">\n" + 
                                    "                  Reading Theme\n" + 
                                    "                </th>\n" + 
                                    "                <th scope=\"col\">\n" + 
                                    "                  Junior\n" + 
                                    "                </th>\n" + 
                                    "                <th scope=\"col\">\n" + 
                                    "                  Lexis\n" + 
                                    "                </th>\n" + 
                                    "                <th scope=\"col\">\n" + 
                                    "                  Mythos\n" + 
                                    "                </th>\n" + 
                                    "                <th scope=\"col\">\n" + 
                                    "                  Opsis\n" + 
                                    "                </th>\n" + 
                                    "              </tr>\n" + 
                                    "            </thead>\n" + 
                                    "            <tbody>\n" + 
                                    "              <tr>\n" + 
                                    "               <td>\n" + 
                                    "                  March\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  Historical\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  Little House on the Prarie\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  Roll of Thunder, Hear My Cry\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  Chasing Lincoln's Killer\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  Black Boy\n" + 
                                    "                </td>\n" + 
                                    "              </tr>\n" +
                                    "              <tr>\n" + 
                                    "               <td>\n" + 
                                    "                  April\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  Fantasy\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  Harry Potter and Sorceror's Stone\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  Fablehaven\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  The Giver\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  City of Beasts\n" + 
                                    "                </td>\n" + 
                                    "              </tr>\n" + 
                                    "              <tr>\n" + 
                                    "               <td>\n" + 
                                    "                  May\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  Classics\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  Charlotte's Web\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  Stuart Little\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  To Kill a Mockingbird\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  Sun Also Rises\n" + 
                                    "                </td>\n" + 
                                    "              </tr>\n" + 
                                    "              <tr>\n" + 
                                    "               <td>\n" + 
                                    "                  June\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  Adventure\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  James and the Giant Peach\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  Westing Game\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  The Curious Incident of the Dog in the Nighttime\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  Good Omens\n" + 
                                    "                </td>\n" + 
                                    "              </tr>\n" + 
                                    "              <tr>\n" + 
                                    "               <td>\n" + 
                                    "                  July\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  Nonfiction\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  George's Secret Key to the Universe\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  The Notorious Benedict Arnold: A True Story of Adventure, Heroism & Treachery\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  Bomb: The Race to Build - and Steal - the World's Most Dangerous Weapon\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  Outliers\n" + 
                                    "                </td>\n" + 
                                    "              </tr>\n" + 
                                    "            </tbody>\n" + 
                                    "          </table>\n" + 
                                    "        </div>\n";
                                    

                webpage_index = 29;
              break;

              // Runs if the loading page is the 'English' page for the schedule for 2017.
              case 30:
                extracted_html[0] = "        <div class=\"article-english\" id=\"article-content\">\n" + 
                                    "          <h4>2017년 원서강독 수업 일정 업데이트</h4>\n" + 
                                    "          <img src=\"http://daechi.leadersacademy.com/data/editor/1705/3_2017년%20정규%20일정표1.jpg\" width=\"674\" height=\"836\" />\n" + 
                                    "        </div>\n";  
                                    

                webpage_index = 30;
              break;

              // Runs if the loading page is the 'English' page for the 2016 application form.
              case 31:
                extracted_html[0] = "        <div class=\"article-english\" id=\"article-content\">\n" + 
                                    "          <h4>2016년 1,2분기 원서안내</h4>\n" + 
                                    "          <h6>2016년 Book List</h6>\n" + 
                                    "          <table>\n" + 
                                    "            <thead>\n" + 
                                    "              <tr>\n" + 
                                    "                <th scope=\"col\">\n" + 
                                    "                  &nbsp;\n" + 
                                    "                </th>\n" + 
                                    "                <th scope=\"col\">\n" + 
                                    "                  Month\n" + 
                                    "                </th>\n" + 
                                    "                <th scope=\"col\">\n" + 
                                    "                  Reading Theme\n" + 
                                    "                </th>\n" + 
                                    "                <th scope=\"col\">\n" + 
                                    "                  Lexis\n" + 
                                    "                </th>\n" + 
                                    "                <th scope=\"col\">\n" + 
                                    "                  Book Title (도서명)\n" + 
                                    "                </th>\n" + 
                                    "                <th scope=\"col\">\n" + 
                                    "                  Mythos\n" + 
                                    "                </th>\n" + 
                                    "                <th scope=\"col\">\n" + 
                                    "                  Book Title (도서명)\n" + 
                                    "                </th>\n" + 
                                    "                <th scope=\"col\">\n" + 
                                    "                  Opsis\n" + 
                                    "                </th>\n" + 
                                    "                <th scope=\"col\">\n" + 
                                    "                  Book Title (도서명)\n" + 
                                    "                </th>\n" + 
                                    "              </tr>\n" + 
                                    "            </thead>\n" + 
                                    "            <tbody>\n" + 
                                    "              <tr>\n" + 
                                    "                <td>\n" + 
                                    "                  A1\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  Jan\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  Adolescent Development\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  4A\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  Harry Potter (Chamber of Secrets)\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  6A\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  Lord of the Flies\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  MS2A\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  Adventures of Huckleberry Finn\n" + 
                                    "                </td>\n" + 
                                    "              </tr>\n" + 
                                    "              <tr>\n" + 
                                    "                <td>\n" + 
                                    "                  A2\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  Feb\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  Science Fiction\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  4A\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  Wrinkle in Time\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  6A\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  Childhood's End\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  MS2A\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  Moon is a Harsh Mistress\n" + 
                                    "                </td>\n" + 
                                    "              </tr>\n" + 
                                    "              <tr>\n" + 
                                    "                <td>\n" + 
                                    "                  A3\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  Mar\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  Historical\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  4A\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  Roll of Thunder, Hear My Cry\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  6A\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  Chasing Lincoln's Killer\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  MS2A\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  Black Boy\n" + 
                                    "                </td>\n" + 
                                    "              </tr>\n" + 
                                    "              <tr>\n" + 
                                    "                <td>\n" + 
                                    "                  B1\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  Apr\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  Fantasy\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  4B\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  Fablehaven\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  6B\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  The Giver\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  MS2B\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  City of Beasts\n" + 
                                    "                </td>\n" + 
                                    "              </tr>\n" + 
                                    "              <tr>\n" + 
                                    "                <td>\n" + 
                                    "                  B2\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  May\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  Classics\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  4B\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  Stuart Little\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  6B\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  To Kill a Mockingbird\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  MS2B\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  Sun Also Rises\n" + 
                                    "                </td>\n" + 
                                    "              </tr>\n" + 
                                    "              <tr>\n" + 
                                    "                <td>\n" + 
                                    "                  B3\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  Jun (6월)\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  Adventure\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  4C\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  The Curious Incident of the Dog in the Nighttime\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  6B\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  To Kill a Mockingbird\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  MS2C\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  The Round House\n" + 
                                    "                </td>\n" + 
                                    "              </tr>\n" + 
                                    "              <tr>\n" + 
                                    "                <td>\n" + 
                                    "                  C1\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  Jul\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  Nonfiction\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  4C\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  The Notorious Benedict Arnold: A True Story of Adventure, Heroism & Treachery\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  6C\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  Bomb: The Race to Build - and Steal - the World's Most Dangerous Weapon\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  MS2C\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  Outliers\n" + 
                                    "                </td>\n" + 
                                    "              </tr>\n" + 
                                    "            </tbody>\n" + 
                                    "          </table>\n" + 
                                    "        </div>\n";
                                    
                webpage_index = 31;
              break;

              // Runs if the loading page is the 'English' page for the schedule for 2016.
              case 32:
                extracted_html[0] = "        <div class=\"article-english\" id=\"article-content\">\n" + 
                                    "          <h4>2016년 원서강독수업 일정 업데이트</h4>\n" + 
                                    "          <span>원서강독반 일정 (리딩 라이팅 주1회)<br/><strong>*2016년 2월3일 개강(접수중)</strong></span>\n" + 
                                    "          <table>\n" + 
                                    "            <thead>\n" + 
                                    "              <tr>\n" + 
                                    "                <th scope=\"col\">\n" + 
                                    "                  클래스명\n" + 
                                    "                </th>\n" + 
                                    "                <th scope=\"col\">\n" + 
                                    "                  수업내용\n" + 
                                    "                </th>\n" + 
                                    "                <th scope=\"col\">\n" + 
                                    "                  수업일정\n" + 
                                    "                </th>\n" + 
                                    "                <th scope=\"col\">\n" + 
                                    "                  수업료\n" + 
                                    "                </th>\n" + 
                                    "              </tr>\n" + 
                                    "            </thead>\n" + 
                                    "            <tbody>\n" + 
                                    "              <tr>\n" + 
                                    "                <td>\n" + 
                                    "                  LEXIS (렉서스초3,4)\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  원서강독 (리딩&amp;라이팅)\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  수요일, 4-6:30분 (Rick 강사)\n" + 
                                    "                  <br/>\n" + 
                                    "                  금요일, 4-6:30분 (Rick 강사)\n" + 
                                    "                </td>\n" + 
                                    "                <td rowspan=\"3\">\n" + 
                                    "                  4(주1회): 20만6천원\n" + 
                                    "                  <br/>\n" + 
                                    "                  5(주1회): 25만6천원\n" + 
                                    "                </td>\n" + 
                                    "              </tr>\n" + 
                                    "              <tr>\n" + 
                                    "                <td>\n" + 
                                    "                  MYTHOS (미토스) 초5,6\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  원서강독 (리딩&amp;라이팅)\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  수요일, 4-7시 (Matthew 강사)\n" + 
                                    "                  <br/>\n" + 
                                    "                  금요일, 4-7시 (Matthew 강사)\n" + 
                                    "                </td>\n" + 
                                    "              </tr>\n" + 
                                    "              <tr>\n" + 
                                    "                <td>\n" + 
                                    "                  OPSIS (옵시스) 중1,2\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  원서강독 (리딩&amp;라이팅)\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  수요일, 7-10시 (Matthew 강사)\n" + 
                                    "                  <br/>\n" + 
                                    "                  금요일, 7-10시 (Matthew 강사)\n" + 
                                    "                </td>\n" + 
                                    "              </tr>\n" + 
                                    "            </tbody>\n" + 
                                    "          </table>\n" + 
                                    "        </div>\n";
                                    
                webpage_index = 32;
              break;

              // Runs if the loading page is the 'English' page for the schedule for 2017.
              case 33:
                extracted_html[0] = "        <div class=\"article-english\" id=\"article-content\">\n" + 
                                    "          <h4>2018 원서강독 수업일정</h4>\n" + 
                                    "          <img src=\"http://daechi.leadersacademy.com/data/editor/1711/2018%20토론수업%20일정.png\" width=\"674\" height=\"868\" />\n" + 
                                    "        </div>\n";  
                                    

                webpage_index = 33;
              break;

              // Runs if the loading page is the 'English' page for the 2016 application.
              case 34:
                extracted_html[0] = "        <div class=\"article-english\" id=\"article-content\">\n" + 
                                    "          <h4>2016 원서강독 수업 일정 업데이트</h4>\n" + 
                                    "          <span>원서강독 수업 일정 안내합니다<br/><strong>* 2016년 학년기준입니다)</strong></span>\n" + 
                                    "          <table>\n" + 
                                    "            <thead>\n" + 
                                    "              <tr>\n" + 
                                    "                <th scope=\"col\">\n" +  
                                    "                  학년\n" + 
                                    "                </th>\n" + 
                                    "                <th scope=\"col\">\n" +  
                                    "                  요일\n" + 
                                    "                </th>\n" + 
                                    "                <th scope=\"col\">\n" +  
                                    "                  시간\n" + 
                                    "                </th>\n" + 
                                    "                <th scope=\"col\">\n" +  
                                    "                  학년\n" + 
                                    "                </th>\n" + 
                                    "                <th scope=\"col\">\n" +  
                                    "                  요일\n" + 
                                    "                </th>\n" + 
                                    "                <th scope=\"col\">\n" +  
                                    "                  시간\n" + 
                                    "                </th>\n" + 
                                    "              </tr>\n" + 
                                    "            </thead>\n" + 
                                    "            <tbody>\n" + 
                                    "              <tr>\n" + 
                                    "                <td>\n" + 
                                    "                  초등오픈\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  화수\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  4PM ~ 7PM\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  중등오픈\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  화수\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  7PM ~ 10PM\n" + 
                                    "                </td>\n" + 
                                    "              </tr>" +
                                    "              <tr>\n" + 
                                    "                <td>\n" + 
                                    "                  초5학년\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  토요일\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  1PM ~ 4PM\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  중1학년\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  토요일\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  4PM ~ 7PM\n" + 
                                    "                </td>\n" + 
                                    "              </tr>" + 
                                    "              <tr>\n" + 
                                    "                <td rowspan=\"2\">\n" + 
                                    "                  초6학년\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  토요일\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  1PM ~ 4PM\n" +
                                    "                </td>\n" + 
                                    "                <td rowspan=\"2\">\n" + 
                                    "                  중2학년\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  토요일\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  4PM ~ 7PM\n" + 
                                    "                </td>\n" + 
                                    "              </tr>" + 
                                    "              <tr>\n" + 
                                    "                <td>\n" + 
                                    "                  일요일\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  1PM ~ 4PM\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                 토요일\n" +
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  7PM ~ 10PM\n" + 
                                    "                </td>\n" + 
                                    "              </tr>" + 
                                    "              <tr>\n" + 
                                    "                <td rowspan=\"2\">\n" + 
                                    "                  최상위반 (LOGOS / KAIROS)\n" + 
                                    "                </td>\n" + 
                                    "                <td rowspan=\"2\">\n" + 
                                    "                  토요일\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  1PM ~ 4PM\n" +
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  중3학년\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  토요일\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  7PM ~ 10PM\n" + 
                                    "                </td>\n" + 
                                    "              </tr>" + 
                                    "              <tr>\n" + 
                                    "                <td>\n" + 
                                    "                  7PM ~ 10PM\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  고등오픈\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  일요일\n" +
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  1PM ~ 4PM\n" + 
                                    "                </td>\n" + 
                                    "              </tr>" + 
                                    "              <tr>\n" + 
                                    "                <td>\n" + 
                                    "                  Ethos Debate Lecture & Clinic (초등)\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  수요일\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  4:30PM ~ 6PM\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  Pathos Debate Lecture & Clinic (중등)\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  수요일\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  7PM ~ 8:30PM\n" + 
                                    "                </td>\n" + 
                                    "              </tr>" + 
                                    "            </tbody>\n" + 
                                    "          </table>\n" + 
                                    "        </div>\n";
                                    
                webpage_index = 34;
              break;

              // Runs if the loading page is the 'English' page for talk information of 2016.
              case 35:
                extracted_html[0] = "        <div class=\"article-english\" id=\"article-content\">\n" + 
                                    "          <h4>2016 Talk Updated class schedule</h4>\n" + 
                                    "          <h6>토론수업 일정(토론시간렉쳐강의시간)</h6>\n" + 
                                    "          <span>(팀수업별도 문의)</span>\n";

                extracted_html[1] = "          <table>\n" + 
                                    "            <thead>\n" + 
                                    "              <tr>\n" + 
                                    "                <th scope=\"col\">\n" + 
                                    "                  학년\n" + 
                                    "                </th>\n" + 
                                    "                <th scope=\"col\">\n" + 
                                    "                  토론수업일정\n" + 
                                    "                </th>\n" + 
                                    "                <th scope=\"col\">\n" + 
                                    "                  학년\n" + 
                                    "                </th>\n" + 
                                    "                <th scope=\"col\">\n" + 
                                    "                  토론수업일정\n" + 
                                    "                </th>\n" + 
                                    "                <th scope=\"col\">\n" + 
                                    "                  수업료\n" + 
                                    "                </th>\n" + 
                                    "              </tr>\n" + 
                                    "            </thead>\n" + 
                                    "            <tbody>\n" + 
                                    "              <tr>\n" + 
                                    "                <td rowspan=\"4\">\n" + 
                                    "                  초등토론\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  화요일 4-7PM(초3,4)\n" + 
                                    "                </td>\n" + 
                                    "                <td rowspan=\"3\">\n" + 
                                    "                  중등토론\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  수요일 7-10PM\n" + 
                                    "                </td>\n" + 
                                    "                <td rowspan=\"5\">\n" + 
                                    "                  4주: 36만원\n" + 
                                    "                  <br/>\n" + 
                                    "                  5주: 45만원\n" + 
                                    "                </td>\n" + 
                                    "              <tr>\n" + 
                                    "                <td>\n" + 
                                    "                  수요일 4-7PM(초5,6)\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  목요일 7-10PM\n" + 
                                    "                </td>\n" + 
                                    "              </tr>\n" + 
                                    "              <tr>\n" + 
                                    "                <td rowspan=\"2\">\n" + 
                                    "                 토요일 12-3PM(3,4/5,6)\n" + 
                                    "                 <br/>\n" + 
                                    "                 4-7PM(5,6)\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  토요일, 12-3PM(중)\n" + 
                                    "                  <br/>\n" + 
                                    "                  4-7PM(중1)\n" + 
                                    "                  <br/>\n" + 
                                    "                  7-10PM(중2,3)\n" + 
                                    "                  <br/>\n" + 
                                    "                  일요일 1-4PM(중3)\n" + 
                                    "                </td>\n" + 
                                    "              </tr>\n" + 
                                    "              <tr>\n" + 
                                    "                <td>\n" + 
                                    "                  고등토론\n" + 
                                    "                 <br/>\n" + 
                                    "                 (중3이상)\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  목요일 7-10PM\n" + 
                                    "                </td>\n" + 
                                    "              </tr>\n" + 
                                    "              <tr>\n" + 
                                    "                <td>\n" + 
                                    "                 초등 Speech & Debate\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  화요일 4-7PM\n" + 
                                    "                  <br/>\n" + 
                                    "                  일요일 1-4PM\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  초등 Speech & Debate\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  맑은 고딕 7-10PM\n" + 
                                    "                  <br/>\n" + 
                                    "                  일요일 4-7PM\n" + 
                                    "                </td>\n" + 
                                    "              </tr>\n" + 
                                    "            </tbody>\n" + 
                                    "          </table>\n" + 
                                    "          <span>*초등 렉쳐일정매주: 금요일 4:30-7시</span>\n" + 
                                    "          <span>*중등이상 렉쳐일정: 매주 금요일 7-9:30(재학생만 수강가능)</span>\n" + 
                                    "          <ul>\n" + 
                                    "            <li>등록: 매월등록 또는 분기별 등록 할인 적용 할인 적용(10%할인 적용)</li>\n" + 
                                    "            <li>입학시험 일정: 매주 수(6-7:20PM), (2-3:20PM) / Reading, Essay & Impromptu Speech 부문 평가(하루 전 예약,무료)</li>\n" + 
                                    "            <li>상담문의 02-562-9799, 010-4773-9799</li>\n" + 
                                    "          </ul>\n" + 
                                    "        </div>\n";  

                webpage_index = 35;
              break;

              // Runs if the loading page is the 'English' page for the schedule for English classes.
              case 36:
                extracted_html[0] = "        <div class=\"article-english\" id=\"article-content\">\n" + 
                                    "          <h4>주중 영어원서강독반 일정안내</h4>\n" + 
                                    "          <h6>안녕하세요? 리더스대치 관리자입니다.</h6>\n" + 
                                    "          <p>\n" + 
                                    "            학생들이 비문학을 공부하는 영어토론수업외에 문학원서를 통해 고급 리딩, 라이팅 수준을\n" + 
                                    "            <br/>\n" + 
                                    "            향상시킬 수 있는 영어수업반을 안내드립니다.\n" + 
                                    "          </p>\n" + 
                                    "          <ul>\n" +
                                    "            <li>*초등 6학년반 - 매주 수요일 7-10시 리딩 & 라이팅수업 (주1회3시간 4주기준 206000원)</li>\n" + 
                                    "            <li>*중등 1학년반 - 매주 금요일 7-10시 리딩 & 라이팅수업 (주1회3시간 4주기준 206000원)</li>\n" + 
                                    "          </ul>\n" + 
                                    "          <p>\n" + 
                                    "            초등 6학년반은 현재 2명만 추가등록받고 있습니다. 리더스입학시험을 본 학생들 중 우선신청을\n" +  
                                    "            <br/>\n" + 
                                    "            받고 있으니 연락주시기 바랍니다. 감사합니다. 02-562-9799\n" + 
                                    "          </p>\n" + 
                                    "        </div>\n";  

                webpage_index = 36;
              break;

              // Runs if the loading page is the 'English' page for the Advanced English class.
              case 37:
                extracted_html[0] = "        <div class=\"article-english\" id=\"article-content\">\n" + 
                                    "          <h4>고급영어 2015년 2분기 수업일정</h4>\n" + 
                                    "          <h6>고급영어 (Writing 개인 &amp; 그룹수업가능)</h6>\n" + 
                                    "          <table>\n" + 
                                    "            <thead>\n" + 
                                    "              <tr>\n" + 
                                    "                <th scope=\"col\">\n" + 
                                    "                  클래스\n" + 
                                    "                </th>\n" + 
                                    "                <th scope=\"col\">\n" + 
                                    "                  학년\n" + 
                                    "                </th>\n" + 
                                    "                <th scope=\"col\">\n" + 
                                    "                  내용\n" + 
                                    "                </th>\n" + 
                                    "                <th scope=\"col\">\n" + 
                                    "                  요일\n" + 
                                    "                </th>\n" + 
                                    "                <th scope=\"col\">\n" + 
                                    "                  시간\n" + 
                                    "                </th>\n" + 
                                    "              </tr>\n" + 
                                    "            </thead>\n" + 
                                    "            <tbody>\n" + 
                                    "              <tr>\n" + 
                                    "               <td>\n" + 
                                    "                  LEXIS\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  초3,4\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  Reading & Writing / Lecture & Clinic\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  화, 목\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  4-6PM\n" + 
                                    "                </td>\n" + 
                                    "              </tr>\n" +
                                    "              <tr>\n" + 
                                    "               <td>\n" + 
                                    "                  MYTHOS\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  초5,6\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  Reading & Writing / Lecture & Clinic\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  화, 목\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  6-8PM\n" + 
                                    "                </td>\n" + 
                                    "              </tr>\n" + 
                                    "              <tr>\n" + 
                                    "               <td>\n" + 
                                    "                  OPSIS\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  초1, 2n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  Reading & Writing / Lecture & Clinic\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  화, 목\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  8-10PM\n" + 
                                    "                </td>\n" + 
                                    "              </tr>\n" + 
                                    "              <tr>\n" + 
                                    "               <td>\n" + 
                                    "                  LEXIS &amp; MYTHOS\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  학년별\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  Reading & Writing / Lecture & Clinic\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  매주 토요일 주말반\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  12-3PM / 3:30-6:30PM\n" + 
                                    "                </td>\n" + 
                                    "              </tr>\n" + 
                                    "              <tr>\n" + 
                                    "               <td>\n" + 
                                    "                  SPEECH CLASS\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  ES\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  Speech Clinic\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  Friday\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  5-7PM\n" + 
                                    "                </td>\n" + 
                                    "              </tr>\n" + 
                                    "              <tr>\n" + 
                                    "               <td>\n" + 
                                    "                  SPEECH CLASS\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  MS\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  Speech Clinic\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  Friday\n" + 
                                    "                </td>\n" + 
                                    "                <td>\n" + 
                                    "                  7-9PM\n" + 
                                    "                </td>\n" + 
                                    "              </tr>\n" + 
                                    "            </tbody>\n" + 
                                    "          </table>\n" + 
                                    "        </div>\n";

                webpage_index = 37;
              break;

              // Runs if the loading page is the 'English' page for the schedule for 2014.
              case 38:
                extracted_html[0] = "        <div class=\"article-english\" id=\"article-content\">\n" + 
                                    "          <h4>정규영어 2014년 4분기 일정</h4>\n" + 
                                    "          <img src=\"http://daechi.leadersacademy.com/data/editor/1411/2_Books.jpg\" width=\"500\" height=\"300\" />\n" + 
                                    "          <img src=\"http://daechi.leadersacademy.com/data/editor/1411/1_Fourth%20Quarter%20English.jpg\" width=\"500\" height=\"300\" />\n" + 
                                    "          <img src=\"http://daechi.leadersacademy.com/data/editor/1411/%EC%98%81%EC%96%B4%EC%A0%95%EA%B7%9C%EC%88%98%EC%97%85.jpg\" width=\"500\" height=\"100\" />\n" + 
                                    "          <a href=\"/la/assets/html/admissions/admissions.htm\" title=\"Admissions\">Admissions</a>\n" + 
                                    "        </div>\n";  
                                    

                webpage_index = 38;
              break;

              // Runs if the loading page is the Login page.
              case 39:
                extracted_html[0] = "        <div class=\"article-login\" id=\"article-content\">\n" + 
                                    "          <div class=\"article-header-login\" id=\"article-header\">\n" + 
                                    "            <h4>로그인</h4>\n" + 
                                    "            <div id=\"article-form-login\">\n" + 
                                    "              <form id=\"loginForm\" name=\"loginForm\" method=\"post\" action=\"http://daechi.leadersacademy.com/lib/member/process.php\" onsubmit=\"return checkLoginForm(this);\">\n" + 
                                    "                <input type=\"hidden\" name=\"cmd\" value=\"login\">\n" + 
                                    "                <input type=\"hidden\" name=\"logintype\" value=\"member\">\n" + 
                                    "                <input type=\"hidden\" name=\"aca_number\" value=\"73176\">\n" + 
                                    "                <input type=\"hidden\" name=\"nexturl\" value=\"\">\n" + 
                                    "                <input type=\"hidden\" name=\"domain\" value=\"daechi.leadersacademy.com\">\n" + 
                                    "                <input type=\"hidden\" id=\"PHPSESSID\" name=\"PHPSESSID\" value=\"1dd57c3654430939e5da10ade0f2fc13\">\n" + 
                                    "                <div class=\"form-row\" id=\"form-row-1\">\n" + 
                                    "                  <img src=\"http://daechi.leadersacademy.com/skin/_modules/member/default/img/login_id.gif\"><input type=\"text\" id=\"member_id\" name=\"member_id\" value=\"\" class=\"input_login\" tabindex=\"11\">\n" +
                                    "                </div>\n" + 
                                    "                <div class=\"form-row\" id=\"form-row-2\">\n" + 
                                    "                  <img src=\"http://daechi.leadersacademy.com/skin/_modules/member/default/img/login_pw.gif\"><input type=\"password\" id=\"member_passwd\" name=\"member_passwd\" class=\"input_login\" tabindex=\"12\">\n" +
                                    "                </div>\n" + 
                                    "                <div id=\"form-button\">\n" + 
                                    "                  <input type=\"image\" src=\"http://daechi.leadersacademy.com/skin/_modules/member/default/img/btn_login.gif\" tabindex=\"13\">\n" +
                                    "                </div>\n" + 
                                    "                <div class=\"form-row\" id=\"form-row-3\">\n" + 
                                    "                  <input type=\"checkbox\" id=\"save_member_id\" name=\"save_member_id\" value=\"1\"><label for=\"save_member_id\">아이디 저장</label>\n" +
                                    "                  <input type=\"checkbox\" name=\"ssl\" id=\"ssl\" value=\"ssl\" checked><label for=\"ssl\">보안접속</label>\n" + 
                                    "                </div>\n" + 
                                    "              </form>\n" + 
                                    "            </div>\n" +  
                                    "          </div>"
                                    "        </div>\n";  

                webpage_index = 39;
              break;

              // Runs if the loading page is the 'Announcements' page.
              case 40:
                extracted_html[0] = "        <div class=\"article-announcements\" id=\"article-content\">\n" + 
                                    "          <div class=\"article-announcements-listing\" id=\"announcements-listing-1\">\n" + 
                                    "            <a href=\"/la/assets/html/announcements/announcement_1.htm\" title=\"학원친구 앱 사용법\">학원친구 앱 사용법</a><span> - 2017-11-21</span>\n" + 
                                    "          </div>\n" + 
                                    "          <div class=\"article-announcements-listing\" id=\"announcements-listing-2\">\n" + 
                                    "            <a href=\"/la/assets/html/announcements/announcement_2.htm\" title=\"2017-18 겨울방학 특강 안내\">2017-18 겨울방학 특강 안내</a><span> - 2017-10-26</span>\n" + 
                                    "          </div>\n" + 
                                    "          <div class=\"article-announcements-listing\" id=\"announcements-listing-3\">\n" + 
                                    "            <a href=\"/la/assets/html/announcements/announcement_3.htm\" title=\"2017년 리더스아카데미 4분기 설명회\">2017년 리더스아카데미 4분기 설명회</a><span> - 2017-09-21</span>\n" + 
                                    "          </div>\n" + 
                                    "          <div class=\"article-announcements-listing\" id=\"announcements-listing-4\">\n" + 
                                    "            <a href=\"/la/assets/html/announcements/announcement_4.htm\" title=\"2017년 가을학기 정규수업 일정표\">2017년 가을학기 정규수업 일정표</a><span> - 2017-08-24</span>\n" + 
                                    "          </div>\n" + 
                                    "          <div class=\"article-announcements-listing\" id=\"announcements-listing-5\">\n" + 
                                    "            <a href=\"/la/assets/html/announcements/announcement_5.htm\" title=\"2017년 카이로스(최상위반) 오디션\">2017년 카이로스(최상위반) 오디션</a><span> - 2017-08-24</span>\n" + 
                                    "          </div>\n" + 
                                    "          <div class=\"article-announcements-listing\" id=\"announcements-listing-6\">\n" + 
                                    "            <a href=\"/la/assets/html/announcements/announcement_6.htm\" title=\"2017년 가을학기 설명회\">2017년 가을학기 설명회</a><span> - 2017-08-24</span>\n" + 
                                    "          </div>\n" + 
                                    "          <div class=\"article-announcements-listing\" id=\"announcements-listing-7\">\n" + 
                                    "            <a href=\"/la/assets/html/announcements/announcement_7.htm\" title=\"2017년 상반기 수상실적\">2017년 상반기 수상실적</a><span> - 2017-08-24</span>\n" + 
                                    "          </div>\n" + 
                                    "          <div class=\"article-announcements-listing\" id=\"announcements-listing-8\">\n" + 
                                    "            <a href=\"/la/assets/html/announcements/announcement_8.htm\" title=\"2017년 리더스 여름방학특강 설명회\">2017년 리더스 여름방학특강 설명회</a><span> - 2017-03-25</span>\n" + 
                                    "          </div>\n" + 
                                    "          <div class=\"article-announcements-listing\" id=\"announcements-listing-9\">\n" + 
                                    "            <a href=\"/la/assets/html/announcements/announcement_9.htm\" title=\"2017년 리더스 봄학기 설명회 \">2017년 리더스 봄학기 설명회 </a><span> - 2017-02-09</span>\n" + 
                                    "          </div>\n" + 
                                    "          <div class=\"article-announcements-listing\" id=\"announcements-listing-10\">\n" + 
                                    "            <a href=\"/la/assets/html/announcements/announcement_10.htm\" title=\"분실물 찾아가세요~(보관기간:2017.9.21~12.21)\">분실물 찾아가세요~(보관기간:2017.9.21~12.21)</a><span> - 2017-09-21</span>\n" + 
                                    "          </div>\n" + 
                                    "          <div class=\"article-announcements-listing\" id=\"announcements-listing-11\">\n" + 
                                    "            <a href=\"/la/assets/html/announcements/announcement_11.htm\" title=\"2017 여름방학 특강 일정표\">2017 여름방학 특강 일정표</a><span> - 2017-06-22</span>\n" + 
                                    "          </div>\n" + 
                                    "          <div class=\"article-announcements-listing\" id=\"announcements-listing-12\">\n" + 
                                    "            <a href=\"/la/assets/html/announcements/announcement_12.htm\" title=\"2017년 정규수업 일정 업데이트\">2017년 정규수업 일정 업데이트</a><span> - 2017-05-26</span>\n" + 
                                    "          </div>\n" + 
                                    "          <div class=\"article-announcements-listing\" id=\"announcements-listing-13\">\n" + 
                                    "            <a href=\"/la/assets/html/announcements/announcement_13.htm\" title=\"2017년 여름방학 특강일정표\">2017년 여름방학 특강일정표</a><span> - 2017-05-26</span>\n" + 
                                    "          </div>\n" + 
                                    "          <div class=\"article-announcements-listing\" id=\"announcements-listing-14\">\n" + 
                                    "            <a href=\"/la/assets/html/announcements/announcement_14.htm\" title=\청심모의유엔 대회 (CSIAMUN)\">청심모의유엔 대회 (CSIAMUN)</a><span> - 2017-02-15</span>\n" + 
                                    "          </div>\n" + 
                                    "          <div class=\"article-announcements-listing\" id=\"announcements-listing-15\">\n" + 
                                    "            <a href=\"/la/assets/html/announcements/announcement_15.htm\" title=\"매일경제토론대회 초등,고등부 부문 (17.2.11-12일개최)\">매일경제토론대회 초등,고등부 부문 (17.2.11-12일개최)</a><span> - 2017-02-15</span>\n" + 
                                    "          </div>\n" + 
                                    "          <div class=\"article-announcements-listing\" id=\"announcements-listing-16\">\n" + 
                                    "            <a href=\"/la/assets/html/announcements/announcement_16.htm\" title=\"용인괴고 모의법정 1-3위석권!! (17.2.11-12일개최)\">용인괴고 모의법정 1-3위석권!! (17.2.11-12일개최)</a><span> - 2017-02-15</span>\n" + 
                                    "          </div>\n" + 
                                    "          <div class=\"article-announcements-listing\" id=\"announcements-listing-17\">\n" + 
                                    "            <a href=\"/la/assets/html/announcements/announcement_17.htm\" title=\"2017 NSDA겨울챔피언쉽, YUMN, GC수상결과\">2017 NSDA겨울챔피언쉽, YUMN, GC수상결과</a><span> - 2017-01-17</span>\n" + 
                                    "          </div>\n" + 
                                    "          <div class=\"article-announcements-listing\" id=\"announcements-listing-18\">\n" + 
                                    "            <a href=\"/la/assets/html/announcements/announcement_18.htm\" title=\"2017년 국내 모의법정 대회준비\">2017년 국내 모의법정 대회준비</a><span> - 2016-12-26</span>\n" + 
                                    "          </div>\n" + 
                                    "          <div class=\"article-announcements-listing\" id=\"announcements-listing-19\">\n" + 
                                    "            <a href=\"/la/assets/html/announcements/announcement_19.htm\" title=\"< 12월, 1월 휴원 일정 공지 >\">< 12월, 1월 휴원 일정 공지 ></a><span> - 2016-11-29</span>\n" + 
                                    "          </div>\n" + 
                                    "          <div class=\"article-announcements-listing\" id=\"announcements-listing-20\">\n" + 
                                    "            <a href=\"/la/assets/html/announcements/announcement_20.htm\" title=\"*토론대회 파트너를 찾아라! -토론명문리더스*\">*토론대회 파트너를 찾아라! -토론명문리더스*</a><span> - 2016-11-28</span>\n" + 
                                    "          </div>\n" + 
                                    "        </div>\n";  
                                    

                webpage_index = 40;
              break;

              // Runs if the loading page is the 1st announcement in the Announcements section.
              case 41:
                extracted_html[0] = "        <div class=\"article-announcements\" id=\"article-content\">\n" + 
                                    "          <h4>학원친구 앱 사용법</h4>\n" + 
                                    "            " + jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td table > tbody > tr:nth-child(5) > td table > tbody > tr > td").html() + "\n" + 
                                    "        </div>\n";  

                webpage_index = 41;
              break;

              // Runs if the loading page is the 2nd announcement in the Announcements section.
              case 42:
                extracted_html[0] = "        <div class=\"article-announcements\" id=\"article-content\">\n" + 
                                    "          <h4>2017-18 겨울방학 특강 안내</h4>\n" + 
                                    "            " + jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td table > tbody > tr:nth-child(5) > td table > tbody > tr > td").html() + "\n" + 
                                    "        </div>\n";  
                                    

                webpage_index = 42;
              break;

              // Runs if the loading page is the 3rd announcement in the Announcements section.
              case 43:
                extracted_html[0] = "        <div class=\"article-announcements\" id=\"article-content\">\n" + 
                                    "          <h4>2017년 리더스아카데미 4분기 설명회</h4>\n" + 
                                    "            " + jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td table > tbody > tr:nth-child(5) > td table > tbody > tr > td").html() + "\n" + 
                                    "        </div>\n";  
                                    

                webpage_index = 43;
              break;

              // Runs if the loading page is the 4th announcement in the Announcements section.
              case 44:
                extracted_html[0] = "        <div class=\"article-announcements\" id=\"article-content\">\n" + 
                                    "          <h4>2017년 가을학기 정규수업 일정표</h4>\n" + 
                                    "            " + jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td table > tbody > tr:nth-child(5) > td table > tbody > tr > td").html() + "\n" + 
                                    "        </div>\n";  
                                    

                webpage_index = 44;
              break;

              // Runs if the loading page is the 5th announcement in the Announcements section.
              case 45:
                extracted_html[0] = "        <div class=\"article-announcements\" id=\"article-content\">\n" + 
                                    "          <h4>2017년 카이로스(최상위반) 오디션</h4>\n" + 
                                    "            " + jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td table > tbody > tr:nth-child(5) > td table > tbody > tr > td").html() + "\n" + 
                                    "        </div>\n";  
                                    

                webpage_index = 45;
              break;

              // Runs if the loading page is the 6th announcement in the Announcements section.
              case 46:
                extracted_html[0] = "        <div class=\"article-announcements\" id=\"article-content\">\n" + 
                                    "          <h4>2017년 가을학기 설명회</h4>\n" + 
                                    "            " + jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td table > tbody > tr:nth-child(5) > td table > tbody > tr > td").html() + "\n" + 
                                    "        </div>\n";  
                                    

                webpage_index = 46;
              break; 

              // Runs if the loading page is the 7th announcement in the Announcements section.
              case 47:
                extracted_html[0] = "        <div class=\"article-announcements\" id=\"article-content\">\n" + 
                                    "          <h4>2017년 상반기 수상실적</h4>\n" + 
                                    "            " + jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td table > tbody > tr:nth-child(5) > td table > tbody > tr > td").html() + "\n" + 
                                    "        </div>\n";  
                                    

                webpage_index = 47;
              break; 

              // Runs if the loading page is the 8th announcement in the Announcements section.
              case 48:
                extracted_html[0] = "        <div class=\"article-announcements\" id=\"article-content\">\n" + 
                                    "          <h4>2017년 리더스 여름방학특강 설명회</h4>\n" + 
                                    "            " + jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td table > tbody > tr:nth-child(5) > td table > tbody > tr > td").html() + "\n" + 
                                    "        </div>\n";  
                                    

                webpage_index = 48;
              break; 

              // Runs if the loading page is the 9th announcement in the Announcements section.
              case 49:
                extracted_html[0] = "        <div class=\"article-announcements\" id=\"article-content\">\n" + 
                                    "          <h4>2017년 리더스 봄학기 설명회</h4>\n" + 
                                    "            " + jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td table > tbody > tr:nth-child(5) > td table > tbody > tr > td").html() + "\n" + 
                                    "        </div>\n";  
                                    

                webpage_index = 49;
              break; 

              // Runs if the loading page is the 10th announcement in the Announcements section.
              case 50:
                extracted_html[0] = "        <div class=\"article-announcements\" id=\"article-content\">\n" + 
                                    "          <h4>2017 여름방학 특강 일정표</h4>\n" + 
                                    "            " + jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td table > tbody > tr:nth-child(5) > td table > tbody > tr > td").html() + "\n" + 
                                    "        </div>\n";  
                                    

                webpage_index = 50;
              break; 

              // Runs if the loading page is the 11th announcement in the Announcements section.
              case 51:
                extracted_html[0] = "        <div class=\"article-announcements\" id=\"article-content\">\n" + 
                                    "          <h4>2017 여름방학 특강 일정표</h4>\n" + 
                                    "            " + jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td table > tbody > tr:nth-child(5) > td table > tbody > tr > td").html() + "\n" + 
                                    "        </div>\n";  
                                    

                webpage_index = 51;
              break; 

              // Runs if the loading page is the 12th announcement in the Announcements section.
              case 52:
                extracted_html[0] = "        <div class=\"article-announcements\" id=\"article-content\">\n" + 
                                    "          <h4>2017년 정규수업 일정 업데이트</h4>\n" + 
                                    "            " + jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td table > tbody > tr:nth-child(5) > td table > tbody > tr > td").html() + "\n" + 
                                    "        </div>\n";  
                                    

                webpage_index = 52;
              break; 

              // Runs if the loading page is the 13th announcement in the Announcements section.
              case 53:
                extracted_html[0] = "        <div class=\"article-announcements\" id=\"article-content\">\n" + 
                                    "          <h4>2017년 여름방학 특강일정표</h4>\n" + 
                                    "            " + jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td table > tbody > tr:nth-child(5) > td table > tbody > tr > td").html() + "\n" + 
                                    "        </div>\n";  
                                    

                webpage_index = 53;
              break; 

              // Runs if the loading page is the 14th announcement in the Announcements section.
              case 54:
                extracted_html[0] = "        <div class=\"article-announcements\" id=\"article-content\">\n" + 
                                    "          <h4>청심모의유엔 대회 (CSIAMUN)</h4>\n" + 
                                    "            " + jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td table > tbody > tr:nth-child(5) > td table > tbody > tr > td").html() + "\n" + 
                                    "        </div>\n";  
                                    

                webpage_index = 54;
              break; 

              // Runs if the loading page is the 15th announcement in the Announcements section.
              case 55:
                extracted_html[0] = "        <div class=\"article-announcements\" id=\"article-content\">\n" + 
                                    "          <h4>매일경제토론대회 초등,고등부 부문 (17.2.11-12일개최)</h4>\n" + 
                                    "            " + jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td table > tbody > tr:nth-child(5) > td table > tbody > tr > td").html() + "\n" + 
                                    "        </div>\n";  
                                    

                webpage_index = 55;
              break; 

              // Runs if the loading page is the 16th announcement in the Announcements section.
              case 56:
                extracted_html[0] = "        <div class=\"article-announcements\" id=\"article-content\">\n" + 
                                    "          <h4>용인괴고 모의법정 1-3위석권!! (17.2.11-12일개최)</h4>\n" + 
                                    "            " + jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td table > tbody > tr:nth-child(5) > td table > tbody > tr > td").html() + "\n" + 
                                    "        </div>\n";  
                                    

                webpage_index = 56;
              break; 

              // Runs if the loading page is the 17th announcement in the Announcements section.
              case 57:
                extracted_html[0] = "        <div class=\"article-announcements\" id=\"article-content\">\n" + 
                                    "          <h4>2017 NSDA겨울챔피언쉽, YUMN, GC수상결과</h4>\n" + 
                                    "            " + jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td table > tbody > tr:nth-child(5) > td table > tbody > tr > td").html() + "\n" + 
                                    "        </div>\n";  
                                    

                webpage_index = 57;
              break; 

              // Runs if the loading page is the 18th announcement in the Announcements section.
              case 58:
                extracted_html[0] = "        <div class=\"article-announcements\" id=\"article-content\">\n" + 
                                    "          <h4>2017년 국내 모의법정 대회준비</h4>\n" + 
                                    "            " + jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td table > tbody > tr:nth-child(5) > td table > tbody > tr > td").html() + "\n" + 
                                    "        </div>\n";  
                                    

                webpage_index = 58;
              break; 

              // Runs if the loading page is the 19th announcement in the Announcements section.
              case 59:
                extracted_html[0] = "        <div class=\"article-announcements\" id=\"article-content\">\n" + 
                                    "          <h4>< 12월, 1월 휴원 일정 공지 ></h4>\n" + 
                                    "            " + jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td table > tbody > tr:nth-child(5) > td table > tbody > tr > td").html() + "\n" + 
                                    "        </div>\n";  
                                    

                webpage_index = 59;
              break;

              // Runs if the loading page is the 20th announcement in the Announcements section.
              case 60:
                extracted_html[0] = "        <div class=\"article-announcements\" id=\"article-content\">\n" + 
                                    "          <h4>*토론대회 파트너를 찾아라! -토론명문리더스*</h4>\n" + 
                                    "            " + jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td table > tbody > tr:nth-child(5) > td table > tbody > tr > td").html() + "\n" + 
                                    "        </div>\n";  
                                    

                webpage_index = 60;
              break;

              // Runs if the loading page is the 'Awards' page.
              case 61:
                extracted_html[0] = "        <div class=\"article-awards\" id=\"article-content\">\n" + 
                                    "          <h4>수상실적</h4>\n" + 
                                    "          <div class=\"article-awards-listing\" id=\"awards-listing-1\">\n" + 
                                    "            <a href=\"/la/assets/html/awards/award_1.htm\" title=\"청심모의유엔 대회 (CSIAMUN)\">청심모의유엔 대회 (CSIAMUN)</a><span> - 2017-02-15</span>\n" + 
                                    "          </div>\n" + 
                                    "          <div class=\"article-awards-listing\" id=\"awards-listing-2\">\n" + 
                                    "            <a href=\"/la/assets/html/awards/award_2.htm\" title=\매일경제토론대회 초등 고등부문 (17.2-11-12일 개최)\">매일경제토론대회 초등 고등부문 (17.2-11-12일 개최)</a><span> - 2017-02-15</span>\n" + 
                                    "          </div>\n" + 
                                    "          <div class=\"article-awards-listing\" id=\"awards-listing-3\">\n" + 
                                    "            <a href=\"/la/assets/html/awards/award_3.htm\" title=\"용인외고 모의법정 1-3위 석권!! (17.2.11-12일개최)\">용인외고 모의법정 1-3위 석권!! (17.2.11-12일개최)</a><span> - 2017-02-15</span>\n" + 
                                    "          </div>\n" + 
                                    "          <div class=\"article-awards-listing\" id=\"awards-listing-4\">\n" + 
                                    "            <a href=\"/la/assets/html/awards/award_4.htm\" title=\"November 2015 Invitational 대회 우승!\">November 2015 Invitational 대회 우승!</a><span> - 2015-12-04</span>\n" + 
                                    "          </div>\n" + 
                                    "          <div class=\"article-awards-listing\" id=\"awards-listing-5\">\n" + 
                                    "            <a href=\"/la/assets/html/awards/award_5.htm\" title=\"2016년 상반기 수상을 축하합니다!!\">2016년 상반기 수상을 축하합니다!!</a><span> - 2016-02-06</span>\n" + 
                                    "          </div>\n" + 
                                    "          <div class=\"article-awards-listing\" id=\"awards-listing-6\">\n" + 
                                    "            <a href=\"/la/assets/html/awards/award_6.htm\" title=\"2016 SUMMER 리더스를 빛낸 학생들 ~\">2016 SUMMER 리더스를 빛낸 학생들 ~</a><span> - 2016-08-20</span>\n" + 
                                    "          </div>\n" + 
                                    "          <div class=\"article-awards-listing\" id=\"awards-listing-7\">\n" + 
                                    "            <a href=\"/la/assets/html/awards/award_7.htm\" title=\"2017 NSDA겨울챔피언쉽, YUMN, GC수상결과\">2017 NSDA겨울챔피언쉽, YUMN, GC수상결과</a><span> - 2017-01-17</span>\n" + 
                                    "          </div>\n" + 
                                    "          <div class=\"article-awards-listing\" id=\"awards-listing-8\">\n" + 
                                    "            <a href=\"/la/assets/html/awards/award_8.htm\" title=\"IET 영어 독서 대회 수상\">IET 영어 독서 대회 수상</a><span> - 2016-11-30</span>\n" + 
                                    "          </div>\n" + 
                                    "          <div class=\"article-awards-listing\" id=\"awards-listing-9\">\n" + 
                                    "            <a href=\"/la/assets/html/awards/award_9.htm\" title=\"SEOMUN 수상자\">SEOMUN 수상자</a><span> - 2016-11-27</span>\n" + 
                                    "          </div>\n" + 
                                    "          <div class=\"article-awards-listing\" id=\"awards-listing-10\">\n" + 
                                    "            <a href=\"/la/assets/html/awards/award_10.htm\" title=\"NSDA 2016 November Invitational 수상자\">NSDA 2016 November Invitational 수상자</a><span> - 2016-11-23</span>\n" + 
                                    "          </div>\n" + 
                                    "          <div class=\"article-awards-listing\" id=\"awards-listing-11\">\n" + 
                                    "            <a href=\"/la/assets/html/awards/award_11.htm\" title=\"브라운 MUN 수상\">브라운 MUN 수상</a><span> - 2016-11-17</span>\n" + 
                                    "          </div>\n" + 
                                    "          <div class=\"article-awards-listing\" id=\"awards-listing-12\">\n" + 
                                    "            <a href=\"/la/assets/html/awards/award_12.htm\" title=\"2016 SUMMER 수상을 축하합니다!! \">2016 SUMMER 수상을 축하합니다!!</a><span> - 2016-08-11</span>\n" + 
                                    "          </div>\n" + 
                                    "          <div class=\"article-awards-listing\" id=\"awards-listing-13\">\n" + 
                                    "            <a href=\"/la/assets/html/awards/award_13.htm\" title=\"[2016 민사고 영어 토론 대회(KMLA)] 수상을 축하합니다\">[2016 민사고 영어 토론 대회(KMLA)] 수상을 축하합니다</a><span> - 2016-07-27</span>\n" + 
                                    "          </div>\n" + 
                                    "          <div class=\"article-awards-listing\" id=\"awards-listing-14\">\n" + 
                                    "            <a href=\"/la/assets/html/awards/award_14.htm\" title=\NSDA Korea 수상! (2016.4.9)\">NSDA Korea 수상! (2016.4.9)</a><span> - 2016-04-23</span>\n" + 
                                    "          </div>\n" + 
                                    "          <div class=\"article-awards-listing\" id=\"awards-listing-15\">\n" + 
                                    "            <a href=\"/la/assets/html/awards/award_15.htm\" title=\"제1회 한.중 리더스컵 토론대회 1등 축하합니다.\">제1회 한.중 리더스컵 토론대회 1등 축하합니다.</a><span> - 2015-11-22</span>\n" + 
                                    "          </div>\n" + 
                                    "          <div class=\"article-awards-listing\" id=\"awards-listing-16\">\n" + 
                                    "            <a href=\"/la/assets/html/awards/award_16.htm\" title=\"United Nations(반기문 UN Speech Contest)수상을 축하합니다.\">United Nations(반기문 UN Speech Contest)수상을 축하합니다.</a><span> - 2015-11-22</span>\n" + 
                                    "          </div>\n" + 
                                    "          <div class=\"article-awards-listing\" id=\"awards-listing-17\">\n" + 
                                    "            <a href=\"/la/assets/html/awards/award_17.htm\" title=\"브라운대학교 모의유엔 수상!! 축하합니다~\">브라운대학교 모의유엔 수상!! 축하합니다~</a><span> - 2015-11-22</span>\n" + 
                                    "          </div>\n" + 
                                    "          <div class=\"article-awards-listing\" id=\"awards-listing-18\">\n" + 
                                    "            <a href=\"/la/assets/html/awards/award_18.htm\" title=\"UN 청소년환경총회(MUN) 수상 축하합니다.\">UN 청소년환경총회(MUN) 수상 축하합니다.</a><span> - 2015-11-22</span>\n" + 
                                    "          </div>\n" + 
                                    "          <div class=\"article-awards-listing\" id=\"awards-listing-19\">\n" + 
                                    "            <a href=\"/la/assets/html/awards/award_19.htm\" title=\"2015 KAIAC Speech 1등 수상을축하합니다! (November 22-23)\">2015 KAIAC Speech 1등 수상을축하합니다! (November 22-23)</a><span> - 2015-11-22</span>\n" + 
                                    "          </div>\n" + 
                                    "          <div class=\"article-awards-listing\" id=\"awards-listing-20\">\n" + 
                                    "            <a href=\"/la/assets/html/awards/award_20.htm\" title=\"제 8회 한국퍼블릭스피킹챔피언쉽(KPSC) 1등 축하합니다~\">제 8회 한국퍼블릭스피킹챔피언쉽(KPSC) 1등 축하합니다~</a><span> - 2015-11-22</span>\n" + 
                                    "          </div>\n" + 
                                    "        </div>\n";  

                webpage_index = 61;
              break;
              
              // Runs if the loading page is the 1st award in the Award section.
              case 62:
                extracted_html[0] = "        <div class=\"article-awards\" id=\"article-content\">\n" + 
                                    "          <h4>청심모의유엔 대회 (CSIAMUN)</h4>\n" + 
                                    "            " + jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td table > tbody > tr:nth-child(5) > td table > tbody > tr > td").html() + "\n" + 
                                    "        </div>\n";  
                                    

                webpage_index = 62;
              break;

              // Runs if the loading page is the 2nd award in the Award section.
              case 63:
                extracted_html[0] = "        <div class=\"article-awards\" id=\"article-content\">\n" + 
                                    "          <h4>매일경제토론대회 초등 고등부문 (17.2-11-12일 개최)</h4>\n" + 
                                    "            " + jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td table > tbody > tr:nth-child(5) > td table > tbody > tr > td").html() + "\n" + 
                                    "        </div>\n";  
                                    

                webpage_index = 63;
              break;

              // Runs if the loading page is the 3rd award in the Award section.
              case 64:
                extracted_html[0] = "        <div class=\"article-awards\" id=\"article-content\">\n" + 
                                    "          <h4>용인외고 모의법정 1-3위 석권!! (17.2.11-12일개최)</h4>\n" + 
                                    "            " + jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td table > tbody > tr:nth-child(5) > td table > tbody > tr > td").html() + "\n" + 
                                    "        </div>\n";  
                                    

                webpage_index = 64;
              break;

              // Runs if the loading page is the 4th award in the Award section.
              case 65:
                extracted_html[0] = "        <div class=\"article-awards\" id=\"article-content\">\n" + 
                                    "          <h4>November 2015 Invitational 대회 우승!</h4>\n" + 
                                    "            " + jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td table > tbody > tr:nth-child(5) > td table > tbody > tr > td").html() + "\n" + 
                                    "        </div>\n";  
                                    

                webpage_index = 65;
              break;

              // Runs if the loading page is the 5th award in the Award section.
              case 66:
                extracted_html[0] = "        <div class=\"article-awards\" id=\"article-content\">\n" + 
                                    "          <h4>2016년 상반기 수상을 축하합니다!!</h4>\n" + 
                                    "            " + jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td table > tbody > tr:nth-child(5) > td table > tbody > tr > td").html() + "\n" + 
                                    "        </div>\n";  
                                    

                webpage_index = 66;
              break;

              // Runs if the loading page is the 6th award in the Award section.
              case 67:
                extracted_html[0] = "        <div class=\"article-awards\" id=\"article-content\">\n" + 
                                    "          <h4>2016 SUMMER 리더스를 빛낸 학생들 ~</h4>\n" + 
                                    "            " + jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td table > tbody > tr:nth-child(5) > td table > tbody > tr > td").html() + "\n" + 
                                    "        </div>\n";  
                                    

                webpage_index = 67;
              break;

              // Runs if the loading page is the 7th award in the Award section.
              case 68:
                extracted_html[0] = "        <div class=\"article-awards\" id=\"article-content\">\n" + 
                                    "          <h4>2017 NSDA겨울챔피언쉽, YUMN, GC수상결과</h4>\n" + 
                                    "            " + jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td table > tbody > tr:nth-child(5) > td table > tbody > tr > td").html() + "\n" + 
                                    "        </div>\n";  
                                    

                webpage_index = 68;
              break;

              // Runs if the loading page is the 8th award in the Award section.
              case 69:
                extracted_html[0] = "        <div class=\"article-awards\" id=\"article-content\">\n" + 
                                    "          <h4>IET 영어 독서 대회 수상</h4>\n" + 
                                    "            " + jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td table > tbody > tr:nth-child(5) > td table > tbody > tr > td").html() + "\n" + 
                                    "        </div>\n";  
                                    

                webpage_index = 69;
              break;
              
              // Runs if the loading page is the 9th award in the Award section.
              case 70:
                extracted_html[0] = "        <div class=\"article-awards\" id=\"article-content\">\n" + 
                                    "          <h4>SEOMUN 수상자</h4>\n" + 
                                    "            " + jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td table > tbody > tr:nth-child(5) > td table > tbody > tr > td").html() + "\n" + 
                                    "        </div>\n";  
                                    

                webpage_index = 70;
              break;

              // Runs if the loading page is the 9th award in the Award section.
              case 71:
                extracted_html[0] = "        <div class=\"article-awards\" id=\"article-content\">\n" + 
                                    "          <h4>NSDA 2016 November Invitational 수상자</h4>\n" + 
                                    "            " + jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td table > tbody > tr:nth-child(5) > td table > tbody > tr > td").html() + "\n" + 
                                    "        </div>\n";  
                                    

                webpage_index = 71;
              break;

              // Runs if the loading page is the 10th award in the Award section.
              case 72:
                extracted_html[0] = "        <div class=\"article-awards\" id=\"article-content\">\n" + 
                                    "          <h4>브라운 MUN 수상</h4>\n" + 
                                    "            " + jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td table > tbody > tr:nth-child(5) > td table > tbody > tr > td").html() + "\n" + 
                                    "        </div>\n";  
                                    

                webpage_index = 72;
              break;

              // Runs if the loading page is the 11th award in the Award section.
              case 73:
                extracted_html[0] = "        <div class=\"article-awards\" id=\"article-content\">\n" + 
                                    "          <h4>2016 SUMMER 수상을 축하합니다!!</h4>\n" + 
                                    "            " + jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td table > tbody > tr:nth-child(5) > td table > tbody > tr > td").html() + "\n" + 
                                    "        </div>\n";  
                                    

                webpage_index = 73;
              break;

              // Runs if the loading page is the 12th award in the Award section.
              case 74:
                extracted_html[0] = "        <div class=\"article-awards\" id=\"article-content\">\n" + 
                                    "          <h4>[2016 민사고 영어 토론 대회(KMLA)] 수상을 축하합니다.</h4>\n" + 
                                    "            " + jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td table > tbody > tr:nth-child(5) > td table > tbody > tr > td").html() + "\n" + 
                                    "        </div>\n";  
                                    

                webpage_index = 74;
              break;

              // Runs if the loading page is the 13th award in the Award section.
              case 75:
                extracted_html[0] = "        <div class=\"article-awards\" id=\"article-content\">\n" + 
                                    "          <h4>NSDA Korea 수상! (2016.4.9)</h4>\n" + 
                                    "            " + jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td table > tbody > tr:nth-child(5) > td table > tbody > tr > td").html() + "\n" + 
                                    "        </div>\n";  
                                    

                webpage_index = 75;
              break;

              // Runs if the loading page is the 14th award in the Award section.
              case 76:
                extracted_html[0] = "        <div class=\"article-awards\" id=\"article-content\">\n" + 
                                    "          <h4>제1회 한.중 리더스컵 토론대회 1등 축하합니다.</h4>\n" + 
                                    "            " + jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td table > tbody > tr:nth-child(5) > td table > tbody > tr > td").html() + "\n" + 
                                    "        </div>\n";  
                                    

                webpage_index = 76;
              break;

              // Runs if the loading page is the 15th award in the Award section.
              case 77:
                extracted_html[0] = "        <div class=\"article-awards\" id=\"article-content\">\n" + 
                                    "          <h4>United Nations(반기문 UN Speech Contest)수상을 축하합니다.</h4>\n" + 
                                    "            " + jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td table > tbody > tr:nth-child(5) > td table > tbody > tr > td").html() + "\n" + 
                                    "        </div>\n";  
                                    

                webpage_index = 77;
              break;

              // Runs if the loading page is the 16th award in the Award section.
              case 78:
                extracted_html[0] = "        <div class=\"article-awards\" id=\"article-content\">\n" + 
                                    "          <h4>브라운대학교 모의유엔 수상!! 축하합니다~</h4>\n" + 
                                    "            " + jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td table > tbody > tr:nth-child(5) > td table > tbody > tr > td").html() + "\n" + 
                                    "        </div>\n";  
                                    

                webpage_index = 78;
              break;	

              // Runs if the loading page is the 17th award in the Award section.
              case 79:
                extracted_html[0] = "        <div class=\"article-awards\" id=\"article-content\">\n" + 
                                    "          <h4>UN 청소년환경총회(MUN) 수상 축하합니다.</h4>\n" + 
                                    "            " + jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td table > tbody > tr:nth-child(5) > td table > tbody > tr > td").html() + "\n" + 
                                    "        </div>\n";  
                                    

                webpage_index = 79;
              break;

              // Runs if the loading page is the 18th award in the Award section.
              case 80:
                extracted_html[0] = "        <div class=\"article-awards\" id=\"article-content\">\n" + 
                                    "          <h4>2015 KAIAC Speech 1등 수상을축하합니다! (November 22-23)</h4>\n" + 
                                    "            " + jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td table > tbody > tr:nth-child(5) > td table > tbody > tr > td").html() + "\n" + 
                                    "        </div>\n";  
                                    

                webpage_index = 80;
              break;

              // Runs if the loading page is the 19th award in the Award section.
              case 81:
                extracted_html[0] = "        <div class=\"article-awards\" id=\"article-content\">\n" + 
                                    "          <h4>제 8회 한국퍼블릭스피킹챔피언쉽(KPSC) 1등 축하합니다~</h4>\n" + 
                                    "            " + jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td table > tbody > tr:nth-child(5) > td table > tbody > tr > td").html() + "\n" + 
                                    "        </div>\n";  
                                    

                webpage_index = 81;
              break;

              // Runs if the loading page is 'Apply (Faculty)'.
              case 82:
                extracted_html[0] = "        <div class=\"article-apply_faculty\" id=\"article-content\">\n" + 
                                    "          <h4>입학시험&특강 신청</h4>\n" + 
                                    "            " + jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td form").html() + "\n" + 
                                    "        </div>\n";  
                                    

                webpage_index = 82;
              break;

              // Runs if the loading page is 'Apply (Students)'.
              case 83:
                extracted_html[0] = "        <div class=\"article-apply_students\" id=\"article-content\">\n" + 
                                    "          <h4>토론 최상위반 접수</h4>\n" + 
                                    "            " + jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td").html() + "\n" + 
                                    "        </div>\n";  
                                    

                webpage_index = 83;
              break;

              // Runs if the loading page is 'Media'.
              case 84:
                extracted_html[0] = jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td > table > tbody > tr > td > table > tbody > tr > td > table > tbody > tr > td > table > tbody > tr > td").html();
                extracted_html[1] = jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td > table > tbody > tr > td > table > tbody > tr > td > table > tbody > tr:nth-child(2) a").html();
                
                extracted_html[2] = jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td > table > tbody > tr > td > table > tbody > tr > td:nth-child(2) > table > tbody > tr > td > table > tbody > tr > td").html();
                extracted_html[3] = jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td > table > tbody > tr > td > table > tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(2) a").html();
                
                extracted_html[4] = jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td > table > tbody > tr > td > table > tbody > tr > td:nth-child(3) > table > tbody > tr > td > table > tbody > tr > td").html();
                extracted_html[5] = jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td > table > tbody > tr > td > table > tbody > tr > td:nth-child(3) > table > tbody > tr:nth-child(2) a").html();
                
                extracted_html[6] = jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td > table > tbody > tr > td > table > tbody > tr > td:nth-child(4) > table > tbody > tr > td > table > tbody > tr > td").html();
                extracted_html[7] = jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td > table > tbody > tr > td > table > tbody > tr > td:nth-child(4) > table > tbody > tr:nth-child(2) a").html();
                
                
                extracted_html[8] = jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td > table > tbody > tr > td > table > tbody > tr > td").html();
                extracted_html[9] = jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(2) a").html();

                extracted_html[10]= jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td:nth-child(2) > table > tbody > tr > td > table > tbody > tr > td").html();
                extracted_html[11]= jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td:nth-child(2) > table > tbody > tr:nth-child(2) a").html();

                extracted_html[12]= jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td:nth-child(3) > table > tbody > tr > td > table > tbody > tr > td").html();
                extracted_html[13]= jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td:nth-child(3) > table > tbody > tr:nth-child(2) a").html();

                extracted_html[14]= jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td:nth-child(4) > table > tbody > tr > td > table > tbody > tr > td").html();
                extracted_html[15]= jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td:nth-child(4) > table > tbody > tr:nth-child(2) a").html();

                
                extracted_html[16]= jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td > table > tbody > tr > td > table > tbody > tr:nth-child(3) > td > table > tbody > tr > td > table > tbody > tr > td").html();
                extracted_html[17]= jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td > table > tbody > tr > td > table > tbody > tr:nth-child(3) > td > table > tbody > tr:nth-child(2) a").html();

                extracted_html[18]= jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td > table > tbody > tr > td > table > tbody > tr:nth-child(3) > td:nth-child(2) > table > tbody > tr > td > table > tbody > tr > td").html();
                extracted_html[19]= jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td > table > tbody > tr > td > table > tbody > tr:nth-child(3) > td:nth-child(2) > table > tbody > tr:nth-child(2) a").html();

                extracted_html[20]= jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td > table > tbody > tr > td > table > tbody > tr:nth-child(3) > td:nth-child(3) > table > tbody > tr > td > table > tbody > tr > td").html();
                extracted_html[21]= jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td > table > tbody > tr > td > table > tbody > tr:nth-child(3) > td:nth-child(3) > table > tbody > tr:nth-child(2) a").html();

                extracted_html[22]= jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td > table > tbody > tr > td > table > tbody > tr:nth-child(3) > td:nth-child(4) > table > tbody > tr > td > table > tbody > tr > td").html();
                extracted_html[23]= jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td > table > tbody > tr > td > table > tbody > tr:nth-child(3) > td:nth-child(4) > table > tbody > tr:nth-child(2) a").html();

                
                extracted_html[24]= jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td > table > tbody > tr > td > table > tbody > tr:nth-child(4) > td > table > tbody > tr > td > table > tbody > tr > td").html();
                extracted_html[25]= jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td > table > tbody > tr > td > table > tbody > tr:nth-child(4) > td > table > tbody > tr:nth-child(2) a").html();

                extracted_html[26]= jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td > table > tbody > tr > td > table > tbody > tr:nth-child(4) > td:nth-child(2) > table > tbody > tr > td > table > tbody > tr > td").html();
                extracted_html[27]= jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td > table > tbody > tr > td > table > tbody > tr:nth-child(3) > td:nth-child(2) > table > tbody > tr:nth-child(2) a").html();

                extracted_html[28]= jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td > table > tbody > tr > td > table > tbody > tr:nth-child(4) > td:nth-child(3) > table > tbody > tr > td > table > tbody > tr > td").html();
                extracted_html[29]= jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td > table > tbody > tr > td > table > tbody > tr:nth-child(4) > td:nth-child(3) > table > tbody > tr:nth-child(2) a").html();

                extracted_html[30]= jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td > table > tbody > tr > td > table > tbody > tr:nth-child(4) > td:nth-child(4) > table > tbody > tr > td > table > tbody > tr > td").html();
                extracted_html[31]= jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td > table > tbody > tr > td > table > tbody > tr:nth-child(4) > td:nth-child(4) > table > tbody > tr:nth-child(2) a").html();
         
                webpage_index = 84;
              break;

              // Runs if the loading page is the 1st item of Media.
              case 85:
                extracted_html[0] = "        <div class=\"article-media\" id=\"article-content\">\n" + 
                                    "          <h4>대치 리더스</h4>\n" + 
                                    "          <div class=\"media-item-holder\">\n" + 
                                    "            " + jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td > table > tbody > tr:nth-child(4) > td > table > tbody > tr > td").html() + "\n" + 
                                    "          </div>\n" + 
                                    "        </div>\n";  
                                    

                webpage_index = 85;
              break;

              // Runs if the loading page is the 2nd item of Media.
              case 86:
                extracted_html[0] = "        <div class=\"article-media\" id=\"article-content\">\n" + 
                                    "          <h4>젬마샘 디베이팅 모습</h4>\n" + 
                                    "          <div class=\"media-item-holder\">\n" + 
                                    "            " + jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td > table > tbody > tr:nth-child(4) > td > table > tbody > tr > td").html() + "\n" + 
                                    "          </div>\n" + 
                                    "        </div>\n";  
                                    

                webpage_index = 86;
              break;

              // Runs if the loading page is the 3rd item of Media.
              case 87:
                extracted_html[0] = "        <div class=\"article-media\" id=\"article-content\">\n" + 
                                    "          <h4>유럽피안 파이널 모습~</h4>\n" + 
                                    "          <div class=\"media-item-holder\">\n" + 
                                    "            " + jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td > table > tbody > tr:nth-child(4) > td > table > tbody > tr > td").html() + "\n" + 
                                    "          </div>\n" + 
                                    "        </div>\n";  
                                    

                webpage_index = 87;
              break;

              // Runs if the loading page is the 4th item of Media.
              case 88:
                extracted_html[0] = "        <div class=\"article-media\" id=\"article-content\">\n" + 
                                    "          <h4>ESDC 쥬니어~</h4>\n" + 
                                    "          <div class=\"media-item-holder\">\n" + 
                                    "            " + jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td > table > tbody > tr:nth-child(4) > td > table > tbody > tr > td").html() + "\n" + 
                                    "          </div>\n" + 
                                    "        </div>\n";  
                                    

                webpage_index = 88;
              break;

              // Runs if the loading page is the 5th item of Media.
              case 89:
                extracted_html[0] = "        <div class=\"article-media\" id=\"article-content\">\n" + 
                                    "          <h4>토너먼트 현장에서~</h4>\n" + 
                                    "          <div class=\"media-item-holder\">\n" + 
                                    "            " + jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td > table > tbody > tr:nth-child(4) > td > table > tbody > tr > td").html() + "\n" + 
                                    "          </div>\n" + 
                                    "        </div>\n";  
                                    

                webpage_index = 89;
              break;

              // Runs if the loading page is the 6th item of Media.
              case 90:
                extracted_html[0] = "        <div class=\"article-media\" id=\"article-content\">\n" + 
                                    "          <h4>Camp class</h4>\n" + 
                                    "          <div class=\"media-item-holder\">\n" + 
                                    "            " + jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td > table > tbody > tr:nth-child(4) > td > table > tbody > tr > td").html() + "\n" + 
                                    "          </div>\n" + 
                                    "        </div>\n";  
                                    

                webpage_index = 90;
              break;

              // Runs if the loading page is the 7th item of Media.
              case 91:
                extracted_html[0] = "        <div class=\"article-media\" id=\"article-content\">\n" + 
                                    "          <h4>모의유엔 수업 (MUN)</h4>\n" + 
                                    "          <div class=\"media-item-holder\">\n" + 
                                    "            " + jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td > table > tbody > tr:nth-child(4) > td > table > tbody > tr > td").html() + "\n" + 
                                    "          </div>\n" + 
                                    "        </div>\n";  
                                    

                webpage_index = 91;
              break;

              // Runs if the loading page is the 8th item of Media.
              case 92:
                extracted_html[0] = "        <div class=\"article-media\" id=\"article-content\">\n" + 
                                    "          <h4>회식~</h4>\n" + 
                                    "          <div class=\"media-item-holder\">\n" + 
                                    "            " + jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td > table > tbody > tr:nth-child(4) > td > table > tbody > tr > td").html() + "\n" + 
                                    "          </div>\n" + 
                                    "        </div>\n";  
                                    

                webpage_index = 92;
              break;

              // Runs if the loading page is the 9th item of Media.
              case 93:
                extracted_html[0] = "        <div class=\"article-media\" id=\"article-content\">\n" + 
                                    "          <h4>Dekker 영어샘~</h4>\n" + 
                                    "          <div class=\"media-item-holder\">\n" + 
                                    "            " + jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td > table > tbody > tr:nth-child(4) > td > table > tbody > tr > td").html() + "\n" + 
                                    "          </div>\n" + 
                                    "        </div>\n";  
                                    

                webpage_index = 93;
              break;

              // Runs if the loading page is the 10th item of Media.
              case 94:
                extracted_html[0] = "        <div class=\"article-media\" id=\"article-content\">\n" + 
                                    "          <h4>Joshua샘~</h4>\n" + 
                                    "          <div class=\"media-item-holder\">\n" + 
                                    "            " + jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td > table > tbody > tr:nth-child(4) > td > table > tbody > tr > td").html() + "\n" + 
                                    "          </div>\n" + 
                                    "        </div>\n";  
                                    

                webpage_index = 94;
              break;  

              // Runs if the loading page is the 11th item of Media.
              case 95:
                extracted_html[0] = "        <div class=\"article-media\" id=\"article-content\">\n" + 
                                    "          <h4>Gemma 샘~</h4>\n" + 
                                    "          <div class=\"media-item-holder\">\n" + 
                                    "            " + jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td > table > tbody > tr:nth-child(4) > td > table > tbody > tr > td").html() + "\n" + 
                                    "          </div>\n" + 
                                    "        </div>\n";  
                                    

                webpage_index = 95;
              break;  

              // Runs if the loading page is the 12th item of Media.
              case 96:
                extracted_html[0] = "        <div class=\"article-media\" id=\"article-content\">\n" + 
                                    "          <h4>Roger Hatridge 샘~</h4>\n" + 
                                    "          <div class=\"media-item-holder\">\n" + 
                                    "            " + jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td > table > tbody > tr:nth-child(4) > td > table > tbody > tr > td").html() + "\n" + 
                                    "          </div>\n" + 
                                    "        </div>\n";  
                                    

                webpage_index = 96;
              break;  

              // Runs if the loading page is the 13th item of Media.
              case 97:
                extracted_html[0] = "        <div class=\"article-media\" id=\"article-content\">\n" + 
                                    "          <h4>Youth Forum 2012</h4>\n" + 
                                    "          <div class=\"media-item-holder\">\n" + 
                                    "            " + jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td > table > tbody > tr:nth-child(4) > td > table > tbody > tr > td").html() + "\n" + 
                                    "          </div>\n" + 
                                    "        </div>\n";  
                                    

                webpage_index = 97;
              break;  

              // Runs if the loading page is the 14th item of Media.
              case 98:
                extracted_html[0] = "        <div class=\"article-media\" id=\"article-content\">\n" + 
                                    "          <h4>Joshua샘~</h4>\n" + 
                                    "          <div class=\"media-item-holder\">\n" + 
                                    "            " + jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td > table > tbody > tr:nth-child(4) > td > table > tbody > tr > td").html() + "\n" + 
                                    "          </div>\n" + 
                                    "        </div>\n";  
                                    

                webpage_index = 98;
              break;  

              // Runs if the loading page is the 15th item of Media.
              case 99:
                extracted_html[0] = "        <div class=\"article-media\" id=\"article-content\">\n" + 
                                    "          <h4>대치 리더스</h4>\n" + 
                                    "          <div class=\"media-item-holder\">\n" + 
                                    "            " + jq("table > tbody > tr > td > table:nth-child(2) > tbody > tr:nth-child(2) > td > table > tbody > tr > td > table > tbody > tr:nth-child(4) > td > table > tbody > tr > td p").html() + "\n" + 
                                    "          </div>\n" + 
                                    "        </div>\n";  
                                    

                webpage_index = 99;
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
  var section_html = new String();

  title_html = "Leaders Academy - ";

  if (webpage_index <= 15) {
    section_html = "강사소개 (FACULTY) - ";
  } else if ((webpage_index > 19) && (webpage_index <= 27)) {
    section_html = "정규토론 (DEBATE) - ";
  } else if ((webpage_index > 27) && (webpage_index <= 38)) {
    section_html = "정규영어 (ENGLISH) - ";
  } else if ((webpage_index > 38) && (webpage_index <= 80)) {
    section_html = "공지 사항 - ";
  } else if ((webpage_index > 84) && (webpage_index <= 100)) {
    section_html = "대치 리더스 - ";
  }
  
  switch (webpage_index)  {
    
    // Runs if the loading page is the Faculty page.
    case 0: 
      title_html = title_html + "강사소개 (FACULTY)";
    break;

    // Runs if the loading page is the Faculty page for Park Sooyoung.
    case 1: 
      title_html = title_html + section_html + "Park Sooyoung";
    break;

    // Runs if the loading page is the Faculty page for Kim Hyerin.
    case 2: 
      title_html = title_html + section_html + " Kim Hyerin";
    break;

    // Runs if the loading page is the Faculty page for Lee Hanyo.
    case 3: 
      title_html = title_html + section_html + "Lee Hanyo";
    break;
    
    // Runs if the loading page is the Faculty page for Park Sungryul.
    case 4: 
      title_html = title_html + section_html + "Park Sungryul";
    break;

    // Runs if the loading page is the Faculty page for Abhisheka Dubey.
    case 5: 
      title_html = title_html + section_html + "Abhisheka Dubey";
    break;

    // Runs if the loading page is the Faculty page for Abhisheka Dubey.
    case 6: 
      title_html = title_html + section_html + "Kevin Han";
    break;

    // Runs if the loading page is the Faculty page for Reece Randall.
    case 7: 
      title_html = title_html + section_html + "Reece Randall";
    break;

    // Runs if the loading page is the Faculty page for Lee Eunhye.
    case 8: 
      title_html = title_html + section_html + "Lee Eunhye";
    break;

    // Runs if the loading page is the Faculty page for You Ge Heon.
    case 9: 
      title_html = title_html + section_html + "You Ge Heon";
    break;

    // Runs if the loading page is the Faculty page for Kim Gyumin.
    case 10: 
      title_html = title_html + section_html + "Kim Gyumin";
    break;

    // Runs if the loading page is the Faculty page for Brian Moon.
    case 11: 
      title_html = title_html + section_html + "Brian Moon";
    break;

    // Runs if the loading page is the Faculty page for Chan Keun Kim.
    case 12: 
      title_html = title_html + section_html + "Chan Keun Kim";
    break;

    // Runs if the loading page is the Faculty page for Joonpyo Sohn.
    case 13: 
      title_html = title_html + section_html + "Joonpyo Sohn";
    break;

    // Runs if the loading page is the Faculty page for Matthew Owen.
    case 14: 
      title_html = title_html + section_html + "Matthew Owen";
    break;

    // Runs if the loading page is the Faculty page for Roger Hatridge.
    case 15: 
      title_html = title_html + section_html + "Roger Hatridge";
    break;

    // Runs if the loading page is the History page.
    case 16: 
      title_html = title_html + "회사 소개 (ABOUT US)";
    break;

    // Runs if the loading page is the Location page.
    case 19:
      title_html = title_html + "치안내 (LOCATION)";
    break;

    // Runs if the loading page is the Debate page.
    case 20:
      title_html = title_html + "정규토론 (DEBATE)";
    break;

    // Runs if the loading page is the Debate page for the 2017 schedule.
    case 21: 
      title_html = title_html + section_html + "Updated regular meeting class schedule for 2017";
    break;

    // Runs if the loading page is the Debate page for the 2016 schedule.
    case 22: 
      title_html = title_html + section_html + "2016 regular discussion class schedule update";
    break;

    // Runs if the loading page is the Debate page for the weekly English discussion.
    case 23: 
      title_html = title_html + section_html + "Weekly English Discussion Class Schedule";
    break;

    // Runs if the loading page is the Debate page for the 2018 Lesson Schedule.
    case 24: 
      title_html = title_html + section_html + "2018 Lesson Schedule";
    break;

    // Runs if the loading page is the Debate page for recruitment.
    case 25: 
      title_html = title_html + section_html + "We raise recruitment class for elementary school lower grades";
    break;
   
    // Runs if the loading page is the Debate page for the regular discussions of 2015.
    case 26: 
      title_html = title_html + section_html + "Regular discussions Q2 of 2015";
    break;

    // Runs if the loading page is the Debate page for the debate information for 2014.
    case 27: 
      title_html = title_html + section_html + "Regular debate Q4 2014";
    break;

    // Runs if the loading page is the Englksh page.
    case 28: 
      title_html = title_html + "정규영어 (ENGLISH)";
    break;

    // Runs if the loading page is the English page for the booklist of 2016.
    case 29: 
      title_html = title_html + section_html + "2016년 원서강독 Booklist";
    break;

    // Runs if the loading page is the English page for the class schedule for 2017 admissions.
    case 30: 
      title_html = title_html + section_html + "2017년 원서강독 수업 일정 업데이트";
    break;

    // Runs if the loading page is the English page for the application form of 2016.
    case 31: 
      title_html = title_html + section_html + "2016년 1,2분기 원서안내";
    break;

    // Runs if the loading page is the English page for the class schedule for 2016.
    case 32: 
      title_html = title_html + section_html + "2016년 원서강독수업 일정 업데이트";
    break;

    // Runs if the loading page is the English page for the reading schedule for 2018 applications.
    case 33: 
      title_html = title_html + section_html + "2018 원서강독 수업일정";
    break;

    // Runs if the loading page is the English page for the updated class schedule of 2016.
    case 34: 
      title_html = title_html + section_html + "2016 원서강독 수업 일정 업데이트";
    break;

    // Runs if the loading page is the English page for the talk list of 2016.
    case 35: 
      title_html = title_html + section_html + "2016 토론수업 일정 업데이트";
    break;

    // Runs if the loading page is the English page for the class schedule for English classes.
    case 36: 
      title_html = title_html + section_html + "주중 영어원서강독반 일정안내";
    break;

    // Runs if the loading page is the English page for advanced English courses of 2015.
    case 37: 
      title_html = title_html + section_html + "고급영어 2015년 2분기 수업일정";
    break;

    // Runs if the loading page is the English page for the regular English schedule of 2014.
    case 38: 
      title_html = title_html + section_html + "정규영어 2014년 4분기 일정";
    break;

    // Runs if the loading page is the Login page
    case 39: 
      title_html = title_html + "로그인";
    break;

    // Runs if the loading page is the Announcements page
    case 40: 
      title_html = title_html + "공지 사항";
    break;

    // Runs if the loading page is the 1st announcement.
    case 41: 
      title_html = title_html + section_html + "학원친구 앱 사용법";
    break;

    // Runs if the loading page is the 2nd announcement.
    case 42: 
      title_html = title_html + section_html + "2017-18 겨울방학 특강 안내";
    break;

    // Runs if the loading page is the 3rd announcement.
    case 43: 
      title_html = title_html + section_html + "2017년 리더스아카데미 4분기 설명회";
    break;

    // Runs if the loading page is the 4th announcement.
    case 44: 
      title_html = title_html + section_html + "2017년 가을학기 정규수업 일정표";
    break;
    
    // Runs if the loading page is the 5th announcement.
    case 45: 
      title_html = title_html + section_html + "2017년 카이로스(최상위반) 오디션";
    break;

    // Runs if the loading page is the 6th announcement.
    case 46: 
      title_html = title_html + section_html + "2017년 가을학기 설명회";
    break;
    
    // Runs if the loading page is the 7th announcement.
    case 47: 
      title_html = title_html + section_html + "2017년 상반기 수상실적";
    break;

    // Runs if the loading page is the 8th announcement.
    case 48: 
      title_html = title_html + section_html + "2017년 리더스 여름방학특강 설명회";
    break;

    // Runs if the loading page is the 9th announcement.
    case 49: 
      title_html = title_html + section_html + "2017년 리더스 봄학기 설명회";
    break;

    // Runs if the loading page is the 10th announcement.
    case 50: 
      title_html = title_html + section_html + "분실물 찾아가세요~(보관기간:2017.9.21~12.21)";
    break;

    // Runs if the loading page is the 11th announcement.
    case 51: 
      title_html = title_html + section_html + "2017 여름방학 특강 일정표";
    break;

    // Runs if the loading page is the 12th announcement.
    case 52: 
      title_html = title_html + section_html + "2017년 정규수업 일정 업데이트";
    break;

    // Runs if the loading page is the 13th announcement.
    case 53: 
      title_html = title_html + section_html + "2017년 여름방학 특강일정표";
    break;

    // Runs if the loading page is the 14th announcement.
    case 54: 
      title_html = title_html + section_html + "청심모의유엔 대회 (CSIAMUN)";
    break;

    // Runs if the loading page is the 15th announcement.
    case 55: 
      title_html = title_html + section_html + "매일경제토론대회 초등,고등부 부문 (17.2.11-12일개최)";
    break;

    // Runs if the loading page is the 16th announcement.
    case 56: 
      title_html = title_html + section_html + "용인괴고 모의법정 1-3위석권!! (17.2.11-12일개최)";
    break;

    // Runs if the loading page is the 17th announcement.
    case 57: 
      title_html = title_html + section_html + "2017 NSDA겨울챔피언쉽, YUMN, GC수상결과";
    break;

    // Runs if the loading page is the 18th announcement.
    case 58: 
      title_html = title_html + section_html + "2017년 국내 모의법정 대회준비";
    break;

    // Runs if the loading page is the 19th announcement.
    case 59: 
      title_html = title_html + section_html + "< 12월, 1월 휴원 일정 공지 >";
    break;

    // Runs if the loading page is the 19th announcement.
    case 60: 
      title_html = title_html + section_html + "*토론대회 파트너를 찾아라! -토론명문리더스*";
    break;

    // Runs if the loading page is the Awards page
    case 61: 
      title_html = title_html + "수상실적";
    break;

    // Runs if the loading page is the 1st award.
    case 62: 
      title_html = title_html + section_html + "청심모의유엔 대회 (CSIAMUN)";
    break;

    // Runs if the loading page is the 2nd award.
    case 63: 
      title_html = title_html + section_html + "매일경제토론대회 초등 고등부문 (17.2-11-12일 개최)";
    break;

    // Runs if the loading page is the 3rd award.
    case 64: 
      title_html = title_html + section_html + "용인외고 모의법정 1-3위 석권!! (17.2.11-12일개최)";
    break;

    // Runs if the loading page is the 4th award.
    case 65: 
      title_html = title_html + section_html + "November 2015 Invitational 대회 우승!";
    break;

    // Runs if the loading page is the 5th award.
    case 66: 
      title_html = title_html + section_html + "2016년 상반기 수상을 축하합니다!!";
    break;

    // Runs if the loading page is the 6th award.
    case 67: 
      title_html = title_html + section_html + "2016 SUMMER 리더스를 빛낸 학생들 ~";
    break;

    // Runs if the loading page is the 7th award.
    case 68: 
      title_html = title_html + section_html + "2017 NSDA겨울챔피언쉽, YUMN, GC수상결과";
    break;

    // Runs if the loading page is the 8th award.
    case 69: 
      title_html = title_html + section_html + "IET 영어 독서 대회 수상";
    break;

    // Runs if the loading page is the 9th award.
    case 70: 
      title_html = title_html + section_html + "SEOMUN 수상자";
    break;

    // Runs if the loading page is the 10th award.
    case 71: 
      title_html = title_html + section_html + "NSDA 2016 November Invitational 수상자";
    break;

    // Runs if the loading page is the 11th award.
    case 72: 
      title_html = title_html + section_html + "브라운 MUN 수상";
    break;

    // Runs if the loading page is the 12th award.
    case 73: 
      title_html = title_html + section_html + "2016 SUMMER  수상을 축하합니다!!";
    break;

    // Runs if the loading page is the 13th award.
    case 74: 
      title_html = title_html + section_html + "[2016 민사고 영어 토론 대회(KMLA)] 수상을 축하합니다.";
    break;

    // Runs if the loading page is the 14th award.
    case 75: 
      title_html = title_html + section_html + "NSDA Korea 수상! (2016.4.9)";
    break;

    // Runs if the loading page is the 15th award.
    case 76: 
      title_html = title_html + section_html + "제1회 한.중 리더스컵 토론대회 1등 축하합니다.";
    break;

    // Runs if the loading page is the 16th award.
    case 77: 
      title_html = title_html + section_html + "United Nations(반기문 UN Speech Contest)수상을 축하합니다.";
    break;

    // Runs if the loading page is the 17th award.
    case 78: 
      title_html = title_html + section_html + "브라운대학교 모의유엔 수상!! 축하합니다~U";
    break;

    // Runs if the loading page is the 18th award.
    case 79: 
      title_html = title_html + section_html + "N 청소년환경총회(MUN) 수상 축하합니다.";
    break;

    // Runs if the loading page is the 19th award.
    case 80: 
      title_html = title_html + section_html + "2015 KAIAC Speech 1등 수상을축하합니다! (November 22-23)";
    break;

    // Runs if the loading page is the 20th award.
    case 81: 
      title_html = title_html + section_html + "제 8회 한국퍼블릭스피킹챔피언쉽(KPSC) 1등 축하합니다~";
    break;

    // Runs if the loading page is Apply (Faculty).
    case 82: 
      title_html = title_html + "입학시험&특강 신청";
    break;

    // Runs if the loading page is Apply (Students).
    case 83: 
      title_html = title_html + "토론 최상위반 접수";
    break;

    // Runs if the loading page is Media.
    case 84: 
      title_html = title_html + "포토갤러리";
    break;

    // Runs if the loading page is Item #1 of Media.
    case 85: 
      title_html = title_html + section_html + "대치 리더스";
    break;

    // Runs if the loading page is Item #2 of Media.
    case 86: 
      title_html = title_html + section_html + "젬마샘 디베이팅 모습";
    break;

    // Runs if the loading page is Item #3 of Media.
    case 87: 
      title_html = title_html + section_html + "유럽피안 파이널 모습~";
    break;

    // Runs if the loading page is Item #4 of Media.
    case 88: 
      title_html = title_html + section_html + "ESDC 쥬니어~";
    break;
    
    // Runs if the loading page is Item #5 of Media.
    case 89: 
      title_html = title_html + section_html + "토너먼트 현장에서~";
    break;
    
    // Runs if the loading page is Item #6 of Media.
    case 90: 
      title_html = title_html + section_html + "Camp class";
    break;

    // Runs if the loading page is Item #7 of Media.
    case 91: 
      title_html = title_html + section_html + "모의유엔 수업 (MUN)";
    break;
    
    // Runs if the loading page is Item #8 of Media.
    case 92: 
      title_html = title_html + section_html + "회식~";
    break;

    // Runs if the loading page is Item #9 of Media.
    case 93: 
      title_html = title_html + section_html + "Dekker 영어샘~";
    break;

    // Runs if the loading page is Item #10 of Media.
    case 94: 
      title_html = title_html + section_html + "Joshua샘~";
    break;

    // Runs if the loading page is Item #11 of Media.
    case 95: 
      title_html = title_html + section_html + "Gemma 샘~";
    break;

    // Runs if the loading page is Item #12 of Media.
    case 96: 
      title_html = title_html + section_html + "Roger Hatridge 샘~";
    break;

    // Runs if the loading page is Item #13 of Media.
    case 97: 
      title_html = title_html + section_html + "Youth Forum 2012";
    break;

    // Runs if the loading page is Item #14 of Media.
    case 98: 
      title_html = title_html + section_html + "Joshua샘~";
    break;

    // Runs if the loading page is Item #15 of Media.
    case 99: 
      title_html = title_html + section_html + "대치 리더스";
    break;
  } // END of SWITCH statement	대치 리더스

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
  
} // END of FUNCTION 'renderHeader'\

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
    "      <a href=\"/la/\" title=\"Leaders Academy - Home\">\n" + 
    "        <img src=\"/la/assets/img/logo/logo.png\" width=\"230\" height=\"170\" alt=\"Leaders Academy\" />\n" + 
    "      </a>\n" + 
    "      <section id=\"header-right\">\n" + 
    "        <div id=\"header-search\">\n" + 
    "        <form>\n" + 
    "          <input type=\"search\" width=\"25\" maxwidth=\"75\" value=\"Search\" id=\"mobile-search\">\n" + 
    "        </form>\n" + 
    "        </div>\n" + 
    "        <div id=\"header-links\">\n" + 
    "          <div id=\"header-links-level_1\">\n" + 
    "            <a href=\"/la/assets/html/login/login.htm\" title=\"Login\" id=\"link-login\">Login</a>\n" + 
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
    "            <a href=\"/la/assets/html/english/index_english.htm\" title=\"English\"></a>\n" + 
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
    "            <a href=\"/la/assets/html/awards/index_awards.htm\" title=\"Awards\"></a>\n" + 
    "            <span>Awards</span>\n" + 
    "          </div>\n" + 
    "          <div id=\"link-debate\">\n" + 
    "            <a href=\"/la/assets/html/debate/index_debate.htm\" title=\"Debate\"></a>\n" + 
    "            <span>Debate</span>\n" + 
    "          </div>\n" + 
    "          <div id=\"link-events\">\n" + 
    "            <a href=\"#events\" title=\"Events\"></a>\n" + 
    "            <span>Events</span>\n" + 
    "          </div>\n" + 
    "          <div id=\"link-announcements\">\n" + 
    "            <a href=\"/la/assets/html/announcements/index_announcements.htm\" title=\"link-announcements\"></a>\n" + 
    "            <span>Announcements</span>\n" + 
    "          </div>\n" + 
    "        </section>\n" + 
    "        <section id=\"nav-row_3\">\n" + 
    "          <div id=\"link-apply_students\">\n" + 
    "            <a href=\"/la/assets/html/apply_students/apply_students.htm\" title=\"Apply (Students)\"></a>\n" + 
    "            <span>Apply (Students)</span>\n" + 
    "          </div>\n" + 
    "          <div id=\"link-faculty\">\n" + 
    "            <a href=\"/la/assets/html/faculty/index_faculty.htm\" title=\"Faculty\"></a>\n" + 
    "            <span>Faculty</span>\n" + 
    "          </div>\n" + 
    "          <div id=\"link-apply_faculty\">\n" + 
    "            <a href=\"/la/assets/html/apply_faculty/apply_faculty.htm\" title=\"Apply (Faculty)\"></a>\n" + 
    "            <span>Apply (Faculty)</span>\n" + 
    "          </div>\n" + 
    "          <div id=\"link-business\">\n" + 
    "            <a href=\"#business\" title=\"Business\"></a>\n" + 
    "            <span>Business</span>\n" + 
    "          </div>\n" + 
    "        </section>\n" + 
    "        <section id=\"nav-row_4\">\n" + 
    "          <div id=\"link-about_us\">\n" + 
    "            <a href=\"/la/assets/html/guide/about_us.htm\" title=\"About Us\"></a>\n" + 
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
    "            <a href=\"/la/assets/html/media/media.htm\" title=\"Media\"></a>\n" + 
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

    if (webpage_index <= 15)  {
      jq(menu_selector).html(
/*         "        <a href=\"/la/assets/html/guide/history.htm\" title=\"인사말 (HISTORY)\" id=\"link-section_1-history\">인사말 (HISTORY)</a>\n" + 
        "        <a href=\"/la/assets/html/guide/faculty.htm\" title=\"강사소개 (FACULTY)\" id=\"link-section_1-faculty\">강사소개 (FACULTY)</a>\n" + 
        "        <a href=\"/la/assets/html/guide/rules.htm\" title=\"학원규정 (RULES)\" id=\"link-section_1-history\">학원규정 (RULES)</a>\n" + 
        "        <a href=\"/la/assets/html/guide/system.htm\" title=\"학원제도(SYSTEM)\" id=\"link-section_1-system\">학원제도(SYSTEM)</a>\n" + 
        "        <a href=\"/la/assets/html/guide/recruiting.htm\" title=\"강사채용 (RECRUTING)\" id=\"link-section_1-recruiting\">강사채용 (RECRUTING)</a>\n" + 
        "        <a href=\"/la/assets/html/guide/location.htm\" title=\"치안내 (LOCATION)\" id=\"link-section_1-location\">치안내 (LOCATION)</a>"
 */   
        "      <span>There is no menu for this section.</span>\n"
      );
    } else if ((webpage_index > 19) && webpage_index <= 27) {
      jq(menu_selector).html(
        "        <a href=\"/la/assets/html/debate/debate_schedule_2017.htm\" title=\"2017년 정규토론 수업 일정 업데이트\" id=\"link-debate-schedule_2017\">Schedule (2017)</a>\n" + 
        "        <a href=\"/la/assets/html/debate/debate_schedule_2016.htm\" title=\"2016 정규토론수업 일정 업데이트\" id=\"link-debate-schedule_2016\">Schedule (2016)</a>\n" + 
        "        <a href=\"/la/assets/html/debate/debate_discussion_english.htm\" title=\"주중 영어토론반 일정안내\" id=\"link-debate-history\">Discussion (ENG)</a>\n" + 
        "        <a href=\"/la/assets/html/debate/debate_schedule_2018.htm\" title=\"2018 토론수업일정\" id=\"link-section_1-debate\">Schedule (2018)</a>\n" + 
        "        <a href=\"/la/assets/html/debate/recruitment.htm\" title=\"초등 저학년 토론반을 모집합니다.\" id=\"link-debate-recruitment\">Recruitment</a>\n" + 
        "        <a href=\"/la/assets/html/debate/debate_discussion_2015.htm\" title=\"정규토론 2015년 2분기 수업일정\" id=\"link-debate-discussion_2015\">Discussion (2015)</a>\n" + 
        "        <a href=\"/la/assets/html/debate/debate_2014.htm\" title=\"정규토론 2014년 4분기 일정\" id=\"link-debate-debate_2014\">Debate (2014)</a>"
      );
    } else if ((webpage_index > 27) && webpage_index <= 38) {
      jq(menu_selector).html(
        "      <a href=\"/la/assets/html/english/booklist_2016.htm\" title=\"2016년 원서강독 Booklist\" id=\"link-english-booklist_2016\">Booklist (2016)</a>\n" + 
        "      <a href=\"/la/assets/html/english/admissions_2017.htm\" title=\"2017년 원서강독 수업 일정 업데이트\" id=\"link-english-admissions_2017\">Admissions (2017)</a>\n" + 
        "      <a href=\"/la/assets/html/english/application_2016.htm\" title=\"2016년 1,2분기 원서안내\" id=\"link-english-application_2016\">Application I (2016)</a>\n" +
        "      <a href=\"/la/assets/html/english/application_2018.htm\" title=\"2018 원서강독 수업일정\" id=\"link-english-application_2018\">Application (2018)</a>\n" + 
        "      <a href=\"/la/assets/html/english/application_2016_update.htm\" title=\"2016 원서강독 수업 일정 업데이트\" id=\"link-english-application_2016_updated\">Application II (2016)</a>\n" + 
        "      <a href=\"/la/assets/html/english/talk_2016.htm\" title=\"2016 토론수업 일정 업데이트\" id=\"link-english-talk_2016\">Talk (2016)</a>\n" + 
        "      <a href=\"/la/assets/html/english/english_advanced.htm\" title=\"고급영어 2015년 2분기 수업일정\" id=\"link-english-english_advanced\">Adv. English</a>\n"
      );
    } else if ((webpage_index === 39) || 
               (webpage_index === 82 || 
               (webpage_index === 83))) {
      jq(menu_selector).html(
        "      <span>There is no menu for this section.</span>\n"
      );
    } else if ((webpage_index > 39) && webpage_index <= 60) {
      jq(menu_selector).html(
        "      <a href=\"/la/assets/html/announcements/index_announcements.htm\" title=\"Page #1\" id=\"link-announcements-page_1\">Page #1</a>\n"
      );
    } else if ((webpage_index > 60) && webpage_index <= 81) {
      jq(menu_selector).html(
        "      <a href=\"/la/assets/html/awards/index_awards.htm\" title=\"Page #1\" id=\"link-awards-page_1\">Page #1</a>\n" 
      );
    } else if ((webpage_index > 84) && webpage_index <= 100) {
      jq(menu_selector).html(
        "      <a href=\"/la/assets/html/media/media.htm\" title=\"Page #1\" id=\"link-media-page_1\">Page #1</a>\n" 
      );
    } 
  } // END of FUNCTION 'renderSectionMenu'

  
  

function renderFooter() {
  jq("footer").html(
    "      <section id=\"footer-border\">\n" + 
    "        <div></div>\n" + 
    "      </section>\n" + 
    "      <section id=\"footer-row_1\">\n" + 
    "        <a href=\"https://blog.naver.com/leadersacademtybd\" title=\"Naver\" target=\"_blank\" id=\"link-naver\"></a>\n" + 
    "        <a href=\"https://www.facebook.com/JoinLeadersAcademy/\" title=\"Facebook\" target=\"_blank\" id=\"link-facebook\"></a>\n" + 
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

  switch (webpage_index)  {
   // Runs if the loading page is the Faculty page.
    case 0:
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
    case 19: 
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

  if ((webpage_index > 0) && (webpage_index <= 15))  {
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
      "          <a href=\"/la/assets/html/faculty/index_faculty.htm\" title=\"목록\">목록</a>\n" + 
      "        </div>\n"
    );
  } // END of if STATEMENT

  if ((webpage_index > 19) && (webpage_index <= 27))  {
    
    if (webpage_index === 22) {
      updated_html = extracted_html[0] + extracted_html[1] + extracted_html[2];
    } else if (webpage_index === 26) {
      updated_html = extracted_html[0] + extracted_html[1];
    } else {
      updated_html = extracted_html[0];
    }
    
    jq("article").html(
      "        <div class=\"article-header-debate\" id=\"article-header\">\n" + 
      "          <img src=\"http://daechi.leadersacademy.com/skin/skin020/program/images/cont02-01Top.png\" alt=\"정규토론(DEBATE)\" />\n" + 
      "          <img src=\"http://daechi.leadersacademy.com/skin/skin020/program/images/cont02-01.png\" />\n" + 
      "        </div>\n" + 
      updated_html 
    );

  } // END of if STATEMENT

  if ((webpage_index > 27) && (webpage_index <= 38))  {
    
    if (webpage_index === 35) {
      updated_html = extracted_html[0] + extracted_html[1];
    } else {
      updated_html = extracted_html[0];
    }
    
    jq("article").html(
      "        <div class=\"article-header-english\" id=\"article-header\">\n" + 
      "          <img src=\"http://daechi.leadersacademy.com/skin/skin020/program/images/cont02-02Top.png\" />\n" + 
      "          <img src=\"http://daechi.leadersacademy.com/skin/skin020/program/images/cont02-02.png\" />\n" + 
      "        </div>\n" + 
      updated_html 
    );

  } // END of if STATEMENT

  if ((webpage_index === 16) || 
      (webpage_index === 39) || 
      ((webpage_index > 60) && (webpage_index <= 81)) || 
      (webpage_index === 83) || 
      ((webpage_index > 84) && (webpage_index <= 100))) { 
    jq("article").html(extracted_html[0]);
  } // END of if STATEMENT

  if ((webpage_index > 39) && (webpage_index <= 60))  {
    
    updated_html = extracted_html[0];
    
    jq("article").html(
      "        <div class=\"article-header-announcements\" id=\"article-header\">\n" + 
      "          <h4>공지 사항</h4>\n" + 
      "        </div>\n" + 
      updated_html 
    );
  } // END of if STATEMENT

  if (webpage_index === 82 || webpage_index === 83) { 
    jq("article").html(extracted_html[0]);

    jq("#button").empty();

    if (webpage_index === 82) {
      jq("#button").html(
        "          <input type=\"submit\" id=\"form-apply_faculty-submit\" value=\"대다\">\n" + 
        "          <input type=\"reset\" id=\"form-apply_faculty-reset\" value=\"명확한 형식\">\n"
       );
    } else  {
      jq("#button").html(
        "          <input type=\"submit\" id=\"form-apply_students-submit\" value=\"대다\">\n" + 
        "          <input type=\"reset\" id=\"form-apply_students-reset\" value=\"명확한 형식\">\n"
       );
    }
       
  } // END of if STATEMENT
  
  if (webpage_index === 84) {
    jq("article").html(
      "        <div class=\"article-media\" id=\"article-content\">\n" + 
      "          <h4>포토갤러리</h4>\n" + 
      "          <div class=\"article-media-row\" id=\"media-row_1\">\n" + 
      "            <div class=\"media-item\" id=\"media-item_1\">\n" + 
      "              <a href=\"/la/assets/html/media/item_1.htm\">" + extracted_html[0] + "</a>\n" + 
      "              <a href=\"/la/assets/html/media/item_1.htm\">" + extracted_html[1] + "</a>\n" + 
      "            </div>\n" + 
      "            <div class=\"media-item\" id=\"media-item_2\">\n" + 
      "             <a href=\"/la/assets/html/media/item_2.htm\">" + extracted_html[2] + "</a>\n" + 
      "             <a href=\"/la/assets/html/media/item_2.htm\">" + extracted_html[3] + "</a>\n" + 
      "            </div>\n" + 
      "          </div>\n" + 
      "          <div class=\"article-media-row\" id=\"media-row_2\">\n" + 
      "            <div class=\"media-item\" id=\"media-item_3\">\n" + 
      "              <a href=\"/la/assets/html/media/item_3.htm\">" + extracted_html[4] + "</a>\n" + 
      "              <a href=\"/la/assets/html/media/item_3.htm\">" + extracted_html[5] + "</a>\n" + 
      "            </div>\n" + 
      "            <div class=\"media-item\" id=\"media-item_4\">\n" + 
      "              <a href=\"/la/assets/html/media/item_4.htm\">" + extracted_html[6] + "</a>\n" + 
      "              <a href=\"/la/assets/html/media/item_4.htm\">" + extracted_html[7] + "</a>\n" + 
      "            </div>\n" + 
      "          </div>\n" + 
      "          <div class=\"article-media-row\" id=\"media-row_3\">\n" + 
      "            <div class=\"media-item\" id=\"media-item_5\">\n" + 
      "              <a href=\"/la/assets/html/media/item_5.htm\">" + extracted_html[8] + "</a>\n" + 
      "              <a href=\"/la/assets/html/media/item_5.htm\">" + extracted_html[9] + "</a>\n" + 
      "            </div>\n" + 
      "            <div class=\"media-item\" id=\"media-item_6\">\n" + 
      "              <a href=\"/la/assets/html/media/item_6.htm\">" + extracted_html[10] + "</a>\n" + 
      "              <a href=\"/la/assets/html/media/item_6.htm\">" + extracted_html[11] + "</a>\n" + 
      "            </div>\n" + 
      "          </div>\n" + 
      "          <div class=\"article-media-row\" id=\"media-row_4\">\n" + 
      "            <div class=\"media-item\" id=\"media-item_7\">\n" + 
      "              <a href=\"/la/assets/html/media/item_7.htm\">" + extracted_html[12] + "</a>\n" + 
      "              <a href=\"/la/assets/html/media/item_7.htm\">" + extracted_html[13] + "</a>\n" + 
      "            </div>\n" + 
      "            <div class=\"media-item\" id=\"media-item_8\">\n" + 
      "              <a href=\"/la/assets/html/media/item_8.htm\">" + extracted_html[14] + "</a>\n" + 
      "              <a href=\"/la/assets/html/media/item_8.htm\">" + extracted_html[15] + "</a>\n" + 
      "            </div>\n" + 
      "          </div>\n" + 
      "          <div class=\"article-media-row\" id=\"media-row_5\">\n" + 
      "            <div class=\"media-item\" id=\"media-item_9\">\n" + 
      "              <a href=\"/la/assets/html/media/item_9.htm\">" + extracted_html[16] + "</a>\n" + 
      "              <a href=\"/la/assets/html/media/item_9.htm\">" + extracted_html[17] + "</a>\n" + 
      "            </div>\n" + 
      "            <div class=\"media-item\" id=\"media-item_10\">\n" + 
      "              <a href=\"/la/assets/html/media/item_10.htm\">" + extracted_html[18] + "</a>\n" + 
      "              <a href=\"/la/assets/html/media/item_10.htm\">" + extracted_html[19] + "</a>\n" + 
      "            </div>\n" + 
      "          </div>\n" + 
      "          <div class=\"article-media-row\" id=\"media-row_6\">\n" + 
      "            <div class=\"media-item\" id=\"media-item_11\">\n" + 
      "              <a href=\"/la/assets/html/media/item_11.htm\">" + extracted_html[20] + "</a>\n" + 
      "              <a href=\"/la/assets/html/media/item_11.htm\">" + extracted_html[21] + "</a>\n" + 
      "            </div>\n" + 
      "            <div class=\"media-item\" id=\"media-item_12\">\n" + 
      "              <a href=\"/la/assets/html/media/item_12.htm\">" + extracted_html[22] + "</a>\n" + 
      "              <a href=\"/la/assets/html/media/item_12.htm\">" + extracted_html[23] + "</a>\n" + 
      "            </div>\n" + 
      "          </div>\n" + 
      "          <div class=\"article-media-row\" id=\"media-row_7\">\n" + 
      "            <div class=\"media-item\" id=\"media-item_13\">\n" + 
      "              <a href=\"/la/assets/html/media/item_13.htm\">" + extracted_html[24] + "</a>\n" + 
      "              <a href=\"/la/assets/html/media/item_13.htm\">" + extracted_html[25] + "</a>\n" + 
      "            </div>\n" + 
      "            <div class=\"media-item\" id=\"media-item_14\">\n" + 
      "              <a href=\"/la/assets/html/media/item_14.htm\">" + extracted_html[26] + "</a>\n" + 
      "              <a href=\"/la/assets/html/media/item_14.htm\">" + extracted_html[27] + "</a>\n" + 
      "            </div>\n" + 
      "          </div>\n" + 
      "          <div class=\"article-media-row\" id=\"media-row_8\">\n" + 
      "            <div class=\"media-item\" id=\"media-item_15\">\n" + 
      "              <a href=\"/la/assets/html/media/item_15.htm\">" + extracted_html[28] + "</a>\n" + 
      "              <a href=\"/la/assets/html/media/item_15.htm\">" + extracted_html[29] + "</a>\n" + 
      "            </div>\n" + 
      "          </div>\n" + 
      "        </div>\n"
    );
  }
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
    display: "none", 
    margin: "0"
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
