# Mi primer proyecto en VUE.JS

Welcome to my repository, here you'll find that I put in practice basic concepts about the framework with respect to the
following subjects:
-Components

-Async Components (<Suspense> experimental API)

-List Rendering

-API Consumption (Pure Fetch)

-In past commits I practiced ref, provide and inject data through siblings and childs

As you can see the interface is pretty simple, it's a search bar with a bootstrap table,
as you type in the searchbar, suggestions will appear on screen.

![image](https://user-images.githubusercontent.com/78714792/177224479-2f6a4210-4afa-443a-91cc-24b6ee27e833.png)

![image](https://user-images.githubusercontent.com/78714792/177224601-0f452abf-b56b-4922-8fc3-db23880a7b06.png)

If you press up and down keys, the focus will change in the suggestions

![image](https://user-images.githubusercontent.com/78714792/177224611-f150275b-698c-4c7d-a4f5-8b3949ee70a0.png)

If you click an element or you just press the enter button, the table will delete all the rows
that dont match with the movie title in the search bar, it's an useless feature but I made
it to practice the DOM manipulation thorugh parent and siblings.

![image](https://user-images.githubusercontent.com/78714792/177224636-65eda0ff-fd7d-4910-bdbe-6ccd52ec25b3.png)



## Indications to clone this project below: 

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
