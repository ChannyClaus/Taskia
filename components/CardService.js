import Image from 'next/image';

const CardService = ({ id, icon, title, description, template, setTemplate }) => {
    return (
        <div className="card" id={id}>
            <h3>{id}</h3>
            <Image src={icon} alt="Service-icon" width={200} height={200} />
            <div className="preview">
                <a href="http://google.com">
                    Preview
                </a>
            </div>
            <div className='select' onClick={() => { setTemplate(id) }}>
                <p>{template === id ? "Selected!" : "Select"}</p>
            </div>
        </div>
    )
}

export default CardService;