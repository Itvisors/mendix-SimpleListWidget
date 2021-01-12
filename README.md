## SimpleListWidget
Simple list widget for use in pluggable widget containers and master/detail scenario's.

Originally created because currently listviews may not be put in pluggable widget containers. This widget is also quite useful in other situations as it allows you to control the selected item.

## Features
- Renders a simple list of divs 
- Set and indicate the selected item
- Allowed in pluggable widget containers
- Easy to style
- Optionally add lines between the items

## Limitations
- No events, if you need onClick, just use a container as widget content
- No lazy loading! Be sure to limit the data you return from your datasource.

## Usage

Note that the widget will render every object returned from the datasource. If you return 1000 objects from the XPath or microflow, 1000 items get rendered, probably not a good idea as performance will suffer. The example fills a reference set with the found data, maximized at 100 rows. The context object has a flag to indicate whether more data may be available, allowing a message to be displayed on the page. 

From a UX perspective, having the user scroll through hundreds of lines usually is not very user friendly anyway.

It is easiest to put a container in the widget's content area, you can make that container clickable in Mendix and style it to your requirements.

## Setting the selected item
The widget will put class `simplelistwidget-selected` on the item for which the GUID matches the value of the selected item GUID attribute. No error is given if that object does not exist in the list.

Pluggable widgets do not support the 'listen-to' functionality, so set an association from your context object to the list entity and use that to show a dataview with the selected object.

Note that if you're only setting the selected object association and GUID on your context object, you may do so using a nanoflow. If you don't commit, it saves you a server roundtrip, making the UI appear more responsive.

## Styling

The widget places class `simplelistwidget` on the list container div, along with any classes you specify on the widget's class property.

Each item container div gets class `simplelistwidget-item`. 

By default, the widget does not have any styling in these classes.

The selected item additionally gets class `simplelistwidget-selected`. The default is to use the same background color as the selected item in a listview.

Additionally, you can put class `simplelistwidget-lined` on the widget for a lined list. No margin or padding is added, put a little spacing on your content in Mendix.


## Issues, suggestions and feature requests
[link to GitHub issues](https://github.com/Itvisors/mendix-SimpleListWidget/issues)

