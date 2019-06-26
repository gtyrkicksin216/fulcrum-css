# If you would like to contribute to FulcrumCSS please see the rules for contributing below

## Branching
When starting a new task, always branch off of the latest version of the **develop** branch!

### Branch Prefixes
In an effort to keep the repo clean and easily navigable the following branch prefixes will be accepted. All other branch names will be removed.

(branch prefixes should be all lowercase)

- `feature/`: Feature should be used when you are adding **new** funcitonality
- `bug/`: Bug should be used when addressing bug fixes. Bug branches should not contain new functionality
- `maint/`: Maintenance branches are used for code cleanup. If you notice a way that something can be written better feel free to submmit a PR with your change.

---

### Branch Names
Under the same general idea of keeping the repo clean and navigable the name of the bracnch that follows the prefix should follow these rules:

(Branch names should be PascalCase _only_)

- **Be descriptive but concise**: Correlate the branch name with what you are working on.
- If you have previously used that branch name, or know that you will have continued work on that bug/feature/maint and would like to keep the branch name you can suffix your branch name with an underscore, the date, and an index number
  - for example: `feature/ExtraSpacingOptions_2019062801`
  - the format is `<prefix>/<BranchName>_YYYYMMddii`
  
---
  
## Check the issues
Prior to contribution, please check the issues to see if your fix/new feature/maintenance already has been created as an issue or is being addressed. If one does exist and has not been assigned to anyone yet, and you would like to work on it, asign it to yourself and start working on it.

If there has not been an issue created for that yet, please create one so if things need to be discussed it can all happen under that issue. Be sure to add the appropriate tags, and if you plan on starting work on that issue, assign it to yourself.

Be descriptive and add any supporting materials needed with the issue.

---

## Submitting PRs
Once you have completed any work that you would like to be added to the next release of FulcrumCSS, you can submit a PR for that feature/bug/maint, to the develop branch. Be sure to reference the issue that you are addressing in your PR.

Give as much information as needed about what was added/changed for this PR.

If your PR is declined there will be a reason why added to the discussion portion of the PR.

If accepted, your changes will be merged into develop, issue closed, and will be included in the next release of FulcrumCSS.

