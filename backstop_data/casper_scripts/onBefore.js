const User = require('./test-users');

module.exports = function (casper, scenario, vp) {

  casper.echo('Setting UA');
  casper.then(function(){
    if (vp.name === 'PC') {
      casper.userAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X)');
    } else if (vp.name === 'Mobile') {
      casper.userAgent('Mozilla /5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X)');
    }
  });

  casper.echo('Setting login user');
  casper.page.cookies = [];
  if (scenario.loginAs) {
    const baseUrl = 'http://localhost:8000';
    casper.thenOpen(baseUrl + '/login', function(){
      var loginFormName = 'form.form-horizontal';
      if (this.exists(loginFormName)) {
        var user = User[scenario.loginAs];
        this.fill(loginFormName, {
          'email': user.id,
          'password': user.pass
        }, true)
      }
      this.wait(1000);
    });
  }

  casper.thenOpen(scenario.url);
};

