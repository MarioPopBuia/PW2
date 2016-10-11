
/*jslint browser:true*/

var aufzaehlung = 1;

document.getElementById("container1").addEventListener("mouseover", function () {
    "use strict";
    var TestDiv = document.getElementById("container1").appendChild(document.createElement("ul").appendChild(document.createElement("li")));
    TestDiv.innerHTML = "Halloooo" + aufzaehlung;
    aufzaehlung = aufzaehlung * 3;
});