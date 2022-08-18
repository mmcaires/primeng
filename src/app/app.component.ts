import { DadosPessoaisParticipante } from './models/dados-pessoais-participante';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  dadosPessoais:any;
  activeState: boolean[] = [true, false, false];

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
      this.primengConfig.ripple = true;
  }

  enviarForm(value:DadosPessoaisParticipante){
    this.dadosPessoais=value;
    console.log(this.dadosPessoais);
    this.toggle(0);
    this.toggle(1);
  }

  toggle(index: number) {
    this.activeState[index] = !this.activeState[index];
  }

}
