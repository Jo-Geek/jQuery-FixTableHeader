# jQuery-FixTableHeader
_A jQuery plugin to fix header or footer row in a table on user scroll_

This plugin does exactly what it says. Fixing the headings and/or the footers in a HTML table is made easy by this plugin

[`Version 1.0`](#version-10) | [`Invoking the plugin`](#invoking-the-plugin) | [`Options`](#options) | [`Important`](#-important)

View a demo **<a href='https://jo-geek.github.io/jQuery-FixTableHeader/demo/'>here</a></h4>**.

>###NPM
>`npm i fix-table-header`

##Version 1.0
#### jQuery.fixTableHeader.js
* fix header and/or footer with options
* no alterations to existing table needed, just wrap it around a container and call this plugin.
* no dynamic element created for fixing header and footer, this just uses the existing elements (`th` and `td`)
* perfect table layout not needed, just works with few **tr** in iside a **table**.
* Supports fixing multiple rows in header/footer by using the **thead**/**tfoot** tag. Any number of rows within these tags will be fixed
* Tables with horizonal scrolling(responsiveness) is supported
* Super light: just a 2kb plugin

#### Patch v1.0.3
* adds classes to header and footer cells, `fth-header` and `fth-footer` respectively for optional CSS styling.
* fixed the position of footer when the container has a horizontal scrollbar


##Invoking the plugin
The table should be wrapped inside a container `div` with `overflow:auto` and a `fixed height` if necessary.<br/>
Eg table:<br/>
```
<div id="tbMarksContainer" style="height:400px;overflow:auto;">
    <table id="tbMarks">
        ...
    </table>
</div>
```
- invoke using the container div's ID - `$('#tbMarksContainer').fixTableHeader();`

##Options
- fixHeader : **true/false** _(default -> true)_ [fix or not to fix the header]
- fixFooter : **true/false** _(default -> false)_ [fix or not to fix the footer]

Examples: <br/>
`$('#tbMarksContainer').fixTableHeader({fixHeader:true,fixFooter:true});`
`$('#tbMarksContainer').fixTableHeader({fixHeader:false,fixFooter:true});`

The plugin adds the classes `fth-header` and `fth-footer` to the `th`s and `td`s to all the detected headers and footers respectively.
You can use this classes to manipulate thier appearance in your CSS.

Example:<br/>
```
td.fth-header,th.fth_eader,td.fth-footer{
      border-top:none;
      border-bottom:none;
   }
```
##! Important
- _A drawback:_ borders applied to the headers and footers wont be preserved while scrolling (researching, if this can be fixed).
- It is recommended to avoid `border-top` and `border-bottom` on the `th` or `td` which is going to be the header or the footer.
- It is important to keep a solid color or an image as background to the headers and footers to avoid any transparency while scrolling.
