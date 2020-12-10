# JavaScriptmas

## Contributing

Hi there. If you found a typo and want it corrected, found a better solution or want to improve an existing solution, you can fork this repository and clone it to your local machine.

1. Clone using git command `git clone https://github.com/<your gitHub username>/javascriptmas.git`.
2. Run `npm install` at the root of the project directory to install dependencies. This requires you to have [node](https://nodejs.org/en/) installed.
3. Create a new branch and switch to it using `git checkout -b branch-name`.
4. If you are submitting a new solution, create a file in the [solutions folder](/solutions) and name it `<challenge number>-<solution number>-<challenge name>.js`. For example if you want to create a second solution for `sort by length` challenge, it is the sixth challenge therefore the file name should be `06-02-sort-by-length.js`. `06` signifies sixth challenge, `02` signifies second solution. Take note, if the first solution is still in the form `06-sort-by-length.js`, then rename it to `06-01-sort-by-length.js` for consistency. 
5. Before submitting, you are required to write tests as well. I am using [jest](https://jestjs.io/) for testing the solutions. These are simple assertions. For examples, you can check in [tests](/tests) directory. If you are unfamiliar with jest you can check their documentation [here](https://jestjs.io/docs/en/getting-started).
6. You need to add your solution to the project [README.md](/README.md) file. If there is only one solution, name it `solution 1` and yours `solution 2` or `solution n` depending on how many solutions there are. You can check the other solutions in the README.md file on how to format your solution.
6. After writing  tests, you can run `npm run test` to run all tests or `npm run test tests/<name of file you want to test>` to test a specific file. Before committing your changes, the project has been configured to run all tests. Your commit will be aborted if there is a failing test. To skip running all tests, run `git commit -m "commit message" --no-verify`.