<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Project;

class ProjectController extends Controller
{
    //
    public function store(Request $request){
        $project = new Project;
        $project->pname = $request->input('pname');
        $project->rname = $request->input('rname');
        $project->tname = $request->input('tname');
        $project->save();

        return response()->json([
            'status'=> 200,
            'message'=> 'Project Add Successfully'
        ]);
    }
}
