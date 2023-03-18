import { Component , EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
@Input('AliasOfAll') all:number=0; // also we can use alias name of properties if needed as here
@Input() free:number=0;            // 'AliasOfAll', this is also must to use same alias in view template 
@Input() premium:number=0;

selectedRadioButton:string='All';
@Output()
filterRadioButtonSelectionChanged: EventEmitter <string> = new EventEmitter<string>();
onRadioButtonSelectionChanged(){
  this.filterRadioButtonSelectionChanged.emit(this.selectedRadioButton);
  //console.log('this.selectedRadioButton',this.selectedRadioButton)
}
}
