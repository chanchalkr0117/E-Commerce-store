'use strict';

/**
 * old-school-game service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::old-school-game.old-school-game');
