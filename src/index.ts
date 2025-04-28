import { ApolloServer } from 'apollo-server';
import { typeDefs } from './schema';
import { generatePoints } from './data';

const points = generatePoints(8000);

const resolvers = {
	Query: {
		points: () => points,
	},
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen({ port: 4000 }).then(({ url }) => {
	console.log(`🚀 Server ready at ${url}`);
});
