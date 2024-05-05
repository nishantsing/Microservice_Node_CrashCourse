# Microservices

- [Microservices crash course by Brad Traversy](https://youtu.be/fEDT4lWWe9g)
## Monolithic (Small applications)
- Build and deployed as single unit.
- Easy to deploy, test and deploy.
- Cheaper and simple architecture.
- Design Patterns(MVC, client server, Layer pattern)
- Frontend and Backend Deployed together

- Technology specific
- Can run into issues when scaling.

## Microservices (Enterprise level applications)
- Collection of small, loosely coupled services.(user auth, user profile, product catalog).
- Self-Contained, can be developed, deployed and scaled independently.(Scalability, Modular & Decentralized)
- services can communicate using http.
- Load balancer to distribute incoming request.
- Each service can be deployed independently. (Resillient) No single point of failure.
- All can be part of same application therefore not technology specific.(Flexibility)
High throughput(Go)
complex business logic(python)
realtime communication(node)

- Adds more complexity (Infra, deployment, communication)
- Larger infra and expensive.(Devops(containers) are cruicial) (Operation Overhead)
- Data Management issue(duplication), Developmen time, debugging.

#### API Gateway
## Service Oriented Architecture(SOA)
- service communication using Enterprise Service Bus(ESB).
- Has single point of failure ESB.
- Not as coarse grained as microservices, Each service can have more than 1 functionality. 
- Frontend and Backend deployed separately, here backend can be considered as SOA. 


## Node & Molecular JS

- Express can be used as well but molecular provides some features that express doesn't.
- Load Balancer(using express this needs to be setup using reverse proxy server with nginix or AJProxy).
- Fault tolerance
- Service Discovery


## Implementation

```js
npm init -y
npm i moleculer

"type":"module" // add in package.json if you want to use es6 imports 

index.js(file)

import { ServiceBroker } from "moleculer";
const broker = new ServiceBroker();

broker.createService({
    name:""
    action:{
        functions(ctx) ... ctx.params.params_var
    }
})

broker.start()
broker.call("serviceName.action", {params_var})
broker.stop()

```

