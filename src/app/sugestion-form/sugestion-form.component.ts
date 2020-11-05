import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sugestion-form',
  templateUrl: './sugestion-form.component.html',
  styleUrls: ['./sugestion-form.component.css'],
})
export class SugestionFormComponent implements OnInit {
  suggestionForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.suggestionForm = this.fb.group({
      name: ['', Validators.required],
    });
  }

  addRestaurant() {
    console.log(this.suggestionForm.value);
    this.suggestionForm.reset();
  }
}
