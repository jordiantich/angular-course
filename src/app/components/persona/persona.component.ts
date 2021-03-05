import { EventEmitter } from '@angular/core';
import { Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  @Input() alumno;
  @Output() mensaje = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  click(){
    console.log("click",this.alumno.nombre);
    this.mensaje.emit(this.alumno.nombre);
  }

}
