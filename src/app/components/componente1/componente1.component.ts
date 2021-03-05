import { Component, Input, OnInit } from '@angular/core';

export interface Persona {
  nombre?:string;
  apellido?:string;
  edad?:number;
}


@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})

export class Componente1Component implements OnInit {

  alumnos:Persona [] = [

      {nombre:'Marc',
       apellido:'Estalella',
       edad:26},

      {nombre:'Zdravko',
       apellido:'Marinov',
       edad:21},

      {nombre:'Pepita',
       edad:28}

  ]


  recibido(ev){
    console.log('EVENTO RECIBIDO DEL HIJO', ev);
  }

  constructor() {
    console.log('implemento constructor');
   }

  ngOnInit(): void {

  }

}
