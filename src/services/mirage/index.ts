import {createServer, Factory, Model, Response} from "miragejs"
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
                    return faker.name.firstName()
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
            
            this.get("/users", function (schema, request) {

                const {page = 1, per_page = 10} = request.queryParams

                const total = schema.all("user").length

                const pageStart = (Number(page) - 1) * Number(per_page)
                const pageEnd = pageStart + Number(per_page)

                /**
                 * Page number 3
                 * * pageStart => 3 - 1 * 10 => 20
                 * * pageEnd => 20 + 10 => 30
                 * Goes from 20 to 30
                 */
                
                const users = this.serialize(schema.all("user"))
                    .users.slice(pageStart, pageEnd)
                    
                return new Response (
                    200,
                    {"x-total-count": String(total)}, //? Header
                    {users}
                )
            })

            this.post("/users")

            this.namespace = "" //* Preventing the mirage routes to colide with the Next routes
            this.passthrough()  //* For none mirage routes
        }

    })

    return server
}