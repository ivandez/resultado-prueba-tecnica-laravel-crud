export default function Table({ clients }) {
    console.log(clients);
    return (
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Cédula
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Nombres
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Apellidos
                    </th>
                    <th scope="col" className="px-6 py-3">
                        teléfono
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Dirreción
                    </th>
                </tr>
            </thead>
            <tbody>
                {clients.map((client) => (
                    <tr className="bg-white dark:bg-gray-800" key={client.id}>
                        <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            {client.ci}
                        </th>
                        <td className="px-6 py-4">{client.first_name}</td>
                        <td className="px-6 py-4">{client.last_name}</td>
                        <td className="px-6 py-4">{client.cellphone_number}</td>
                        <td className="px-6 py-4">{client.address}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
