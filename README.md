# babel-plugin-rgba
十六进制颜色转换为RGBA颜色babel插件。

## install
```shell
yarn add babel-plugin-rgba -D
```

## .babelrc
```
{
  "plugins": [
    [
      "babel-plugin-rgba",
      {
        "alpha": 0.75
      }
    ]
  ]
}
```

## example
目前仅支持js，ts文件中的变量命名转换。

```js
const color1 = "#ffffff";
const color2 = "#fff";

function test() {
  const color3 = "#fff";
}

```

=>

```js
const color1 = "rgba(255, 255, 255, 0.75)";
const color2 = "rgba(255, 255, 255, 0.75)";

function test() {
  const color3 = "rgba(255, 255, 255, 0.75)";
}
```

## development
```shell
yarn test
```