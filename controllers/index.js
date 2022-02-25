const axios = require("axios");
const url = "https://jsonplaceholder.typicode.com/users";

async function getIndex(req, res) {
  try {
    const users = await axios.get(url);
    res.json({
      data: users.data,
    });
  } catch(error) {
    res.json(error.error)
  }
}

async function getIndexDetail(req, res) {
  try {
    const users = await axios.get(`${url}/1`);
    res.json({
      data: users.data,
    });
  } catch(error) {
    res.json(error.error)
  }
}

module.exports = {
  getIndex,
  getIndexDetail
};
