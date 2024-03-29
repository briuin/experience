import { enableProdMode, NgZone } from "@angular/core";

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { Router } from "@angular/router";
import { ɵAnimationEngine as AnimationEngine } from "@angular/animations/browser";
import { AppModule } from "./app/app.module";
import { environment } from "./environments/environment";
import singleSpaAngular from "single-spa-angular";
import { singleSpaPropsSubject } from "./single-spa/single-spa-props";

if (environment.production) {
  enableProdMode();
}

const lifecycles = singleSpaAngular({
  bootstrapFunction: singleSpaProps => {
    const props = {
      globalEventDistributor: null,
      ...singleSpaProps
    };
    singleSpaPropsSubject.next(props);
    return platformBrowserDynamic().bootstrapModule(AppModule);
  },
  template: "<briuin-experience-root />",
  Router,
  NgZone,
  AnimationEngine
});

export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;
