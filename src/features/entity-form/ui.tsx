import { Film } from "@/entities/film";
import { Person } from "@/entities/person";
import { Planet } from "@/entities/planet";
import { SubmitHandler, useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type EntityFieldConfig = {
    name: keyof Person | keyof Planet | keyof Film;
    label: string;
    placeholder: string;
    type?: string;
};

interface EntityFormProps {
    fieldConfigs: EntityFieldConfig[];
}

export const EntityForm = ({ fieldConfigs }: EntityFormProps) => {
    const data = useLoaderData() as any;
    const navigate = useNavigate();

    const generateSchema = () => {
        const schemaFields: any = {};

        fieldConfigs.forEach(({ name, type }) => {
            if (type === "string") {
                schemaFields[name] = yup
                    .string()
                    .required("is required")
                    .min(3, "must be at least 3 characters long");
            } else if (type === "number") {
                schemaFields[name] = yup
                    .number()
                    .required("is required")
                    .typeError("must be a number");
            }
        });
        return yup.object(schemaFields).required();
    };

    const schema = generateSchema();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: data,
        resolver: yupResolver(schema),
    });

    const onSubmit: SubmitHandler<any> = (formData) => {
        console.log("Form Submitted:", formData);
    };

    return (
        <div className="w-[342px] mx-auto md:w-[442px]">
            <form onSubmit={handleSubmit(onSubmit)}>
                {fieldConfigs.map(
                    ({ name, label, placeholder, type = "text" }) => (
                        <div key={name} className="flex flex-col gap-2 mb-4">
                            <label htmlFor={name} className="text-2xl">
                                {label}
                                <span className="text-red-500 text-sm ml-2">
                                    {errors[name]?.message as string}
                                </span>
                            </label>
                            <input
                                id={name}
                                type={type}
                                {...register(name)}
                                placeholder={placeholder}
                                className="input input-lg input-bordered w-full"
                            />
                        </div>
                    )
                )}
                <div className="mt-6">
                    <button
                        type="submit"
                        className="btn btn-lg text-xl btn-secondary"
                    >
                        Edit
                    </button>
                    <button
                        type="button"
                        className="btn btn-lg text-xl text-white btn-error ml-6"
                        onClick={() => navigate("..")}
                    >
                        Go back
                    </button>
                </div>
            </form>
        </div>
    );
};
