import {createServer, Factory, Model} from "miragejs"
import {faker} from "@faker-js/faker"

type User = {
    name: string,
    email: string,
    created_at: string,
}

export function makeServer() {
    const server = createServer({
        models: {
            user: Model.extend<Partial<User>>({}) //* Accepts if the is messing information
        },

        factories: {
            user: Factory.extend({
                name(index: number) {
                    return `User ${index + 1}`
                },
                email() {
                    return faker.internet.email().toLowerCase()
                },
                createdAt() {
                    return faker.date.recent(10)
                }
            })
        },

        seeds(server) {
            server.createList("user", 200)
        },

        routes() {
            this.namespace = "api"
            this.timing = 600
            
            this.get("/users")
            this.post("/users")

            this.namespace = "" //* Preventing the mirage routes to colide with the Next routes
            this.passthrough()  //* For none mirage routes
        }

    })

    return server
}