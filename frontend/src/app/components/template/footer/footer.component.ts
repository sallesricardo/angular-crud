import { Component, OnInit } from "@angular/core";
import { HeaderService } from "../header/header.service";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"],
})
export class FooterComponent implements OnInit {
  constructor(private headerService: HeaderService) {}

  ngOnInit(): void {}

  get titleHistory(): string {
    if (typeof this.headerService.titleHistory != "undefined") {
      return this.headerService.titleHistory.join(" / ");
    } else {
      return "";
    }
  }
}
