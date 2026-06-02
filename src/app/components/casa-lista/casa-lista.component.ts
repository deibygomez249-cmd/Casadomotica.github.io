import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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

  constructor(
    private service: CasaService,
    private cdr: ChangeDetectorRef  // ← Agregado
  ) {}

  ngOnInit(): void {
    console.log('🚀 ngOnInit ejecutado');
    this.cargar();
  }

  cargar(): void {
    console.log('🔄 Ejecutando cargar()...');
    this.service.getAll().subscribe({
      next: (data) => {
        console.log('✅ Datos recibidos:', data.length);
        this.items = data;
        this.cdr.detectChanges();  // ← Forzar actualización de la vista
      },
      error: (err) => {
        console.error('❌ ERROR al cargar datos:', err);
      }
    });
  }

  eliminar(id: number): void {
    if (confirm('¿Deseas eliminar esta casa?')) {
      this.service.delete(id).subscribe(() => this.cargar());
    }
  }
}