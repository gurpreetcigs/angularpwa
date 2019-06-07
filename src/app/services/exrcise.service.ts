import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { exercise } from './../models/Exercise';
import { Observable } from 'rxjs/Observables'

@Injectable({
  providedIn: 'root'
})

export class ExerciseService{
  constructor(private http:HttpClient){

  }
  url:string;

  // Get list of exercise
  getHeroesList(): Observable<exercise[]>{
    return this.http.get(this.url)
  }
}