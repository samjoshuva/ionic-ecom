import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss']
})
export class ProductsPage implements OnInit {
  constructor(
    private router: Router,
    public actionSheetController: ActionSheetController
  ) {}

  ngOnInit() {}

  openCart() {
    this.router.navigate(['/cart']);
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
