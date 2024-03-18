import React from 'react';
import './Poster.css'

const Poster = () => {
    return (
        <>
            <div className="container">
                <div className='container_h1_p'>
                    <h1>Where Fitness Meets Fun and Results Are Achieved</h1>
                    <p>Include an inspiring image or video that showcases your gym's energetic atmosphere, trainers, or members working out.</p>
                </div>
                <div className="container-images">
                    <div className="container-images1">
                        <div>
                            <img alt="gallery" src="https://www.pixelstalk.net/wp-content/uploads/images6/Fitness-Desktop-Wallpaper.jpg" />
                        </div>
                        <div>
                            <img alt="gallery" src="https://assets.sweat.com/shopify_articles/images/010/005/285/original/BackToGymSWEATf1f07a7f6f79e7b8807d2436a6ae8e8b.jpg?1625801362" />
                        </div>
                        <div>
                            <img alt="gallery" src="https://i.ytimg.com/vi/gey73xiS8F4/maxresdefault.jpg" />
                        </div>
                    </div>
                    <div className="container-images1">
                        <div>
                            <img alt="gallery" src="https://wallpaperaccess.com/full/1087621.jpg" />
                        </div>
                        <div>
                            <img alt="gallery" src="https://wallpapercave.com/wp/wp6331008.jpg" />
                        </div>
                        <div >
                            <img alt="gallery" src="https://img.freepik.com/premium-photo/woman-training-gym_946657-755.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Poster