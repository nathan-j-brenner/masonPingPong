Let the games begin.

Locate the green button that says

    New Pull Request

To the right of that is an in put field with a url. Copy that url. Consider that url a variable.  Go into bash, cd into Documents, and type

    git clone url

Wait for the repo to download, then cd into `masonPingPong`. Open that directory into your favorite text editor, open the readme.md file, and type in an answer to this question:

What website do you use as a reference to writing markdown?

[Daring Fireball](https://daringfireball.net/projects/markdown/syntax)

After you answer that question, type the following (this should sound familiar, and since you have this repo, I'll not say it so much):

```bash

git status

git add readme.md

git commit -m "answered the first question"

git push

```

Let me know if you get stuck.


## Round 2
Mardown is really easy way to write code, a lot of software is documented in markdown.  The website above gives you some ways to add styles without writing html, but you can write html in `*.md` or `*.markdown` files.

To recap what you've already done: You've cloned a remote repo.  Essentially you're making a copy of the remote, and saving it on your computer for you to work on.  That copy on your computer is the local copy. The remote is in this case on gitHub, which is basically the cloud.

Next, you made some changes, committed them, then pushed the changes back up to the remote. But most of the time, developers are often working on the same files as the same time, so make try this:

Make sure you're located (in bash) in the directory (by the way, I often say repo, repository, dir, directory.  They all mean the same thing, which is a folder, and usually I won't say repo unless it's a git repo...more on that later).

    git Pull

wait a second...but something shouldn't work.  You should see some sort of error.  Read the error message in bash and try to debug the issue.  Ask me for help when you're too frustrated, and before you commit/push your copy back up to the remote, answer these questions (and add the markdown syntax to make them bold, look at the website I mentioned above):

What was the problem?

How did you fix it?
