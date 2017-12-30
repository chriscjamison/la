$(document).ready(function(){	
	//왼쪽메뉴
	$('.depth_2').hide();
	$('.depth_1 li').hover(function(){		
		$(this).children('.depth_2').show();
	},function(){
		$(this).children('.depth_2').hide();
	});
	startVisual();		
	$('.visualUL li:eq(0)').addClass('on');
	$('.visualUL li span.pic:eq(0)').fadeIn();
	$('.visualUL li:eq(0)').addClass('v_1');
	$('.visualUL li:eq(1)').addClass('v_2');
	$('.visualUL li:eq(2)').addClass('v_3');
	$('.visualUL li:eq(3)').addClass('v_4');
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
	$('.visualUL li.on .pic').fadeOut();
	$('.visualUL li.on').removeClass('on');
	
	$('.navi:eq('+e+')').parent().addClass('on')
	$('.navi:eq('+e+')').next().fadeIn();
	$('.navi:eq('+e+')').parent().parent().parent().parent().attr('id','bg'+e)
	intnum = e;
	//$('body').prepend(intnum);
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

		var obj_lnb = $('#lnb-'+a+' > a > img');

		if (i == a){

			obj_lnb.parent().addClass('on');

			var obj_lnb_src = obj_lnb.attr('src').toString();

			obj_lnb.attr('src',obj_lnb_src.replace(".gif","_on.gif"))

		}

	 }	

}

$(document).ready(function(){

	var old_imgsrc,new_imgsrc

	$('#lnb > li > a').hover(function(){

		old_imgsrc = $(this).children('img').attr('src');

		new_imgsrc = old_imgsrc.replace(".gif","_on.gif");

		if($(this).attr('class') == "on"){}else {

			$(this).children('img').attr('src',new_imgsrc);

		}

	},function(){

		$(this).children('img').attr('src',old_imgsrc);

	})

})