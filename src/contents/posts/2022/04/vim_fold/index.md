---
slug: vim_fold
title: Vimでコードを折り畳む設定を入れてみた
date: 2022-04-03
---

## 結論

[[Vim]]には標準で fold という機能があるみたいでそれを使いました。
fold を使うと折り畳みを解除するコマンドを実行しない限りは勝手に展開されないので便利です。

`set foldmethod=indent`

- インデントの数を折り畳みのレベル(深さ)とする
  `set foldlevel=8`
- インデントの深さを 8 に設定。ファイルを開いたときにインデントの深さが 8 以上の行は折り畳まれた状態になる。

```javascript
" コードの折りたたみ
set foldmethod=indent
set foldlevel=8
```

## コマンド

- コマンド
  - 説明
- zc
  - 折り畳み(カーソル位置)
- zo
  - 展開(カーソル位置)
- zR
  - 展開(ファイル全体)

## デモ

https://www.loom.com/embed/4676ebad353741d9a8dbb102c823f916

## 参考

[Vim でコードの折り畳み and インデントの可視化 \- 恥は/dev/null へ by 初心者](https://uhoho.hatenablog.jp/entry/2020/09/01/025220)
