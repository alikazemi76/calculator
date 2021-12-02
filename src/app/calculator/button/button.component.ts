import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {formatNumber} from "@angular/common";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

 @Input() title:string ='';
 @Input() css:string ='';
 @Output() data:EventEmitter<number>=new EventEmitter<number>();
 @Output() operand:EventEmitter<string>=new EventEmitter<string>();
  tl:number=Number(this.title);
  constructor() { }

  ngOnInit(): void {
  }
  clicked(){

    // if(typeof )
    // this.tl=Number(this.title)
    // console.log(this.tl=this.tl*10)
    // console.log(this.tl)

    this.data.emit(Number(this.title))
    this.operand.emit((this.title))
    // this.data.emit(String(this.title))

    // this.data.emit(this.title))
  }

}
