import {Component, OnInit} from '@angular/core';
import {ItemsService} from "../../services/items.service";
import {Item} from "../../interfaces/ingredients.model";
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {
  public item: Item;
  isLoading = true;

  constructor(
    private itemsService: ItemsService,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.getIdFromParams();
  };


  getItemDetails(id: string) {
    this.itemsService.getSingleItem(id).subscribe((data) => {
      this.item = data
      this.isLoading = false;
    })
  }

  getIdFromParams() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (!id) {
      return alert('No id provided')
    }
    this.getItemDetails(id)
  }
}
