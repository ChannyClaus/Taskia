import Image from 'next/image';
import data from "../data/heroSection.json";



const Hero = () => {
    const onSubmit = (event) => {
        // stops the page from reloading
        // https://stackoverflow.com/a/50193253/4067308
        event.preventDefault();
        console.log(event.target[0].value)
    }

    return (
        <section className="hero-section">
            <div className="container-hero">

                <div className="content-hero">

                    <div className="left-side">
                        <h1>{data.title}</h1>
                        <p>{data.description}</p>
                        <form onSubmit={onSubmit}>
                            <div className="form-group">
                                <input type="text" name="query" />
                                <button type="submit" >Build</button>
                            </div>
                        </form>
                    </div>


                    <div className="right-side">
                        <Image src="/hero.svg" layout="fill" />
                    </div>

                </div>

            </div>
        </section>
    )
}


export default Hero;