# react_simple_typist

> a simple character typist react component

[![NPM](https://img.shields.io/npm/v/react_simple_typist.svg)](https://www.npmjs.com/package/react_simple_typist) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

[Demo](https://wangruoyu.digital/react_simple_typist/)

## Intro

This is a simple version of react component which functions as a typist robot.

It accepts an array of text data and animates them for each line one after the other.

It is also stylable. Each line's class name can be achieved. 

The pattern for each line class name will be the name you given (default is 'lineClassName') and follow by the index of the array.

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
// To make the cursor at the end of the text blink, you need to import this css file
import 'react_simple_typist/dist/index.css'

class Example extends Component {
  render() {
    return <TypeText />
  }
}
```

## Props

| # Props       | # Des                                                        |
| ------------- | :----------------------------------------------------------- |
| paragraph     | A list of objcet with specific keys. <br /> Example `[{data: 'Hello :)', fontSize: 60, fontColor: '#eee', delay: 1000}]` |
| Speed         | The type speed for each character                            |
| lineClassName | You can customize line class name. Default is 'lineClassName' |



## License

MIT © [https://github.com/Ruoyu-Klaus](https://github.com/https://github.com/Ruoyu-Klaus)
