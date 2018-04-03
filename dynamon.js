const https = require('https')

const dynamon = {
  path: null,
  push: function(data) {
    const body = JSON.stringify(data)
    const opts = {
      host: 'dynamon.io',
      path: '/' + dynamon.path,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(body)
      }
    }
    const req = https.request(opts)
    req.write(body)
    req.end()
  }
}

module.exports = dynamon
