# react_typist

> a simple character typist react component

[![NPM](https://img.shields.io/npm/v/react_typist.svg)](https://www.npmjs.com/package/react_typist) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react_typist
```

## Usage

```jsx
import React, { Component } from 'react'

import MyTypist from 'react_typist'
import 'react_typist/dist/index.css'

class Example extends Component {
  render() {
    return <MyTypist />
  }
}
```



## Props

| # Props   | # Des                                                        |
| --------- | :----------------------------------------------------------- |
| paragraph | A list of objcet with specif keys. <br /> Example  `[{data: 'Hello :)', fontSize: 60, fontColor: '#eee', delay: 1000}]` |
| Speed     | The type speed for each character                            |



## License

MIT © [https://github.com/Ruoyu-Klaus](https://github.com/https://github.com/Ruoyu-Klaus)
