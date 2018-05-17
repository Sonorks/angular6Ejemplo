import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ParqueaderoService {

  constructor(private httpClient:HttpClient) { }

  consultarPlaca(placa){
    return this.httpClient.get("http://localhost:8090/parking/ticket/'+placa").toPromise();
  }

}
