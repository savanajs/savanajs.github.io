var Savana = {
	selectorBtnMenuMobile: "#menu-mobile",
	selectorMenuMobile: "#bx-menu",
	init: function() {

		var _self = this;
		_self.initLoaderPader();
		_self.showLoaderPage();
		_self.controlMenuMobile(_self);

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
        	var $this = $savana(_this);
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

	}
}

$savana(document).done(function(e) {

    Savana.init();

});

$savana(window).onload(function(e) {

	Savana.hideLoaderPage();

});