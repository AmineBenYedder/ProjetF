import { useState } from 'react'
import ReactModal from 'react-modal';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addProduct } from '../../redux/actions';
import { Button } from 'reactstrap'
function ProductAdd() {
    const[isOpen,setIsopen]=useState(false)
    const[name,setName]=useState("")
    const[description,setDescription]=useState("")
    const[price,setPrice]=useState("")
    const dispatch=useDispatch()
    const handleModal=()=>{setIsopen(!isOpen)}
    const handleSubmit=()=>{
    const newProduct={name,description,price}
            dispatch(addProduct(newProduct))
            handleModal()
            }

  return (
    <div>
      <Button color='info' outline onClick={handleModal}>Add service</Button>

         <ReactModal style={{width:"200px",height:"500px"}} isOpen={isOpen}>
            <label>Name</label>
              <input onChange={(e)=>setName(e.target.value)}/>
            <label>Description</label>
              <input onChange={(e)=>setDescription(e.target.value)}/>
            <label>Price</label>
              <input onChange={(e)=>setPrice(e.target.value)}/>
          <button onClick={handleSubmit}>SUBMIT</button>
          <button onClick={handleModal}>CLOSE</button>
        </ReactModal>
    </div>
  )
}

export default ProductAdd
