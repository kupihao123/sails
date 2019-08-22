const Sequelize = require('Sequelize');
var empty = require('is-empty');
var hd1payment_db = new Sequelize('mysql://root:123456789@localhost:3306/hd1payment_db',{logging: false});
var hd1cas_db = new Sequelize('mysql://root:123456789@localhost:3306/hd1cas_db',{logging: false});
module.exports = {
	getMomo: function (req, res){
		hd1payment_db.query("SELECT S.userId, C.transId, C.amount, S.id as sourceId, M.name as methodName FROM charge C JOIN source S ON C.sourceId = S.id JOIN method M ON M.id = S.methodId WHERE M.id = '3d2e3fde-6057-4190-abfd-e40b06595fea'").then(([results1, metadata]) => {
				var filtered = [];	
				var query= [];	
				var str = [];
				for(fillter in results1){
				str.push (results1[fillter].userId)
				}
				var strUserId = (JSON.stringify(str))
				strUserId = strUserId.replace('[','')
				strUserId = strUserId.replace(']','')

			
			hd1cas_db.query(`SELECT U.id, LC.mobile, FB.email FROM user AS U LEFT JOIN localaccount AS LC ON U.localAccId = LC.id LEFT JOIN facebookaccount AS FB ON U.fbAccId = FB.id WHERE U.id IN (${strUserId})`).then(([results, metadata]) => {
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
			return ResponseService.json(200, res, sails.__("getvnpaysucces"), filtered)
		})
	}).catch(err => {
				console.error('Unable to connect to the database:', err);
			});
    },
    getVnpay: function (req, res){
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
				return ResponseService.json(200, res, sails.__("getvnpaysucces"), filtered)
			})
		})
			.catch(err => {
				console.error('Unable to connect to the database:', err);
			});
			
	},
	
	getAsiapay: function (req, res){
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
				return ResponseService.json(200, res, sails.__("getasiapaysucces"), filtered)
			})
		})
			.catch(err => {
				console.error('Unable to connect to the database:', err);
			});
			
    },
} 