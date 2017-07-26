import {
    Component,
    OnInit
} from '@angular/core';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

    public age: number = 23;

    public web: any = [
        {
            image: '../../assets/images/framework_angular.png',
            name: 'Angular'
      },
        {
            image: '../../assets/images/framework_angularjs.png',
            name: 'AngularJS'
      },
        {
            image: '../../assets/images/framework_vue.png',
            name: 'Vue'
      }
  ];
    public mobile: any = [
        {
            image: '../../assets/images/framework_ionic3.png',
            name: 'Ionic 3'
      },
        {
            image: '../../assets/images/framework_ionic.png',
            name: 'Ionic'
      },
        {
            image: '../../assets/images/framework_swift.png',
            name: 'Swift'
      }
  ];
    public desktop: any = [
        {
            image: '../../assets/images/framework_electron.png',
            name: 'Electron'
      },
        {
            image: '../../assets/images/framework_c.png',
            name: 'C#'
      },
        {
            image: '../../assets/images/framework_cobol.png',
            name: 'Cobol'
      }
  ];
    public games: any = [
        {
            image: '../../assets/images/framework_phaser.png',
            name: 'Phaser'
      },
        {
            image: '../../assets/images/framework_unity.png',
            name: 'Unity'
      },
        {
            image: '../../assets/images/framework_aframe.png',
            name: 'A-Frame'
      }
  ]

    constructor() {}

    ngOnInit() {}

}
