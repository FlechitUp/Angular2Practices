import {Component} from 'angular2/core';

@Component({
    selector: "ders",  // nombre del tag
     template: `{{deger}} <br>
     <input type="text" placeholder="twins" [(ngModel)]="kutu" />{{kutu}} <br>
     <input type="text" placeholder="num1" [(ngModel)]="n1" /> <input type="text" placeholder="num2" [(ngModel)]="n2" /> {{n1 - n2}}`
})

export class deneme {
    deger= "Ingrese 2 numeros";
}