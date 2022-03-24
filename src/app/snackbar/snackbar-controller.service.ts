import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SnackbarControllerService {

    public timeout: number = 3500;

    public text: string = '';
    public shown: boolean = false;
    private timeoutObj: number | undefined;

    constructor() {
    }

    show(text: string) {
        this.text = text;
        this.shown = true;
        if (this.timeoutObj !== undefined) {
            clearTimeout(this.timeoutObj);
        }
        this.timeoutObj = setTimeout(() => {
            this.shown = false;
            this.timeoutObj = undefined;
        }, this.timeout);
    }
}
