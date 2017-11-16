import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

	names:string[];

  constructor() { 
  	this.names=['fernando', 'carlos', 'ines'];
  }

  ngOnInit() {
  }

}
