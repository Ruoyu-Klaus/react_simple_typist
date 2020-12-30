# react_simple_typist

> a simple character typist react component

[![NPM](https://img.shields.io/npm/v/react_simple_typist.svg)](https://www.npmjs.com/package/react_simple_typist) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

[Demo](https://wangruoyu.digital/react_simple_typist/)

## Install

```bash
npm install --save react_simple_typist
or
yarn add react_simple_typist
```

## Usage

```jsx
import React from 'react'

import TypeText from 'react_simple_typist'
import 'react_simple_typist/dist/index.css'

class Example extends Component {
  render() {
    return <TypeText />
  }
}
```

## Props

| # Props   | # Des                                                                                                                    |
| --------- | :----------------------------------------------------------------------------------------------------------------------- |
| paragraph | A list of objcet with specific keys. <br /> Example `[{data: 'Hello :)', fontSize: 60, fontColor: '#eee', delay: 1000}]` |
| Speed     | The type speed for each character                                                                                        |

## License

MIT © [https://github.com/Ruoyu-Klaus](https://github.com/https://github.com/Ruoyu-Klaus)
