import { useForm } from "react-hook-form";

const Info = function () {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        alert(JSON.stringify(data));
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <input name="firstName" placeholder="bill" ref={register} />
                </div>

                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input name="lastName" placeholder="luo" ref={register} />
                </div>

                <div>
                    <label htmlFor="isDeveloper">Is an developer?</label>
                    <input
                        type="checkbox"
                        name="isDeveloper"
                        placeholder="luo"
                        value="yes"
                        ref={register}
                    />
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        name="email"
                        placeholder="bluebill1049@hotmail.com"
                        type="email"
                        ref={register}
                    />
                </div>
                <input type="submit" />
            </form>
        </div>
    );
}

export default Info