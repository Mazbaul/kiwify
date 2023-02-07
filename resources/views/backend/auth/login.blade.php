<!doctype html>
<html lang="en" data-layout="vertical" data-topbar="light" data-sidebar="dark" data-sidebar-size="lg" data-sidebar-image="none" data-preloader="disable">
<head>
    <meta charset="utf-8" />
    <title>Sign In | Velzon - Admin & Dashboard Template</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta content="Premium Multipurpose Admin & Dashboard Template" name="description" />
    <meta content="Themesbrand" name="author" />
    <link rel="shortcut icon" href="{{assets('backend_assets/images/favicon.icojs')}}">
    <script src="{{assets('backend_assets/js/layout.js')}}"></script>
    <link href="{{assets('backend_assets/css/bootstrap.min.css')}}" rel="stylesheet" type="text/css" />
    <link href="{{assets('backend_assets/css/icons.min.css')}}" rel="stylesheet" type="text/css" />
    <link href="{{assets('backend_assets/css/app.min.css')}}" rel="stylesheet" type="text/css" />
    <link href="{{assets('backend_assets/css/custom.min.css')}}" rel="stylesheet" type="text/css" />
</head>
<body>
<div class="auth-page-wrapper pt-5">

    <!-- auth page content -->
    <div class="auth-page-content">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="text-center mt-sm-5 mb-4 text-black-50">
                        <div>
                            <a href="{{url('login')}}" class="d-inline-block auth-logo">
                                <img src="https://dashboard.kiwify.com.br/_nuxt/img/kiwify-green-logo.2af0e50.png" alt="" height="50">
                            </a>
                        </div>
                        <p class="mt-3 fs-15 fw-medium">Login to your account or <a href="{{url('signup')}}">register</a></p>
                    </div>
                </div>
            </div>
            <!-- end row -->

            <div class="row justify-content-center">
                <div class="col-md-8 col-lg-6 col-xl-5">
                    <div class="card mt-4">

                        <div class="card-body p-4">
                            <div class="text-center mt-2">
                                <h5 class="text-primary">Welcome Back !</h5>
                                <p class="text-muted">Sign in to continue to EduIn.</p>
                            </div>
                            <div class="p-2 mt-4">
                                <form action="{{url('login')}}" method="post">
                                    {{csrf_field()}}
                                    <div class="mb-3">
                                        <label for="email" class="form-label">Email Address</label>
                                        <input type="text" name="email" class="form-control" id="email" placeholder="Enter Email">
                                    </div>
                                    <div class="mb-3">
                                        <div class="float-end">
                                            <a href="#" class="text-muted">Forgot password?</a>
                                        </div>
                                        <label class="form-label" for="password-input">Password</label>
                                        <div class="position-relative auth-pass-inputgroup mb-3">
                                            <input type="password" name="password" class="form-control pe-5 password-input" placeholder="Enter password" id="password-input">
                                            <button class="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted password-addon" type="submit" id="password-addon"><i class="ri-eye-fill align-middle"></i></button>
                                        </div>
                                    </div>

                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="auth-remember-check">
                                        <label class="form-check-label" for="auth-remember-check">Remember me</label>
                                    </div>

                                    <div class="mt-4">
                                        <button class="btn btn-success w-100" type="submit">Sign In</button>
                                    </div>

                                </form>
                            </div>
                        </div>
                        <!-- end card body -->
                    </div>
                    <!-- end card -->

                    <div class="mt-4 text-center">
                        <p class="mb-0">Don't have an account ? <a href="{{url('signup')}}" class="fw-semibold text-primary text-decoration-underline"> Signup </a> </p>
                    </div>

                </div>
            </div>
            <!-- end row -->
        </div>
        <!-- end container -->
    </div>
    <!-- end auth page content -->


</div>
<script src="{{assets('backend_assets/libs/bootstrap/js/bootstrap.bundle.min.js')}}"></script>
<script src="{{assets('backend_assets/libs/simplebar/simplebar.min.js')}}"></script>
<script src="{{assets('backend_assets/libs/node-waves/waves.min.js')}}"></script>
<script src="{{assets('backend_assets/libs/feather-icons/feather.min.js')}}"></script>
<script src="{{assets('backend_assets/js/pages/plugins/lord-icon-2.1.0.js')}}"></script>
<script src="{{assets('backend_assets/js/plugins.js')}}"></script>
<script src="{{assets('backend_assets/libs/particles.js/particles.js')}}"></script>
<script src="{{assets('backend_assets/js/pages/particles.app.js')}}"></script>
<script src="{{assets('backend_assets/js/pages/password-addon.init.js')}}"></script>
</body>
</html>
