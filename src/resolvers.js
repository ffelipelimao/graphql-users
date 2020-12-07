const users = [
    { id: 99, name: 'Maluco', email: 'maluco@gmail.com' }
]

module.exports = {
    Query: {
        users: () => users,
        user: (_, { id }) => users[id],
    },
    Mutation: {
        createUser: (_, { id, name, email }) => users.push({ id, name, email })
    }
}