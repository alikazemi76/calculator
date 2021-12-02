import {Component, OnInit} from '@angular/core';
import {$e} from "@angular/compiler/src/chars";
import {isEmpty} from "rxjs";

// import Stack from "ts-data.stack";
@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  result: any = 0;

  constructor() {
  }

  mul: number = 0
  arr: any[] = []
  claus: any [] = []

  ngOnInit(): void {
  }

  getData($event: number) {
    this.mul = (this.mul * 10)
    this.mul += $event
    this.result = this.mul
  }

  getOperand($event: string) {
    this.arr.push([this.mul])
    if ($event == '+') {
      this.arr.push('+')
    }

    if ($event == '-') {
      this.arr.push('-')
    }

    if ($event == '/') {
      this.arr.push('/')
    }

    if ($event == '*') {
      this.arr.push('*')
    }

    this.mul = 0
    this.result = this.arr.join(' ')

  }

  resultant1(claus: any) {
    // const stack = new Stack()
    claus = claus
    // stack=Stak
  }


  list: any[] = []
  stack: any[] = ['+', '-', '/', '*']
  // stack=new Stack<any>()
  x: any = this.stack.length - 1
  lastValue: any = this.stack[this.x]
  // INNER: any = {
  //   '+':1, '-':1,
  //   '*':2, '/':2,
  // };
  y: any =''
  inner(entry: any): any {
    const INNER: any = {
      '+': 1, '-': 1,
      '*': 2, '/': 2,
    };
    return INNER[entry]
  }

  outer(entry: any): any {
    const OUTER: any = {
      '+': 1, '-': 1,
      '*': 2, '/': 2,
    };
    return OUTER[entry]
  }

  // value:any=this.arr.length
  resultant() {

    const OPERATORS: any = ['+', '-', '/', '*'];
    for (let entry of this.arr) {
      console.log()

      if (!OPERATORS.includes(entry)) {
        this.list.push(entry)
      } else {
        while (this.stack.length !== 0 && this.outer(entry) <= this.inner(this.lastValue)) {
          // while (this.stack.isEmpty() &&  this.outer(entry) <=  this.inner(this.stack.peek())){
          this.list.push(this.stack.pop())
          // this.stack.push(entry)
        }
        // while (this.stack.length !== 0) {
        //   this.list.push(this.stack.pop())
        // }
      }
    }
     this.y= this.stack.pop()

    // if (OPERATORS.includes(value)) {
      console.log(this.stack.pop())
    // } else {
    // }

    // }
    console.log(this.list)
    console.log(this.stack)
    // console.log(this.x-1)

    // console.log(this.arr[0])
    // this.arr.forEach(function (value) {
    // const array = [10, 11, 3, 20, 5];
    // const greaterThanTen = array.find(element => element > 10);
    // console.log(greaterThanTen)

    // if (){
    //   console.log('ni')
    // }else {
    // }
  }

}
