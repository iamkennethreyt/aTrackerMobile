import { Component, ViewChild } from "@angular/core";
import { Nav, Platform } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { AboutPage } from "../pages/AboutPage/AboutPage";
import { HomePage } from "../pages/home/home";

import { AccountSettingsApplicantPage } from "../pages/AccountSettingsApplicantPage/AccountSettingsApplicantPage";
import { AccountSettingsEmployerPage } from "../pages/AccountSettingsEmployerPage/AccountSettingsEmployerPage";
import { AdvertisementsApplicantPage } from "../pages/AdvertisementsApplicantPage/AdvertisementsApplicantPage";
import { AdvertisementsEmployerPage } from "../pages/AdvertisementsEmployerPage/AdvertisementsEmployerPage";
import { ApplicantPage } from "../pages/ApplicantPage/ApplicantPage";

@Component({
  templateUrl: "app.html"
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{ title: string; component: any; icon: string }>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: "Home (0)", component: HomePage, icon: "md-home" },
      {
        title: "Account Settings Applicant",
        component: AccountSettingsApplicantPage,
        icon: "md-settings"
      },
      {
        title: "Account Settings Employer",
        component: AccountSettingsEmployerPage,
        icon: "md-settings"
      },
      {
        title: "Advertisement Applicant",
        component: AdvertisementsApplicantPage,
        icon: "md-megaphone"
      },
      {
        title: "Advertisement Employer",
        component: AdvertisementsEmployerPage,
        icon: "md-megaphone"
      },
      { title: "Applicants", component: ApplicantPage, icon: "md-people" },
      {
        title: "About Us",
        component: AboutPage,
        icon: "md-information-circle"
      },
      { title: "Sign Out", component: null, icon: "md-log-out" }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
