import { Component, OnInit } from '@angular/core';
import {Cliente} from "./cliente";

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] = [
    {id:1, nombre:'Martin', apellido:'Gomez', email:'m.gomez@gmail.com', createAt:''},
    {id:2, nombre:'Samuel', apellido:'Martinez', email:'s.martinez@gmail.com', createAt:''},
    {id:3, nombre:'Pedro', apellido:'Mendez', email:'p.mendez@gmail.com', createAt:''}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
