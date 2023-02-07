<!DOCTYPE html>
<html lang="en" data-layout="vertical" data-topbar="light" data-sidebar="dark" data-sidebar-size="lg"
      data-sidebar-image="none" data-preloader="disable" data-layout-mode="light" data-layout-width="fluid"
      data-layout-position="fixed" data-layout-style="default">

<head>
    <meta charset="utf-8"/>
    <title></title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta content="Premium Multipurpose Admin & Dashboard Template" name="description"/>
    <meta content="Themesbrand" name="author"/>
    <link rel="shortcut icon" href="{{ assets('backend_assets/images/favicon.ico') }}">
    <link href="{{ assets('backend_assets/libs/jsvectormap/css/jsvectormap.min.css') }}'" rel="stylesheet"
          type="text/css"/>
    <link href="{{ assets('backend_assets/libs/swiper/swiper-bundle.min.css') }}" rel="stylesheet" type="text/css"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"/>
    <script src="{{ assets('backend_assets/js/layout.js') }}"></script>
    <link href="{{ assets('backend_assets/css/bootstrap.min.css') }}" rel="stylesheet" type="text/css"/>
    <link href="{{ assets('backend_assets/css/icons.min.css') }}" rel="stylesheet" type="text/css"/>
    <link href="{{ assets('backend_assets/css/app.min.css') }}" rel="stylesheet" type="text/css"/>
    <link rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.13.2/themes/base/jquery-ui.min.css"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.13.2/themes/base/theme.min.css"/>
    <link href="{{ assets('backend_assets/css/custom.min.css') }}" rel="stylesheet" type="text/css"/>
</head>

<body>
<div id="app">
    <App></App>
</div>
<script src="{{ assets('backend_assets/libs/jquery/jquery.min.js') }}"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
<script src="{{ assets('backend_assets/libs/bootstrap/js/bootstrap.bundle.min.js') }}"></script>
<script src="{{ assets('backend_assets/libs/simplebar/simplebar.min.js') }}"></script>
<script src="{{ assets('backend_assets/libs/node-waves/waves.min.js') }}"></script>
<script src="{{ assets('backend_assets/libs/feather-icons/feather.min.js') }}"></script>
<script src="{{ assets('backend_assets/js/pages/plugins/lord-icon-2.1.0.js') }}"></script>
<script src="{{ assets('backend_assets/js/plugins.js') }}"></script>
<script src="{{ assets('backend_assets/libs/apexcharts/apexcharts.min.js') }}"></script>
<script src="{{ assets('backend_assets/libs/jsvectormap/js/jsvectormap.min.js') }}"></script>
<script src="{{ assets('backend_assets/libs/jsvectormap/maps/world-merc.js') }}"></script>
<script src="{{ assets('backend_assets/libs/swiper/swiper-bundle.min.js') }}"></script>
<script src="{{ assets('backend_assets/js/pages/dashboard-ecommerce.init.js') }}"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.13.2/jquery-ui.min.js"></script>


<script src="{{ assets('backend_assets/js/app.js') }}"></script>

<script>
    window.baseUrl = "{{ url('/') }}";
</script>
<script>
    window.publicPath = "{{ env('PUBLIC_PATH') }}";
</script>
<script>window.UploadPath = '{{env('UPLOAD_PATH')}}';</script>

<script src="{{ asset('js/admin/app.js') }}" defer></script>
</body>

</html>
