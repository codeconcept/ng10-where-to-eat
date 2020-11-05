import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { RestaurantService } from '../services/restaurant.service';

@Component({
  selector: 'app-sugestion-form',
  templateUrl: './sugestion-form.component.html',
  styleUrls: ['./sugestion-form.component.css'],
})
export class SugestionFormComponent implements OnInit {
  suggestionForm: FormGroup;
  message;

  constructor(private fb: FormBuilder, private rs: RestaurantService) {}

  ngOnInit(): void {
    this.suggestionForm = this.fb.group({
      name: ['', Validators.required],
    });
  }

  async addRestaurant() {
    console.log(this.suggestionForm.value);
    const result = await this.rs.createRestaurant(
      this.suggestionForm.value.name
    );
    console.log(result);
    if (result.id) {
      this.message = `Restaurant ${result.id} créé`;
    }
    this.suggestionForm.reset();
  }
}
