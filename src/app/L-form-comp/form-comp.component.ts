import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-form-comp",
  templateUrl: "./form-comp.component.html",
  styleUrls: ["./form-comp.component.css"]
})
export class FormCompComponent implements OnInit {
  pass = "cd";
  constructor() {}

  ngOnInit() {}
}
