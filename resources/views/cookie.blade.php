@extends('layouts.app')

@section('content')
@include('admin')
<div class="container">
    <div class="row">
        <div class="col-md-10 col-md-offset-1">
            <div class="panel panel-default">
                <div class="panel-heading">Cookie</div>
                <h2 class="panel-body js-cookie" style="word-break: break-all;"></h2>
            </div>
        </div>
    </div>
</div>
@endsection

<script type="text/javascript">
  window.onload = function () {
    const cookieStr = document.cookie||'No data found.';
    const cookieDiv = document.querySelector('.js-cookie');
    cookieDiv.innerHTML = cookieStr;
  };
</script>
