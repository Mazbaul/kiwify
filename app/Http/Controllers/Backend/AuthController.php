<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Support\Facades\Hash;


class AuthController extends Controller
{

    public function loginForm(){
        return view('backend.auth.login');
    }
    public function signupForm(){
        return view('backend.auth.register');
    }

    public function doLogin(Request $request){

        $this->validate($request, [
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $loginData = [
            'email' => $request->input('email'),
            'password' => $request->input('password')
        ];

        if (Auth::attempt($loginData)){

                return redirect('admin/dashboard');
        }else{
            return redirect('login')->withErrors(['message' => 'Can not find users with provided credential']);
        }
    }
    public function doSignup(Request $request){

        $this->validate($request, [
            'email' => 'required|confirmed|email|unique:users',
            'password' => 'required|confirmed|min:6',
        ]);

        $loginData = [
            'email' => $request->input('email'),
            'password' => $request->input('password')
        ];

         try {
            $user = new user();
            $user->email = $request->email;
            $user->password =Hash::make($request->password);
            $user->save();
         } catch (\Exception $e) {
           return redirect('signup')->withErrors(['message' => 'Something Went Wrong!!Please Try Again']);

         }


        if (Auth::attempt($loginData)){

                return redirect('admin/dashboard');
        }else{
            return redirect('login')->withErrors(['message' => 'Can not find users with provided credential']);
        }
    }
    public function logout(){

        Auth::logout();

        return redirect('login');
    }
}
