@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-10 col-md-offset-1">
            <div class="panel panel-default">
                <div class="panel-heading">User Agent</div>
                <h2 class="panel-body js-ua"></h2>
            </div>
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
    const userAgentStr = navigator.userAgent;
    const cookieStr = document.cookie||'No data found.';

    const uaDiv = document.querySelector('.js-ua');
    uaDiv.innerHTML = userAgentStr;
    const cookieDiv = document.querySelector('.js-cookie');
    cookieDiv.innerHTML = cookieStr;
  };
</script>
