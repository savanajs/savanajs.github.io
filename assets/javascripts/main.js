var Savana = {
	selectorBtnMenuMobile: "#menu-mobile",
	selectorMenuMobile: "#bx-menu",
	init: function() {
		var _self = this;
		_self.initLoaderPader();
		_self.showLoaderPage();
		_self.controlMenuMobile(_self);
		_self.controlBtnBodyFadeOut(_self);
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
        	var $this = $savana(self);
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
           e.preventDefault();
           setTimeout(function(){
              savana.redirect($savana(self).attr("href"));
           },1300);
		});
	}
}

$savana(document).done(function(e) {
    Savana.init();
});

$savana(window).onload(function(e) {
	Savana.hideLoaderPage();
});