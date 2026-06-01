import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CasaService } from '../../services/casa.service';

@Component({
  selector: 'app-casa-lista',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './casa-lista.component.html'
})
export class CasaListaComponent implements OnInit {
  items: any[] = [];
  cargando: boolean = false;

  constructor(private service: CasaService) {}

  ngOnInit(): void {
    console.log('🚀 ngOnInit ejecutado');
    this.cargar();
  }

  cargar(): void {
    console.log('🔄 Ejecutando cargar()...');
    this.cargando = true;
    
    this.service.getAll().subscribe({
      next: (data) => {
        console.log('✅ Datos recibidos:', data);
        console.log('📊 Cantidad de registros:', data.length);
        this.items = data;
        this.cargando = false;
      },
      error: (err) => {
        console.error('❌ ERROR al cargar datos:');
        console.error('Status:', err.status);
        console.error('Mensaje:', err.message);
        console.error('URL:', err.url);
        this.cargando = false;
      }
    });
  }

  eliminar(id: number): void {
    if (confirm('¿Deseas eliminar esta casa?')) {
      this.service.delete(id).subscribe(() => this.cargar());
    }
  }
}