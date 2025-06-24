# 9900_foodDelivery_customer

## Installation



1. Rename the file `example.env` to `.env`
2. Update `.env` with your own configuration, e.g.:

```shell
# Rename this file to ".env" before use
# Replace XXXX's with your own Firebase config keys
API_KEY=XXXX
AUTH_DOMAIN=XXXX
PROJECT_ID=XXXX
STORAGE_BUCKET=XXXX
MESSAGING_SENDER_ID=XXXX
APP_ID=XXXX
```

## Run project

To start the development server and run your project:

```
npx expo start
```

Alternate to using Expo Go, if you are building more than a hobby project or a prototype, make sure you [create a development build](https://docs.expo.dev/develop/development-builds/introduction/). You can either [locally compile your project](https://docs.expo.dev/guides/local-app-development/#local-builds-with-expo-dev-client) or [use EAS](https://docs.expo.dev/develop/development-builds/create-a-build/).

To locally compile your app, run:

```
# Build native Android project
npx expo run:android

# Build native iOS project
npx expo run:ios
```


## Development builds and React Native Firebase library

This project uses Firebase JS SDK, which doesn't support all services (such as Crashlytics, Dynamic Links, and Analytics). However, you can use the `react-native-firebase` library in an Expo project by [creating a development build](https://docs.expo.dev/develop/development-builds/introduction/).

Both of these libraries can satisfy different project requirements. To learn about the differences between using Firebase JS SDK and React Native Firebase library when building your app with Expo, see the following sections from Expo's official documentation:

- [When to use Firebase JS SDK](https://docs.expo.dev/guides/using-firebase/#when-to-use-firebase-js-sdk)
- [When to use React Native Firebase](https://docs.expo.dev/guides/using-firebase/#when-to-use-react-native-firebase)
