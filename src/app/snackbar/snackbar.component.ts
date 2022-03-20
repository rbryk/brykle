import { Component, OnInit } from '@angular/core';
import {SnackbarControllerService} from "./snackbar-controller.service";

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent implements OnInit {

  constructor(public controller: SnackbarControllerService) { }

  ngOnInit(): void {
  }

}
