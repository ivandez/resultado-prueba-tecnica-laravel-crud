import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import Table from "./components/Table";
import { Link } from "@inertiajs/react";
import { useState } from "react";

export default function Dashboard({ auth, clients }) {
    const [filteredClients, setFilteredClients] = useState(clients);

    const handleFilter = (event) => {
        const value = event.target.value;
        const filtered = clients.filter((user) => user.ci.includes(value));
        setFilteredClients(filtered);
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Tabla de clientes
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="mb-4">
                        <Link
                            href="/client/create"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                        >
                            Crear Cliente
                        </Link>
                    </div>
                    <div className="mb-4">
                        <input
                            placeholder="buscar por cédula de identidad"
                            onChange={handleFilter}
                            type="text"
                            className="w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        />
                    </div>
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="relative overflow-x-auto">
                            <Table clients={filteredClients} />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
