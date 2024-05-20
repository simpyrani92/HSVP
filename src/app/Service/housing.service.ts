import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IProperty } from '../model/Iproperty';
import { Property } from '../model/property';
// import { IProperty } from '../Property/IProperty.interface';



@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http: HttpClient) { }

  getAllProperties(SellRent: number): Observable<IProperty[]> {
    debugger;
    return this.http.get<any>('http://localhost:4200/data/properties.json').pipe(
      map((data: any) => {
        if (SellRent !== 2) {
          return data.filter((property: IProperty) => property.SellRent !== 2);
        } else {
          return data.filter((property: IProperty) => property.SellRent === 2);
        }
      })
    );
  }
  addProperty(property:Property){
    localStorage.setItem('newProp',JSON.stringify(property));
  }

  newPropId() {
    const currentPID = localStorage.getItem('PID');
  
    if (currentPID !== null) {
      localStorage.setItem('PID', String(+currentPID + 1));
      return +currentPID + 1;
    } else {
      localStorage.setItem('PID', '101');
      return 101;
    }
  }
  
}
