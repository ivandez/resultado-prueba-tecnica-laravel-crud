import { Link } from "@inertiajs/react";

export default function Read({ client }) {
    console.log(client);
    return (
        <form className="max-w-sm mx-auto">
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
                    className="read-only:bg-gray-100 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    value={client.first_name}
                    readOnly={true}
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
                    className="read-only:bg-gray-100 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    readOnly={true}
                    value={client.last_name}
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
                    className="read-only:bg-gray-100 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    readOnly={true}
                    value={client.ci}
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
                    className="read-only:bg-gray-100 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    readOnly={true}
                    value={client.cellphone_number}
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
                    className="read-only:bg-gray-100  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    readOnly={true}
                    value={client.address}
                />
            </div>
            <Link
                href="/dashboard"
                className="text-white bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
                Volver a dashboard
            </Link>
        </form>
    );
}
