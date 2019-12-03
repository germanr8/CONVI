import {DefaultCrudRepository} from '@loopback/repository';
import {Alerta, AlertaRelations} from '../models';
import {ConviMongodbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class AlertaRepository extends DefaultCrudRepository<
  Alerta,
  typeof Alerta.prototype.id,
  AlertaRelations
> {
  constructor(
    @inject('datasources.convi_mongodb') dataSource: ConviMongodbDataSource,
  ) {
    super(Alerta, dataSource);
  }
}
