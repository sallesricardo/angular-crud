import { Component, OnInit } from "@angular/core";
import { ProductService } from "../product.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Product } from "../product.model";
import { Route } from "@angular/compiler/src/core";
import { HeaderService } from "../../template/header/header.service";

@Component({
  selector: "app-product-update",
  templateUrl: "./product-update.component.html",
  styleUrls: ["./product-update.component.css"],
})
export class ProductUpdateComponent implements OnInit {
  product: Product;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    private headerService: HeaderService
  ) {
    headerService.headerData = {
      title: "Editar Produto",
      icon: "edit",
      routeUrl: "/products",
    };
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.productService.readById(id).subscribe((product) => {
      this.product = product;
      this.headerService.headerData.title =
        "Editar Produto - " + this.product.name;
    });
  }

  updateProduct(): void {
    this.productService.update(this.product).subscribe(() => {
      this.productService.showMessage("Produto atualizado com secesso!");
      this.router.navigate(["/products"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/products"]);
  }
}
