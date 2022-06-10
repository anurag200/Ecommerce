import React, { useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios'
const Home = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const getapiata = async () => {
    await axios
      .get('https://fakestoreapi.com/products')
      .then((res) => {
        console.log(res.data)
        setData(res.data)
        setLoading(false)
      })
      .catch((err) => {
        console.log('getdata error', err)
      })
  }
  useEffect(() => {
    getapiata()
  }, [])

  if (loading) {
    return (
      <>
        <div className="loader_box">
          <div className="loader"></div>
        </div>
      </>
    )
  }

  return (
    <>
      <div className="container">
        <div className="row g-5  mt-3">
          {data &&
            data.map((cur, index) => {
              return <Card key={index} curData={cur} />
            })}
        </div>
      </div>
    </>
  )
}

export default Home
