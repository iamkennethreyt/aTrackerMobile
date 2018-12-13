import { Component, ViewChild } from "@angular/core";
import { Nav, Platform } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { AboutPage } from "../pages/AboutPage/AboutPage";
import { HomePage } from "../pages/home/home";
import { AccountSettingPage } from "../pages/AccountSettingPage/AccountSettingPage";
import { AttendancePage } from "../pages/AttendancePage/AttendancePage";
import { StudentsPage } from "../pages/StudentsPage/StudentsPage";
//StudentsPage
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
        title: "Account Setting",
        component: AccountSettingPage,
        icon: "md-settings"
      },
      {
        title: "Attendance",
        component: AttendancePage,
        icon: "md-list-box"
      },
      {
        title: "Students List",
        component: StudentsPage,
        icon: "md-contacts"
      },
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
