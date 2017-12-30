function fnFlashObject(path, width, height, flashvars) {
    var m_protocol = document.location.protocol.replace(":","");
    var m_movie = path;
    var m_width = width;
    var m_height = height;
    var m_flashvars = flashvars;

    this.wmode = "transparent";
    this.id = "";
    this.quality = "high";
    this.menu = "false";
    this.allowScriptAccess = "sameDomain";

    var html;

	html ="";
    html += "<object classid='clsid:d27cdb6e-ae6d-11cf-96b8-444553540000' codebase='"+ m_protocol +"://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0' width='" + m_width + "' height='" + m_height + "'";
    if (this.id != "") html += " id='" + this.id + "'";
    html += ">";

    html += "<param name='allowScriptAccess' value='" + this.allowScriptAccess + "' />";
    html += "<param name='movie' value='" + m_movie + "' />";
    html += "<param name='menu' value='" + this.menu + "' />";
    html += "<param name='quality' value='" + this.quality + "' />";
    if (this.wmode != "") html += "<param name='wmode' value='" + this.wmode + "' />";
    if (m_flashvars != "") html += "<param name='FlashVars' value='" + m_flashvars + "' />";

    html += "<embed src='" + m_movie + "' quality='" + this.quality + "' pluginspage='"+ m_protocol +"://www.macromedia.com/go/getflashplayer' type='application/x-shockwave-flash' width='" + m_width + "' height='" + m_height + "'";
    html += " allowScriptAccess='" + this.allowScriptAccess + "'";
    if (this.wmode != "") html += " wmode='" + this.wmode + "'";
    if (m_flashvars != "") html += " FlashVars='" + m_flashvars + "'";
    html += " /></object>";

    document.write(html);

}

var page,wid,hit,nam;
function win(page,nam,wid,hit){
var  windo=eval('window.open("'+page+'","'+nam+'","status=no,toolbar=no,resizable=no,scrollbars=no,menubar=no,width='+wid+',height='+hit+',top=10,left=10")');
windo.focus();
  }
  
  
function winscroll(page,nam,wid,hit){
var  windo=eval('window.open("'+page+'","'+nam+'","status=no,toolbar=no,resizable=no,scrollbars=yes,menubar=no,width='+wid+',height='+hit+',top=100,left=100")');
windo.focus();
  }
  
function pop_win(s1) {
	var go_url = form_move.url.options[s1].value;
		if (s1 == 0) 
		alert ("????? ???????.");
	if (s1 >= 1)
	{ 
	window.open(go_url);
	}
}