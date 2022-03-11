import { useQuery } from "react-query"
import { api } from "../axios"

interface User {
    id: number,
    name: string,
    email: string,
    createdAt: string,
}

type GetUserReponse = {
    users: User[],
    totalCount: number
}

//? Separating the axios request from the query request
export async function getUser(page: number): Promise<GetUserReponse> {

    const {data, headers} = await api.get("users", {
        params: {
            page
        }
    })

    const totalCount = Number(headers["x-total-count"])

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

    return {
        users,
        totalCount
    }
}


export function useUsers(page: number) {
    return useQuery(["users", page], () => getUser(page), {
        staleTime: 1000 * 5, // 5 seconds
    })
}