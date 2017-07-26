import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter
} from '@angular/core';

@Component({
    selector: 'list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

    @Input() list: any;
    @Input() selectedItem: any;
    @Output() setItem = new EventEmitter();

    constructor() {}

    ngOnInit() {}

    callParent(item) {
    this.setItem.next(item);
  }
}
