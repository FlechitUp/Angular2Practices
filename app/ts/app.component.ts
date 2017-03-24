import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: '<button>tikla </button><h1>{{deger}}</h1>'
})

export class AppComponent {


deger=123456; //valor


eylem(){
    this.deger=123;
}        
          
}
