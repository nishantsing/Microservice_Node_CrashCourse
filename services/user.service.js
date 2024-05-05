// Expand More
// Ideas: connect database 

import { ServiceBroker } from "moleculer";

const broker = new ServiceBroker();

// uuid
function generateId() {
    return Math.floor(Math.random() * 1000) + 1; // returns number between 1 and 1000
}

// coming from database
const users = [];

broker.createService({
    name: "user",
    actions: {
        async createUser(ctx) {
            const { username, email } = ctx.params;
            const newUser = { id: generateId(), username, email };
            users.push(newUser);
            return newUser;
        },

        async getUsers(ctx) {
            return users;
        },
    },
});

export default broker;
