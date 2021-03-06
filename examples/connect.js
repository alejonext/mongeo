/**
 * @author Alejandro
 */

var connect = require('connect'),
	mongeo = new require('mongeo')( {
	"db": [
		{
			"host": "localhost",
			"port": 27017,
			"path": "test",
			"type": "mongodb"
		},{
			"host": "anotherHost",
			"port": 27017,
			"path": "test",
			"user": "user",
			"pass": "password",
			"type": "mongodb"
		},
		"mongodb://user:pass@localhost:port/database",
		"mongodb://user:pass@localhost:port/database,mongodb://anotherhost:port,mongodb://yetanother:port"
	],
	"geoip": "geoip",
	"countries": "countries",
	"city": "city"
} );

connect()
	.use(connect.bodyParser())
	.use(mongeo.connect())
	.use(hello)
	.listen(3000);

function hello(req, res, next) {
	res.setHeader('Content-Type', 'text/html');
	res.send( "Hello I'am in " + JSON.stringify(req.geo) );
}
