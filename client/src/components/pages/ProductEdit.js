import {useState} from 'react'
import ReactModal from 'react-modal';
import {useDispatch} from "react-redux"
import { editProduct } from '../../redux/actions';
import { Button } from 'reactstrap';

function ProductEdit({el}) {
    let[isOpen,setIsOpen]=useState(false)
    const[name,setName]=useState(el.name)
    const[description,setDescription]=useState(el.description)
    const[price,setPrice]=useState(el.price)
    
    const handleModal=()=>{setIsOpen(!isOpen)}
    const dispatch=useDispatch()
    const editHanlder=()=>{
    const Product={name,description,price}
    console.log(Product,"testttt")
    dispatch(editProduct(el._id,Product))
    handleModal()
    }

  return (
    <div>
        <Button color="success" onClick={handleModal}>EDIT</Button>
       <ReactModal style={{width:"200px",height:"200px"}}isOpen={isOpen}>
            <label>Name</label>
                <input onChange={(e)=>setName(e.target.value)} value={name}/>
            <label>Description</label>
                <input onChange={(e)=>setDescription(e.target.value)} value={description}/>
            <label>Price</label>
                <input onChange={(e)=>setPrice(e.target.value)} value={price}/>
            <button onClick={editHanlder} >SUBMIT</button>
            <button onClick={handleModal}>CLOSE</button> 
        </ReactModal>
    </div>
  )
}

export default ProductEdit
