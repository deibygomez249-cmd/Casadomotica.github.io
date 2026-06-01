import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-usuario-lista',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './usuario-lista.component.html'
})
export class UsuarioListaComponent implements OnInit {
  items: any[] = [];
  cargando: boolean = false;

  constructor(private service: UsuarioService) {}

  ngOnInit(): void {
    console.log('🚀 Usuarios - ngOnInit ejecutado');
    setTimeout(() => {
      this.cargar();
    }, 500);
  }

  cargar(): void {
    console.log('🔄 Usuarios - Ejecutando cargar()...');
    this.cargando = true;
    
    this.service.getAll().subscribe({
      next: (data) => {
        console.log('✅ Usuarios - Datos recibidos:', data);
        console.log('📊 Cantidad de registros:', data.length);
        this.items = data;
        this.cargando = false;
      },
      error: (err) => {
        console.error('❌ ERROR al cargar usuarios:');
        console.error('Status:', err.status);
        console.error('Mensaje:', err.message);
        this.cargando = false;
      }
    });
  }

  eliminar(id: number): void {
    if (confirm('¿Deseas eliminar este usuario?')) {
      this.service.delete(id).subscribe(() => this.cargar());
    }
  }
}