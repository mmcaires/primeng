import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {
  valid:boolean=false;
  form: FormGroup;

  @Output() enviarFormEvent= new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder){
    this.form=this.form = this.formBuilder.group({
      NumeroCPF: ["", [Validators.required]],
      NomeEntidade: ["",[Validators.required,Validators.minLength(5)]],
      NomePreferido: ["",[Validators.required,Validators.minLength(5)]],
      DataNascimento: ["",[Validators.required]],
      DataObito: [""],
      NomeMae: ["",[Validators.required,Validators.minLength(5)]],
      NomePai: ["",[Validators.required,Validators.minLength(5)]]
    });
  }

  ngOnInit(): void {}


  enviarForm() {
    if(this.form.valid){
      this.enviarFormEvent.emit(this.form.value);
    }
  }

}
