import React from 'react'
import logo from "./Image/webure.png"
import logo1 from "./Image/img1.png"
export const Render = () => {
  return (
    <div>
<div style={{display:"flex", justifyContent:"space-between",border:"1px solid white", padding:"10px"}}>
    <div>Webure Technology</div>
    <div>About us</div>
    <div>Services</div>
    <div>Careers</div>
    <div>ROI stories</div>
    <div>Blogs</div>
    <div>Contact us</div>
    <div><button>Let's Talk</button></div>
</div>
<div><img src={logo} style={{width:"100%",height:"500px"}} alt="i"/></div>
<div style={{display:"flex", justifyContent:"space-between",border:"1px solid white", padding:"10px"}}>
<div><h1>Slack</h1></div>
<div><h1>Prudential</h1></div>
<div><h1>Microsoft</h1></div>
<div><h1>Zoover</h1></div>

</div>
<div><img src={logo1} style={{width:"100%",height:"500px"}} alt="i"/></div>

    </div>
  )
}
