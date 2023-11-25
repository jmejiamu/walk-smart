import { useState } from "react"

export const useFetch = <T extends Object>(dataType: T) => {

    const [data, setData] = useState(dataType)

    const fetcheer = async (targetUrl: string, headers?: RequestInit) => {
        try {
            const resp = await fetch(targetUrl, headers)
            if (!resp.ok) return
            const data: T = await resp.json()
            setData(data)

        } catch (error) {
            console.log(error);
        }
    }

    return {
        fetcheer,
        data
    }
}


export const useFetcheer = () => {

    const fetcheer = async (targetUrl: string, headers?: RequestInit) => {

        try {
            const resp = await fetch(targetUrl, headers)
            if (!resp.ok) {
                throw new Error("Network error - response was not OK");
            }
            const data = await resp.json()
            return data
        } catch (error) {
            console.error("There has been a problem with your fetch operation:", error);
        }
    }

    return {
        fetcheer,
    }
}



