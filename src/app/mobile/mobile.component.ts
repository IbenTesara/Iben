import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss']
})
export class MobileComponent implements OnInit {

    public height = window.innerHeight;
    list: any = [
        {
            name: "Easy Vegan",
            images: [
                "assets/images/image_easyvegan_0.png",
                "assets/images/image_easyvegan_1.png",
                "assets/images/image_easyvegan_2.png",
            ],
            corp: "HoGent",
            customer: "EVA VZW",
            descr_short: "An Android application as part of the EVA campaign. The app offers a interactive game-like design which helps users to slowly find their way to a vegan lifestyle. Each day the user gets challenged to cook a new vegan recipe. The further the user gets along the path, the brighter the environment gets and the more badges you collect.",
            frameworks : ['Java Android','Gimp']
        },
        {
            name: "UiTPAS",
            images: [
                "assets/images/image_uitpas_0.png",
                "assets/images/image_uitpas_1.png",
                "assets/images/image_uitpas_2.png"
            ],
            corp: "Appreciate",
            customer: "CultuurNet",
            frameworks : ['Ionic 2'],
            descr_short: "A digital alternative to the UiTPAS-card. This application allows users to collect UiTPAS-points through scanning QR-codes."
        },
        {
            name: "Learn2Drive",
            images: [
                "assets/images/image_l2d_0.png",
                "assets/images/image_l2d_1.png",
                "assets/images/image_l2d_2.png"
            ],
            corp: "Appreciate",
            customer: "Learn2Drive",
            frameworks : ['Ionic','Gulp'],
            descr_short: "A dual-function mobile app for both phone and tablet. The mobile application functions as a communication tool between student and teachers of the driving-school Learn2Drive, and gives the teachers a mobile managing system to monitor both students and driving-sessions. "
        }
    ];

    item: any = this.list[0];

    constructor() {}

    ngOnInit() {}

    setItem(item){
        this.item = item;
    }

}
