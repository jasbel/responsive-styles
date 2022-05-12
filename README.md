# @jasbel/responsive [![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url]

## Information

<table>
<tr>
<td>Package</td><td>@jasbel/responsive</td>
</tr>
<tr>
<td>Description</td>
<td>Media queries for responsive design</td>
</tr>
<tr>
<td>Browser Version</td>
<td>all</td>
</tr>
</tr>
<tr>
<td colspan='2'><a href='http://contra.io/@jasbel/responsive/'>Demo</a></td>
</tr>
</table>

The best supported, easiest to use react media query module.

## Install

```console
$ npm install @jasbel/responsive --save-dev
```
```console
$ npm i -D @jasbel/responsive
```

## Example Usage

### Usage

install compiler sass and import file scss main:

```scss
@import "./node_modules/@jasbel/responsive/scss/responsive.scss";

...
```

### With HTML and SCSS

Simple Example

`index.html`

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Responsive</title>
    <link href="main.css" rel="stylesheet" type="text/css" />
  </head>
  <body>
    <p class="text textResponsive">Text Responsive</p>
    <p class="text">Text No Responsive</p>
    <div class="box boxResponsive">Box Responsive</div>
    <br />
    <div class="box">Box No Responsive</div>
  </body>
</html>
```

`main.scss`

```scss
@import "./node_modules/@jasbel/responsive/scss/responsive.scss";

html,
body {
  height: 100%;
  width: 100%;
}

.text {
  font-size: 30px;

  &Responsive {
    @include responsive(fz, 100, 30);
  }
}

.box {
  background-color: lightblue;
  width: 100px;
  height: 100px;
  font-size: 16px;

  &Responsive {
    @include responsive(fz, 50, 16);
    @include responsive(w, 500, 100);
    @include responsive(h, 500, 100);
  }
}
```

## API

...

## Browser Support

### Out of the box

<table>
<tr>
<td>Chrome</td>
<td>9</td>
</tr>
<tr>
<td>Firefox (Gecko)</td>
<td>6</td>
</tr>
<tr>
<td>MS Edge</td>
<td>All</td>
</tr>
<tr>
<td>Internet Explorer</td>
<td>11</td>
</tr>
<tr>
<td>Opera</td>
<td>12.1</td>
</tr>
<tr>
<td>Safari</td>
<td>5.1</td>
</tr>
</table>

## Documentation

- [Documentation](https://github.com/jasbel/responsive-styles#readme",)
- [Oficial Site Developer](https://asbel.dev)
- [Blog](https://asbel.dev/blog/)

## Template (In Process)

Clone a copy of the repo:

```bash
git clone https://github.com/jasbel/template-responsive.git
```


[downloads-image]: http://img.shields.io/npm/dm/@jasbel/responsive.svg
[npm-url]: https://npmjs.org/package/@jasbel/responsive
[npm-image]: http://img.shields.io/npm/v/@jasbel/responsive.svg