### Homework 5
## Third-Party APIs
# eventCalenderApp


# About 

Creating a simple calander application that allows a user to save events for each hour of the work day.  Use jQuery and the provided HTML and CSS in order to complete this task.   Use a jQuery library in order to be able to use its syntax.  

## Acceptance Criteria

```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with time blocks for standard business hours
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
WHEN I click into a time block
THEN I can enter an event
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

### What I learned 

This task had some exsisting code that was given to us.  We were told to use jQuery to create a daily work day event planner using the above criteria.   Using the provided code, I was able to find the color sets for the past, present, and future.  From there I started to create an object array for the hours in the day, this allowed me to use this to create a function that creates the rows in jQuery rather than having it hard set in the HTML code.  This technique can allow one to even have an interchaging input value into the created rows in order to make the application more responsive to a specific searched item.  Using moment and learning how to format it was something else that I learned, there are many different ways to present a date and time and the format method after moment allows one to manipulate how it is showcased.  Also I learned that using keys and values helps register the local storage.  Setting a key that intakes the information and the value that is created with the input provided by the user.  Even though being in class Saturday showed me that this is more like calling an empty parameter than making that become the key for the stored value later on.   




[link to URL](https://haru2727.github.io/eventCalenderApp/)

![day planner demo](./third-party-api-demo.gif)