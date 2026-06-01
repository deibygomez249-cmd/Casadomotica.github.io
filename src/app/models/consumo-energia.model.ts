export interface ConsumoEnergia {
  id?: number;
  fechaHoraInicio: Date;
  fechaHoraFin: Date;
  consumoKWh: number;
  costoEstimado: number;
  idDispositivo: number;
}
