import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public autor : any = {nombre: 'Nicolas', apellido: 'Celeri'};

  constructor() { }

  ngOnInit(): void {
    console.log("hola perro");
  }

}
