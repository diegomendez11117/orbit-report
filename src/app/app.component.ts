import { Component } from "@angular/core";
import { Satellite } from "./satellite";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "orbit-report";
  sourceList: Satellite[];
  displayList: Satellite[];
  selectedValue: string = "";

  constructor() {
    this.sourceList = [];
    this.displayList = [];
    this.selectedValue = "";
    let satellitesUrl =
      "https://handlers.education.launchcode.org/static/satellites.json";

    window.fetch(satellitesUrl).then(
      function (response) {
        response.json().then(
          function (data) {
            let fetchedSatellites = data.satellites;
            for (let satellite of fetchedSatellites) {
              this.sourceList.push(
                new Satellite(
                  satellite.name,
                  satellite.type,
                  satellite.launchDate,
                  satellite.orbitType,
                  satellite.operational
                )
              );
            }
            this.displayList = this.sourceList.slice(0);
          }.bind(this)
        );
      }.bind(this)
    );
  }
  search(searchTerm: string, selected: string): void {
    let matchingSatellites: Satellite[] = [];
    searchTerm = searchTerm.toLowerCase();
    if (selected == "name") {
      for (let i = 0; i < this.sourceList.length; i++) {
        let name = this.sourceList[i].name.toLowerCase();
        if (name.indexOf(searchTerm) >= 0) {
          matchingSatellites.push(this.sourceList[i]);
        }
      }
    }

    if (selected == "type") {
      for (let i = 0; i < this.sourceList.length; i++) {
        let type = this.sourceList[i].type.toLowerCase();
        if (type.indexOf(searchTerm) >= 0) {
          matchingSatellites.push(this.sourceList[i]);
        }
      }
    }

    if (selected == "orbitType") {
      for (let i = 0; i < this.sourceList.length; i++) {
        let orbitType = this.sourceList[i].orbitType.toLowerCase();
        if (orbitType.indexOf(searchTerm) >= 0) {
          matchingSatellites.push(this.sourceList[i]);
        }
      }
    }

    
    if (matchingSatellites.length > 0) {
      this.displayList = matchingSatellites;
    } else {
      alert(`We couldn't find ${searchTerm} in the satellites list`);
    }
  }

  selectChangeHandler(event: any) {
    this.selectedValue = event.target.value;
  }
}
