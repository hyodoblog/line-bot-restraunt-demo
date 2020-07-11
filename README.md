# Firebase Functions + LINE Bot + TypeScript
LINE Botのサーバレス版テンプレートです

## 概要
LINE PAY決済を使ったレストラン予約ボット

## ファイル構成
```
functions/
         |- handlers/       #
         |- lib/            #
         |- messages/       #
         |- models/         #
         |- routers/        #
         |- status/         #
         |- index.ts        #
         |- line.config.ts  #
```

## デプロイ
### seed
事前にデータを保存する場合に使用します。
functions/src/seed/index.ts ファイルのseed関数内にデータを追加し以下のコマンドを実行する。
```
cd functions
npm run seed
```

### コード
```
firebase init
firebase deploy --only functions
```

## 環境変数の設定
### セット
```
firebase functions:config:set env.access_token=
firebase functions:config:set env.channel_secret=

# cloud storage
firebase functions:config:set env.bucket_name=
```

### 確認
```
firebase functions:config:get
```
