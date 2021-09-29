<a href="https://youtube.com/flamequard"><img width="100%" height="auto" src="https://github.com/FlameQuard/FlameQuard/blob/main/20210929_123946.png" height="175px"/></a>

<a href="https://youtube.com/flamequard"><img width="100%" height="auto" src="https://github.com/FlameQuard/FlameQuard/blob/main/20210929_131721.png" height="175px"/></a>

<h3 align='center'>
STEP 1 (Installing NodeJS 16 And Exporting It)
</h3>

```js
npm init -y && npm i --save-dev node@16 && npm config set prefix=$(pwd)/node_modules/node && export PATH=$(pwd)/node_modules/node/bin:$PATH
```

<h3 align='center'>
STEP 2 (Making Start Script)
</h3>

```js
{
  "name": "discordjs_tutorials",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "node .",
    "test": "echo \"Error: no test specified\" && exit 1"
  },

# IT SHOULD LOOK SOME WHAT LIKE THIS (REMOVE THIS LINE AFTERWARDS) 
```

<h3 align='center'>
STEP 3 (Installing DiscordJS)
</h3>

```js
# With NPM
npm install discord.js

# Or With YARN
yarn add discord.js
```

<h3 align='center'>
STEP 4 (Runing Code)
</h3>

```js
# Run Your Package Using
npm start
```
