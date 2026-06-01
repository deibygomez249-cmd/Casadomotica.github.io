import { Routes } from '@angular/router';
import { TiposUsuarioListaComponent } from './components/tipos-usuario-lista/tipos-usuario-lista.component';
import { TiposUsuarioFormComponent } from './components/tipos-usuario-form/tipos-usuario-form.component';
import { UsuarioListaComponent } from './components/usuario-lista/usuario-lista.component';
import { UsuarioFormComponent } from './components/usuario-form/usuario-form.component';
import { CasaListaComponent } from './components/casa-lista/casa-lista.component';
import { CasaFormComponent } from './components/casa-form/casa-form.component';
import { HabitacionListaComponent } from './components/habitacion-lista/habitacion-lista.component';
import { HabitacionFormComponent } from './components/habitacion-form/habitacion-form.component';
import { DispositivoListaComponent } from './components/dispositivo-lista/dispositivo-lista.component';
import { DispositivoFormComponent } from './components/dispositivo-form/dispositivo-form.component';
import { SensorListaComponent } from './components/sensor-lista/sensor-lista.component';
import { SensorFormComponent } from './components/sensor-form/sensor-form.component';
import { LecturaSensorListaComponent } from './components/lectura-sensor-lista/lectura-sensor-lista.component';
import { LecturaSensorFormComponent } from './components/lectura-sensor-form/lectura-sensor-form.component';
import { ConsumoEnergiaListaComponent } from './components/consumo-energia-lista/consumo-energia-lista.component';
import { ConsumoEnergiaFormComponent } from './components/consumo-energia-form/consumo-energia-form.component';
import { EventoLogListaComponent } from './components/evento-log-lista/evento-log-lista.component';

export const routes: Routes = [
  { path: 'tipos-usuario', component: TiposUsuarioListaComponent },
  { path: 'tipos-usuario/nuevo', component: TiposUsuarioFormComponent },
  { path: 'tipos-usuario/editar/:id', component: TiposUsuarioFormComponent },
  
  { path: 'usuarios', component: UsuarioListaComponent },
  { path: 'usuarios/nuevo', component: UsuarioFormComponent },
  { path: 'usuarios/editar/:id', component: UsuarioFormComponent },
  
  { path: 'casas', component: CasaListaComponent },
  { path: 'casas/nuevo', component: CasaFormComponent },
  { path: 'casas/editar/:id', component: CasaFormComponent },
  
  { path: 'habitaciones', component: HabitacionListaComponent },
  { path: 'habitaciones/nuevo', component: HabitacionFormComponent },
  { path: 'habitaciones/editar/:id', component: HabitacionFormComponent },
  
  { path: 'dispositivos', component: DispositivoListaComponent },
  { path: 'dispositivos/nuevo', component: DispositivoFormComponent },
  { path: 'dispositivos/editar/:id', component: DispositivoFormComponent },
  
  { path: 'sensores', component: SensorListaComponent },
  { path: 'sensores/nuevo', component: SensorFormComponent },
  { path: 'sensores/editar/:id', component: SensorFormComponent },
  
  { path: 'lecturas-sensores', component: LecturaSensorListaComponent },
  { path: 'lecturas-sensores/nuevo', component: LecturaSensorFormComponent },
  { path: 'lecturas-sensores/editar/:id', component: LecturaSensorFormComponent },
  
  { path: 'consumos-energia', component: ConsumoEnergiaListaComponent },
  { path: 'consumos-energia/nuevo', component: ConsumoEnergiaFormComponent },
  { path: 'consumos-energia/editar/:id', component: ConsumoEnergiaFormComponent },
  
  { path: 'eventos-logs', component: EventoLogListaComponent },
  
  { path: '', redirectTo: '/usuarios', pathMatch: 'full' }
];