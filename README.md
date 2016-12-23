# antd-adapter

[![](https://img.shields.io/travis/ant-design/antd-adapter.svg?style=flat-square)](https://travis-ci.org/ant-design/antd-adapter)
[![npm package](https://img.shields.io/npm/v/antd-adapter.svg?style=flat-square)](https://www.npmjs.org/package/antd-adapter)
[![NPM downloads](http://img.shields.io/npm/dm/antd-adapter.svg?style=flat-square)](https://npmjs.org/package/antd-adapter)
[![Dependency Status](https://david-dm.org/ant-design/antd-adapter.svg?style=flat-square)](https://david-dm.org/ant-design/antd-adapter)

An adapter which makes newer antd works like old one. DIRTY HACK \\ T^T /

## Installation

```bash
npm i --save antd-adapter
```

## Usage

````jsx
import DatePicker from 'antd-adapter/1to2/DatePicker';

// Then, you can use DatePicker's APIs as old antd
<DatePicker value="2016-12-23" />
````

## Supported Adapter

````jsx
import DatePicker from 'antd-adapter/1to2/DatePicker';
import MonthPicker from 'antd-adapter/1to2/MonthPicker';
import RangePicker from 'antd-adapter/1to2/RangePicker';
import TimePicker from 'antd-adapter/1to2/TimePicker';
import Calendar from 'antd-adapter/1to2/Calendar';
````

## License

MIT
