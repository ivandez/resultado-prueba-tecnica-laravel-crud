import { Link } from "@inertiajs/react";
import { router } from "@inertiajs/react";
import {
    Table,
    Header,
    HeaderRow,
    Body,
    Row,
    HeaderCell,
    Cell,
    useCustom,
} from "@table-library/react-table-library/table";
import { useState } from "react";

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

export default function Table2({ clients }) {
    const nodes = [...clients];

    // const data = { nodes };

    const deleteClient = (id) => {
        router.delete(`/client/${id}`);
    };

    // const askDeleteClient = (id) => {
    //     const result = confirm("¿Desea eliminar a este cliente?");

    //     if (result) {
    //         deleteClient(id);
    //     }
    // };

    const [search, setSearch] = useState("");

    const handleSearch = (event) => {
        setSearch(event.target.value);
    };

    const data = {
        nodes: nodes.filter((item) =>
            item.first_name.toLowerCase().includes(search.toLowerCase())
        ),
    };

    return (
        <>
            <label htmlFor="search">
                Search by Task:&nbsp;
                <input
                    id="search"
                    type="text"
                    value={search}
                    onChange={handleSearch}
                />
            </label>
            <br />

            <Table data={data}>
                {(tableList) => (
                    <>
                        <Header>
                            <HeaderRow>
                                <HeaderCell>Task</HeaderCell>
                                <HeaderCell>Deadline</HeaderCell>
                                <HeaderCell>Type</HeaderCell>
                                <HeaderCell>Complete</HeaderCell>
                                <HeaderCell>Tasks</HeaderCell>
                            </HeaderRow>
                        </Header>

                        <Body>
                            {tableList.map((item) => (
                                <Row key={item.id} item={item}>
                                    <Cell>{item.first_name}</Cell>
                                    <Cell>test</Cell>
                                    <Cell>test</Cell>
                                    <Cell>test</Cell>
                                    <Cell>test</Cell>
                                </Row>
                            ))}
                        </Body>
                    </>
                )}
            </Table>
        </>
    );
}
