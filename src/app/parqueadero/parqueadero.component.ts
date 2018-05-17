import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ParqueaderoService } from './parqueadero.service';
@Component({
  selector: 'app-parqueadero',
  templateUrl: './parqueadero.component.html',
  styleUrls: ['./parqueadero.component.css'],
  providers: [ParqueaderoService]
})
export class ParqueaderoComponent implements OnInit {

  consultaPlaca:String="AAA111";

  constructor( private parqueaderoService:ParqueaderoService ) { }

  ngOnInit() {
  }

  consultarPlaca(){
    this.parqueaderoService.consultarPlaca("HOLA")
    .then(data => {
      console.log(data);
    }, error =>{
      alert(error.error.message);
    })
  }

  probar(){
    alert(this.consultaPlaca);
  }
  limpiar(){
    this.consultaPlaca="";
  }

}
