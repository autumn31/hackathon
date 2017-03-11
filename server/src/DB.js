var config  = require('config');
var admin = require("firebase-admin");
var serviceAccount = require(config.firebaseJsonPath);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: config.firebaseDatabaseUrl,
});

var database = admin.database();

class DB {
	static set(directory, key, value) {
		admin.database().ref(directory).set({ [key]: value });
	}
}

module.exports = DB;