import React from "react";
import { useForm } from "react-hook-form";

function LoginFormHook() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Email</label>
                <input
                    type="email"
                    {...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address",
                        },
                    })}
                />
                {errors.email && <p>{errors.email.message}</p>}
            </div>
            <div>
                <label>Password</label>
                <input
                    type="password"
                    {...register("password", { required: "Password is required" })}
                />
                {errors.password && <p>{errors.password.message}</p>}
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}
export default LoginFormHook;