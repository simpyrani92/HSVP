import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { IPropertyBase } from '../../model/Ipropertybase';
import { Property } from '../../model/property';
import { HousingService } from '../../Service/housing.service';
import * as alertify from 'alertifyjs'; // Fix the import statement
// import { IProperty } from '../IProperty.interface';
// import { IPropertyBase } from '../../model/IPropertybase';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css'],
})
export class AddPropertyComponent {
  //  @ViewChild('Form') addPropertyForm!:NgForm;
  @ViewChild('formTabs') formTabs!: TabsetComponent;
  propertyTypes: Array<String> = ["House", "Apartment", "Duplex"];
  furnishTypes: Array<String> = ["Fully", "Semi", "Unfurnished"];
  addPropertyForm!: FormGroup;
  nextClicked!: boolean;
  cityList: Array<String>=["Chandigarh","Fatehabad"];
  property=new Property();
  propertyView: IPropertyBase[] = [{
    Id: 0,
    SellRent: 0,
    Name: "",
    PType: "",
    FType: "",
    Price: 0,
    Image: "",
    city: "",
    BHK: "",
    BuiltArea: 0,
    RTM: 0,
    readyToMove:false,
    estPossessionOn:"",

  }];
  // Name: any;
  Type: any;
  // Price: any;
  staticTabs: any;
  constructor(private fb: FormBuilder, private router: Router,private housingService:HousingService) { }
  ngOnInit() {

    this.createAddPropertyForm()
  }
  createAddPropertyForm() {
    this.addPropertyForm = this.fb.group({
      BasicInfo: this.fb.group({

        SellRent: [null, Validators.required],
        Name: [null, Validators.required],
        PType: [null, Validators.required],
        FType: [null, Validators.required],
        BHK: [null, Validators.required],
        City: [null, Validators.required],
        // Id:[null,Validators.required],
      }),
      PriceInfo: this.fb.group({
        Price: [null, Validators.required],
        BuiltArea: [null, Validators.required],
        CarpetArea: [null],
        Security: [0],
        Maintenance: [0],
      }),

      AddressInfo: this.fb.group({
        FloorNo: [null],
        TotalFloor: [null],
        Address: [null, Validators.required],
        LandMark: [null],
      }),

      OtherInfo: this.fb.group({
        RTM: [null, Validators.required],
        PossessionOn: [null, Validators.required],
        AOP: [null],
        Gated: [null],
        MainEntrance: [null],
        Description: [null]
      })
    })
  }



  // #region  <Getting-Method>

  // #region <FormGroups>
  get BasicInfo() {
    return this.addPropertyForm.controls['BasicInfo'] as FormGroup
  }
  get PriceInfo() {
    return this.addPropertyForm.controls['PriceInfo'] as FormGroup
  }
  get AddressInfo() {
    return this.addPropertyForm.controls['AddressInfo'] as FormGroup
  }
  get OtherInfo() {
    return this.addPropertyForm.controls['OtherInfo'] as FormGroup
  }
  // #endregion

