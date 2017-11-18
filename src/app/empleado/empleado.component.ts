import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {
  @Input() name: string;
  
  constructor() {}

  ngOnInit() {
  }

}
