import { useForm } from "react-hook-form";
import { router } from "@inertiajs/react";
import { Link } from "@inertiajs/react";

export default function ClientForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        router.post("/client", data);
    };

    return (
        <form className="max-w-sm mx-auto" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-5">
                <label
                    htmlFor="firstname"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                >
                    Nombres
                </label>
                <input
                    type="text"
                    id="firstname"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required
                    {...register("firstName")}
                />
            </div>
            <div className="mb-5">
                <label
                    htmlFor="lastname"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                >
                    Apellidos
                </label>
                <input
                    type="text"
                    id="lastname"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required
                    {...register("lastName")}
                />
            </div>
            <div className="mb-5">
                <label
                    htmlFor="ci"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                >
                    Cédula
                </label>
                <input
                    type="text"
                    id="ci"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required
                    {...register("ci")}
                />
            </div>
            <div className="mb-5">
                <label
                    htmlFor="cellphoneNumber"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                >
                    Teléfono
                </label>
                <input
                    type="text"
                    id="cellphoneNumber"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required
                    {...register("cellphoneNumber")}
                />
            </div>
            <div className="mb-5">
                <label
                    htmlFor="address"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                >
                    Dirección
                </label>
                <input
                    type="text"
                    id="address"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required
                    {...register("address")}
                />
            </div>
            <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
                Submit
            </button>
            <Link
                href="/"
                className="ml-2 text-white bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
                Cancelar
            </Link>
        </form>
    );
}
