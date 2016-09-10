## 記事機能サンプル

### 動作環境
* Vue.js 1系
  * vueifyで機能別にファイル分割
  * gulp-vueifyでビルド

### 実装機能
* 見出し、本文、画像要素の追加・編集・削除
  * 要素の編集時に該当項目が非表示にならないバグ有り
* 要素の並び替え

#### 未実装
* バリデーション
* API呼び出し

### 環境構築

必要ライブラリのインストール
```sh
$ npm install
```

gulpでvueifyしつつコンパイル。
```sh
$ gulp watch
```

index.htmlをブラウザで閲覧することで動作確認できます
```sh
$ open index.html
```