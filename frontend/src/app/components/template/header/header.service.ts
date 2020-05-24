import { Injectable } from "@angular/core";
import { HeaderData } from "./header-data.model";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class HeaderService {
  private _titleHistory: string[] = [];
  private _headerData = new BehaviorSubject<HeaderData>({
    title: "Início",
    icon: "home",
    routeUrl: "",
  });

  constructor() {}

  get headerData(): HeaderData {
    return this._headerData.value;
  }

  set headerData(headerData: HeaderData) {
    this._titleHistory.push(headerData.title);
    if (this._titleHistory.length > 5) {
      this._titleHistory = this._titleHistory.slice(
        -5,
        this._titleHistory.length
      );
    }
    this._headerData.next(headerData);
  }

  get titleHistory(): string[] {
    return this._titleHistory;
  }
}
