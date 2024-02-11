import axios from "axios"
import { useEffect, useState } from "react"

export default function useApiData(url, initData = []) {

  const [data, setData] = useState(initData)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState({})
  const [resetData, setResetData] = useState(false)

  const reFetch = () => setResetData(!resetData)

  useEffect(() => {
    setIsLoading(true)
    axios.get(url)
    .then((resp) => {
    setData(resp.data)
    })
    .catch(error => {
    console.warn('ivyko klaida:', error);
    setIsError(error.response)
    })
    .finally(() => {
      setIsLoading(false)
    })
  }, [url, resetData])

  return [data, setData, isLoading, isError, reFetch];
}