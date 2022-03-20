import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SnackbarControllerService {

    public timeout: number = 3000;

    public text: string = '';
    public shown: boolean = false;

    constructor() {
    }

    show(text: string) {
        this.text = text;
        this.shown = true;
        setTimeout(() => {
            this.shown = false;
        }, this.timeout);
    }
}
