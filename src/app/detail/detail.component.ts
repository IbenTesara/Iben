import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

    @Input() item : any;
    public height = window.innerHeight * (3.1/4);

  constructor() { }

  ngOnInit() {
  }

}
