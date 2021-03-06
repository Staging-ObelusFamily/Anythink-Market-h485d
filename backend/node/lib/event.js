const axiosLib = require("axios");
const fs = require("fs");

const WILCO_ID = fs.readFileSync('../.wilco', 'utf8')

const baseURL = 'https://wilco-engine.herokuapp.com';
const axios = axiosLib.create({
  baseURL: baseURL,
  headers: {
    'Content-type': 'application/json',
  },
});

async function sendEvent(event) {
  const result = await axios.post(`/users/${WILCO_ID}/event`, JSON.stringify({ event }));
  return result.data;
}

module.exports = {
  sendEvent,
}
