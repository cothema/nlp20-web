import { Component, OnInit } from '@angular/core';
import { faBalanceScale } from '@fortawesome/free-solid-svg-icons/faBalanceScale';
import { faDatabase } from '@fortawesome/free-solid-svg-icons/faDatabase';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {
  faBalanceScale = faBalanceScale;
  faDatabase = faDatabase;
  activePricingModel?: 'basic' | 'nonprofit';
  pricingPlans = {
    basic: {
      standardPrice: 150,
    },
    pro: {
      standardPrice: 450,
    }
  };
  pricingModelBasic = {
    basic: {
      price: this.pricingPlans.basic.standardPrice,
      price2: this.pricingPlans.basic.standardPrice * 0.75,
      price3: this.pricingPlans.basic.standardPrice * 0.50,
    },
    pro: {
      price: this.pricingPlans.pro.standardPrice,
      price2: this.pricingPlans.pro.standardPrice * 0.75,
      price3: this.pricingPlans.pro.standardPrice * 0.50,
    },
  };
  discount = 1;

  constructor() {
  }

  ngOnInit(): void {
    this.onPricingModelChange();
  }

  onPricingModelChange() {
    if (this.activePricingModel === 'nonprofit') {
      this.discount = 0.5;
      return;
    }
    this.discount = 1;
  }
}
