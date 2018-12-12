import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { ListPage } from "../pages/list/list";
import { AccountSettingsEmployerPage } from "../pages/AccountSettingsEmployerPage/AccountSettingsEmployerPage";
import { AccountSettingsApplicantPage } from "../pages/AccountSettingsApplicantPage/AccountSettingsApplicantPage";

import { AdvertisementsApplicantPage } from "../pages/AdvertisementsApplicantPage/AdvertisementsApplicantPage";
import { AdvertisementsEmployerPage } from "../pages/AdvertisementsEmployerPage/AdvertisementsEmployerPage";
import { ApplicantPage } from "../pages/ApplicantPage/ApplicantPage";
import { AboutPage } from "../pages/AboutPage/AboutPage";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AccountSettingsEmployerPage,
    AccountSettingsApplicantPage,
    AdvertisementsApplicantPage,
    AdvertisementsEmployerPage,
    ApplicantPage,
    AboutPage
  ],
  imports: [BrowserModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AccountSettingsEmployerPage,
    AccountSettingsApplicantPage,
    AdvertisementsApplicantPage,
    AdvertisementsEmployerPage,
    ApplicantPage,
    AboutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
