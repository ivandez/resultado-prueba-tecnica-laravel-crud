export default function Table() {
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
                {[1, 2, 3].map((item) => (
                    <tr className="bg-white dark:bg-gray-800">
                        <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            26589996
                        </th>
                        <td className="px-6 py-4">Pablo Pablo</td>
                        <td className="px-6 py-4">Gomez Gomez</td>
                        <td className="px-6 py-4">+584245895693</td>
                        <td className="px-6 py-4">Valencia Carabobo</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
