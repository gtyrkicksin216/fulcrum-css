# FulcrumCSS

FulcrumCSS is a CSS utility library that allows you to *leverage* commonly used CSS to apply simple styles and position to elements by simply adding markup. By using FulcrumCSS you can focus on writing verbose, clean markup, while reducing CSS redundancies caused by commonly used styles. FulcrumCSS uses single class rules that only ever carry a specificity of 20, which makes this ideal to use alongside BEM methodology to increase development efficiency and decrease development time. FulcrumCSS is lighweight and modular. You can either import the whole library, or you can simply import what you need. FulcrumCSS leverages the power of SCSS mixins, which also allows for customization of certain utility classes.

## Installing Fulcrum

To install Fulcrum, all you need to do is

```cmd
npm i fulcrum-css
```




## Using Fulcrum

In a project without Fulcrum, say you have some elements that has some display styles (color, background, etc) tied to a class name

```html
<div class="item">
  <div class="item__element">
    ...
  </div>
</div>
<div class="item">
  <div class="item__element">
    ...
  </div>
</div>

```

```scss
.item {
  &__element {
    color: blue;
    background: orange;
  }
}
```

Now you want to add some margin to *one* of the elements to put some space between them. You can either add another class, write a disclusion rule with `:not()`, or an inclusion rule with `:first-child | :last-child`.

**-OR-**

You could use Fulcrum to leverage commonly used CSS to do this task for you! Fulcrum keeps CSS bloat to a minimum, while helping make your markup more readable and verbose. When you look at an element with Fulcrum classes, you will be able to tell what exactly is being applied from the Fulcrum Library. From the example above, lets add 25px of bottom margin to the first element:

```html
<div class="item u-margin-bottom-25"> <!-- Notice the Fulcrum class added here -->
  <div class="item__element">
    ...
  </div>
</div>
<div class="item">
  <div class="item__element">
    ...
  </div>
</div>
```

With the addition of the Fulcrum Utility class, it will add the desired margin-bottom with a specificity of 20. This ensures that Fulcrum is able to add the CSS you need without using `!important` flags\* for every rule. Fulcrum also uses the `u-` namespace to avoid collision with rules that may be in place when dealing with legacy sites and/or applications.

<small>* <code>!important</code> flags are used for certain margin & padding classes. Please see the docs for more information</small>

This example is just a small portion of what you can do with Fulcrum. With Fulcrum, you have one centralized location for all of your positioning CSS which means you don't have to add class names or duplicate CSS just to bump an element around the page. Fulcrum also contains utility classes for commonly used display rules. For example, say you wanted those parent elements to have a little bit of box shadow to provide some depth:

```html
<div class="item u-margin-bottom-25 u-elevation-1">
  <div class="item__element">
    ...
  </div>
</div>
<div class="item u-elevation-1">
  <div class="item__element">
    ...
  </div>
</div>
```

You can see in the above example, that adding a slight box shadow is as easy as adding a class name to your parent element. Now at a glance, your markup tells you that they both have some box shadow, and the first item has some bottom margin. Fulcrum does all of this while keeping the specificity of the selectors at 20, and reusing code from the global scope to keep your CSS DRY and reduce loading cost.
