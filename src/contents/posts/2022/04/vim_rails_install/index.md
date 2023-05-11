---
slug: vim_rails_install
title: vim-railsでRailsでの開発が便利になりました
date: 2022-04-03
---

## インストール

vim-plug でインストールします。

```javascript
Plug 'tpope/vim-rails'
```

## よく使うコマンド

vim-rails は入れるだけで色々便利になりますが、まだ使いこなせていません。
ですが、このコマンドが使えるようになっただけでも生産性あがったので紹介します。

{{[[table]]}}

- コマンド
  - 説明
- :A
  - 対応する Spec ファイルを開く
- gf
  - カーソル下の文字列から対応するファイルを開く

## デモ

User モデルを開いて、`:A`で対応する Spec ファイルを開く → Spec ファイルの文字列 User から`gf`で USer モデルのファイルに移動する。

https://www.loom.com/embed/1fde7f4726a04ca5ac166c721554d36a

## 参考

[vim\-rails よく使いそうなやつ \- Qiita](https://qiita.com/bibio/items/ac3f0cb8e7949b2ce56c)
[tpope/vim\-rails: rails\.vim: Ruby on Rails power tools](https://github.com/tpope/vim-rails)
