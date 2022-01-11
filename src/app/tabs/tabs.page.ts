import { Component } from "@angular/core";
import { App } from "@capacitor/app";
import { IonRouterOutlet, Platform } from "@ionic/angular";

@Component({
  selector: "app-tabs",
  templateUrl: "tabs.page.html",
  styleUrls: ["tabs.page.scss"],
})
export class TabsPage {
  constructor(
    private routerOutlet: IonRouterOutlet,
    private platform: Platform
  ) {
    this.platform.backButton.subscribeWithPriority(-1, () => {
      if (!this.routerOutlet.canGoBack()) {
        App.exitApp();
      }
    });
  }
}
