import { useState } from "react"

export const useFetch = <T extends any>(dataType: T) => {

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


