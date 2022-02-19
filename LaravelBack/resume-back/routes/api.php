<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\ProjectController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::get('/project', [ProjectController::class, 'index']);
Route::post('/addwork', [ProjectController::class, 'store']);
Route::get('/edit-project/{id}', [ProjectController::class, 'edit']);
Route::put('update-project/{id}', [ProjectController::class, 'update']);
Route::delete('delete-project/{id}', [ProjectController::class, 'destroy']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

