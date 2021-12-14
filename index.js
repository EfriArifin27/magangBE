// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true });
const path = require("path")

// Register plugins
fastify.register(require('fastify-static'), {
  root: path.join(__dirname, 'public/assets'),
  prefix: "/", // optional: default '/'
})

// Declare a route
fastify.get('/another/path', function (req, reply) {
  return reply.sendFile("index.html") // serving path.join(__dirname, 'public', 'index.html') directly
})

// Declare a route
fastify.get('/', async (request, reply) => {
  return { hello: 'world' }
})

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()