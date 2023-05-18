import Image from 'next/image';

const CardService = ({ id, icon, title, description, template, setTemplate }) => {
    const selected = template === id

    return (
        <div className="card" style={selected ? { 'background-color': '#59cea7' } : {}} id={id}>
            <h3>{id}</h3>
            <Image src={icon} alt="Service-icon" width={200} height={200} />
            <div className="preview" style={selected ? { 'background-color': 'white' } : {}}>
                <a href="http://google.com">
                    Preview
                </a>
            </div>
            <div className='select' style={selected ? { 'background-color': 'black' } : {}} onClick={() => { setTemplate(id) }}>
                <p>{selected ? "Selected!" : "Select"}</p>
            </div>
        </div>
    )
}

export default CardService;