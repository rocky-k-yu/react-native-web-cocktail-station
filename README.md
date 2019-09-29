# Emma monorepo
This is a fork of [brunolemos/react-native-web-monorepo](https://github.com/brunolemos/react-native-web-monorepo)
- Add React router
- Add a microservice 
- Add asynchronous injection of the mini-app router from the microservice

## Why I choose React Router?
My teammates in my former company and current company love it.

## Why I choose Monorepo?
I need code management in microservice approach.
I need rampant code reuse.

## Why I choose react-native-web?
I see the future of ReactJS is limited. React native is the framework allowing cross-platform coding.
react-native-web is the most mature project, comparing with ReactXP etc

## Understand the folder structure
```
/
+packages/
|+common/
||+src/
|||+routes/
||||+XXXScreen.tsx                     // One-page screen
||||+XXXRouter.tsx                     // Nested router
|||+shared/
||||+index.ts                          // shared [methods](docs/methods) 
|||+App.tsx                            // Main App Router
|||+declare_modules.d.ts
||+package.json
||+tsconfig.json
|+common-[awesome-micro-services]/
||+src/
|||+routes/
||||+XXXScreen.tsx
||||+XXXRouter.tsx
|||+App.tsx                            // MiniApp Router
||+package.json
||+tsconfig.json
|+components                           // Original reuseable components from brunolemos
|+mobile/
||+android/
||+ios/
||+index.js                            // AppRegistry.registerComponent
||+package.json                        // Dependency, including MiniApp, for mobile
||+tsconfig.json                       // Dependency, including MiniApp, for mobile
|+web/
||+public/                             // static asset for web template
||+src/
|||+index.tsx                          // AppRegistry.registerComponent
||+.env                                // Build config
||+package.json
||+tsconfig.json
+package.json
+tsconfig.base.json
+tsconfig.json