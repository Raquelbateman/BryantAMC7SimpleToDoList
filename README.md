# <b>Mini Challenge 7 Simple TodoList</b>

<b>Name:</b> Alicia Bryant<br>
<b>Project:</b> Simple To Do List<br>
<b>Date:</b> 05/16/2024 <br>
<strong>Description:</strong><br>

Create a simple to do list.
Stylize your To-Do list. This means styling your application in a thoughtful and meaningful way that is not the way we did it in class.
Find two bugs and fix them.

<b>Requirements:</b><br>
Creating a To-Do List<br>
Adding items to the list<br>
Completing an item on the list (crossing out)<br>
Delete an item<br>
Edit an item
<br><br>
<b>GitHub: </b>https://github.com/Raquelbateman/BryantAMC7SimpleToDoList<br><br>
<b>Bugs That Were Dealt With:</b>
1. The edit button drove me insane. I could not get it to work for the life of me. I didnt realize I had to add a useState for both editing and inputing the tasks at hand but after i did that it was sorta a "duh" moment and i was able to continue with my code.
2. I could not get the dot away from my list item. It took me longer than it should have only to realize that I needed to style my "ul" in the css file. Once I did that, the dot went away.

<b>Peer Reviewed by:</b> David Jimenez <br>
<b>Comments:</b>   <br>
I see that you styling is very nice.  I enjoy the styling and want to do more like this in my projects.  I see that your add functionality works  correctly; however, I see a bug.  When you add an empty string, it allows it to pass through.  I would suggest adding this to your on click functionality    " onClick={() => input ? addToDo(input) : null} "
and it should make your add button no longer let empty pass through the onClick

Otherwise I think its functioning well.
<br>
<br>
<br>
<br>
