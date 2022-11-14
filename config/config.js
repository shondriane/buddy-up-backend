require('dotenv').config()
module.exports = {
  development: {
    database: 'buddy_up_development',
    dialect: 'postgres'
  },
  test: {
    database: 'buddy_up_test',
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}
