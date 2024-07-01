import { useEffect, useState } from "react"

export const useFetch = () => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        error: null,
    })

    const fetchData = async(url, method, bodyData = null) => {
        if (!url) return

        const options = {
            method: method,
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: method == 'GET' || method == 'DELETE' ? null : JSON.stringify(bodyData)
        }

        try {
            const res = await fetch(url, options)
            const pulledData = await res.json()
            setState({
                data: pulledData,
                isLoading: false,
                error: null
            })
        }
        catch(err) {
            setState({
                data: null,
                isLoading: false,
                error: err,
            })
        }
    }

  return {
    data: state.data,
    isLoading: state.isLoading,
    error: state.error,
    fetchData: fetchData,
  }
}
