import { Component } from '@angular/core';
import { RangeCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
  valorRange = 0;
  valorConta = '';
  valorGorjeta = 0;
  valorTotal = 0;

  calcularGorjeta() {
    this.valorGorjeta = (this.valorRange * 0.01)* parseFloat(this.valorConta);
    this.valorTotal = parseFloat(this.valorConta)+this.valorGorjeta;
  }
  onIonChange(ev:RangeCustomEvent) {
    this.valorRange = parseInt(ev.detail.value.toString());
    this.calcularGorjeta();
  }
}
