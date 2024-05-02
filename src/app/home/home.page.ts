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

  unidadeSelecionada = ''
  unidadeSelecionada2 = ''
  valorConversao = 0

  converter(){
    if(this.unidadeSelecionada == 'km' && this.unidadeSelecionada2 == 'milhas'){
      this.valorConversao = this.valorRange * 0.621371
    }
    else if(this.unidadeSelecionada == 'km' && this.unidadeSelecionada2 == 'pes'){
      this.valorConversao = this.valorRange * 3280.84
    }
    else if(this.unidadeSelecionada == 'km' && this.unidadeSelecionada2 == 'jardas'){
      this.valorConversao = this.valorRange * 1093.61
    }
    else if(this.unidadeSelecionada == 'm' && this.unidadeSelecionada2 == 'milhas'){
      this.valorConversao = this.valorRange * 0.000621371
    }
    else if(this.unidadeSelecionada == 'm' && this.unidadeSelecionada2 == 'pes'){
      this.valorConversao = this.valorRange * 3.28084
    }
    else if(this.unidadeSelecionada == 'm' && this.unidadeSelecionada2 == 'jardas'){
      this.valorConversao = this.valorRange * 1.09361
    }
    else if(this.unidadeSelecionada == 'cm' && this.unidadeSelecionada2 == 'milhas'){
      this.valorConversao = this.valorRange * 0.0000062137
    }
    else if(this.unidadeSelecionada == 'cm' && this.unidadeSelecionada2 == 'pes'){
      this.valorConversao = this.valorRange * 0.0328084
    }
    else if(this.unidadeSelecionada == 'cm' && this.unidadeSelecionada2 == 'jardas'){
      this.valorConversao = this.valorRange * 0.0109361
    }
  }
}
