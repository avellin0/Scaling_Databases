import cliente from '../database/Connect';

async function GetDate() {
  const now =  await cliente.query('SELECT * FROM access');
  console.log(now.rows);
}

GetDate()