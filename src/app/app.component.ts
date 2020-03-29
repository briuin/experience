import { Component, OnInit } from "@angular/core";
import { Globals } from "src/global.service";

@Component({
  selector: "briuin-experience-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "briuin-experience";

  constructor(private globals: Globals) {
    console.log(this.globals.globalEventDistributor);
  }
}