  // #region <FormControls>
  get SellRent() {

    return this.BasicInfo.controls['SellRent'] as FormControl
  }
  get Name(){
    return this.BasicInfo.controls['Name'] as FormControl
  }
  get FType(){
    return this.BasicInfo.controls['FType'] as FormControl
  }
  get PType(){
    return this.BasicInfo.controls['PType'] as FormControl
  }
  get BHK(){
    return this.BasicInfo.controls['BHK'] as FormControl
  }
  get City(){
    return this.BasicInfo.controls['City'] as FormControl
  }
  get Price() {
    return this.PriceInfo.controls['Price'] as FormControl;
  }
  get BuiltArea() {
    return this.PriceInfo.controls['BuiltArea'] as FormControl;
  }
  get CarpetArea() {
    return this.PriceInfo.controls['CarpetArea'] as FormControl;
  }
  get Security() {
    return this.PriceInfo.controls['Security'] as FormControl;
  }
  get Maintainance() {
    return this.PriceInfo.controls['Maintainance'] as FormControl;
  }
  get FloorNo() {
    return this.AddressInfo.controls['FloorNo'] as FormControl;
}

get TotalFloor() {
    return this.AddressInfo.controls['TotalFloor'] as FormControl;
}

get Address() {
    return this.AddressInfo.controls['Address'] as FormControl;
}

get LandMark() {
    return this.AddressInfo.controls['LandMark'] as FormControl;
}

get RTM() {
    return this.OtherInfo.controls['RTM'] as FormControl;
}

get PossessionOn() {
  return this.OtherInfo.controls['PossessionOn'] as FormControl;
}


get AOP() {
    return this.OtherInfo.controls['AOP'] as FormControl;
}

get Gated() {
    return this.OtherInfo.controls['Gated'] as FormControl;
}

get MainEntrance() {
    return this.OtherInfo.controls['MainEntrance'] as FormControl;
}

get Description() {
    return this.OtherInfo.controls['Description'] as FormControl;
}
get PostedOn(){
  return this.OtherInfo.controls['PostedOn'] as FormControl;
}
 
  //#endregion
  //#endregion
  onBack() {
    this.router.navigate(['/']);
  }

  onSubmit() {
    debugger;
    this.nextClicked = true;
if( this.allTabsValid()){
  this.mapProperty();
  this.housingService.addProperty(this.property);
  alert("Data Added Ssuccessfully")
  //  alertify.success('congrats, Your Property listed Successfully in your website');
    console.log('SellRent=' + this.addPropertyForm.value.BasicInfo.SellRent)
    console.log(this.addPropertyForm);
    console.log(this.propertyView);
  if(this.SellRent.value=='2'){
this.router.navigate(['/rent-property'])
  }
else{
  this.router.navigate(['/']);
}

}  else{

// alertify.error('Please review the form and provide all  valid enteries')
  }
  
    
  }
  mapProperty(){[
    // mapProperty() {
      this.property.Id = this.housingService.newPropId(),
      this.property.SellRent = this.SellRent?.value || 0,
      this.property.BHK = this.BHK?.value || "",
    this.property.PType=this.PType?.value || "",
    this.property.Name=this.Name?.value || "",
    this.property.city=this.City?.value || "",
    this.property.FType=this.FType?.value || "",
    this.property.Price=this.Price?.value || 0,
    this.property.Security=this.Security?.value || 0,
    this.property.Maintainance=this.Maintainance?.value || 0,
    this.property.BuiltArea=this.BuiltArea?.value || 0,
    this.property.CarpetArea=this.CarpetArea?.value || 0,
    this.property.FloorNo=this.FloorNo?.value || 0,
    this.property.TotalFloor=this.TotalFloor?.value || 0,
    this.property.Address=this.Address?.value || "",
    this.property.Address2=this.LandMark?.value || "",
    this.property.readyToMove=this.RTM?.value || false,
    this.property.AOP=this.AOP?.value || "",
    this.property.Gated=this.Gated?.value || "",
    this.property.MainEntrance=this.MainEntrance?.value || "",
    this.property.Possession=this.PossessionOn?.value || "",
    this.property.Description=this.Description?.value || "",
    this.property.PostedOn=this.PostedOn?.value || "",

  ]}

  allTabsValid():boolean{

    if (this.BasicInfo.invalid) {
      this.formTabs.tabs[0].active = true;
      return false;
    }
    if (this.PriceInfo.invalid) {
      this.formTabs.tabs[1].active = true;
      return false;
    }
    if (this.AddressInfo.invalid) {
      this.formTabs.tabs[2].active = true;
      return false;
    }
    if (this.OtherInfo.invalid) {
      this.formTabs.tabs[3].active = true;
      return false;
    }
    return true;
  }
  selectTab(tabId: number, IsCurrentTabValid: boolean) {
    this.nextClicked = true;
    if (IsCurrentTabValid) {
      this.formTabs.tabs[tabId].active = true;
    }
  }
  submit() {

  }

}
