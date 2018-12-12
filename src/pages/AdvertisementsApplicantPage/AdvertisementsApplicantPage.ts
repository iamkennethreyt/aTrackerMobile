import { Component } from "@angular/core";
import { AlertController } from "ionic-angular";

@Component({
  selector: "AdvertisementsApplicantPage",
  templateUrl: "AdvertisementsApplicantPage.html"
})
export class AdvertisementsApplicantPage {
  constructor(public alertCtrl: AlertController) {}
  showConfirm() {
    const confirm = this.alertCtrl.create({
      title: "Submit your Resume",
      message: "Do you agree to submit your resume to this employer?",
      buttons: [
        {
          text: "Disagree",
          handler: () => {
            console.log("Disagree clicked");
          }
        },
        {
          text: "Agree",
          handler: () => {
            console.log("Agree clicked");
          }
        }
      ]
    });
    confirm.present();
  }
}
