import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { AttendancePage } from "../pages/AttendancePage/AttendancePage";
import { AccountSettingPage } from "../pages/AccountSettingPage/AccountSettingPage";
import { AboutPage } from "../pages/AboutPage/AboutPage";
import { StudentsPage } from "../pages/StudentsPage/StudentsPage";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AccountSettingPage,
    AboutPage,
    AttendancePage,
    StudentsPage
  ],
  imports: [BrowserModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AccountSettingPage,
    AboutPage,
    AttendancePage,
    StudentsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
