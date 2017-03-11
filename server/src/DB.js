var config  = require('config');
var Promise  = require('bluebird');
var admin = require("firebase-admin");
var serviceAccount = require(config.firebaseJsonPath);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: config.firebaseDatabaseUrl,
});

var database = admin.database();

class DB {

	static set(directory, key, value) {
		database.ref(`${directory}/${key}`).set(value);
	}

	static get(directory, key) {
		return new Promise((resolve, reject) => {
			var ref  = database.ref(`${directory}/${key}`);

			ref.on('value', function(snapshot) {
				resolve(snapshot.val());
			});
		});
	}

}

module.exports = DB;