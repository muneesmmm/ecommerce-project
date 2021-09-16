import React from 'react';
import { Carousel } from 'react-responsive-carousel';

export default () => (
    <Carousel autoPlay>
        <div>
            <img alt="" src="https://post.healthline.com/wp-content/uploads/2020/09/health-benefits-of-apples-1200x628-facebook-1200x628.jpg" />
            <p className="legend">Legend 1</p>
        </div>
        <div>
            <img alt="" src="https://images.news18.com/ibnlive/uploads/2021/08/1628223597_mangoes-1200x800.png" />
            <p className="legend">Legend 2</p>
        </div>
        <div>
            <img alt="" src="https://cdn.mos.cms.futurecdn.net/UaBq5LGpJQd3DDo6ve2dFW-1200-80.jpg" />
            <p className="legend">Legend 3</p>
        </div>
        <div>
            <img alt="" src="https://hips.hearstapps.com/clv.h-cdn.co/assets/15/22/1432664914-strawberry-facts1.jpg" />
            <p className="legend">Legend 4</p>
        </div>
        
    </Carousel>
);

