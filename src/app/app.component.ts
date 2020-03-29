import { Component, OnInit, ChangeDetectorRef, NgZone } from "@angular/core";
import { NgRedux, select, DevToolsExtension } from "@angular-redux/store";
import { Globals } from "src/global.service";
import { singleSpaPropsSubject } from "src/single-spa/single-spa-props";

@Component({
  selector: "briuin-experience-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "briuin-experience";

  @select(["reducer", "selectedTimeline", "year"]) year: number;
  @select(["reducer", "selectedTimeline", "month"]) month: number;

  constructor(
    private ngRedux: NgRedux<any>,
    private globals: Globals,
    public ngZone: NgZone
  ) {
    const timelineStore = this.globals.globalEventDistributor.stores.find(
      x => x.getState().namespace === "timeline"
    );
    this.ngRedux.provideStore(timelineStore);
    this.ngRedux
      // tslint:disable-next-line:whitespace
      .select<any>(["reducer", "selectedTimeline"])
      .subscribe(x => {
        this.ngZone.run(() => (this.title = `${x.year} - ${x.month}`));
      });
  }
}
