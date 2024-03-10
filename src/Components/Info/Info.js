import React from 'react';


function Info ({img1 , text1, img2 , text2, img3 , text3}){
   
    return(
        <div className='card'>
            <div className='div'>
                <div>
                    <img alt='' src={img1} />
                </div>
                
                <p>{text1}</p>
            </div>
            <div className='div'>
                <div>
                    <img alt='' src={img2} />
                </div>
                
                <p>{text2}</p>
            </div>
            <div className='div'>
                <div>
                    <img alt='' src={img3} />
                </div>
                
                <p>{text3}</p>
            </div>
           
        </div>
    )
}

export {Info}