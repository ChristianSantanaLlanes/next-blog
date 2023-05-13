---
slug: wsl2_sudo
title: WSL2にインポートしたLinuxディストリビューションに追加したユーザーでsudoコマンドが使えない
date: 2021-09-13
---

前回、WSL2 に Linux ディストリビューションをインポートして使い捨ての開発環境を手に入れようという記事を書きました。

そのあと、LunarVim を入れて遊んでみよーと思ったところ、**追加したユーザーではなぜか sudo コマンドが使えず色々と困ったので追加したユーザーで sudo コマンドを使えるようにしていきたいと思います。**

## インポートした Linux ディストリビューションに追加したユーザーで sudo コマンドを使えるようにする

先に結論から話すと、次のことを行いました。  
そもそも sudo コマンドが入っていなかったので、sudo コマンドをインストールした。
sudo コマンドを追加したユーザーでも使えるようにした。

### sudo コマンドをインストール

wsl2 を起動して追加した Linux ディストリビューションを立ち上げると、追加したユーザーでログインするようになっています。  
`which sudo`で sudo コマンドがないことを確認しました。  
sudo コマンドをインストールするために、root ユーザーに切り替えます。  
wsl2 の場合は、下記で root ユーザーに切り替えられました。  
PowerShell で次のコマンドを打ちます。

```javascript
wsl -d Ubuntu-20.04_dev -u root
```

sudo コマンドをインストールしていきます。

```javascript
apt install sudo
```

`which sudo`で sudo コマンドがインストールされていることを確認します。

### 追加したユーザーを sudo グループに追加

下記コマンドで、指定したユーザーを sudo グループに追加します。

```javascript
usermod -G sudo [ユーザー名]
```

sudo グループに指定したユーザー名が追加されているか確認します。

```javascript
cat /etc/group | grep sudo
```

`sudo whoami`をして sudo グループに追加された場合は、パスワードが求められ入力して`root`と表示されれば OK です。

```javascript
sudo whoami
```

これで追加したユーザーでも sudo コマンドが使えるようになりました！