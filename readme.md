backstopjs-css-test
========

BackstopJSを使ってビジュアルリグレッションテストを実行するサンプル

### Install
```
git clone git@github.com:fortkle/backstopjs-css-test.git
cd backstopjs-css-test
yarn
composer install
```

### Setting
```
// cpしたのち、テストで使用する各ユーザーのid, passを追記
cp backstop_data/casper_scripts/test-users.js.default backstop_data/casper_scripts/test-users.js
```

### Test
```
// ローカルサーバーを立ち上げ
php artisan serve
// テスト時の比較元として使う画像を取得
backstop reference --config=./backstop.config.js
// テストしたい環境の画像を取得
backstop test --config=./backstop.config.js
```
