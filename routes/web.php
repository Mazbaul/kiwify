<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ImageController;
use App\Http\Controllers\Backend\AuthController;
use App\Http\Controllers\Backend\UserController;


Route::middleware('guest')->group(function (){
    Route::get('/', [AuthController::class, 'loginForm']);
    Route::get('/login', [AuthController::class, 'loginForm'])->name('login');
    Route::get('/signup', [AuthController::class, 'signupForm'])->name('signup');
    Route::post('/signup', [AuthController::class, 'doSignup']);
    Route::post('/login', [AuthController::class, 'doLogin']);
});

Route::get('/home', function (){
    if (auth()->check()){
        return redirect('/admin/dashboard');
    }

});

Route::middleware('auth')->group(function (){
    Route::get('/logout', [AuthController::class, 'logout'])->name('logout');
    Route::view('/admin/{any}', 'backend.index')->where('any', '.*');
    
});
