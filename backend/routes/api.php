<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\PortfolioController;

Route::middleware('api')->group(function () {
    // Portfolio routes
    Route::get('/portfolio', [PortfolioController::class, 'getPortfolioData']);
    Route::get('/portfolio/education', [PortfolioController::class, 'getEducation']);
    Route::get('/portfolio/experience', [PortfolioController::class, 'getExperience']);

    // Project routes
    Route::get('/projects', [ProjectController::class, 'index']);
    Route::get('/projects/{id}', [ProjectController::class, 'show']);
});
