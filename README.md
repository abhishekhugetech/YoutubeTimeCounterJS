# YoutubeTimeCounterJS
This is just a simple JavaScript code to find out the Length of all the YouTube video on the Currently opened YouTube tab.

# How Does It Work?

1. Select all the span that contains the duration of the Video.
2. Initialize three arrays :<br>
  - One for storing the string of span.<br>
  - One for storing the string without empty space.<br>
  - One for storing the seconds of the video which was found out after calculating.<br>
3. Run for loop to save the times got from the span to the arrayOfNum Array.
4. Run for loop for replacing all the empty spaces from the string.
5. Run for loop for calculating the total number of seconds and then adding it to the arrayOfSeconds Array.
6. Save the total number of seconds after getting them from the array and adding them inside the totalTime variable.
7. Now we write a function to print out the total number of hour, minutes and seconds of all the youtube video on that page.
8. At last we run the Function to print out the time in the console.
