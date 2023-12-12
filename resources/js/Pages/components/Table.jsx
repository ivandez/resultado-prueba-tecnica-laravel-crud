import { Link } from "@inertiajs/react";
import { router } from "@inertiajs/react";
import { CompactTable } from "@table-library/react-table-library/compact";

const COLUMNS = [
    { label: "Cédula", renderCell: (item) => item.ci },
    {
        label: "Nombres",
        renderCell: (item) => item.first_name,
    },
    { label: "Apellidos", renderCell: (item) => item.last_name },
    {
        label: "teléfono",
        renderCell: (item) => item.cellphone_number,
    },
    { label: "Dirreción", renderCell: (item) => item.address },
    {
        label: "Acciones",
        renderCell: (item) => (
            <>
                <Link
                    href={`/client/${item.id}/edit`}
                    className="text-white bg-green-700  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                >
                    Editar
                </Link>
                <button
                    onClick={() => askDeleteClient(item.id)}
                    type="button"
                    className="text-white bg-red-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                >
                    Eliminar
                </button>
                <Link
                    href={`client/${item.id}`}
                    className="text-white bg-blue-700  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                >
                    Inspeccionar
                </Link>
            </>
        ),
    },
];

export default function Table({ clients }) {
    const nodes = [...clients];

    const data = { nodes };

    const deleteClient = (id) => {
        router.delete(`/client/${id}`);
    };

    const askDeleteClient = (id) => {
        const result = confirm("¿Desea eliminar a este cliente?");

        if (result) {
            deleteClient(id);
        }
    };

    return (
        <div className="w-full">
            <CompactTable columns={COLUMNS} data={data} />
        </div>
        // <table className=" text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        //     <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        //         <tr>
        //             <th scope="col" className="px-6 py-3">
        //                 Cédula
        //             </th>
        //             <th scope="col" className="px-6 py-3">
        //                 Nombres
        //             </th>
        //             <th scope="col" className="px-6 py-3">
        //                 Apellidos
        //             </th>
        //             <th scope="col" className="px-6 py-3">
        //                 teléfono
        //             </th>
        //             <th scope="col" className="px-6 py-3">
        //                 Dirreción
        //             </th>
        //             <th scope="col" className="px-6 py-3">
        //                 Acciones
        //             </th>
        //         </tr>
        //     </thead>
        //     <tbody>
        //         {clients.map((client) => (
        //             <tr className="bg-white dark:bg-gray-800" key={client.id}>
        //                 <th
        //                     scope="row"
        //                     className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        //                 >
        //                     {client.ci}
        //                 </th>
        //                 <td className="px-6 py-4">{client.first_name}</td>
        //                 <td className="px-6 py-4">{client.last_name}</td>
        //                 <td className="px-6 py-4">{client.cellphone_number}</td>
        //                 <td className="px-6 py-4">{client.address}</td>
        //                 <td className="px-6 py-4">
        //                     <Link
        //                         href={`/client/${client.id}/edit`}
        //                         className="text-white bg-green-700  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
        //                     >
        //                         Editar
        //                     </Link>
        //                     <button
        //                         onClick={() => askDeleteClient(client.id)}
        //                         type="button"
        //                         className="text-white bg-red-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
        //                     >
        //                         Eliminar
        //                     </button>
        //                     <Link
        //                         href={`client/${client.id}`}
        //                         className="text-white bg-blue-700  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
        //                     >
        //                         Inspeccionar
        //                     </Link>
        //                 </td>
        //             </tr>
        //         ))}
        //     </tbody>
        // </table>
    );
}
