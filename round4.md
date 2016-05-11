## feedback from round 3

There were two questions in the last section, but I only saw an answer to the second one.  Hopefully when you ran the node command, you got the text from inside the console.log function in that js file.  A lot of the node school workshops start with an excercise like that just to make sure everything is working as it should. It's kinda like test driven development. You work incrimentally by making tiny changes, making predictions on what will happen, then running test a test.  If the outcome is what you expected, you write something more complicated and work up the app to the behavior you want.  If you think about it, Test Driven Development is a lot like the scientific method that kids go through in every science class in public education.

## Round 4
I did a few projects with the Y workflow for a while, but in practice, most developers use something different, we'll call it the _feature branch_, and it's what I'm doing now.  You'll see a lot of open source projects work this way: Anyone can contribute by making _pull requests_, but someone, like an administrator or a governing body to the repo, has to decide if they want to accept that pull request. When a pull request is accepted, that branch get's merge into the master branch.  So you never push from a local master branch to a remote master branch.  It's one directional.  You only pull from the remote master to the local master, create a branch (like in this case _round 4_), make your changes, run your unit tests, fix the code, then when everything is good, you push up to github.  Let start there.

1. Create a new branch.  Call it `feelings`, and create a new js file called `feelings`. Inside `feelings.js`, copy paste the following
    `(function(){
        var feeling = ["happy", "sad", "glad"];

        var rand = Math.floor(Math.random()*(arr.length+1));

        console.log(backtick I am feeling rand backtick);

    })()`
There's some es6 code in the console.log method (Where it says backticks, add in the key for backticks, which are in the top left corner of the keyboard), so if it doesn't work, ask me for the es5 equivalent.

And replace the values in the feelings array with something more interesting.

Run the `node feelings.js` Contribute to this file the bash responded with, then commit, and try `git push`.  It probably won't work.  Read the error carefully and figure out how to get it to work.  Once it does, go up to the repo, and dig around for a button that says `New pull request`.  Figure out how to make a pull request, but don't complete it. Tell me when you get to this point.

_got to the point where I could push feelings.js, but then wasn't able to figure out what you mean by "go up to the repo" Do you mean within the console, or somewhere else?_

_one more question, should be be attempting to merge with the master branch, or leave those files unmerged for the time being?_
