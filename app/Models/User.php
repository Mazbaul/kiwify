<?php

/**
 * Created by EduInLive.
 */

namespace App\Models;

use Carbon\Carbon;

use App\Models\StudentAttend;
use App\Models\TeacherAttend;
use App\Models\StudentDetail;
use App\Models\Scopes\ModelScopes;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use ModelScopes;

	protected $table = 'users';

	protected $casts = [
		'role_id' => 'int',
		'parent_id' => 'int',
		'school_id' => 'int',
		'department_id' => 'int'
	];

	protected $dates = [
		'email_verified_at',
		'birthday'
	];

	protected $hidden = [
		'password',
		'remember_token'
	];

	protected $fillable = [
        'school_id',
        'role_id',
        'name',
        'email',
        'type',
        'unique_id',
        'password',
	];

	public function teacher_details(){
	    return $this->belongsTo(Teacher::class, 'id', 'user_id');
    }

	public function library_member(){
	    return $this->belongsTo(LibraryMember::class, 'id', 'user_id');
    }
    public function parents()
    {
        return $this->belongsTo(Parents::class, 'id', 'user_id');
    }
    public function teacher(){
        return $this->belongsTo(Teacher::class, 'id', 'user_id');
    }
    public function parent()
    {
        return $this->belongsTo(Parents::class, 'id', 'user_id');
    }
    public function student(){
	    return $this->belongsTo(StudentDetail::class, 'id', 'user_id');
    }

    public function enrollment(){
        return $this->belongsTo(Enrollment::class, 'id', 'user_id')
        ->where('enrollments.school_id',auth()->user()->school_id)
        ->join('classes', 'enrollments.class_id', 'classes.id')
        ->join('sections', 'enrollments.section_id', 'sections.id')
        ->join('sessions', 'enrollments.session_id', 'sessions.id')
        ->select('enrollments.*','sections.name as section_name','sessions.session_title as session_name', 'classes.name as class_name');
    }
}
