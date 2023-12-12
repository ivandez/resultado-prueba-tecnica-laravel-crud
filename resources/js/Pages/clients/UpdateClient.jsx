import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import Update from "./components/Update";

export default function ReadClient({ auth, client }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    {`Actualizar cliente: ${client.first_name} ${client.last_name}`}
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="relative overflow-x-auto py-5">
                            <Update client={client} />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
