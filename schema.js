const { gql, } = require('apollo-server')

const typeDefs = gql`
	type Query {
		haftalikObHavo(shaxar: String!): Natija
	}
	type Natija {
		dushanba: String!
		seshanba: String!
		chorshanba: String!
		payshanba: String!
		juma: String!
		shanba: String!
		yakshanba: String!
	}
`

module.exports = typeDefs