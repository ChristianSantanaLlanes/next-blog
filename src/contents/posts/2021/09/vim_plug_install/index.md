---
slug: vim_plug_install
title: Vim8のプラグイン管理にvim-plugを使う
date: 2021-09-20
---

最近少しずつ Vim の学びなおしをしています。  
下記の記事では、Vim8 の標準パッケージ管理を使ってみました。

[[Vim8の標準パッケージ管理を使ってvim-jaを入れてhelpを日本語化する]]

しかし、色々とプラグインを入れていこうと考えたとき**依存関係をいい感じに管理できない**なと思い vim-plug を入れることにしました。  
依存関係の管理といっても、**A のプラグインが B に依存していることが分かればいいです。**  
(homebrew のように勝手に依存関係を解決してくれると最高だけど…)

## vim-plug とは

[junegunn/vim\-plug: Minimalist Vim Plugin Manager](https://github.com/junegunn/vim-plug)

vim-plug を調べてみると、**導入が簡単でシンプルにプラグイン管理できるプラグインマネージャーという印象です。**

## vim-plug の依存関係の書き方

[faq · junegunn/vim\-plug Wiki](https://github.com/junegunn/vim-plug/wiki/faq#managing-dependencies)

`|`のセパレータを使う方法と`手動インデント`を使う方法があるようです。  
私は`手動インデント`を使うのが視覚的に分かりやすいのでこれが決め手で vim-plug を使ってみようと思いました。

```javascript
" Vim script allows you to write multiple statements in a row using `|` separators
" But it's just a stylistic convention. If dependent plugins are written in a single line,
" it's easier to delete or comment out the line when you no longer need them.
Plug 'SirVer/ultisnips' | Plug 'honza/vim-snippets'
Plug 'junegunn/fzf', { 'do': './install --all' } | Plug 'junegunn/fzf.vim'

" Using manual indentation to express dependency
Plug 'kana/vim-textobj-user'
  Plug 'nelstrom/vim-textobj-rubyblock'
  Plug 'whatyouhide/vim-textobj-xmlattr'
  Plug 'reedes/vim-textobj-sentence'
```

## vim-plug を使ったプラグイン管理

### vim-plug のインストール

下記のコマンドを実行すると、`~/.vim/autoload/plug.vim`がインストールされます。

```javascript
curl -fLo ~/.vim/autoload/plug.vim --create-dirs \
https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
```

### プラグインのインストール

`~/.vim/vimrc`を作成します。

```javascript
touch ~/.vim/vimrc
```

`vimrc`に以下の設定を追加。

```javascript
" use plugin manager from vim-plug
call plug#begin('~/.vim/plugged')
Plug 'vim-jp/vimdoc-ja'
Plug 'lambdalisue/fern.vim'
call plug#end()

" helpを日本語化
set helplang=ja,en
```

`vi`を再度開きなおして、`:Pluginstall`コマンドを実行するとプラグインがインストールされます。
プラグインをインストールすると、`~/.vim/plugged`にプラグインがインストールされていました。

### その他便利なコマンド

`:PlugUpdate`はプラグインを更新してくれるコマンドです。
このようにプラグインを便利に管理できるコマンドも提供されます。

[junegunn/vim\-plug: Minimalist Vim Plugin Manager](https://github.com/junegunn/vim-plug#commands)
