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

  openProduct() {
    this.router.navigate(['/product']);
  }
}
