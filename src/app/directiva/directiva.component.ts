import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css']
})
export class DirectivaComponent implements OnInit {

  listado: string[] = ['fruto', 'verdura', 'carne'];

  habilitar: boolean = true;

  constructor() {
  }

  ngOnInit(): void {
  }

  setHabilitar(): void {
    // el valor de habilitar es true?, si es si pone false, sino true
    this.habilitar = (this.habilitar == true) ? false : true;
  }

}
