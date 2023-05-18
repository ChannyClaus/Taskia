import CardService from './CardService';
import data from "../data/servicesSection.json";
import Image from 'next/image';


const Services = () => {
    return (
        <section className="services" >
            <div className="header-services">
                <h2>{data.title}</h2>
            </div>
            <div className="container-services">
                <div className="grid-services">
                    <div>
                        <h3>Dark</h3>
                        <Image src="/services/cute-rabbit-with-duck-working-laptop-cartoon-illustration_56104-471.jpg" alt="Service-icon" width={200} height={200}></Image>
                        <div>
                            <a href="http://google.com">
                                Preview
                            </a>
                        </div>
                        <div>Select</div>
                    </div>
                    {data.blocks.map(service =>
                        <CardService
                            id={service.id}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                        />
                    )}
                </div>
            </div>
        </section >
    )
}

export default Services;