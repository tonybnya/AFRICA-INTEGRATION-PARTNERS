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

  downloadFile(): void {
    this.router.navigateByUrl('../../../assets/aip.pdf');
  }

//   manageTabs(): any {
//     const btns = document.querySelectorAll('.btn-tab');
//     const items = document.querySelectorAll('.content');
  
//     this.tabs.addEventListener("click", (e: { target: {
//       classList: any; dataset: { id: any; }; 
// }; }) => {
//       const { id } = e.target.dataset;
//       if (id) {
//         btns.forEach((btn) => {
//           btn.classList.remove("active");
//         });
//         e.target.classList.add("active");
//         items.forEach((item) => {
//           item.classList.remove("active");
//         });
//         this.element.classList.add("active");
//       }
//     });
//   }

}
