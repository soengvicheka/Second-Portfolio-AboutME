<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PortfolioController extends Controller
{
    public function getPortfolioData()
    {
        $data = [
            'name' => 'Olivia Smith',
            'title' => 'Product Designer',
            'location' => 'USA',
            'bio' => 'I\'m a passionate product designer with expertise in creating intuitive and beautiful user experiences.',
            'stats' => [
                'projects' => 400,
                'clients' => 50,
                'users' => 1000000000
            ],
            'services' => [
                [
                    'id' => 1,
                    'title' => 'UI/UX Design',
                    'description' => 'Creating beautiful and functional user interfaces'
                ],
                [
                    'id' => 2,
                    'title' => 'Application Design',
                    'description' => 'Designing comprehensive mobile and web applications'
                ],
                [
                    'id' => 3,
                    'title' => 'Website Design',
                    'description' => 'Building responsive and modern websites'
                ]
            ]
        ];

        return response()->json($data);
    }

    public function getEducation()
    {
        $education = [
            ['school' => 'Harmony Institute', 'degree' => 'Bachelor in UI/UX Design', 'year' => '2018 - 2022'],
            ['school' => 'Aurora Academy', 'degree' => 'Diploma in Graphics Design', 'year' => '2016 - 2018'],
            ['school' => 'CrystalBrook', 'degree' => 'Advanced Certification', 'year' => '2022 - 2023']
        ];

        return response()->json($education);
    }

    public function getExperience()
    {
        $experience = [
            ['company' => 'InSight Hancer', 'position' => 'Senior Product Designer', 'year' => '2022 - Present'],
            ['company' => 'Self-Employed', 'position' => 'Freelance Designer', 'year' => '2021 - 2022'],
            ['company' => 'KG Graphics Studio', 'position' => 'Junior UI/UX Designer', 'year' => '2019 - 2021']
        ];

        return response()->json($experience);
    }
}
