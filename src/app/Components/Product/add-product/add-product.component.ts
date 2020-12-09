import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ProductService } from "../../../auth/Services/Product/product.service";
import { ToastrService  } from "ngx-toastr";
import { Router } from "@angular/router";
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
 
  addProduct: FormGroup | any;
  constructor(private productService: ProductService,
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private router: Router) {
      
      this.addProduct = formBuilder.group({
        item_name: new FormControl(),
        category_id: new FormControl(),
        item_description: new FormControl(),
        actual_price: new FormControl(),
        selling_price: new FormControl(),
        stocks: new FormControl(),
        packaging_option: new FormControl(),
        packagingCost: new FormControl()
      });

     }

  ngOnInit(): void {
    document.getElementById("products")?.classList.add("menu-open");
    document.getElementById("add-product")?.classList.add("active");
     console.log('NG ON INTI');
    this.getCategories();
  }
 
  showPackagingPrice:boolean = false;
  packagingOption(event:any){
 //  console.log(this.addProduct.value.packaging);
    if(event.target.checked)
    {
      this.showPackagingPrice = true;
    }
    else
    {
      this.showPackagingPrice = false;
    }
    }
    packaging:number = -1;
    
    addProductMet()
    {
      
      if(this.addProduct.value.packaging_option)
      {
      this.packaging = this.addProduct.value.packagingCost;
      }
      else
      {
        this.packaging = -1;
      }
      let params = {
        item_name: this.addProduct.value.item_name,
        category_id: this.addProduct.value.category_id,
        item_description: this.addProduct.value.item_description,
        actual_price: this.addProduct.value.actual_price,
        selling_price: this.addProduct.value.selling_price,
        stocks: this.addProduct.value.stocks,
        packaging_option: this.packaging
      }
      console.log(params);
      this.productService.addProduct(params).subscribe(res =>
        {
          console.log(res);
          if(res.status == 202)
          {
            this.toastr.success(res.message);
              this.addProduct.reset();
          }
          else if(res.status == 400)
          {
            this.toastr.info("length must be at least 10 characters long");
          }
          

        }
        );
    }
    categoriesData:any | undefined;
    getCategories(){
     this.productService.getCategories().subscribe(res => {
      
      if(res.message == 'Token expired!')
      { 
        
        localStorage.clear();
        this.toastr.warning("Session Expired!! Login Again");
        this.router.navigateByUrl('/vendor/login');
      }
      else
      {
        this.categoriesData = res;
        console.log(this.categoriesData);
      }
     });

    }

   

}
