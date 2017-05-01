# json-access
access json with path(split by '/')

[![NPM version][npm-image]][npm-url]
[![npm download][download-image]][download-url]
[![David deps][david-image]][david-url]

[npm-image]: https://img.shields.io/npm/v/json-access.svg
[npm-url]: https://npmjs.com/package/json-access
[download-image]: https://img.shields.io/npm/dm/json-access.svg
[download-url]: https://npmjs.com/package/json-access
[david-image]: https://img.shields.io/david/json-access.svg
[david-url]: https://david-dm.org/imcooder/json-access

## Install

```
npm i json-access -S
```

## Usage

```js

const jsonAccess = require('json-access');
let a = {
    level1: 'name',
    level2: 100,
    level3: [
        1,
        2,
        3,
        4,
        5,
    ],
    level4: [{
        name: 'sub',
    }],
    'level5': {
        name: 'test',
        objs: [{
            name: 'sub'
        }]
    }
};


console.log('level1:', jsonSelect.getEx(a, 'level1'));
console.log('level3/[2]:', jsonSelect.getEx(a, 'level3/[2]'));
console.log('level4/sub:', jsonSelect.getEx(a, 'level4/sub'));
console.log('level4/[0]/name:', jsonSelect.getEx(a, 'level4/[0]/name'));
console.log('level4/sub/[0]/name:', jsonSelect.getEx(a, 'level4/sub/[0]/name'));
console.log('level5/objs/[0]:', jsonSelect.getEx(a, 'level5/objs/[0]'));
console.log('level5/objs/[0]/name:', jsonSelect.getEx(a, 'level5/objs/[0]/name'));
```
function desc
|name|desc|
|-|
|get| throw error when path not exist or bad format|
|getEx|return undefined when error|

path desc：
path item split by '/'
exp:
level3/[2] 
level3: json map
[2]: json array index 2

## Example

See [example](example/).

## License

The [MIT License](LICENSE)