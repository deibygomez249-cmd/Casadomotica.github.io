export interface Dispositivo {
  id?: number;
  nombre: string;
  tipoDispositivo: string;
  marca: string;
  modelo: string;
  estado: boolean;
  consumoWatts: number;
  configuracionJson?: string;
  idHabitacion: number;
}
