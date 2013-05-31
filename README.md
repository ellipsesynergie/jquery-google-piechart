# jQuery Google Piechart

A simple, lightweight jQuery plugin to create piechart using Google Corechart API

## Dependencies

[Google CoreChart API](https://developers.google.com/chart/), [jQuery](http://jquery.com/) (>= 1.9.0)

## Usage

First of all, include Google API and jQuery:

```html
<script type="text/javascript" src="https://www.google.com/jsapi"></script>
<script src="http://code.jquery.com/jquery-1.9.1.min.js"></script>
<script>window.jQuery || document.write('<script src="path/to/jquery/jquery-1.9.1.min.js"><\/script>')</script>
```

Then, bind piechart to an element:

```html
<script type="text/javascript">
    $(document).ready(function() {
        $('#mypiechart').piechart();
    });
</script>
```

## Options

See [Google Visualization Pie Chart configuration options](https://developers.google.com/chart/interactive/docs/gallery/piechart) for details.

### Defaults

`backgroundColor`

    Default is `transparent`.

`colors`

    Default is `['#468851', '#C24A48']` (green and red).

`legend`

    Default is `{'position': 'none'}`.

## Demo

Coming soon!

## Authors

[@ellipsesynergie](http://github.com/ellipsesynergie)

## License

MIT