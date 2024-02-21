import {AbstractControl, ValidatorFn} from "@angular/forms";

export function inThePast(): ValidatorFn{
  return (control: AbstractControl)=>{
    const dateEntree = new Date(control.value);
    const aujourdhui = new Date();

    if(dateEntree < aujourdhui)
      return null

    return {pasDansLePasse: "La date n'est pas dans le passé"}
  }
}
