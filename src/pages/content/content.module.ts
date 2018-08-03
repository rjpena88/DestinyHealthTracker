//@ts-check
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { ContentPage } from './content';
import * as $ from "jquery";


// profile pic
$(document).ready(function () {
  var readURL = function (input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e: any) {
        let target: any = e.target; //<-- This (any) will tell compiler to shut up!
        let content: string = target.result;
        $(".profile-pic").attr("src", e.target.result);
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

@NgModule({
  declarations: [
    ContentPage,
  ],
  imports: [
    IonicPageModule.forChild(ContentPage),
    TranslateModule.forChild(),
  ],
  exports: [
    ContentPage
  ]
})



export class ContentPageModule { }


