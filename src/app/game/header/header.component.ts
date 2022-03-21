import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    showHelp: boolean = false;
    constructor() {
    }

    ngOnInit(): void {
    }

    clickHelp() {
        this.showHelp = true;
    }

    onXClicked() {
        this.showHelp = false;

    }
}
