const Sequelize = require('Sequelize');
var hd1payment_db = new Sequelize('mysql://root:123456789@localhost:3306/hd1payment_db');
var hd1cas_db = new Sequelize('mysql://root:123456789@localhost:3306/hd1cas_db');
hd1cas = [];
module.exports = {
	getMomo: function (req, res){
		tam=0
		hd1cas_db.query("SELECT U.id, LC.mobile, FB.email FROM `user` AS U LEFT JOIN localaccount AS LC ON U.localAccId = LC.id LEFT JOIN facebookaccount AS FB ON U.fbAccId = FB.id ").then(([results, metadata]) => {
			// console.log(results);
			hd1payment_db.query("select s.userId, c.transId, c.amount, s.id as sourceId, m.name as methodName  from charge c, source s, method m where s.methodId=m.id and c.sourceId=s.id and m.id='3d2e3fde-6057-4190-abfd-e40b06595fea'").then(([results1, metadata]) => {
				// console.log(results1);
				let filtered = [];

				results.filter(function(newData) {
				return results1.filter(function(oldData) {
					if (newData.id === oldData.userId) {
					filtered.push({
						'id': newData.id,
						'mobile': newData.mobile,
						'email': newData.email,
						'sourceId': oldData.sourceId,
						'methodName': oldData.methodName,
						'transId': oldData.transId,
						'amount': oldData.amount
					})
					}
				})
				});
				console.log(filtered)	
			})
		})
			.catch(err => {
				console.error('Unable to connect to the database:', err);
			});
			
    },
    getVnpay: function (req, res){
		tam=0
		hd1cas_db.query("SELECT U.id, LC.mobile, FB.email FROM `user` AS U LEFT JOIN localaccount AS LC ON U.localAccId = LC.id LEFT JOIN facebookaccount AS FB ON U.fbAccId = FB.id ").then(([results, metadata]) => {
			// console.log(results);
			hd1payment_db.query("select s.userId, c.transId, c.amount, s.id as sourceId, m.name as methodName  from charge c, source s, method m where s.methodId=m.id and c.sourceId=s.id and m.id='4365b41d-2f3a-11e9-84f9-0242ac110002'").then(([results1, metadata]) => {
				// console.log(results1);
				let filtered = [];

				results.filter(function(newData) {
				return results1.filter(function(oldData) {
					if (newData.id === oldData.userId) {
					filtered.push({
						'id': newData.id,
						'mobile': newData.mobile,
						'email': newData.email,
						'sourceId': oldData.sourceId,
						'methodName': oldData.methodName,
						'transId': oldData.transId,
						'amount': oldData.amount
					})
					}
				})
				});
				console.log(filtered)	
			})
		})
			.catch(err => {
				console.error('Unable to connect to the database:', err);
			});
			
	},
	
	getAsiapay: function (req, res){
		tam=0
		hd1cas_db.query("SELECT U.id, LC.mobile, FB.email FROM `user` AS U LEFT JOIN localaccount AS LC ON U.localAccId = LC.id LEFT JOIN facebookaccount AS FB ON U.fbAccId = FB.id ").then(([results, metadata]) => {
			// console.log(results);
			hd1payment_db.query("select s.userId, c.transId, c.amount, s.id as sourceId, m.name as methodName  from charge c, source s, method m where s.methodId=m.id and c.sourceId=s.id and m.id='aa52e1f3-fba4-11e5-b347-fa163ed1f292'").then(([results1, metadata]) => {
				// console.log(results1);
				let filtered = [];

				results.filter(function(newData) {
				return results1.filter(function(oldData) {
					if (newData.id === oldData.userId) {
					filtered.push({
						'id': newData.id,
						'mobile': newData.mobile,
						'email': newData.email,
						'sourceId': oldData.sourceId,
						'methodName': oldData.methodName,
						'transId': oldData.transId,
						'amount': oldData.amount
					})
					}
				})
				});
				console.log(filtered)	
			})
		})
			.catch(err => {
				console.error('Unable to connect to the database:', err);
			});
			
    },
} 