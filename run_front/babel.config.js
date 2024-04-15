module.exports = {
  "env":{
    "development":{
      "sourceMaps":true,
      "retainLines":true,
    }
  },
  presets: [
    ['@vue/cli-plugin-babel/preset', {}, 'preset1'],
    ['@vue/babel-preset-app', {}, 'preset2'],
  ]
}
