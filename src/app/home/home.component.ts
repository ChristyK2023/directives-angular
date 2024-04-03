import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  isDisplayBox: boolean = true
  items: string[] = [
    'Home',
    'Products',
    'Blog',
    'Contact'
  ]

  error: boolean = false

  constructor () { }

  ngOnInit(): void {

  }

  hideBox() {
    this.isDisplayBox = !this.isDisplayBox;
  }

}
