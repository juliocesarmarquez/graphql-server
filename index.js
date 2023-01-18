import { ApolloServer, gql} from 'apollo-server'

const persons = [
        {
        name: "julio",
        phone: "055-58525555",
        street: "Mountain",
        city: "San Francisco",
        id: '23565fdsa56-fdsaf5-4586'
        },
        {
        name: "ash",
        phone: "055-587587",
        street: "Sea",
        city: "San Martin",
        id: '75325fdsa56-ftrew5-8542'
        },
        {
        name: "oliver",
        street: "Forest",
        city: "Malaga",
        id: '74054fdsa56-rgnbh8-7777'
        },
]

const typeDefs = gql`
    type Person {
        name: String!
        phone: String
        street: String!
        city: String!
        id: ID!
    }
    type Query {
        personCount: Int!
        allPerson: [Person]!
    }
`
const resolvers = {
    Query: {
        personCount: () => persons.length,
        allPerson: () => persons
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen().then(({url}) => {
    console.log(`listening at ${url}`)
})