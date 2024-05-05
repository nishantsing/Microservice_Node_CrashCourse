// Expand More
// Ideas: Install nodemailer and actually send the email

import { ServiceBroker } from "moleculer";

const broker = new ServiceBroker();

broker.createService({
    name: "email",
    actions: {
        async sendEmail(ctx) {
            const { recipient, subject, content } = ctx.params;

            //Simulate email logic
            console.log(
                `Sending email to ${recipient} with subject ${subject}`
            );
            console.log(`Content: ${content}`);
            return `Email sent to ${recipient}`;
        },
    },
});

export default broker;
