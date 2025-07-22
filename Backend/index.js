import app from './app.js'
import { sequelize } from './database/db.js';


async function main() {

  try {
  await sequelize.sync({ force: false });
  await sequelize.authenticate();
  console.log('se conectó a la base de datos');

  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });

  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

main();