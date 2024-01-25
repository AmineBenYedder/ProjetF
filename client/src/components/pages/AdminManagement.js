import React from 'react'
import { Route,Routes,Link } from 'react-router-dom'
import ProductAdd from './ProductAdd'
import ProductList from './ProductList'

import { useState } from 'react'

function AdminManagement() {
   
    

  return (
    <div>
          <h3>CRUD ADMIN</h3>
      <br />
      <section className='NOUS'>
        <ProductList/>
        <ProductAdd />
      <Routes>
           <Route  path="/add" element= {<ProductAdd /> }/>
      </Routes>
      </section>
    </div>
  )
}

export default AdminManagement
