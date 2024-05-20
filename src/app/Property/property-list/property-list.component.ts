import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { HousingService } from './../../Service/housing.service';
import { ActivatedRoute } from '@angular/router';
import { IPropertyBase } from '../../model/Ipropertybase';
import { isPlatformBrowser } from '@angular/common';
// import { IPropertyBase } from '../../model/Ipropertybase';
@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'] // Correct the property name to styleUrls
})
export class PropertyListComponent implements OnInit {
  properties!: Array<IPropertyBase>;
  SellRent = 1;
  x!: string;

  constructor(private route: ActivatedRoute, private housing: HousingService, @Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void {
    debugger;
    this.x = this.route.snapshot.url.toString();

    if (this.x === "rent-property") {
      this.SellRent = 2;
    } else {
      this.SellRent = 1; // Set a default value if needed
    }


    // Corrected URL path using forward slashes
    this.housing.getAllProperties(this.SellRent).subscribe(
      (data) => {
        this.properties = data;
        if (isPlatformBrowser(this.platformId)) {
          // Only access localStorage in a browser environment
          const newProperty = JSON.parse(localStorage.getItem('newProp')||'[]');
          // const newProperty = storedProp ? JSON.parse(storedProp) : [];

          if (newProperty.SellRent == this.SellRent) {
            this.properties = [newProperty, ...this.properties];
          }
        }
          console.log(data);
          console.log(this.x);
        },
        (error) => {
          console.log('httperror:');
          console.log(error);
        }
    );
  }




}
