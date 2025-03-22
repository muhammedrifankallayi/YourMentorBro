import DemoNavbar from 'components/Navbars/DemoNavbar'
import React from 'react'
import "./Resourse.css"
import { Notes } from 'assets/data-sets/resourses' 
import Lottie from 'lottie-react'
import notes from '../../../assets/Lottie-Files/notes.json'
import CardsFooter from 'components/Footers/CardsFooter'

function Resourse() {
  return (
   <>
   <DemoNavbar/>

  <div  style={{marginTop:"95px",}}   className='resourse container' >

<div style={{display:"flex",alignItems:"center"}} >

 <div  style={{width:"100px",height:"100px"}} ><Lottie animationData={notes} /> </div>
 <h1>Notes</h1> 
</div>

  <div class="row ">

    {
Notes.map((x)=>{
    return(
        <div class="col-sm-6 mb-1">
        <div class="card">
          <div class="card-body">
          <h5 class="card-title">{x?.title}</h5>
    <p class="card-text">{x?.desc} </p>
            <a href={x?.path}  download class="btn btn-primary">Download</a>
          </div>
        </div>
      </div>
    )
})
    }





</div>



  </div>
   
   <CardsFooter/>
   
   </>
  )
}

export default Resourse