/*
  The resolvers are responsable to implement the actual GraphQL calls
*/
import * as uuid from 'uuid';

const users = [
  {
    id: uuid.v4(),
    name: 'Edward',
    email: 'ed@email.com'
  },
  {
    id: uuid.v4(),
    name: 'Paul',
    email: 'paul@email.com'
  }
];

export default {
  Query: {
    users: () => {
      return users;
    },
    user: (_, { id }) => {
      return users.find(user => user.id === id);
    },
  },
  Mutation: {
    createUser: (_, { name, email }) => {
      if(!users.find(user => user.email === email)){
        console.log('Adding new user');
        const newUser = {
          id: uuid.v4(),
          name,
          email
        };
        console.log(newUser);
        users.push(newUser);
      }
    }
  },
  Counter: {
    countString: counter => `Current count: ${counter.count}`
  },
  Subscription: {
    counter: {
      subscribe: (parent, args, {pubsub}) => {
        const channel = uuid.v4();
        let count = 0;
        setInterval(() => pubsub.publish(channel, {
          counter: {
            count: count++,
          }
        }), 2000);
        return pubsub.asyncIterator(channel);
      }
    }
  }
};