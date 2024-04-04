
/* this works with Nova theme */

var serviceUrl = "//api.reciteme.com/asset/js?key=";
var serviceKey = "f6cd075d8f4872e8017e5b50baf4b22c6eabd288";
var options = {};
var autoLoad = false;
var enableFragment = "#reciteEnable";
var loaded = [],
	frag = !1;
window.location.hash === enableFragment && (frag = !0);

function loadScript(c, b) {
	var a = document.createElement("script");
	a.type = "text/javascript";
	a.readyState ? a.onreadystatechange = function() {
		if ("loaded" == a.readyState || "complete" == a.readyState) a.onreadystatechange = null, void 0 != b && b()
	} : void 0 != b && (a.onload = function() {
		b()
	});
	a.src = c;
	document.getElementsByTagName("head")[0].appendChild(a)
}

function _rc(c) {
	c += "=";
	for (var b = document.cookie.split(";"), a = 0; a < b.length; a++) {
		for (var d = b[a];
			" " == d.charAt(0);) d = d.substring(1, d.length);
		if (0 == d.indexOf(c)) return d.substring(c.length, d.length)
	}
	return null
}

function loadService(c) {
	for (var b = serviceUrl + serviceKey, a = 0; a < loaded.length; a++)
		if (loaded[a] == b) return;
	loaded.push(b);
	loadScript(serviceUrl + serviceKey, function() {
		"function" === typeof _reciteLoaded && _reciteLoaded();
		"function" == typeof c && c();
		Recite.load(options);
		Recite.Event.subscribe("Recite:load", function() {
			Recite.enable()
		})
	})
}
"true" == _rc("Recite.Persist") && loadService();
if (autoLoad && "false" != _rc("Recite.Persist") || frag) document.addEventListener ? document.addEventListener("DOMContentLoaded", function(c) {
	loadService()
}) : loadService();
var almondDefine = define;
define = function(a, b, c) {
	if (b == null) {
		return;
	}
	almondDefine(a, b, c);
};
const recitemeButtonLink = document.createElement("a"),
	recitemeButtonLinkMobile = document.createElement("a");
recitemeButtonLink.setAttribute("id", "enableRecite");
recitemeButtonLink.setAttribute("class", "button fit");
recitemeButtonLinkMobile.setAttribute("class", "link depth-1");
recitemeButtonLinkMobile.setAttribute("id", "enableReciteM");
recitemeButtonLink.appendChild(document.createTextNode("Accessibility and translation"));
recitemeButtonLinkMobile.appendChild(document.createTextNode("Accessibility and translation"));

/* document.getElementById("nav").appendChild(recitemeButtonLink); */
// document.getElementsByClassName("navigation-buttons")[0].appendChild(recitemeButtonLink);
document.getElementsByClassName("nav").appendChild(recitemeButtonLink);


document.getElementById("navPanel").appendChild(recitemeButtonLinkMobile);

const recitemeNavBtn1 = document.getElementById('enableRecite'),
	recitemeNavBtn2 = document.getElementById('enableReciteM');
document.addEventListener("DOMContentLoaded", function(event) {
	[recitemeNavBtn1, recitemeNavBtn2].map(element => element.addEventListener("click", function() {
		loadService();
	}))
});
