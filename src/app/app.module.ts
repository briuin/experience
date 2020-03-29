import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgReduxModule, NgRedux } from "@angular-redux/store";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { EmptyRouteComponent } from "./empty-route/empty-route.component";
import { singleSpaPropsSubject } from "src/single-spa/single-spa-props";
import { Globals } from "src/global.service";

@NgModule({
  declarations: [AppComponent, EmptyRouteComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private globals: Globals) {
    singleSpaPropsSubject.subscribe(props => {
      this.globals.globalEventDistributor = props.globalEventDistributor;
    });
  }
}
