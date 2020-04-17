const { ApolloServer, } = require('apollo-server')

// GraphQL Sxema ulandi
const typeDefs = require('./schema')
// GraphQL controller funksiyalar ulandi
const resolvers = require('./resolvers')

;(async () => {
	// server yaratildi
	const server = new ApolloServer({ typeDefs, resolvers, })

	// server ishga tushirildi.
	const { url, } = await server.listen()
	console.log(url)
})()