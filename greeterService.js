// @Greeter service

// controller that starts and stops services
import { ServiceBroker } from "moleculer";

//Creating instance of ServiceBroker
const broker = new ServiceBroker();

//Greeter Service
broker.createService({
    name: "greeter",
    actions: {
        sayHello(ctx) {
            return `Hello ${ctx.params.name}`;
        },
    },
});

//async method because broker.start returns promise, you can use .then syntax as well
async function startApp() {
    // starting the service
    await broker.start();

    // calling the service with action
    const res = await broker.call("greeter.sayHello", { name: "John" });
    console.log(res);
    broker.stop();
}

startApp();
