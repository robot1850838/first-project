
require.config({
	baseUrl: "/",
	paths : {
		"jquery" : "lib/jquery/jquery-1.12.4.min",
		"cookie" : "lib/jquery_plugins/jquery.cookie",
		"fly" : "lib/jquery_plugins/jquery.fly.min",
		"zoom":"lib/jquery_plugins/jquery.elevateZoom-2",
		"template" : "lib/arttemplate/template-native",
		"load":"js/loadheaderfooter",
		"loadnav":"js/loadnav",
		"loadNume":"js/loadNume"
	},
	shim :{
		"fly":{
			deps:["jquery"]
		},
		"zoom":{
			deps :["jquery"]
		},
		"loadnav":{
			deps:["jquery"]
		},
		"loadNume":{
			deps:["jquery"]
		}
	}
});