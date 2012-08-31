nav = document.querySelector("#navselect");
navoptions = nav.options;

var url = document.location.href;
//console.log(url);
var lastSlash = url.lastIndexOf("/");
var fileName = url.substring(lastSlash + 1, url.length);
//console.log(url);
//console.log(fileName);
for (var i = 0; i < navoptions.length; i++) {
    if (navoptions[i].value == fileName) {
        if (navoptions.selectedIndex != i) {
        	navoptions.selectedIndex = i;
        }
    }
}

function miniNav(){
	window.location.href=navoptions[nav.selectedIndex].value;
}
