const Sequelize = require('sequelize')
const db = new Sequelize('postgres://localhost:5432/studyDB')

const User = db.define('user', {
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	email: {
		type: Sequelize.STRING,
		allowNull: false
	}
},{
	getterMethods:{
		//whatever
	}
})

// User.someClassMethod(){
	
// }