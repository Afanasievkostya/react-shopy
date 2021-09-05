О проекте:
Создание учебного проекта на react и работа с firebase.
Главная цель создать шаблон для web сайта на react + redux.

Первый коммит - настройка проекта:
1 Удаляем ненужное из src: Apptest.js, logo.svg, App.css
   из public: все logo и в public создаём папку img
2 Устанавливаем bootstrap
  а) yarn add bootstrap@next
  б) npm install jquery popper.js
  в) в src/index.js прописать всё для bootstrap
3 Переписываем App.js
  Переписываем index.js
4 Устанавливаем роутинг
  yarn add react-router-dom
5 Вносим изменения public/index.html
6 Вносим изменения src/index.css

Второй коммит - создание главной страницы.
А также navbar с поиском, footer и дополнительно карусель.
Подключения Router в App.js

Третий коммит - создание страницы авторизации и входа
1 В components создаём элементы input и button
2 В pages создаём элементы about и regitrant
3 Для валидации в src создаём элемент form и в консоле.
  Прописываем yarn add is_js валидация Imail (если выпадет ошибка в проекте,
  заново переустановить yarn add react-router-dom).

Четвёртый коммит - создание админки.
1 В src создаём элементы admin.
2 В components создаём элементы select.

Пятый коммит - настройка firebase.
1 Установка npm i firebase
2 firebase init
3 Прописываем firebase в App.js, index.js
4 Установка yarn add axios
5 Настраиваем отправку формы в Admin.js
  a) Из firebase берём ссылки для создания и проверки пользователя.
  б) Создаём страницы about, regitrant
6 Cоздаём и настраиваем product и productUser

Шестой коммит - настройка admin.
1 Устанавливаем redux.
 а) yarn add redux
 б) yarn add react-redux. связующая библиотека
 в) yarn add redux-thunk. асинхронная работа с redux
2 Cоздаём store и работаем с redux только в Adout.js
3 Cоздаём logout
4 Изменяем App.js для показа Admin
5 Cоздаём страницы shoes, clothes, accessories

Седьмой коммит - редактор в admin.

Восьмой коммит - конец
1 Объединяем в один скрипт командой yarn run build.
2 Создаём Hosting в проекте на сайте firebase.
3 Получаем ссылку на сайт - https://react-shopy.firebaseapp.com

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
