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

function disableUpdateBtn() {
  $(event.target).prop("disabled", true);
  $(event.target).closest("form").submit();
  $(event.target).val("Updating ...");
}

function bindSumbitClick() {
  $("input[type=submit]").on("click", disableUpdateBtn);
}

function hideRow() {
  var associationRow = $(".association").last();
  associationRow.css("display", "none");
}

function showRow() {
  var associationRow = $(".association").last();
  associationRow.css("display", "block");
}

function bindShowRow() {
  $(".new-association").on("click", showRow);
}

function deleteRow() {
  $(event.target).closest(".association").css("display", "none");
  $(event.target).siblings().last("input[type=checkbox]").prop("checked", true);
}

function bindDeleteRow() {
  $(".delete-association").on("click", deleteRow);
}


// function hideDelete() {
//   var row = event.target.parentNode.parentNode;
//   row.style.display = "none";
// }

// function hideDelete() {
//   var row = event.target.parentNode.parentNode;
//   row.style.display = "none";
// }
//
// function hideDelete() {
//   var associations = $("#associations");
//   associations.
//    = event.target.parentNode.parentNode;
//   row.style.display = "none";
// }

// function hideLastRow() {
//   if ($("#associations").length > 0) {
//     hideDelete();
//   }
// }

$(hideRow);

$(bindShowRow);

$(bindSumbitClick);

$(bindDeleteRow);

// $(hideLastRow);
