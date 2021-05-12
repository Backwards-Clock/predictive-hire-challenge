import React from "react";
import { Container } from "reactstrap";

const Recipes = () => (
  <Container>
    <div>
      <h2>Scones</h2>
      <p>Plain and simple</p>
      <p>Prep Time: 15 minutes</p>
      <p>Cook Time: 10 minutes</p>
    </div>
    <section>
      <h3>Ingredients</h3>
      <ul>
        <li>2 cups Self-Raising Flour</li>
        <li>1 tbsp Butter</li>
        <li>1/4 tsp Salt</li>
        <li>3/4 cup Milk</li>
      </ul>
    </section>
    <section>
      <h3>Instructions</h3>
      <ol>
        <li>Preheat oven to 230 degrees Celcius</li>
        <li>Grease oven tray.</li>
        <li>Sift flour and salt into basin.</li>
        <li>Rub butter into flour and finger tips.</li>
        <li>
          Add milk and mix quickly and lightly until a moist dough is formed.
        </li>
        <li>
          Turn onto lightly floured board and knead until smooth. Roll out 1.5 -
          2cm thick.
        </li>
        <li>Cut out with floured scone cutter and place on oven tray.</li>
        <li>
          Bake 7 - 10 minutes. Tops of scones should be golden brown. For soft
          scones wrap in cloth until cold.
        </li>
      </ol>
    </section>
  </Container>
);

export default Recipes;
