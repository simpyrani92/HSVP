import { Injectable } from '@angular/core';
import * as alertify from 'alertifyjs'; // Fix the import statement

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  // success(message: string) {
  //   alertify.success(message); // Use alertify.success instead of alertyfy.success
  // }

  // warning(message: string) {
  //   alertify.warning(message);
  // }

  // error(message: string) {
    // alertify.error(message);
  // }
}
