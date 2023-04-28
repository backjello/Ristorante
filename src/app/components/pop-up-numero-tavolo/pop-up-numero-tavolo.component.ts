import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-pop-up-numero-tavolo',
  templateUrl: './pop-up-numero-tavolo.component.html',
  styleUrls: ['./pop-up-numero-tavolo.component.css']
})
export class PopUpNumeroTavoloComponent {

  form:FormGroup
  numeroTavolo!:number

  constructor(private fb:FormBuilder, private localStorage:LocalStorageService){
    this.form = this.fb.group({
      numeroTavolo: ['', [Validators.required, Validators.min(1), Validators.max(20)]]
    })
  }

  conferma(){
    this.localStorage.salvaNumeroTavolo(this.form.value)
  }
}
