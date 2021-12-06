import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-entry-point',
  templateUrl: './entry-point.component.html',
  styleUrls: ['./entry-point.component.css'],
  host: {
    '(document:keydown)': 'keys_action($event)'
  }
})
export class EntryPointComponent implements OnInit {
  @Output() itemDetail: EventEmitter<string>= new EventEmitter();
  item_value : string = ""; 
  check_value : boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  addItem = () => {
    if(this.item_value.length === 0){
      this.check_value = true;
      setTimeout( () => {this.check_value = false;}, 3000)
    }
    else{
      this.itemDetail.emit(this.item_value);
    }
    this.item_value = "";
  }

  keys_action = (event: KeyboardEvent) => {
    const name = event.key;
    if(name === 'Enter'){
        this.addItem();
    }
  }
}
