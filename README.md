# 02-nativeapp

## Git Clone

```
git clone https://github.com/qin-team-recipe/02-nativeapp.git [任意のファイルパス]
```

## Environment Building

1. リポジトリをクローン
2. expo-cli をグローバルインストール `yarn global add expo-cli`
3. `yarn install` or `npm install`
4. お使いのスマホに ExpoGo のアプリをインストール
5. app.jsonのexpo.extra.apiUrl(バックエンドAPIのURL)を自分の環境に合わせて設定

## Running

1. `npx expo start` でサーバー立ち上げ
2. ExpoGo アプリから、ターミナルに表示された QR コードを読み取る

ExpoGo 以外にも、エミュレータや ChromeDevTools にて確認可能

## Directory Structure

基本的にはフロントエンドチームと同じ認識で進めていきます。

### /src 以下

| ディレクトリ名  | 内容 |
| ------------- | ------------- |
| components  | 共通コンポーネント  |
| constants  | 定数ファイル  |
| libs  | 自作ライブラリを配置(「npmパッケージとして切り出して使えるか」という尺度でlibsに切り出す)|
| routing  | ルーティング関連  |
| screens  | 各ページ固有ディレクトリ  |
| styles  | global.css など  |

### /src/screens 以下

| ディレクトリ名  | 内容 |
| ------------- | ------------- |
| hoge/index.ts  | エクスポート用  |
| hoge/screens.tsx  | ページコンポーネント  |
| hoge/type.ts  | 型定義ファイル  |
| hoge/components  | ページ固有コンポーネント・カスタムフック  |


- ReactNative ではページを screen と呼んでいます
- ルーティングについて
  - 画面遷移の方法は Stack(通常の画面遷移)と Tab(タブバーを用いた画面遷移)を使用しています。
  - 現状、Tab ナビゲーション 3 画面の配下に、Stack ナビゲーションを紐づける形にしています。
    - 要検討（ログイン画面などはどうするかなど）

## Coding Rules
- コンポーネントはNativeBaseを使う
  - ReactNative標準のコンポーネントではなく、NativeBaseからインポートする
  - 将来のダークモード対応などの際に手を入れやすくなります
  - おそらくほとんどがNativeBaseからインポート可能です
- コミットメッセージの先頭にはGitMojiを用いる
- ブランチ作成と同時に空コミットでWIPプルリクを作成する
  - 作業中のタスクを把握しやすくするために`「[WIP]ブランチ名」`でプルリクを作成する
  - 完了したら[WIP]を外してSlackにて報告し、1日後にセルフマージ
- フォルダ配下には必ずindex.tsを定義し、責任範囲のコンポーネントなどをリエクスポートする
  - それに伴い、インポート時はindex.tsからとする

## RUNNED COMMAND

- yarn global add expo-cli
- expo init .
- yarn add -D eslint-config-universe
- yarn add -D eslint prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser
- yarn add @react-navigation/native
- expo install react-native-screens react-native-safe-area-context
- yarn add @react-navigation/native-stack @react-navigation/stack
- yarn add native-base
- expo install react-native-svg
- npx expo install expo-camera
- expo install expo-image-picker
- yarn add react-native-snap-carousel
- yarn add -D @types/react-native-snap-carousel
- yarn add lodash
- yarn add -D @types/lodash
- yarn add recoil
- yarn add react-native-reanimated
- yarn add react-native-modal
- yarn add react-native-scrollable-tab-view
- yarn add -D @types/react-native-scrollable-tab-view
- yarn add swr
- yarn add @react-navigation/bottom-tabs

### Google SSO SETTINGS
前提：Expo Goを利用する場合  
　※ExpoGoを使わずにAndroidやIOSアプリからGoogleSSOを利用する場合は手順が異なります。  

1. [GoogleDevelopersConsole](https://console.developers.google.com/project) にアクセス   
2. プロジェクトを作成する  
　※Webアプリ開発で作成済みの場合は同じプロジェクトを使う 
3. 認証情報(OAuthクライアントID)を登録  
![SSO認証情報1](https://github.com/qin-team-recipe/02-nativeapp/assets/5800064/8a1a7576-5645-434e-a325-07c6a2440e92)

| 設定項目  | 値 |
| ------------- | ------------- |
| アプリケーションの種類  | ウェブアプリケーション  |
| 名前  | 02-nativeapp  |
| 承認済みのJavascript生成元  | https://auth.expo.io |
| 承認済みのリダイレクトURI  | https://auth.expo.io/@{ExpoのユーザID}/02-nativeapp  |

4. クライアントIDをapp.jsonに設定  
　手順3で生成されたクライアントIDをコピーし、app.jsonのexpo.extra.GoogleAuthentication.expoClientIdに設定  
　※androidClientId、iosClientIdはビルド用。使用しない時は削除して問題ない。
```
    "extra": {
      "ApiUrl": "http://192.168.3.12:8080/api/v1",
      "GoogleAuthentication": {
        "expoClientId" : "525448299649-XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX.apps.googleusercontent.com"
      }
    }
```
