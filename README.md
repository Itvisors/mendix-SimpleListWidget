## SimpleListWidget
Simple list widget for use in pluggable widget containers and master/detail scenario's.

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

So set an association from your context object to the list entity and use that to show a dataview with the selected object.

Note that if you're only setting the selected object association and GUID on your context object, you may do so using a nanoflow. If you don't commit, it saves you a server roundtrip, making the UI appear more responsive.

## Scrolling an item into view
When reloading the list, by default the scroll position will remain the same unless there are fewer rows available. 
Common requirement is to scroll to top when the list is refreshed. This can be done by setting the GUID of the row as value for the scroll into view attribute. If an item exists in the list with that GUID, it will be scrolled to the top of the scroll area. No error is given if that object does not exist in the list. 

**When the user clicks an item in the list, set the scroll into view attribute to empty.** The browser will also scroll the list when the item is already visible. The list would be scrolled to make the clicked item item appear at the top of the scroll area. Really annoying when the list scrolls only because the users clicks in it. 

## The sample use case
The test project in the GitHub repository contains the usecase described here. You can download it for reference.

### Functionality
- Show a list of items, when the user clicks an item, show details on the right.
- When the user changes the search criteria, reload the list
- Scroll the list to the top after reloading

### Context object
The context object has the following:
- Search criteria
- MoreData indicator
- Selected item GUID attribute
- Scroll into view GUID attribute
- Selected sales order association
- Sales order reference set to show in the list

### The page
The page uses a datasource microflow (DS_UserContext) that initializes the context and calls SUB_UserContext_RefreshList to retrieve data.

### Seach criteria
The search criteria have an on change microflow to do the search directly after the user changes the value. To prevent issues with the dates, the to date will always be after the from.

### Retrieving the data
SUB_UserContext_RefreshList retrieves the data, if data is found, it gets the first item from the list and sets the guid on both the selected item attribute and scroll into view attribute of the context object.

The MoreData attribute is set to true if the list count matches the limit, indicating more data can be available.

The sales order list is saved in the reference set. For simple retrieves, the data could be retrieved directly without setting a reference set first. However, when there are search criteria you will probably need to use a microflow as datasource. The widget datasource is refreshed more often than you might expect. The widget does not choose to reload the datasource, the Mendix client makes that decision. A complex database search can slow down rendering but also the backend because the complex search would be done more often than necessary. So if the data retrieval is more complex, or involves string searches, using the reference set will speed up rendering as it is a really simple retrieve.

### Widget datasource
The widget datasource uses XPath to retrieve the list using the reference set. 

### Onclick nanoflow
The onclick is done using a nanoflow. The GUID of the sales order is set as selected item, the scroll into view GUID is set to empty to make sure the list does not scroll. The association from the context object to the selected sales order is set to make it appear on the right. The change is not committed to keep it client side.

## Styling

The widget places class `simplelistwidget` on the list container div, along with any classes you specify on the widget's class property.

Each item container div gets class `simplelistwidget-item`. 

By default, the widget does not have any styling in these classes.

The selected item additionally gets class `simplelistwidget-selected`. The default is to use the same background color as the selected item in a listview.

Additionally, you can put class `simplelistwidget-lined` on the widget for a lined list. No margin or padding is added, put a little spacing on your content in Mendix.


## Issues, suggestions and feature requests
[link to GitHub issues](https://github.com/Itvisors/mendix-SimpleListWidget/issues)

