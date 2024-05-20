import { Component, Input } from '@angular/core';
import { IPropertyBase } from '../../model/Ipropertybase';


@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css'] // Fix the property name from styleUrl to styleUrls
})
export class PropertyCardComponent {
  @Input() properties: IPropertyBase[]=[{
    Id:0,
    SellRent:0,
    Name:"",
    PType:"",
    FType:"",
    Price:0,
    Image:"",
    city:"",
    BHK:"",
    BuiltArea:0,
    RTM:0,
   
   }];;
  @Input() hideIcons!:boolean; 
  constructor() {}
  ngOnInit(): void {
    // Log the property when it is initialized
    console.log('PropertyCardComponent - Property:', this.properties);
  }
}
