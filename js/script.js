(function () {
  "use strict";
  window.addEventListener("load", () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  });
})();

function openTab(evt, tabName) {
  // Declare all variables
  var i, j_tabcontent, j_tablinks;

  // Get all elements with class="j_tabcontent" and hide them
  j_tabcontent = document.getElementsByClassName("j_tabcontent");
  for (i = 0; i < j_tabcontent.length; i++) {
    j_tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  j_tablinks = document.getElementsByClassName("j_tablinks");
  for (i = 0; i < j_tablinks.length; i++) {
    j_tablinks[i].className = j_tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

function openTab2(evt, tabName2) {
  // Declare all variables
  var j, j_tabcontent2, j_tablinks2;

  // Get all elements with class="j_tabcontent" and hide them
  j_tabcontent2 = document.getElementsByClassName("j_tabcontent2");
  for (j = 0; j < j_tabcontent2.length; j++) {
    j_tabcontent2[j].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  j_tablinks2 = document.getElementsByClassName("j_tablinks2");
  for (j = 0; j < j_tablinks2.length; j++) {
    j_tablinks2[j].className = j_tablinks2[j].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName2).style.display = "block";
  evt.currentTarget.className += " active";
}

function openTab3(evt, tabName3) {
  // Declare all variables
  var k, j_tabcontent3, j_tablinks3;

  // Get all elements with class="j_tabcontent" and hide them
  j_tabcontent3 = document.getElementsByClassName("j_tabcontent3");
  for (k = 0; k < j_tabcontent3.length; k++) {
    j_tabcontent3[k].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  j_tablinks3 = document.getElementsByClassName("j_tablinks3");
  for (k = 0; k < j_tablinks3.length; k++) {
    j_tablinks3[k].className = j_tablinks3[k].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName3).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();

document.getElementById("defaultOpen2").click();

document.getElementById("defaultOpen3").click();

function toggleMenu() {
  var x = document.getElementById("j-navmenu");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function toggleCustomers() {
  var x = document.getElementById("j-customers-hide");
  var y = document.getElementById("toggleCustomers-btn");
  if (x.style.display === "flex") {
    x.style.display = "none";
    y.innerHTML = "Show More";
  } else {
    x.style.display = "flex";
    y.innerHTML = "Show Less";
  }
}