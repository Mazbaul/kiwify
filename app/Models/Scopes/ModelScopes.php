<?php


namespace App\Models\Scopes;


trait ModelScopes
{
    public function scopeSchool($query, $school_id = false)
    {
        $school = $school_id ? $school_id : auth()->user()->school_id;

        $query->where('school_id', $school);
    }

    public function scopeStatus($query, $status = 1)
    {
        $query->where('status', $status);
    }

    public function scopeSchoolStatus($query, $school_id = false, $status = 1){

        $school = $school_id ? $school_id : auth()->user()->school_id;

        $query->where('school_id', $school);
        $query->where('status', $status);
    }
}