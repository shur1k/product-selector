import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Product } from 'src/app/common/components/product-tile/product-tile.component';

@Component({
  selector: 'ps-product-selection',
  templateUrl: './product-selection.component.html',
  styleUrls: ['./product-selection.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductSelectionComponent implements OnInit{
  private readonly productName = 'Produkt';
  
  public readonly panelTitle = "Wybór produktów";
  
  public productsArray: FormArray;
  public productsForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  public ngOnInit(): void {
    this.productsArray = this.fb.array(this.generateProducts().map(product => this.fb.group(product)));

    this.productsForm = this.fb.group({
      products: this.productsArray
    });
  }

  public get products() {
    return this.productsForm.controls["products"] as FormArray;
  }

  public get productsData() {
    return this.products.controls as FormGroup[];
  }

  public onEmit(product: Product) {
    const {isActive, ...productToPrint} = product
    console.log(productToPrint);

    this.productsData.forEach(formGroup => {
      const value = formGroup.controls['prod'].value;
      if (product.id === value.id) {
        formGroup.controls['prod'].patchValue({...value, isActive: true})
      } else {
        formGroup.controls['prod'].patchValue({...value, isActive: false})
      }
    })
  }

  private generateProducts() {
    const products = [];
    for (let i = 1; i <=6; i++) {
      const product: Product = {
        id: i,
        name: `${this.productName} ${i}`,
        description: `${this.productName} ${i} - najlepszy`,
        isActive: false
      }
      products.push({prod: [product]});
    }
    return products;
  }
}
