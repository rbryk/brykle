import {Component, Input, OnInit} from '@angular/core';
import {CharacterState} from "../../../character-state";

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss']
})
export class RowComponent implements OnInit {

  @Input() public guess : CharacterState[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

}
