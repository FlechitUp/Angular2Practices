import {Component} from 'angular2/core';

@Component({

selector:"cevent",
template:`<button [class.red]="durum" (click)="eylemaa()"  >Clic me</button>{{valor}}<br>
 <input type="text" [disabled]="false" [(ngModel)]="peps" (keyup.enter)="al(peps)"/>`

})

export class clicevent{
    durum=true;
    myclass="blue";
    valor = " un valor turco "; 

eylemaa(){
    this.valor=this.valor+"youtube ";
    this.myclass="red";
    this.durum=!this.durum;
}
 
al(s){
    alert("!Um valor "+ s);
}


}