import { Component, Input, OnChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { map } from 'rxjs/operators';

import { Restaurant } from '../models/restaurant';
import { ModalComponent } from './modal.component';

@Component({
  selector: 'app-restaurant-ranking',
  templateUrl: './restaurant-ranking.component.html',
  styleUrls: ['./restaurant-ranking.component.css'],
})
export class RestaurantRankingComponent implements OnChanges {
  @Input() restaurants$;
  sortedRestaurants: Restaurant[];
  modalResult;

  constructor(public dialog: MatDialog) {}

  openDialog(restau) {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '350px',
      data: { ...restau },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.modalResult = result;
      console.log('this.modalResult', this.modalResult);
    });
  }

  ngOnChanges(changes): void {
    console.log('changes', changes);
    if (!changes.restaurants$.currentValue) {
      return;
    }
    changes.restaurants$.currentValue
      .pipe(
        map((restaurants: Restaurant[]) => {
          // the 'restaurants' argument is a JavaScript Array
          const sortResult = restaurants.sort(this.sortByScore);
          this.sortedRestaurants = sortResult;
          console.log('this.sortedRestaurants', this.sortedRestaurants);
          return this.sortedRestaurants;
        })
      )
      .subscribe();
  }

  sortByScore(a, b) {
    if (a.votes > b.votes) {
      return -1;
    } else if (a.votes < b.votes) {
      return 1;
    } else {
      return 0;
    }
  }

  onSelectionChange(event) {
    console.log(event.option.value);
  }
}
