<?php

namespace App\Http\Controllers;

use App\Models\Client;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ClientController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('clients/CreateForm', [
            'user' => auth()->user()
          ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $client = new Client();

        $client->ci = $request->ci;

        $client->first_name = $request->firstName;

        $client->last_name = $request->lastName;

        $client->cellphone_number = $request->cellphoneNumber;

        $client->address = $request->address;
 
        $client->save();

        return to_route('dashboard');
    }

    /**
     * Display the specified resource.
     */
    public function show(Client $client)
    {
        return Inertia::render('clients/ReadClient', [
            'user' => auth()->user(),
            'client' => $client
          ]);

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Client $client)
    {
        return Inertia::render('clients/UpdateClient', [
            'user' => auth()->user(),
            'client' => $client
          ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Client $client)
    {

        $client->ci = $request->ci;

        $client->first_name = $request->firstName;

        $client->last_name = $request->lastName;

        $client->cellphone_number = $request->cellphoneNumber;

        $client->address = $request->address;
 
        $client->save();

        return to_route('dashboard');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Client $client)
    {
        $client->delete();

        return to_route('dashboard');
    }
}
