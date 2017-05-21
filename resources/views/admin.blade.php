@if (!Auth::guest() && Auth::user()->id === 1)
    <div class="container">
        <div class="row">
            <div class="col-md-10 col-md-offset-1">
                <div class="alert alert-info" role="alert">{{ Auth::user()->name }}でログイン中です</div>
            </div>
        </div>
    </div>
@elseif (!Auth::guest() && Auth::user()->id === 2)
    <div class="container">
        <div class="row">
            <div class="col-md-10 col-md-offset-1">
                <div class="alert alert-success" role="alert">{{ Auth::user()->name }}でログイン中です</div>
            </div>
        </div>
    </div>
@endif
