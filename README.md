# jQuery-FixTableHeader
_A jQuery plugin to fix header or footer row in a table on user scroll_

This plugin does exactly what it says. Fixing the headings and/or the footers in a HTML table is made easy by this plugin

[`Version 1.0`](#version-10) | [`Invoking the plugin`](#invoking-the-plugin) | [`Options`](#options) | [`Important`](#-important)

View a demo **<a href='#'>here</a></h4>**.

## An ideal html table
<table><tr><td width="50%"><font color="blue">
&lt;table&gt;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&lt;thead&gt;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;tr&gt;&nbsp;&lt;th&gt;...&lt;/th&gt;&nbsp;......&lt;/tr&gt;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/thead&gt;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&lt;tfoot&gt;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;tr&gt;&nbsp;&lt;td&gt;...&lt;/td&gt;&nbsp;......&lt;/tr&gt;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/tfoot&gt;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&lt;tbody&gt;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;tr&gt;&nbsp;&lt;td&gt;...&lt;/td&gt;&nbsp;......&lt;/tr&gt;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/tbody&gt;<br/>
&lt;/table&gt;</font>
</td><td width="50%" valign="top">
Although this is the perfect layout of a table, this plugin can work even on different layouts and improper layouts.
<br/><br/>Not all possibilities are tested, some of the tested layouts include:
<ul>
<li>Ttraditional layout with no <b>tbody, thead, tfoot</b></li>
<li>Improper use of <b>td</b> for <b>th</b> in heading</li>
<li>Multiple heading tags defined</li>
</ul>

<em>Concept</em>: <br/> Takes all the rows inside <b>thead</b> and <b>tfoot</b> as header and footer respectively.<br/>
If not specified, it takes the <b>first row</b> and the <b>last row</b> as the header and footer respectiely.
</td>
</tr>
</table>

##Version 1.0
#### jQuery.fixTableHeader.js
* fix header and/or footer with options
* perfect table layout not needed, just works with few **tr** in iside a **table**
* Supports fixing multiple rows in header/footer by using the **thead**/**tfoot** tag. Any number of rows within these tags will be fixed
* tables with horizonal scrolling is supported

##Invoking the plugin
The table should be wrapped inside a container `div` with `overflow:auto` and a `fixed height` if necessary.<br/>
Eg table:<br/>
>&lt;div id="tbMarksContainer" style="height:400px;overflow:auto;"&gt;</br>
>&nbsp;&nbsp;&nbsp;&nbsp;&lt;table id="tbMarks"&gt;<br/>
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...<br/>
>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/table&gt;<br/>
>&lt;/div&gt;<br/>

- invoke using the container div's ID - `$('#tbMarksContainer').fixTableHeader();`

##Options
- fixHeader : **true/false** _(default -> true)_ [fix or not to fix the header]
- fixFooter : **true/false** _(default -> false)_ [fix or not to fix the footer]

Examples: <br/>
`$('#tbMarksContainer').fixTableHeader({fixHeader:true,fixFooter:true});`
`$('#tbMarksContainer').fixTableHeader({fixHeader:false,fixFooter:true});`

##! Important
- _A drawback:_ borders applied to the headers and footers wont be preserved while scrolling (researching, if this can be fixed).
- It is recommended to avoid `border-top` and `border-bottom` on the `th` or `td` which is going to be the header or the footer.
- It is important to keep a solid color or an image as background to the headers and footers to avoid any transparency while scrolling.
