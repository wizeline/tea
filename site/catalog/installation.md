#### Access to Wizeline Private Registry

- Create a personal token (https://github.com/settings/tokens), and keep it safe.
If you already have your bender environment, you can reuse the github token from it.
- Add wizeline registry `npm config set @wizeline:registry https://verdaccio.wizeline.sh`
- Login `npm login --scope=@wizeline`.
Use your *github handle* as your **username**, and the *personal access token* as your **password**

#### Installation

npm
```code
npm i --save @wizeline/tea
```

yarn
```code
yarn add @wizeline/tea
```
