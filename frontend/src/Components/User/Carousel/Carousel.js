import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import banner1 from './banner1.jpg'
import banner2 from './banner2.jpg'

export default () => (
    <Carousel autoPlay>
        <div>
            <img alt="" src={banner1} />
            
        </div>
        <div>
            <img alt="" src={banner2} />
            
        </div>
        {/* <div>
            <img alt="" src="https://cdn.mos.cms.futurecdn.net/UaBq5LGpJQd3DDo6ve2dFW-1200-80.jpg" />
            
        </div>
        <div>
            <img alt="" src="https://hips.hearstapps.com/clv.h-cdn.co/assets/15/22/1432664914-strawberry-facts1.jpg" />
            
        </div> */}
        
    </Carousel>
);

