import {DefaultCrudRepository} from '@loopback/repository';
import {Reporte, ReporteRelations} from '../models';
import {ConviMongodbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ReporteRepository extends DefaultCrudRepository<
  Reporte,
  typeof Reporte.prototype.id,
  ReporteRelations
> {
  constructor(
    @inject('datasources.convi_mongodb') dataSource: ConviMongodbDataSource,
  ) {
    super(Reporte, dataSource);
  }
}
