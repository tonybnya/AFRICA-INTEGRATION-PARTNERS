import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tabs: any;
  element: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // downloadFile(): void {
  //   this.router.navigateByUrl('../../../assets/aip.pdf');
  // }

}
