import { Component, OnInit } from '@angular/core';
import {SnackbarControllerService} from "./snackbar-controller.service";
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss'],
  animations: [
    trigger('snackbarAnimationTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('100ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('100ms', style({ opacity: 0 }))
      ])
    ]),
  ]

})
export class SnackbarComponent implements OnInit {

  constructor(public controller: SnackbarControllerService) { }

  ngOnInit(): void {
  }

}
