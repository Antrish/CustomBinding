import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
enteredSearchTextValue: string =''
@Output()
onSerachTextChanged : EventEmitter<string> = new EventEmitter<string>();

searchTextEntered(){
  this.onSerachTextChanged.emit(this.enteredSearchTextValue)
//console.log(this.enteredSearchTextValue)
}
}
