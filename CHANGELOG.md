# 0.1.0-rc3 (2019-01-22)
### Features
- Added `fontColor` and `textTransform` mixins
- `fontColor` usage:
  - **Syntax:** `u-font-color-<primary|accent|warn|normal>`
    ```html
    ...
    <p class="u-font-color-primary">Some text</p>
    ...
    ```
  - Can be customized by providing custom color values. The order is as follows
    - `@include fontColor($primary, $accent, $warn, $normal);`
- `textTransform` usage:
  - **Syntax:** `u-text-transform-<none|capitalize|uppercase|lowercase|full-width>`
    ```html
    ...
    <p class="u-text-transform-uppercase">Some text</p>
    ...
    ```
  - **Cannot** be customized by using `@include`

# 0.1.0-rc2 (2019-01-16)
### Features
- Increased specificity weight of all utility selectors to 20 to override predeclared rules without adding `!important` tags (#100644), closes #6
- Changed version number to represent release canidates



# Version 0.1.0-rc1
- IT'S A CSS LIBRARY! :)
- Initial library build, *DOES NOT HAVE AN ASSOCIATED RELEASE FILE*
