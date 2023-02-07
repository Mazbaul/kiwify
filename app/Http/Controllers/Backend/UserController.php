<?php

namespace App\Http\Controllers\Backend;

use App\Helpers\Helper;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    use Helper;

    public function __construct()
    {
        $this->model = new User();
    }

    public function index()
    {
        $users = $this->model->school()
            ->when(input('keyword'), function ($query) {
                $keyword = input('keyword');
                $query->where('name', "LIKE", "%$keyword%");
            })
            ->paginate($this->perPage);

        return returnData(2000, $users);
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        //
    }

    public function show($id)
    {
        //
    }

    public function edit($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
