import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// 1️⃣ Importa el módulo de rutas aquí arriba
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-root',
  standalone: true,
  // 2️⃣ Agrega RouterModule dentro de los imports de tu componente Standalone
  imports: [CommonModule, RouterModule], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend-casa-domotica';
}