import {Component, OnInit} from '@angular/core';
// import {items} from "../../mocks/item.mock";
import {ItemsService} from "../../services/items.service";
import {Router} from "@angular/router";
import {Item} from "../../interfaces/ingredients.model";

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {

  items: Item[] = [];
  isLoading: boolean = true;
  itemName = '';

  constructor(private itemService: ItemsService, private router: Router) {
  }

  ngOnInit(): void {
    this.onGetAllItems();
  }

  onGetAllItems() {
    this.itemService.getAllItems().subscribe((data: Item[]) => {
      this.items = data;
      this.isLoading = false;
    })
  }

  seeItemDetails(id: string) {
    this.router.navigate([`/details/${id}`])
  }
}
