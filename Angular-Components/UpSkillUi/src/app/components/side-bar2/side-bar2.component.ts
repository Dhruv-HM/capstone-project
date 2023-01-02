import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar2',
  templateUrl: './side-bar2.component.html',
  styleUrls: ['./side-bar2.component.css']
})
export class SideBar2Component implements OnInit {

  @Input() sideNavStatus: boolean=false;

  list=[
    {
      number:1,
      name:'Introduction',
      icon:'fa-solid fa-house'
    },
    {
      number:2,
      name:'Architecture',
      icon:'fa-solid fa-sitemap'
    },
    {
      number:3,
      name:'Modules',
      icon:'fa-light fa-list-timeline'
    },
    {
      number:4,
      name:'Techs Used',
      icon:'fa-sharp fa-solid fa-microchip'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
