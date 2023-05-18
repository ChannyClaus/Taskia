import Image from 'next/image';

const CardService = ({ id, icon, title, description }) => {
    return (
        <div className="card" id={id}>
            <h3>{id}</h3>
            <Image src={icon} alt="Service-icon" width={200} height={200} />
            <div className="info">
                <a href="http://google.com">
                    Preview
                </a>
                <p>Select</p>
            </div>
        </div>
    )
}

export default CardService;