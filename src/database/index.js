import Sequelize from 'sequelize';
import Dado from '../app/models/Dado';

import databaseConfig from '../config/database';

const models = [Dado];

class Database{
  constructor() {
    this.init();
  }

  init(){
    this.connection = new Sequelize(databaseConfig
      );
    models
    .map(model => model.init(this.connection))
    
  }
}

export default new Database();