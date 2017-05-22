module.exports = function (casper, scenario, vp) {
  casper.evaluate(function () {
    // Your web-app is now loaded. Edit here to simulate user interacions or other state changes.
  });
  console.log('onReady.js has run for: ', vp.name);

  casper.then(function () {
    if (this.exists('button.btn-lg')) {
      this.click('button.btn-lg');
      this.wait(1000);
    }
  })

};
