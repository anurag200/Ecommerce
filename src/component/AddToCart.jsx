import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { deletedata } from './Redux/Action/Action'
const AddToCart = () => {
  const dispatch = useDispatch()
  const navigation = useNavigate()
  const select = useSelector((store) => store.infodata.user)
  const removeData = (id) => {
    dispatch(deletedata(id))
  }
  const gotoHome = () => {
    navigation('/')
  }
  return (
    <>
      {select.length > 0 ? (
        <div className="container addtocart">
          <table className="table mt-3">
            <thead>
              <tr>
                <th scope="col">Product</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Remove</th>
              </tr>
            </thead>
            <tbody>
              {select.map((cur) => {
                return (
                  <>
                    <tr>
                      <th scope="row" key={cur.id}>
                        <img src={cur.image} alt="" width={100} height={100} />
                      </th>
                      <td>{cur.title.slice(0, 30)}</td>
                      <td>{cur.price}</td>
                      <td>1</td>
                      <td>
                        <button
                          className="remove_btn"
                          onClick={() => removeData(cur.id)}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  </>
                )
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="container">
          <div className="row d-flex justify-content-center mt-5">
            <div className="col-4 gotohome text-center">
              <h1>no item in cart</h1>
              <button onClick={gotoHome}>shopping now</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default AddToCart
