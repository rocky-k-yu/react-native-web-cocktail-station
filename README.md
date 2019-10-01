# Barista-bench
This is a fork of [brunolemos/react-native-web-monorepo](https://github.com/brunolemos/react-native-web-monorepo)
- Add React router
- Add a microservice 
- Add asynchronous injection of the mini-app router from the microservice

## Why I choose this name?
Having a coffee bench is a cool thing in a workplace for coders.
A barista who is standing behind her bench can utilise a limited number of ingredients to produce magical beverages.
Meanwhile, developers who are using yarn-workspace can combine self-sustained modules to produce amazing applications.
I am sure you can see the light here.

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
```

## How to start development
1. Install dependency after `git clone`

  ```sh
  yarn
  cd packages/mobile/ios
  pod install
  cd -
  ```
1. Open a bash for web
  
  ```sh
  yarn workspace web start
  ```
2. Open a bash for mobile serving
  
  ```sh
  yarn workspace mobile start
  ```
3. Open a bash for launch native IDE
  
  1. Additional first launch procedure
    ```sh
    cd packages/mobile/ios
    pod install
    cd -
    ```
  1. launch XCode by `yarn xcode`
  2. Press run button, await until simulator launched
  3. launch Android studio
  4. Press run button, await until simulator launched
4. Enjoy

## How to create a new microservice
1. Find a name

	-  `common-kebab-cased-service-name` for each service

		- identity-access-management
		- e-commerce
		- mobile-ordering
		- claim-history
		- make-a-claim

	-  `native-kebab-cased-service-name` for platform-specific service

		- virtual-reality
		- vitality-meter
2. Make directory on project root

  ```sh
  mkdir -p packages/common-identity-access-management/src
  touch packages/common-identity-access-management/package.json
  touch packages/common-identity-access-management/tsconfig.json
  touch packages/common-identity-access-management/.gitignore
  ```
3. Edit service's `package.json`

  ```json
  {
    "name": "@emma-services/common-identity-access-management",
    "version": "0.0.1",
    "private": true
  }
  ```
4. Create `App.tsx` under service's `./src`
5. Edit service's `tsconfig.json`

  ```json
  {
    "extends": "../../tsconfig.base.json",
    "compilerOptions": {
      "composite": true,
      "declaration": true,
      "emitDeclarationOnly": true,
      "isolatedModules": false,
      "outDir": "dist",
      "rootDir": "src",
      "typeRoots": [
        "@types",
        "../../node_modules/@types"
      ]
    },

    "references": [
      {
        "path": "../common"
      }
    ]
  }
  ```
6. Edit service's `.gitignore`

  ```
  *.jsbundle
  *.tsbuildinfo
  .DS_Store
  .history
  .jest
  .vscode
  build
  coverage
  dist
  node_modules
  npm-debug.log*
  yarn-debug.log*
  yarn-error.log* 
  ```
8. Link microservice workspace

  ```
  yarn
  ```
7. Link mobile project by editting `packages/mobile/package.json`

  ```json
  {
    "dependencies": {
      "@emma-services/common": "0.0.1",
      "@emma-services/common-identity-access-management": "0.0.1",
    }
  }
  ```
8. Link web project by editting `packages/web/config-overrides.js`
  
  ```js
  const appIncludes = [
    // Main App
    resolveApp('src'),
    // Mini App
    resolveApp('../common/src'),
    resolveApp('../common-identity-access-management/src'),
  ]
  ```
