<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProjectController extends Controller
{
    public function index()
    {
        $projects = [
            [
                'id' => 1,
                'title' => 'Ready Product - E-commerce Platform',
                'category' => 'E-commerce Design',
                'tags' => ['ECOMMERCE', 'DESIGN', 'MOBILE'],
                'description' => 'A complete e-commerce platform redesign'
            ],
            [
                'id' => 2,
                'title' => 'Healthy Product Mobile App',
                'category' => 'Mobile App Design',
                'tags' => ['MOBILE', 'HEALTH', 'APP'],
                'description' => 'A health tracking mobile application'
            ],
            [
                'id' => 3,
                'title' => 'Ready Product Web Dashboard',
                'category' => 'Web Design',
                'tags' => ['DASHBOARD', 'WEB', 'UI/UX'],
                'description' => 'Professional dashboard for data analytics'
            ]
        ];

        return response()->json($projects);
    }

    public function show($id)
    {
        return response()->json(['id' => $id, 'message' => 'Project details']);
    }
}
