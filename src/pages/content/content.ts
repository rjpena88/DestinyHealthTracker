//@ts-check
import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { ViewChild, OnInit, Renderer, Input } from '@angular/core';
import * as $ from "jquery";

@IonicPage()
@Component({
  selector: 'page-content',
  templateUrl: 'content.html'
})
export class ContentPage implements OnInit{

  accordionExapanded = false;
  @ViewChild("cc") cardContent: any;
  @Input('title') title: string;

  icon: string = "arrow-forward";
  constructor(public renderer: Renderer) { }
  ngOnInit() {
    console.log(this.cardContent.nativeElement);
    this.renderer.setElementStyle(this.cardContent.nativeElement, "webkitTransition", "max-height 500ms, padding 500ms");
  }

  toggleAccordion() {
    if (this.accordionExapanded) {
      this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height", "0px");
      this.renderer.setElementStyle(this.cardContent.nativeElement, "padding", "0px 16px");

    } else {
      this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height", "500px");
      this.renderer.setElementStyle(this.cardContent.nativeElement, "padding", "13px 16px");

    }

    this.accordionExapanded = !this.accordionExapanded;
    this.icon = this.icon == "arrow-forward" ? "arrow-down" : "arrow-forward";

  }

}
// profile pic
$(document).ready(function () {
  var readURL = function (input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e: any) {
        let target: any = e.target; //<-- This (any) will tell compiler to shut up!
        let content: string = target.result;
        $(".profile-pic").attr("src", this.result);
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
