# myblog

## install dependencies

リポジトリをcloneしたら必要なライブラリをインストールします。

```
npm install
```

## development mode

開発モードでアプリケーションを起動する。

```
npm run dev
```

## deploy

GitHub Actionsを使ってNetlifyにデプロイします。  
詳細は`.github/workflows/deploy.yml`を参照。

## ブログ投稿

ブログ投稿を行う方法は2パターンあります。  

## Content Managerからブログ投稿する
※Netlify Identityで招待を行いContent Managerにログインできる必要があります。

Decap CMSはコンテンツ管理画面を提供してくれます。  
コンテンツ管理画面から該当の記事を編集して保存することでGitHubリポジトリの該当のmdファイルが直接更新されます。  
コミットされるとGitHub ActionsでNetlifyへのデプロイが自動で走り反映されます。  

## 直接mdファイルを編集する

mdファイルを編集してコミットしてpushすることでGitHub ActionsでNetlifyへのデプロイが自動で走り反映されます。  
