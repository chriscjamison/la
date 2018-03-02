jq(document).ready(function(){	
	//왼쪽메뉴
	jq('.depth_2').hide();
	jq('.depth_1 li').hover(function(){		
		jq(this).children('.depth_2').show();
	},function(){
		jq(this).children('.depth_2').hide();
	});
	startVisual();		
	jq('.visualUL li:eq(0)').addClass('on');
	jq('.visualUL li span.pic:eq(0)').fadeIn();
	jq('.visualUL li:eq(0)').addClass('v_1');
	jq('.visualUL li:eq(1)').addClass('v_2');
	jq('.visualUL li:eq(2)').addClass('v_3');
	jq('.visualUL li:eq(3)').addClass('v_4');
});

function start(st,e,int){
	if (st > (totalcoverimg-1)){st=0}
	var c=st;
	sliderIntervalID = setInterval(function(){
		newslide(c);
		intnum = c;
		if (c==(e)){c=0}else{c=c+1;}
	},int)
}
function start(st,e,int){
		if (st > (totalcoverimg-1)){st=0}
		var c=st;
		sliderIntervalID = setInterval(function(){
			newslide(c);
			intnum = c;
			if (c==(e)){c=0}else{c=c+1;}
		},int)
	}
function newslide(e){
	jq('.visualUL li.on .pic').fadeOut();
	jq('.visualUL li.on').removeClass('on');
	
	jq('.navi:eq('+e+')').parent().addClass('on')
	jq('.navi:eq('+e+')').next().fadeIn();
	jq('.navi:eq('+e+')').parent().parent().parent().parent().attr('id','bg'+e)
	intnum = e;
	//jq('body').prepend(intnum);
}

function startVisual() {
	if( sliderIntervalID == "" ) {
		start((intnum+1),(totalcoverimg-1),5000);
	}
}

function stopVisual() {
	if( sliderIntervalID != "" ) {
		clearInterval(sliderIntervalID);
		sliderIntervalID = "";
	}
}

function MenuLoad(a) {	

	for(var i=1; i <= 20; i++){

		var obj_lnb = jq('#lnb-'+a+' > a > img');

		if (i == a){

			obj_lnb.parent().addClass('on');

			var obj_lnb_src = obj_lnb.attr('src').toString();

			obj_lnb.attr('src',obj_lnb_src.replace(".gif","_on.gif"))

		}

	 }	

}

jq(document).ready(function(){

	var old_imgsrc,new_imgsrc

	jq('#lnb > li > a').hover(function(){

		old_imgsrc = jq(this).children('img').attr('src');

		new_imgsrc = old_imgsrc.replace(".gif","_on.gif");

		if(jq(this).attr('class') == "on"){}else {

			jq(this).children('img').attr('src',new_imgsrc);

		}

	},function(){

		jq(this).children('img').attr('src',old_imgsrc);

	})

})