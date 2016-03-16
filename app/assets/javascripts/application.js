// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require d3
//= require_tree .

function updateBtn() {
  document.getElementsByClassName("actions")[0].lastElementChild.disabled = true;
  document.getElementById("edit_course_1").submit();
  document.getElementsByClassName("actions")[0].lastElementChild.value = "Updating ...";
}

function hideRow() {
  var array1 = document.getElementsByClassName("association container");
  var lastElement = array1[array1.length - 1];
  lastElement.style.display = "none";
}

function showRow() {
  var array1 = document.getElementsByClassName("association container");
  var lastElement = array1[array1.length - 1];
  lastElement.style.display = "block";
}
