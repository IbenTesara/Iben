import {
    Component,
    OnInit
} from '@angular/core';

@Component({
    selector: 'web',
    templateUrl: './web.component.html',
    styleUrls: ['./web.component.scss']
})
export class WebComponent implements OnInit {

    public height = window.innerHeight;
    list: any = [
        {
            name: "Dull Consulting",
            images: [
                "assets/images/image_dull_0.png",
                "assets/images/image_dull_1.png",
                "assets/images/image_dull_2.png",
            ],
            corp: "Appreciate",
            customer: "Dull Consulting",
            descr_short: "A front-end application made for Dull-Consulting, as a communication platform between the consultants of Dull and their customers. With the help of this online platform, every-day tasks within the workflow of Dull were streamlined. Aside from being the central communication tool, the platform also allows for the creation of invoices, planning meetings and user-management.",
            frameworks : ['AngularJS','SASS','Gulp','Bootstrap','Admin-LTE']
        },
        {
            name: "Smart-Family",
            images: [
                "assets/images/image_smartfamily_0.png",
                "assets/images/image_smartfamily_1.png",
                "assets/images/image_smartfamily_2.png"
            ],
            corp: "Appreciate",
            customer: "Dirk Van Gompel",
            frameworks : ['AngularJS','SASS','Grunt','Bootstrap'],
            descr_short: "Smart-family, a non-hybrid mobile app based on an underlying web-application. The application serves as a central communication point between family, caretakers and residents of service-flats. Several options are included to create an optimal environment for residents, such as a calendar to keep up with their medication."
        },
        {
            name: "Foute Party Refund",
            images: [
                "assets/images/image_starnet_0.png"
            ],
            corp: "Appreciate",
            customer: "StarNet",
            frameworks : ['Angular','SASS','Bootstrap','Webpack'],
            descr_short: "A front-end application serving as an online refund-tool."
        },
        {
            name: "UitDatabank 3",
            images: [
                "assets/images/image_udb3_0.png",
                "assets/images/image_udb3_1.png",
                "assets/images/image_udb3_2.png"
            ],
            corp: "Appreciate",
            customer: "CultuurNet",
            frameworks : ['AngularJS','SASS','Bootstrap','Grunt'],
            descr_short: "Support for the UDB3 application made by CultuurNet. The application was created by TwoDotsTwice and CultuurNet. The application serves as an online database for events associated with the UitInVlaanderen principle."
        }
    ];

    item: any = this.list[0];

    constructor() {}

    ngOnInit() {}

    setItem(item){
        this.item = item;
    }

}
