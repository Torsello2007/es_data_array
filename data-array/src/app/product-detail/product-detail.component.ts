import { CommonModule } from '@angular/common'; // Modulo comune per direttive come *ngIf, *ngFor
import { Component, Input, OnInit } from '@angular/core'; // Decoratore Component, Input per ricevere dati, OnInit per eseguire codice all'inizio
// Definisce un'interfaccia che descrive com'è fatto un prodotto
interface Product {
  name: string;
  price: number;
  description: string;
}

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule], // Importa CommonModule per usare direttive comuni nel template
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
// Classe che implementa l'interfaccia OnInit per eseguire del codice quando il componente viene inizializzato
export class ProductDetailComponent implements OnInit { 
  @Input() product!: Product; // Riceve un oggetto di tipo Product da il componente product list
  constructor() {} // Costruttore del componente (vuoto in questo caso)
  ngOnInit(): void {} // Metodo che viene eseguito quando il componente viene inizializzato
}