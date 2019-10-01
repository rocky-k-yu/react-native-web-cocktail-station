# Barista-bench
This is a fork of [brunolemos/react-native-web-monorepo](https://github.com/brunolemos/react-native-web-monorepo)
- Add React router
- Add a microservice 
- Add asynchronous injection of the mini-app router from the microservice

## Why I choose this name?
Having a coffee bench is a cool thing in coder's workplace.

A barista who is standing behind her bench can utilise a limited number of ingredients to produce magical beverages.

Meanwhile, developers who are using yarn-workspace can combine self-sustained modules to produce amazing applications.

I am sure you can see the light here.

## Why I choose React Router?
My teammates in my former company and current company love it.

## Why I choose Monorepo?
I need code management in microservice approach.

I need rampant code reuse.

## Why I choose react-native-web?
I see the limitation of ReactJS in future
- Idea of ReactJS is amazing. We manipulate the virtual dom and the rendering logic will be handled by ReactJS
- Yet, the abstraction of virtual dom is still not adequate, leaving its syntax too sticky to HTML

Meanwhile, ReactNative, accompanied by Metro and Expo, is now paving the path to allow cross-platform coding.

In short ReactNative is a framework, while I can only regard ReactJS as a library.

In the ecosystem of ReactNative, react-native-web is the most mature project.

## Understand the folder structure
```
/
+-packages/
| +-common/
| | +-src/
| | | +-routes/
| | | | +-XXXScreen.tsx                   // One-page screen
| | | | +-XXXRouter.tsx                   // Nested router
| | | +-shared/
| | | | +-index.ts                        // shared [methods](docs/methods) 
| | | +-App.tsx                           // Main App Router
| | | +-declare_modules.d.ts
| | +-package.json
| | +-tsconfig.json
| +-common-[awesome-micro-services]/
| | +-src/
| | | +-mod-login/                        // User-journey A
| | | | +-components
| | | | +-routes/
| | | +-mod-logout/                       // User-journey B
| | | +-mod-forget-password/              // User-journey C
| | | +-App.tsx                           // To-be exposed MiniApp Router
| | +-package.json
| | +-tsconfig.json
| +-mobile/
| | +-android/
| | +-ios/
| | +-index.js                            // AppRegistry.registerComponent
| | +-package.json                        // Dependency, including MiniApp, for mobile
| | +-tsconfig.json
| +- web/
| | +-public/                             // static asset for web TEMPLATE (not application)
| | +-src/
| | | +-index.tsx                         // AppRegistry.registerComponent
| | +-.env                                // Build config
| | +-config-overrides.js                 // Dependency, including MiniApp, for web
| | +-package.json
| | +-tsconfig.json
+-package.json
+-tsconfig.base.json
+-tsconfig.json
```

## How to start development
1. Install dependency after `git clone`
    ```sh
    git remote rename origin template
    yarn
    cd packages/mobile/ios
    pod install
    cd -
    git remote add origin [your-project-git-repo]
    ```
2. Open a bash for web
    ```sh
    yarn workspace web start
    ```
3. Open a bash for mobile serving
    ```sh
    yarn workspace mobile start
    ```
4. Open a bash for launch native IDE
    1. launch XCode by `yarn xcode`
    2. Press run button, await until simulator launched
    3. launch Android studio by `yarn studio`
    4. Press run button, await until simulator launched
5. Enjoy

## How to create a new microservice 
### Example
- `common-identity-access-management` is the folder name for this new microservice
- `@emma-services/common-identity-access-management` is the package name, whil 
    - `@emma-services` is the common namespace of this bench
    - `common-identity-access-management` is the service-oriented feature
        - The user journey of `login` 
            - will update the ACCESS_TOKEN in `@emma-services/common`
            - will maintain the session user_name, 2FA-PIN, etc in  `@emma-services/common-identity-access-management`
        - The user journey of `logout`
            - will remove the ACCESS_TOKEN in `@emma-services/common`
- Barista should create her own name.
    -  `common-make-a-claim` for common service
    -  `mobile-spec-kebab-cased-service-name` for platform-specific service
    
### Steps
1. Make directory on project root
    ```sh
    mkdir -p packages/common-identity-access-management/ && cd "$_"
    mkdir src
    touch package.json tsconfig.json .gitignore src/App.tsx
    ```
2. Edit service's `package.json`
    ```json
    {
      "name": "@emma-services/common-identity-access-management",
      "version": "0.0.1",
      "private": true
    }
    ```
3. Edit service's `tsconfig.json`
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
4. Edit service's `.gitignore`
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
5. Link microservice workspace
    ```
    yarn
    ```
6. Link mobile project by editting `packages/mobile/package.json`
    ```json
    {
        "dependencies": {
          "@emma-services/common": "0.0.1",
          "@emma-services/common-identity-access-management": "0.0.1",
        }
    }
    ```
7. Link web project by editting `packages/web/config-overrides.js`
    ```js
    const appIncludes = [
        // Main App
        resolveApp('src'),
        // Mini App
        resolveApp('../common/src'),
        resolveApp('../common-identity-access-management/src'),
    ]
    ```
