import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addtocart } from './Redux/Action/Action'
const Details = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const [resData, setResdata] = useState([])
  const [loadding, setloadding] = useState(true)
  const getdata = async () => {
    await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setResdata(res.data)
        console.log(res.data)
        setloadding(false)
      })
      .catch((err) => {
        console.log('getdat', err)
      })
  }
  const addcart = (data) => {
    dispatch(addtocart(data))
  }
  useEffect(() => {
    getdata()
  }, [])
  if (loadding) {
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
      <div className="container ">
        <div className="row mt-5">
          <div className="col-md-6 col-12  left_box">
            <img src={resData.image} alt="" />
          </div>
          <div className="col-lg-6 col-12  rigth_box">
            <table>
              <tr>
                <td>
                  <span>Name </span>
                </td>
                <td>{resData.category}</td>
              </tr>
              <tr>
                <td>
                  <span>Description </span>
                </td>
                <td>{resData.description}</td>
              </tr>
              <tr>
                <td>
                  <span>Title </span>
                </td>
                <td>{resData.title}</td>
              </tr>
              <tr>
                <td>
                  <span>Price </span>
                </td>
                <td>{resData.price}</td>
              </tr>
              <tr>
                <td>
                  <NavLink to="/AddToCart">
                    <button onClick={() => addcart(resData)}>
                      Add To Cart
                    </button>
                  </NavLink>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Details
