<?php

/**
 * Created by EduInLive.
 */

namespace App\Models;

use App\Models\Scopes\ModelScopes;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class PasswordReset extends Model
{

	use ModelScopes;

	protected $table = 'password_resets';
	public $incrementing = false;
	public $timestamps = false;

	protected $hidden = [
		'token'
	];

	protected $fillable = [
		'email',
		'token'
	];
}
