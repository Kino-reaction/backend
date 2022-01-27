'use strict';

const config = require('../../config');
const initKnex = require('../database');

class MigratorBase {
  constructor() {
    this.config = config;
    this.knex = null;
    this.dir = null;
    this.isInitialized = false;
  }

  async init() {
    if (!this.isInitialized) {
      this.knex = await initKnex(this, this.userParams);
      this.isInitialized = true;
    }
  }

  async destroy() {
    await this.knex.destroy();
  }

  setDir(dir) {
    this.dir = dir;
  }
}

module.exports = MigratorBase;
