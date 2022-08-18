import { useState, useEffect } from 'react'
import axios from 'axios'

export const path = process.env.REACT_APP_API

const useGetData = (url, initialState = null) => {
  const [data, setData] = useState(initialState)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getData = async () => {
      setLoading(true)
      const { data } = await axios.get(`${path}${url}`)
      setData(data)
      setLoading(false)
    }
    getData()
  }, [url])
  return [data, loading]
}

export default useGetData