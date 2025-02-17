
import CardService from './CardService';
import data from "../data/servicesSection.json";

import Image from 'next/image';

const Templates = function ({ template, setTemplate }) {
    return (
        <section className="services" >
            <div className="header-services">
                <h2>{data.title}</h2>
            </div>
            <div className="container-services">
                <div className="grid-services">
                    {data.blocks.map(service =>
                        <CardService
                            id={service.id}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                            template={template}
                            setTemplate={setTemplate}
                        />
                    )}
                </div>
            </div>
        </section >
    )
}

export default Templates;