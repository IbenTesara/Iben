import {
    Component,
    OnInit,
    Input
} from '@angular/core';

@Component({
    selector: 'tech',
    templateUrl: './tech.component.html',
    styleUrls: ['./tech.component.scss']
})
export class TechComponent implements OnInit {

    @Input() specs: any;

    constructor() {}

    ngOnInit() {}

}
