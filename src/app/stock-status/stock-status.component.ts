import { Component, OnInit, EventEmitter, Output, OnChanges, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-stock-status',
  templateUrl: './stock-status.component.html',
  styleUrls: ['./stock-status.component.css']
})
export class StockStatusComponent implements OnInit {

  @Input() stock: number;
  @Input() productId: number;
  @Output() stockValueChange = new EventEmitter();
  color = '';
  updatedStockValue: number;

  stockValueChanged () {
    this.stockValueChange.emit({id: this.productId, updatedStockValue: this.updatedStockValue});
    this.updatedStockValue = null;
  }

  ngOnChanges () {
    if (this.stock > 10) {
      this.color = 'green';
    } else {
      this.color = 'Red';
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
