import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TiposUsuarioService } from '../../services/tipos-usuario.service';

@Component({
  selector: 'app-tipos-usuario-lista',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './tipos-usuario-lista.component.html'
})
export class TiposUsuarioListaComponent implements OnInit {
  items: any[] = [];
  cargando: boolean = false;

  constructor(private service: TiposUsuarioService) {}

  ngOnInit(): void {
    console.log('🚀 TiposUsuario - ngOnInit ejecutado');
    this.cargar();
  }

  cargar(): void {
    console.log('🔄 TiposUsuario - Ejecutando cargar()...');
    this.cargando = true;
    
    this.service.getAll().subscribe({
      next: (data) => {
        console.log('✅ TiposUsuario - Datos recibidos:', data);
        console.log('📊 Cantidad de registros:', data.length);
        this.items = data;
        this.cargando = false;
      },
      error: (err) => {
        console.error('❌ ERROR al cargar tipos de usuario:');
        console.error('Status:', err.status);
        console.error('Mensaje:', err.message);
        this.cargando = false;
      }
    });
  }

  eliminar(id: number): void {
    if (confirm('¿Deseas eliminar este tipo de usuario?')) {
      this.service.delete(id).subscribe(() => this.cargar());
    }
  }
}