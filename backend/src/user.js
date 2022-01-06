const mysql = require("mysql");
const Promise = require("bluebird");
const Connection = require("mysql/lib/Connection");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "CDAC",
};

async function connectCheck() {
  const connection = mysql.createConnection(dbinfo);

  await connection.connectAsync();

  console.log("COnnection started");

  await connection.endAsync();
}

//connectCheck();

const addUser = async (user) => {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();

  let sqlQuery = `INSERT INTO STUDENT01 values(?,?,?,?)`;
  await connection.queryAsync(sqlQuery, [
    user.name,
    user.prn,
    user.percent,
    user.address,
  ]);
  console.log("record added");
  await connection.endAsync();
};
// const data = {
//   name: "Vrushabh",
//   prn: "1909383446",
//   percent: "88.88",
//   address: "pune maharashtra",
// };

//addUser(data);

const selectAllUser = async () => {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();

  let sqlQuery = `SELECT * from STUDENT01`;
  const list = await connection.queryAsync(sqlQuery);
  // console.log(list);
  await connection.endAsync();
  return list;
};

//selectAllUser();

module.exports = { selectAllUser, addUser };
