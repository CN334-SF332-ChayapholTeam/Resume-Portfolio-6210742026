<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Project;

class ProjectController extends Controller
{
    // Delete Data From Database
    public function destroy($id){
        $project = Project::find($id);
        $project->delete();
        return response()->json([
            'status'=> 200,
            'message'=> 'Project Delete Successfully'
        ]);
    }
    // Update Data
    public function update(Request $request, $id){
        $project = Project::find($id);
        $project->pname = $request->input('pname');
        $project->rname = $request->input('rname');
        $project->tname = $request->input('tname');
        $project->update();
        return response()->json([
            'status'=> 200,
            'message'=> 'Project Update Successfully'
        ]);
    }
    // Edit Data (Still not update just change value in field)
    public function edit($id){
        $project = Project::find($id);
        return response()->json([
            'status'=> 200,
            'project'=> $project,
        ]);
    }

    //  Show all Data in Database
    public function index(){
        $project = Project::all();
        return response()->json([
            'status'=> 200,
            'project'=> $project,
        ]);
    }

    // Store the data in Database
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
