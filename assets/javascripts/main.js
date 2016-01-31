var Savana = {
	selectorBtnMenuMobile: "#menu-mobile",
	selectorMenuMobile: "#bx-menu",
	init: function() {
		var _self = this;
		_self.initLoaderPader();
		_self.showLoaderPage();
		_self.controlMenuMobile(_self);
		_self.controlBtnBodyFadeOut(_self);
		_self.docClicked();
		_self.docColumn();
	},
	initLoaderPader: function() {
		savana.loadPreloader();
	},
	showLoaderPage: function() {
		savana.showPreloader();
	},
	hideLoaderPage: function() {
		savana.hidePreloader();
	},
	controlMenuMobile: function(_self){
        $savana(_self.selectorBtnMenuMobile).on("click", function(){
        	var $this = $savana(this);
        	$this.toggleClass("active");
        	if($this.hasClass("active")){
               _self.openMenuMobile(_self);
        	}else{
               _self.closeMenuMobile(_self);
        	}
        });
	},
	openMenuMobile: function(_self){
        $savana(_self.selectorMenuMobile).show();
        $savana(_self.selectorMenuMobile).removeClass("bounceOutLeft");
        $savana(_self.selectorMenuMobile).addClass("bounceInLeft");
	},
	closeMenuMobile: function(_self){
        $savana(_self.selectorMenuMobile).removeClass("bounceInLeft");
		$savana(_self.selectorMenuMobile).addClass("bounceOutLeft");
	},
	bodyFadeOut: function(){
		$savana(".wrapper").removeClass("fadeIn");
		$savana(".wrapper").addClass("fadeOut");
	},
	controlBtnBodyFadeOut: function(_self){
		$savana("a.btn-body-fade").on("click", function(e){
			Savana.showLoaderPage();
           _self.bodyFadeOut();
           savana.eventStop();
           setTimeout(function(){
              savana.redirect($savana(this).attr("href"));
           },1300);
		});
	},
	docClicked: function(){
		$savana(".three.columns a").on("click", function(e){
			$savana(".three.columns a").removeClass("active");
			$savana(this).addClass("active");
		});
	},
	docColumn: function(){	
		var asideHeight = $savana("aside.three.columns").size()['h'];
		var bodyWidth = $savana("body").size()['w']

		$savana(window).scroll(function(e){

          if(bodyWidth > 1000){

	            if(document.body.scrollTop > asideHeight){
	            	$savana("aside.three.columns").addClass("float")
	            }else{
	            	$savana("aside.three.columns").removeClass("float")
	            }

           }

        });
	}
}

$savana(document).done(function(e) {
    Savana.init();
});

$savana(window).onload(function(e) {
	Savana.hideLoaderPage();
});