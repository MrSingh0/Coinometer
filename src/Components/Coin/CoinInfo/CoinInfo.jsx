import React, { useState } from 'react'
import "./style.css";

const CoinInfo = ({ heading, desc }) => {
    const shortDesc = desc.slice(0, 350) + "<h4 style='color:var(--gray)'> Read More...</h4>";
    const longDesc = desc + "<h4 style='color:var(--gray)'> ...Read Less.</h4>";
    const [flag, setFlag] = useState(false);

    return (
        <div className='grey-wrapper'>
            <h2 className='coin-info-heading'>{heading}</h2>
            {desc.length>350?(
                <p 
                onClick={()=>setFlag(!flag)}
                className='coin-info-desc'
                dangerouslySetInnerHTML={{ __html: !flag? shortDesc : longDesc }} />
            ):(
                <p dangerouslySetInnerHTML={{ __html: desc}}/>
            )}
        </div>
    );
}

export default CoinInfo;
