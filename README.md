# From Scratch Planning

## Add Ingredients Section

### HTML Elements

-   Heading
-   Form with inputs for ingredient, qty, measurement, button
-   Button for removing the last item
-   `<ul>` for keeping track of ingredients

### Events

1. Add Ingredient (form submit)
2. Remove Last Item (button click)

### State

-   An array of ingredients with the following structure:

```js
{
  ingredient: 'Black Beans',
  quantity: 1,
  measurement: 'Cups'
}
```

### Functions

-   `renderIngredient` -- create an `<li>` for an ingredient object
-   `displayIngredients` -- clear out the existing list, loop through each ingredient, call renderIngredient, append `<li>` to the list

### To Do List

1. Adding Ingredients

-   [ ] Make my form
-   [ ] Add form event listener (using `getElementById`)
-   [ ] create an ingredient object from the form data
-   [ ] push the ingredient onto ingredients array (state)
-   [ ] write `renderIngredient` function
-   [ ] write `displayIngredients` function (calling `renderIngredient` for each item)

2. Removing Ingredients

-   [ ] Add my remove button
-   [ ] Add event listener to button
-   [ ] Remove the last item from the ingredients array
-   [ ] Call `displayIngredients`

## Save Meal Section

### HTML Elements

-   Heading
-   Save button
-   Meal name input

### Event(s)

-   Save button click

### State

-   Array of Meals with the following structure:

```js
{
  name: 'Black Bean Salad',
  ingredientCount: 2
}
```

### Functions

-   `renderMeal` - return an `<li>` with the meal info
-   `displayMeals` - clears the list of meals, loops through the state and calls `renderMeal` for each meal in state

### To Do List

-   [ ] Add input and button html
-   [ ] Add button event listener
-   [ ] Create the meal object using the input value as well as the current list of ingredients
-   [ ] Push the meal object onto the meals array
-   [ ] Clear out the ingredients state and call `displayIngredients`
-   [ ] Write our `renderMeal` function
-   [ ] Write out `displayMeals` function (calling `renderMeal` for each item in the meals array)
-   [ ] Call `displayMeals`
