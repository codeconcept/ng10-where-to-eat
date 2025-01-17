import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { Restaurant } from '../models/restaurant';
import { RestaurantService } from '../services/restaurant.service';

@Component({
  selector: 'app-suggestion-list',
  templateUrl: './suggestion-list.component.html',
  styleUrls: ['./suggestion-list.component.css'],
})
export class SuggestionListComponent implements OnInit {
  restaurantsCollection: AngularFirestoreCollection<Restaurant>;
  restaurants$: Observable<Restaurant[]>;

  constructor(private rs: RestaurantService) {}

  async ngOnInit(): Promise<void> {
    this.restaurantsCollection = await this.rs.readRestaurants();
    this.restaurants$ = this.restaurantsCollection.valueChanges({
      idField: 'id',
    });
  }

  vote(restaurant) {
    this.rs.voteForRestaurant(restaurant);
  }

  setRankLabel(restaurant: Restaurant) {
    const label =
      restaurant.votes <= 1
        ? `${restaurant.votes} vote pour ${restaurant.name}`
        : `${restaurant.votes} votes pour ${restaurant.name}`;

    return label;
  }
}
