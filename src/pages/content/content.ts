//@ts-check
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import * as $ from "jquery";


@IonicPage()
@Component({
  selector: 'page-content',
  templateUrl: 'content.html'
})
export class ContentPage {
  constructor(public navCtrl: NavController) { }
  

}

// profile pic
$(document).ready(function () {
  var readURL = function (input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e: any) {
        let target: any = e.target; //<-- This (any) will tell compiler to shut up!
        let content: string = target.result;
        // $(".profile-pic").attr("src", this.result);
      };

      reader.readAsDataURL(input.files[0]);
    }
  };

  $(".file-upload").on("change", function () {
    readURL(this);
  });

  $(".upload-button").on("click", function () {
    $(".file-upload").click();
  });
});

// How Are You Feeling
$(".pain-scale__level").hover(
  function () {
    $(this)
      .addClass("pain-scale__level--active")
      .prevAll()
      .addClass("pain-scale__level--active");
  },
  function () {
    $(this)
      .removeClass("pain-scale__level--active")
      .prevAll()
      .removeClass("pain-scale__level--active");
  }
);

$(".pain-scale__level").click(function () {
  $(this)
    .siblings()
    .removeClass("pain-scale__level--selected");
  $(this)
    .addClass("pain-scale__level--selected pain-scale__level--blink")
    .one(
      "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
      function () {
        $(this).removeClass("pain-scale__level--blink");
      }
    );
  $(this)
    .prevAll()
    .addClass("pain-scale__level--selected pain-scale__level--blink")
    .one(
      "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
      function () {
        $(this).removeClass("pain-scale__level--blink");
      }
    );
});
