Let the games begin.

Locate the green button that says

    New Pull Request

To the right of that is an in put field with a url. Copy that url. Consider that url a variable.  Go into bash, cd into Documents, and type

    git clone url

Wait for the repo to download, then cd into `masonPingPong`. Open that directory into your favorite text editor, open the readme.md file, and type in an answer to this question:

What website do you use as a reference to writing markdown?
I'm not sure what markdown is. 

After you answer that question, type the following (this should sound familiar, and since you have this repo, I'll not say it so much):

```bash

git status

git add readme.md

git commit -m "answered the first question"

git push

```

Let me know if you get stuck.
