# PixelImage 像素图片

PixelImage组件用于创建像素风格的图片效果，可以将普通图片转换为像素化的复古风格。

## 基础用法

通过传入图片地址，即可创建一个基础的像素化图片。

<div class="flex items-center justify-center space-x-4">
  <ol-pixel-image
    src="/vite.png"
    width="200"
    height="auto"
  />
  <ol-pixel-image
    src="/vue.png"
    width="200"
    height="auto"
  />
</div>

```html
<div class="flex items-center justify-center">
  <ol-pixel-image
    src="/vite.png"
    width="200"
    height="auto"
  />
</div>
```

## 自定义间距

你可以通过`pixelGap`属性来控制像素块之间的间距。

<div class="flex  items-center space-x-4 justify-center">
  <ol-pixel-image
    src="/vite.png"
    width="200"
    height="auto"
    :pixel-gap="2"
  />

  <ol-pixel-image
    src="/vite.png"
    width="200"
    height="auto"
    :pixel-gap="4"
  />
</div>

```html
<div class="flex  items-center space-x-4 justify-center">
  <ol-pixel-image
    src="/vite.png"
    width="200"
    height="auto"
    :pixel-gap="2"
  />

  <ol-pixel-image
    src="/vite.png"
    width="200"
    height="auto"
    :pixel-gap="4"
  />
</div>
```

## 自定义像素大小

你可以通过`pixelSize`属性来控制像素化的程度，数值越大像素块越大。

<div class="flex items-center justify-center space-x-4">
<ol-pixel-image
    src="/vite.png"
    width="200"
    height="auto"
    :pixel-size="2"
  />

  <ol-pixel-image
    src="/vue.png"
    width="200"
    height="auto"
    :pixel-size="1"
  />
</div>

```html
<div class="flex items-center justify-center space-x-4">
<ol-pixel-image
    src="/vite.png"
    width="200"
    height="auto"
    :pixel-size="2"
  />
  <ol-pixel-image
    src="/vue.png"
    width="200"
    height="auto"
    :pixel-size="1"
  />
</div>
```
## 自定义视窗大小

通过`viewport-width`和`viewport-height`属性，可以自定义视窗大小。

<div class="flex items-center justify-center">
  <ol-pixel-image
    src="/vue.png"
    :viewport-width="350"
    :viewport-height="200"
    :pixel-size="4"
  />
</div>

```html
<div class="flex items-center justify-center">
  <ol-pixel-image
    src="/vue.png"
    :viewport-width="200"
    :viewport-height="200"
    :pixel-size="4"
  />
</div>

```

## 属性

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| width | 图片宽度 | `number` | `200` |
| height | 图片高度 | `number` | `200` |
| pixelSize | 像素块大小 | `number` | `4` |
| src | 图片地址 | `string` | `-` |
| pixelGap | 像素块间距 | `number` | `4` |

### 注意事项

1. 组件会继承原生`img`标签的所有属性。
2. 为了获得最佳效果，建议使用分辨率适中的图片。
3. `pixelSize`值越大，图片像素化程度越高，建议根据实际需求调整。
4. 组件暂不支持在线图片，需要本地图片。