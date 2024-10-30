import { useState } from "react";
import { UseFormRegister } from "react-hook-form";

interface Props {
    errorMessage?: string;
    register: UseFormRegister<any>;
}

export const InputPassword = ({ errorMessage, register }: Props) => {
    const [isHidden, setIsHidden] = useState<boolean>(true);

    const inputType = isHidden ? "password" : "text";
    const iconSrc = isHidden
        ? "https://img.icons8.com/ios-glyphs/30/visible--v1.png"
        : "https://img.icons8.com/ios-glyphs/30/invisible.png";

    const iconAlt = isHidden ? "Show password" : "Hide password";

    return (
        <div className="flex flex-col gap-1 w-full">
            <p className="text-red-500 text-sm mt-1 min-h-[20px]">
                {errorMessage}
            </p>

            <div className="input input-bordered input-lg w-full flex items-center justify-center gap-2">
                <input
                    id="password"
                    type={inputType}
                    placeholder="Password"
                    className="grow"
                    {...register("password")}
                    required
                />
                <button type="button" onClick={() => setIsHidden(!isHidden)}>
                    <img width="24" height="24" src={iconSrc} alt={iconAlt} />
                </button>
            </div>
        </div>
    );
};
