// ob-havo bn ishlash uchun funksiya ulandi
const { getWeather } = require('./data/weather')

// user lar ro'yxati ulandi
const users = require('./data/users')

const resolvers = {
	Query: {
		haftalikObHavo: async (global, { shaxar, }) => {
			return await getWeather(shaxar)
		}
	},
}

module.exports = resolvers