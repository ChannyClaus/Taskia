
import CardService from './CardService';
import data from "../data/photos.json";

import Image from 'next/image';

const Photos = function () {
    return (
        <section className="services" >
            <div className="header-services">
                <h2>Choose your photos</h2>
            </div>
            <div className="header-services">
                <h3>Choose from the options below:</h3>
            </div>
            <div className="container-services">
                <div className="grid-services">
                    <div className="card">
                        <Image src="/services/service1.svg" alt="Service-icon" width={200} height={200} />
                        <div>
                            <p>AI Photos</p>
                        </div>
                    </div>
                    <div className="card">
                        <Image src="/services/service1.svg" alt="Service-icon" width={200} height={200} />
                        <div>
                            <p>Our Stock Photo Library</p>
                        </div>
                    </div>
                    <div className="card" style={{ 'background-color': '#59cea7' }}>
                        <Image src="/services/service1.svg" alt="Service-icon" width={200} height={200} />
                        <div>
                            <p>Your Own Photos</p>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Photos;