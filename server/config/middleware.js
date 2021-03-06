var bodyParser = require('body-parser');
var path = require('path');
var morgan = require('morgan');
var orm = require('orm');
var ormConfig = require('../../model');


//to create a new instance of a postgreSQL database use the createdb nameOfDataBase
module.exports = function(app, express) {
  app.use(bodyParser.json({limit: '50mb'}));
  app.use(morgan('combined'));
  app.use(express.static(path.join(__dirname, '../../dist')));
  app.use(orm.express('postgres://Loren1@localhost/quizApp', ormConfig));
};
