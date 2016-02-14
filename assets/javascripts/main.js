var SavanaJS = {
	selectorBtnMenuMobile: "#menu-mobile",
	selectorMenuMobile: "#bx-menu",
	selectorBtnMenuMobileAside: "a.btn-menu-aside",
	selectorMenuMobileAside: "aside.three.columns",
	selectorNameMethod: "#content aside + .columns h2",
	init: function() {
		var _self = this;
		_self.initLoaderPader();
		_self.showLoaderPage();
		_self.controlMenuMobile(_self);
		_self.controlMenuMobileAside(_self);
		_self.controlBtnBodyFadeOut(_self);
		_self.docClicked();
		_self.docColumn();
		_self.insertLabelOfExemplo(_self);
	},
	insertLabelOfExemplo: function(_self){
        $savana(_self.selectorNameMethod).each(function(){
        	var $this = $savana(this);
        	if($this.child("a").attr('href'))
        	   $this.push("<span> < See the exemple of method</span>","afer");
        });
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
	controlMenuMobileAside: function(_self){
        $savana(_self.selectorBtnMenuMobileAside).on("click", function(e){
        	var $this = $savana(this);
        	$this.toggleClass("active");
        	if($this.hasClass("active")){
               _self.openMenuMobileAside(_self);
        	}else{
               _self.closeMenuMobileAside(_self);
        	}
        	savana.eventStop(e);
        });
	},
	openMenuMobileAside: function(_self){
        $savana(_self.selectorMenuMobileAside).show();
        $savana(_self.selectorMenuMobileAside).removeClass("bounceOutLeft");
        $savana(_self.selectorMenuMobileAside).addClass("bounceInLeft");
	},
	closeMenuMobileAside: function(_self){
        $savana(_self.selectorMenuMobileAside).removeClass("bounceInLeft");
		$savana(_self.selectorMenuMobileAside).addClass("bounceOutLeft");
	},
	bodyFadeOut: function(){
		$savana(".wrapper").removeClass("fadeIn");
		$savana(".wrapper").addClass("fadeOut");
	},
	controlBtnBodyFadeOut: function(_self){
		$savana("a.btn-body-fade").on("click", function(g,e){
			var $this = $savana(this);
			SavanaJS.showLoaderPage();
           _self.bodyFadeOut();
           savana.eventStop();
           setTimeout(function(){
              savana.redirect($this.attr("href"));
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
		var asideHeight = $savana("aside.three.columns").size()['h'] + 300;
		var bodyWidth = $savana("body").size()['w']

		$savana(window).scroll(function(e){

          if(bodyWidth > 100){

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
    SavanaJS.init();
});

$savana(window).onload(function(e) {
	SavanaJS.hideLoaderPage();
});