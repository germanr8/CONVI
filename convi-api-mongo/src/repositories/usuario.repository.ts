import {DefaultCrudRepository} from '@loopback/repository';
import {Usuario, UsuarioRelations} from '../models';
import {ConviMongodbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class UsuarioRepository extends DefaultCrudRepository<
  Usuario,
  typeof Usuario.prototype.id,
  UsuarioRelations
> {
  constructor(
    @inject('datasources.convi_mongodb') dataSource: ConviMongodbDataSource,
  ) {
    super(Usuario, dataSource);
  }
}
