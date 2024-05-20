import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // Correct import for Router

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css'], // Correct typo in styleUrls
})
export class PropertyDetailsComponent {
  public propertyId!: number;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.propertyId = Number(this.route.snapshot.params['id']);
    this.route.params.subscribe((params)=>{this.propertyId=+params['id']})

  }

  onSelectNext() {
    this.propertyId += 1;
    this.router.navigate(['property-detail', this.propertyId]);
  }
}
