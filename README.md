# Lab 5 - Starter
Make sure you make a PR to your own repo's main and not the class' repo!! Otherwise you will lose points!!

Group: Hemendra Ande

1) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user. 

No, sending a message between users isn’t something I would unit test with because it’s too big of a process. It has a lot of individual, different parts working together, like the frontend, backend, database, and network. Since unit tests are supposed to focus on one small piece of logic at a time, this would be better tested using an end-to-end test where I can check that everything works together holistically.

2) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

Yes, I should unit test this because it’s simple and self-contained. It doesn’t depend on anything outside the function, just the input and output. I'm just checking a small condition, like whether a message is over 80 characters. I can test this easily by passing in different string lengths and making sure the function returns the right result.

https://draande.github.io/Lab5_Starter/

https://draande.github.io/Lab5_Starter/explore.html

https://draande.github.io/Lab5_Starter/expose.html
