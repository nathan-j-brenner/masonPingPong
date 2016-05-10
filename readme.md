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
Markdown is really easy way to write code, a lot of software is documented in markdown.  The website above gives you some ways to add styles without writing html, but you can write html in `*.md` or `*.markdown` files.

To recap what you've already done: You've cloned a remote repo.  Essentially you're making a copy of the remote, and saving it on your computer for you to work on.  That copy on your computer is the local copy. The remote is in this case on gitHub, which is basically the cloud.

Next, you made some changes, committed them, then pushed the changes back up to the remote. But most of the time, developers are often working on the same files as the same time, so make try this:

Make sure you're located (in bash) in the directory (by the way, I often say repo, repository, dir, directory.  They all mean the same thing, which is a folder, and usually I won't say repo unless it's a git repo...more on that later).

    git Pull

wait a second...but something shouldn't work.  You should see some sort of error.
### No errors found. System reports "Already up to date." in response to git pull command.

Read the error message in bash and try to debug the issue.  Ask me for help when you're too frustrated, and before you commit/push your copy back up to the remote, answer these questions (and add the markdown syntax to make them bold, look at the website I mentioned above):

What was the problem?

How did you fix it?

Some constructive feedback (and part of it is my fault because it means the instructions weren't clear enough).  Using the hashtags is typically used for h elements, like `<h1>`, which gets into symantics.  HTML (which is what markdown gets converted into) has been traditionally been about symantics so using an h1 tag would give different meaning to the text than would say using the strong tag.  Another example is "When should you use `<em>` in place of `<i>`?" Both make appear italicized, but they mean different things, if you're looking at the html.  If you're looking at the browser, then it doesn't matter, so bottom line use css to style your tags. But the problem with that is each browser shows different styles associated with each tag.  I'd love to see a new version of html that took out all the styles in the tags, and let only css dictate how they look. Bottom line, I was **hoping** for a solution that used two underscores or two astrists, but then daring fireball doesn't even mention how to style elements with a font weight of at least 700.  So your solution was clever.  I wonder, did you look at how I styled the "Round 2 text" or did you look at the daring fireball site? My goal was to get you to dig around the documentation.

I was also hoping that you recognized the error was....a merge conflict.  And you fixed it by....looking at the markdown, deciding which code to keep, and deleting the bit you didn't want, then made a git commit.

## Round 3
Merge conflicts suck.  Developers, like you said, are introverts, but they are also very opinionated, as you can tell with how I feel about mixing client side angular with php.  Git is an attempt to take these nerds and help them communicate so they can build apps that a single person couldn't write on their own. So far we've been work on the single version of the code base (we'll call that version the "Master branch"), but you can have different versions (branches).  This is great, because when you have a team of more than 1 person, you don't everyone making changes to the Master branch, because that would mean you'd get merge conflicts all the time.  Merge conflicts suck, they are often not easy to figure out how to resolve.  Imagine you spent a lot of time building and debugging a feature on the master branch, while another dev has been working on the same branch, and when you merge, the code is so complicated, you can't figure out easily how to resolve the merge conflict. The picture should be getting pretty clear now. The next two rounds will look at two workflows:

### Y workflow

All devs work from their own branch, which they title by their name.  For example: the "nate" branch.
First list what branches you have currently on your remote repo:

    git branch

Next, create a new branch: `git branch mason`

Now switch to the mason branch: `git checkout mason`

What you've done is copied the code in your remote master branch into new branch. Create a new file `hello.js`. Inside that file, write on the first line `console.log('hello world!')`.  Save that file, git add, commit, and even cooler since you have node downloaded, type `node hello.js`, then hit `enter` in bash. Under the next question, answer the question.  Style your response with a single underscore before your text and after your text (it makes it easier for me to figure out what you did);

What happened when you ran that command?

After you text the response, (I won't say git add, git status, git commit...etc, just commit but I mean essentially the same thing), commit your changes, then switch back to the master branch just like you switched to the mason branch. Now look at the code.  (type after the question with the underscores)

What was different?

Each branch keeps different code, so you need to merge the mason branch with the master branch. Type `git merge mason`.  Merging the mason branch with the master branch combines the stuff that is different from the mason branch with the master branch, and you can get merge conflicts here to. Next, `git push`, then bug me so I take a look at what you've done.
