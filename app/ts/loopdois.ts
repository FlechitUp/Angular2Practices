import {Component} from 'angular2/core';

@Component({
    selector:'loopdois',
    template:`<button (click)="sayi=sayi+1" > + </button> <button (click)="sayi=sayi-1"> - </button>
    <h1>{{sayi}}</h1>
    <br>
    <h1 [ngClass]="{'red':sayi>6}"> mermela </h1>
    <br>
    <input 
    [ngStyle]="{
        backgroundColor:sayi>5 ? 'blue':'gray',
        color:sayi>5 ? 'white':'gray'
    }"
     type="text" [placeholder]="eylen()" >

    `

 })

 export class loopdois{
    sayi=0;
    eylen(){
        return "mermela "+ this.sayi;
    }

 }