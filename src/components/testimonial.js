import React from 'react';
import { FadeTransform } from 'react-animation-components';

const Testimonial = ({reference}) =>{
    return(
        <FadeTransform
        in
        transformProps={{
            exitTransform: 'scale(0.5) translateY(50%)'
        }}>
        <div className="testimonial_container">
            <h1>Testimonials</h1>
            <div className="testimonials_container">
                {reference.map((reference)=>(
                <div key={reference.id} className="reference">
                    <div className="quote">
                    <a href={reference.source}>
                            <p> {reference.quote} </p>
                        </a>
                        
                    </div>
                </div>
                ))}
            </div>
        </div>
         </FadeTransform>
    );
}

export default Testimonial;