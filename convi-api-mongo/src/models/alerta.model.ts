import {Entity, model, property} from '@loopback/repository';

@model()
export class Alerta extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
  })
  id?: number;

  @property({
    type: 'string',
  })
  autor?: string;

  @property({
    type: 'string',
  })
  fecha?: string;

  @property({
    type: 'string',
  })
  url?: string;


  constructor(data?: Partial<Alerta>) {
    super(data);
  }
}

export interface AlertaRelations {
  // describe navigational properties here
}

export type AlertaWithRelations = Alerta & AlertaRelations;
