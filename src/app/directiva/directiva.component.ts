import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css']
})
export class DirectivaComponent implements OnInit {

  listado: string[] = ['fruto', 'verdura', 'carne'];
  habilitar: boolean = true;

  resultado: number;
  sumar1: number;
  sumar2: number;

  constructor() {
    this.resultado = 0;
    this.sumar1 = 0;
    this.sumar2 = 0;
  }

  ngOnInit(): void {
  }

  setHabilitar(): void {
    // el valor de habilitar es true?, si es si pone false, sino true
    this.habilitar = (this.habilitar == true) ? false : true;
  }

  sumar() {
    console.log(this.sumar1 );
    console.log(this.sumar2 );
    console.log(this.resultado );
    this.resultado = this.sumar1 + this.sumar2;
  }

  num1(e) {
    this.sumar1 = e.target.value ;
    console.log(this.sumar1);
  }

  num2(e){
    this.sumar2 = e.target.value ;
  }
}
