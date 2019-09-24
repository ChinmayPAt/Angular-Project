import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trainee } from './trainee';
import { HttpHeaders } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class TraineeService {

  url:string="http://localhost:3000/trainee";

  httpOptions={
    headers:new HttpHeaders({
      'Content-type':'application/json',
    })
  };

  constructor(private http:HttpClient) { }

  getTrainee():Observable<Trainee>{
    return this.http.get<Trainee>(this.url,this.httpOptions);
  }

  deleteTrainee(id:number):Observable<Trainee>{
    const delete_url:string = `${this.url}/${id}`;
    return this.http.delete<Trainee>(delete_url,this.httpOptions);
  }
}
