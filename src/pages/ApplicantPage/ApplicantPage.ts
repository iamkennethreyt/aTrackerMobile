import { Component } from "@angular/core";
import { AlertController } from "ionic-angular";

@Component({
  selector: "ApplicantPage",
  templateUrl: "ApplicantPage.html"
})
export class ApplicantPage {
  constructor(public alertCtrl: AlertController) {}
  showConfirm() {
    const confirm = this.alertCtrl.create({
      title: "Download Applicant Resume",
      message: "Do you agree to download resume of this applicant",
      buttons: [
        {
          text: "Cancel",
          handler: () => {
            console.log("Disagree clicked");
          }
        },
        {
          text: "Download",
          handler: () => {
            console.log("Agree clicked");
          }
        }
      ]
    });
    confirm.present();
  }
}
