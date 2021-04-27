import React from 'react'
import {LoadingOutlined} from '@ant-design/icons'

/*

Nothing should need to be changed here. It just changes some things to show the something is loading. I believe this relates to the login animation. Can't quite remember though :)

*/

const Loading = () => {
    return (
        <div style={{display:"flex", justifyContent:"center", width:"100%", paddingTop:"80px"}}>
            <LoadingOutlined style={{fontSize:"50px", color:"#afafaf"}}/>
        </div>
    )
}

export default Loading
