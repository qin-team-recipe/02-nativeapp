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

## Running

1. `expo start` でサーバー立ち上げ
2. ExpoGo アプリから、ターミナルに表示された QR コードを読み取る

ExpoGo 以外にも、エミュレータや ChromeDevTools にて確認可能

## Directory Structure

基本的にはフロントエンドチームと同じ認識で進めていきます。

- ReactNative ではページを screen と読んでいます
- ルーティングについて
  - 画面遷移の方法は Stack(通常の画面遷移)と Tab(タブバーを用いた画面遷移)を使用しています。
  - 現状、Tab ナビゲーション 3 画面の配下に、Stack ナビゲーションを紐づける形にしています。
    - 要検討（ログイン画面などはどうするかなど）

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
