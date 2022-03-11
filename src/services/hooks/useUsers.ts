import { useQuery } from "react-query"
import { api } from "../axios"

interface User {
    id: number,
    name: string,
    email: string,
    createdAt: string,
}

//? Separating the axios request from the query request

export async function getUser(): Promise<User[]> {

    const {data} = await api.get("users")

    const users = data.users.map((user) => {
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            createdAt: new Date(user.createdAt).toLocaleString("pt-BR", {
                day: "2-digit",
                month: "long",
                year: "numeric"
            })
        }
    })

    return users
}


export function useUsers() {
    return useQuery("users", getUser, {
        staleTime: 1000 * 5, // 5 seconds
    })
}