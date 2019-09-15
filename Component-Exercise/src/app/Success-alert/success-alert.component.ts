import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'success-alert',
    template: '<p> The Success Alert Message</p>',
    styles: ['p{ color:green }']
})

export class SuccessAlertComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}