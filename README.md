# React Tooltip

Simple Tooltip component

## Install

`npm install @didww/react-tooltip` or `yarn add @didww/react-tooltip`

## Usage

```
import Tooltip  from '@didww/react-tooltip';

const MyComponent = () => {
  return (
    <Tooltip title={ <span>Tooltip Title here</span> }>
      <p>Tooltip Content here</p>
    </Tooltip>
  );
};
```

## Api

Parameter | Description | Type | Default
--- | --- | --- | ---
title | Element, which triggers tooltip appearance | `ReactNode` |  - **(required)**
children | Content of tooltip | `ReactNode` &#124; `ReactNode[]` | `null`
placement | Position of displayed tooltip content | `top-left` &#124; `top-right` &#124; `bottom-left` &#124;`bottom-right` | `top-right`
maxWidth | Maximum width in pixels of tooltip content | `number` | `198`
className | className of tooltip wrapper component | `string` | `''` 
