import http from 'http'

const server = http.createServer((req, res) => {
  if (req.url.startsWith('/api/error')) {
    res.statusCode = 500
    res.end('Error')
    return
  }

  res.statusCode = 200
  res.end('response from server')
})

server.listen(3000, 'localhost')
