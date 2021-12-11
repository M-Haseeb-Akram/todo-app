import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-entry-point',
  templateUrl: './entry-point.component.html',
  styleUrls: ['./entry-point.component.css'],
  host: {
    '(document:keydown)': 'ActionByKeys($event)'
  }
})
export class EntryPointComponent implements OnInit {
  @Output() itemDetail: EventEmitter<string>= new EventEmitter();
  item_value = ""; 
  error_message = "";
  check_value = false;
  constructor() { }

  ngOnInit(): void {
  }

  addTodoItem = () => {
    this.checkforErrors();
    if(!this.check_value){
      this.itemDetail.emit(this.item_value);
      this.item_value = "";
    } 
    
  }
  checkforErrors = () => {
    let letters_allowed = /^[0-9a-zA-Z_ ]+$/;
    if(this.item_value.trim().length === 0){
      this.check_value = true;
      this.error_message = "Sorry! Enter some task First—check it out!";
    }
    else if (!this.item_value.match(letters_allowed)){
      this.check_value = true;
      this.error_message = "Sorry! Special Characters are not allowed—check it out!";
    }
    else{
      this.check_value = false;
      this.error_message = "";
    }
  }
  ActionByKeys = (event: KeyboardEvent) => {
    const name = event.key;
    if(name === 'Enter'){
        this.addTodoItem();
    }
  }
}
