import DemoNavbar from 'components/Navbars/DemoNavbar'
import React from 'react'
import "./Careers.scss"
function Careers() {
  return (
    <div>
     <DemoNavbar/>


<div  className='container' style={{marginTop:"100px"}} >

{/* <div  className='career-card' style={{padding:"10px",border:"1px solid #cccc",width:"350px"}} >
    <h2> Job Name </h2>
<ul>
    <li> <i class="bi bi-folder"></i> domain  </li>
    <li> <i class="bi bi-briefcase"></i> JobType  </li>
    <li> <i class="bi bi-globe"></i> Location  </li>
    <li> <i class="bi bi-folder"></i> JobTitle  </li>
</ul>
<div  style={{width:"100%" ,display:"flex" ,justifyContent:"flex-end"}} >
  More <i class="bi bi-arrow-right"></i>
</div>
</div> */}

<div  style={{width:"100%" ,padding:'10px' ,fontWeight:"bolder",textAlign:"center"}} >
    Sorry!, Currently there are no vaccancies .We will update ! if we are hiring..
</div>


</div>



    </div>
  )
}

export default Careers