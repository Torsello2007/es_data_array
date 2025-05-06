import { Component } from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component'; // Importa il componente dei dettagli prodotto
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms'; // Moduli per i form per aggiungere un prodotto
import { CommonModule } from '@angular/common'; // Modulo comune per direttive come *ngIf, *ngFor
// Interfaccia che descrive un prodotto
interface Product {
  name: string;
  price: number;
  description: string;
}

@Component({
  selector: 'app-product-list',
  imports: [ProductDetailComponent, CommonModule, FormsModule], // Importa componenti e moduli usati nel template
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: Product[] = [ // Array iniziale dei prodotti
    { name: 'Latte', price: 2, description: 'Latte scremato da 1 litro' },
    { name: 'Pane', price: 1.5, description: 'Pane in cassetta fresco' },
    { name: 'Biscotti', price: 4, description: 'Biscotti con gocce di cioccolato' },
    { name: 'Mela', price: 1, description: 'Mela rossa biologica' },
    { name: 'Uova', price: 4, description: 'Confezione da 6 uova fresche' },
    { name: 'Formaggio', price: 12, description: 'Formaggio stagionato 200g' },
    { name: 'Pasta', price: 3, description: 'Pasta di semola di grano duro' },
    { name: 'Tonno', price: 5, description: 'Scatoletta di tonno all’olio d’oliva' },
    { name: 'Yogurt', price: 6, description: 'Yogurt bianco naturale' }
  ]

  selectedProduct = null;   // Prodotto selezionato (null inizialmente)
  newProduct = { name: '', price: 0, description: '' }  // Oggetto usato per creare un nuovo prodotto tramite form

  selectProduct(product: any): void { // Metodo per selezionare un prodotto dalla lista
    this.selectedProduct = product;
  }

  deleteProduct(index: number): void { // Metodo per eliminare un prodotto dalla lista in base all'indice
    this.products.splice(index, 1); // Rimuove 1 elemento all'indice dato
  }

  onSubmit() : void { // Metodo chiamato quando invia il form per aggiungere un nuovo prodotto
    if (this.newProduct.name && this.newProduct.price) { // Verifica che il nome e il prezzo siano stati inseriti
      this.products.push({ ...this.newProduct }); // Aggiunge il nuovo prodotto alla lista
      this.newProduct = { name: '', price: 0, description: '' }; // Resetta il modulo
    }
  }
}