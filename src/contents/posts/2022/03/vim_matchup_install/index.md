---
slug: vim_matchup_install
title: Vimの閉じタグの識別を強化してくれるプラグインを入れた
date: 2022-03-26
---

[[Vim]]はデフォルトで`%`で対応するペアの移動ができるのですが言語固有のペアまでは認識してくれません。

入れるだけで HTML や[[Ruby]]の閉じタグを認識してジャンプしてくれるプラグインを入れました。

## インストール

vim-plug を使ってインストールします。

https://github.com/andymass/vim-matchup

```javascript
Plug 'andymass/vim-matchup'
```

## 使い方

追加設定は特になしでも便利に使えています。

このプラグインは下記のファイルタイプのサポートをしてくれます。[[Vim]]や[[Ruby]]にも対応しています。

> abaqus, ada, aspvbs, bash, c, cpp, chicken, clojure, cmake, cobol, context, csc, csh, dtd, dtrace, eiffel, eruby, falcon, fortran, framescript, haml, hamster, hog, html, ishd, j, javascript, javascriptreact, jsp, kconfig, liquid, lua, m3quake, make, matlab, mf, modula2, modula3, mp, nsis, ocaml, pascal, pdf, perl, php, plaintex, postscr, ruby, sh, spec, sql, tex (latex), typescriptreact, vb, verilog, vhdl, vim, xhtml, xml, zimbu, zsh

対応しているペアにカーソルを乗せるとハイライトしてくれ、`%`で対応するペアにジャンプすることができるようになりました。

https://www.loom.com/embed/f282a07c52314587bb13ac8e02e42e54
