import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  salvaNumeroTavolo(numero:string){
    localStorage.setItem('numeroTavolo', numero)
  }

  prendiNumeroTavolo(){
    return localStorage.getItem('numeroTavolo')
  }
}
