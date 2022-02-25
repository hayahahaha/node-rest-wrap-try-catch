// const { wrap } = require("./wrap");
const axios = require("axios");
const url = "https://jsonplaceholder.typicode.com/todos1";

const wrap = (fn) => (req, res, next) => {
  try {
    console.log('wrap');
    fn(req, res, next);
    console.log('wrap');
  } catch (error) {
    console.log('error: error')
    res.send({
      message : error.message
    });
  }
};

const getUser = wrap(async (req, res, next) => {
  console.log('get uSer');
  const users = await axios.get(url);
  res.json({
    data: users.data,
  });
});

const getUserDetail = wrap(async (req, res, next) => {
  const user = await axios.get(`${url}/1`);
  res.json({
    data: user.data,
  });
});

module.exports = {
  getUser,
  getUserDetail,
};
