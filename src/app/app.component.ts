import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentItem = 'Television';

  lastChanceItem = 'Beanbag';

  items = ['item1', 'item2', 'item3', 'item4'];

  wishlist = ['Drone', 'Computer'];

  addItem(newItem: string) {
    this.items.push(newItem);
  }

  crossOffItem(item: string) {
    console.log(`Parent says: crossing off ${item}.`);
  }

  buyClearanceItem() {
    console.log(`Parent says: buying ${this.lastChanceItem}.`);
  }

  saveForLater() {
    console.log(`Parent says: saving ${this.currentItem} for later.`);
  }

  addToWishList(wish: string) {
    console.log(`Parent says: adding ${this.currentItem} to your wishlist.`);
    this.wishlist.push(wish);
    console.log(this.wishlist);
  }
}
