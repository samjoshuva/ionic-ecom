import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss']
})
export class ProductPage implements OnInit {
  constructor(public actionSheetController: ActionSheetController) {}

  ngOnInit() {}

  segmentChanged($event: any) {
    console.log($event);
  }

  async openActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Customize',
      buttons: [
        {
          text: `128GB \n  $109`,
          handler: () => {
            console.log('Delete clicked');
          }
        },
        {
          text: '256GB $250',
          handler: () => {
            console.log('Share clicked');
          }
        },
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',

          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    await actionSheet.present();
  }
}
