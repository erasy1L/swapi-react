import { SubmitHandler, useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { InputPassword } from "@/shared/ui/input-password";
import { setUser, User } from "@/entities/user/model";
import { useAppDispatch } from "@/store/store";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup
    .object({
        username: yup
            .string()
            .required("Username is required")
            .min(3, "Username must be at least 3 characters long"),
        password: yup
            .string()
            .required("Password is required")
            .min(3, "Password must be at least 3 characters long"),
    })
    .required();

export const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<User>({ resolver: yupResolver(schema) });
    const navigate = useNavigate();
    const location = useLocation();

    const dispatch = useAppDispatch();

    const onSubmit: SubmitHandler<User> = (data) => {
        dispatch(setUser({ username: data.username }));

        const redirectTo = location.state?.from || "/dashboard";
        navigate(redirectTo, { replace: true });
    };

    return (
        <div className="w-[342px] mx-auto md:w-[442px]">
            <p className="text-3xl pb-6">Log in to proceed</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-8">
                    <div>
                        <div className="flex flex-col gap-1 w-full mb-2">
                            <p className="text-red-500 text-sm mt-1 min-h-[20px]">
                                {errors.username?.message}
                            </p>
                            <input
                                type="text"
                                placeholder="Username"
                                className="input input-lg input-bordered w-full"
                                {...register("username")}
                                required
                            />
                        </div>
                        <InputPassword
                            errorMessage={errors.password?.message}
                            register={register}
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn btn-lg text-xl btn-secondary"
                    >
                        Log in
                    </button>
                </div>
            </form>
        </div>
    );
};
