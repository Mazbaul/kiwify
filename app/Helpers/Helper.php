<?php

namespace App\Helpers;

use App\Models\Configuration;
use App\Models\RoleModules;
use App\Models\SchoolModule;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use DateTime;
use DateInterval;
use Illuminate\Support\Facades\DB;

trait Helper
{
    public $permission = [];
    public $model = '';
    public $childModel = '';
    public $perPage = 20;
    public $permissionMessage = 'Sorry, You do not have permission to perform this action..!!';
    public $exceptionMessage = 'Whoops, looks like something went wrong.';
    public $permissionMessageType = 'error';

    public function __construct()
    {
        $perPage = request()->input('perPage');
        if ($perPage && $perPage > 0){
            $this->perPage = $perPage;
        }
    }

    public function status()
    {
        try {
            $data = $this->model->where('id', request()->input('id'))->first();

            if (!$data) {
                return returnData(2000, null, 'Data Not found');
            }

            if ($data->status == 1) {
                $data->status = 0;
                $data->save();

                return returnData(2000, 'warning', "Successfully InActivated");
            } else {
                $data->status = 1;
                $data->save();

                return returnData(2000, 'success', "Successfully Activated");
            }

        } catch (\Exception $exception) {
            return returnData(5000, $exception->getMessage(), 'Not Updated');
        }
    }

    public function notPermitted()
    {
        $data = [];
        $data['status'] = 5001;
        $data['message'] = $this->permissionMessage;
        $data['type'] = $this->permissionMessageType;
        return response()->json($data);
    }

    public function addNotification($to = '', $title = '', $link = '', $user_id = '', $notification_details = '')
    {
        $notification = new Notification();
        $notification->title = $title;
        $notification->notification = $notification_details;
        $notification->link = $link;
        $notification->notification_to = $to;
        $notification->user_id = $user_id;
        $notification->save();

        return true;
    }

    public function updateNotification($id)
    {
        $notification = Notification::where('id', $id)->first();
        if ($notification) {
            $notification->status = 0;
            $notification->save();
        }

        return true;
    }

    public function roleModuleAccess($role = false){
        $role_id = $role ? $role : auth()->user()->role_id;
        $role_module_ids = RoleModules::school()->where('role_id', $role_id)->pluck('module_id')->toArray();

        return $role_module_ids;
    }

    public function schoolModuleAccess($school = false){
        $school_id = $school ? $school : auth()->user()->school_id;

        $school_module_ids = SchoolModule::where('school_id', $school_id)->pluck('module_id')->toArray();
        return $school_module_ids;
    }
}
