import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { DataService } from '../../providers/data/data.service';
import * as $ from "jquery";
import firebase from 'firebase/app';


@IonicPage()
@Component({
  selector: 'page-content',
  templateUrl: 'content.html'
})
export class ContentPage {
  constructor(public navCtrl: NavController, public afAuth: AngularFireAuth) { }
  
  logout() {
    return this.afAuth.auth.signOut();
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
        $(".profile-pic").attr("src", target.result);
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
// Heart Rate 
var bpm = setInterval(function(){

  var heartRate = [82,82,83,83,84,84,85,86]
  var rand = heartRate[Math.floor(Math.random() * heartRate.length)];
    
    $('.heartRateCounter').text(rand);
  
  }, 1000);
