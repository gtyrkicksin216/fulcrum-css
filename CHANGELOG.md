# 0.2.1 (2019-04-17)
### Bug Fixes
Fixed an issue where using `padding-[block|inline]` with keywords was using margin instead of padding (#6008e66 closing #13)

# 0.2.0 (2019-04-03)
### Features
- Margin and padding for elements has been updated:
  - Margins and paddings now have three different options so you do not have to add multiple classNames where you could use one
  - Syntax:
    - `.u-[margin|padding]-all-[number|keyword]`: Will add margin or padding at the block-start, block-end, inline-start, and inline-end
    - `.u-[margin|padding]-block-[number|keyword]`: Will add margin or padding at the block-start and block-end of the element
    - `.u-[margin|padding]-inline-[number|keyword]`: Will add margin or padding at the inline-start and inline-end of the element

### Bug Fixes
- Removed `includes` from modules and added to main stylesheet. This fixes an issue that was causing dupes if you wanted custom sizing (for things like spacers, margin, etc.) and included the file where needed.


# 0.1.0-rc4 (2019-02-15)
- Keyword spacers are here! 😄
  - Available sizes are:
    - `small`: 15px
    - `medium`: 30px
    - `large`: 45px
    - `x-large`: 60px
  - These can also be used for margin and padding
  - Syntax: `<div class="u-spacer-large"></div>`

# 0.1.0-rc3 (2019-01-22)
### Features
- Added `fontColor` and `textTransform` mixins (#5) (1450a7b) Closes #1 Closes #4 Closes #2
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
