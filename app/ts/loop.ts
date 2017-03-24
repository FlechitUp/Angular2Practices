import {Component} from 'angular2/core';

@Component({
    styles:[`
        ul{
            list-style-type:none;
        }
    `],
    selector:'myloop',
    template:`<br>
    <input [class.blue]="!kutu" type="text" [(ngModel)]="kutu"  (keyup.enter)="ekle()"  /><button  [disabled]="!kutu" class="btn btn-primary"> ok </button>
    <ul>
    <li *ngFor="#veri of veriler;#i =index"> <button (click)="sil(i)"  class="btn btn-danger">ok</button>  {{veri}}</li>  
    </ul>`,
    styles:[`
        ul{
         background:dodgerblue;
         color:#f5f5f5;   
         list-style-type:none;
        }

        .blue{
            color:#fff;     
            background:blue;
        }
        li{
           
            box-shadow:0 0 5px blue;
            margin:5px;
        }
    `],


})

export class loop{
    veriler =["araba","tren", "metro","metrobus"];
    // Dictionary 
    //   veriler = [{"ad":"pez","soyad":"jewe"},{"ad":"alev","soyad":"Dila"}]

    ekle(){
        if (this.kutu != ""){
            this.veriler.push(this.kutu);
            this.kutu="";
        }
        
    }
    sil(b){
        //alert(b);
        //delete this.veriler[b];
        this.veriler.splice(b,1);
    }

}