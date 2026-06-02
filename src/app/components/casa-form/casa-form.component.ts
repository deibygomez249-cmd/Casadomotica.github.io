import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { CasaService } from '../../services/casa.service';

@Component({
  selector: 'app-casa-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './casa-form.component.html'
})
export class CasaFormComponent implements OnInit {
  id: number | null = null;
  model: any = {
    direccion: '',
    correo: '',
    telefonoFijo: '',
    numerohabitaciones: 0,
    metrosCuadrados: 0,
    idUsuario: 1
  };

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private service: CasaService
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.id = Number(idParam);
      this.service.getById(this.id).subscribe(data => {
        this.model = data;
      });
    }
  }

  guardar(): void {
    console.log('📤 Enviando datos:', this.model);
    
    if (this.id) {
      this.service.update(this.id, this.model).subscribe({
        next: () => this.router.navigate(['/casas']),
        error: (err) => console.error('Error:', err.error)
      });
    } else {
      this.service.create(this.model).subscribe({
        next: () => this.router.navigate(['/casas']),
        error: (err) => console.error('Error:', err.error)
      });
    }
  }
}