// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach((oneMush) => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach((oneGreenPepper) => {
    if (state.greenPeppers) {
      oneGreenPepper.style.visibility = 'visible';
    } else {
      oneGreenPepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  const whiteSauceElement = document.getElementsByClassName('sauce');
  if (state.whiteSauce) {
    whiteSauceElement[0].classList.remove('sauce-white');
  } else {
    whiteSauceElement[0].classList.add('sauce-white');
  }
}

function renderGlutenFreeCrust() {
  const crustElement = document.getElementsByClassName('crust');

  if (state.glutenFreeCrust) {
    crustElement[0].classList.remove('crust-gluten-free');
  } else {
    crustElement[0].classList.add('crust-gluten-free');
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  //document.querySelectorAll('.btn').forEach((button) => {

  if (state.pepperoni) {
    const currentElement = document.querySelector('.btn.btn-pepperoni');
    currentElement.classList.remove('active');
  } else {
    const currentElement = document.querySelector('.btn-pepperoni');
    currentElement.classList.add('active');
  }
  if (state.greenPeppers) {
    const currentElement = document.querySelector('.btn-green-peppers');
    currentElement.classList.remove('active');
  } else {
    const currentElement = document.querySelector('.btn-green-peppers');
    currentElement.classList.add('active');
  }
  if (state.whiteSauce) {
    const currentElement = document.querySelector('.btn-sauce');
    currentElement.classList.remove('active');
  } else {
    const currentElement = document.querySelector('.btn-sauce');
    currentElement.classList.add('active');
  }
  if (state.glutenFreeCrust) {
    const currentElement = document.querySelector('.btn-crust');
    currentElement.classList.remove('active');
  } else {
    const currentElement = document.querySelector('.btn-crust');
    currentElement.classList.add('active');
  }
  if (state.mushrooms) {
    const currentElement = document.querySelector('.btn-mushrooms');
    currentElement.classList.remove('active');
  } else {
    const currentElement = document.querySelector('.btn-mushrooms');
    currentElement.classList.add('active');
  }

  /*console.log({button})
   console.log(button.classList.contains('btn-pepperoni'))
    if (state.pepperoni && button.classList.contains('btn-pepperoni')) {
      button.classList.toggle('active')
      console.log('true addccessed')
    }/* else if (!state.pepperoni && button.classList.contains('btn-pepperoni')) {
      button.classList.toggle('active')
      console.log('false accessed')
    }
    if (state.mushrooms && button.classList.contains('btn-mushrooms')) {
      button.classList.add('active')
    } else {
      button.classList.remove('active')
    }if (state.greenPeppers && button.classList.contains('btn-green-peppers')) {
      button.classList.add('active')
    } else {
      button.classList.remove('active')
    }if (state.whiteSauce && button.classList.contains('btn-sauce')) {
      button.classList.add('active')
    } else {
     button.classList.remove('active')
    }if (state.glutenFreeCrust && button.classList.contains('btn-crust')) {
      button.classList.add('active')
    } else {
      button.classList.remove('active')
    }
  });*/
}

function renderPrice() {
  let subtotal = basePrice;
  let uList = document.querySelector('aside.panel.price ul');
  uList.innerHTML = '';

  for (let ingredient in ingredients) {
    if (state[ingredient]) {
      subtotal += ingredients[ingredient].price;
      const li = document.createElement('li');
      li.innerHTML = `$${ingredients[ingredient].price} ${ingredients[ingredient].name}`;
      uList.append(li);
    }
  }
  document.querySelector('aside.panel.price strong').innerHTML = `$${subtotal}`;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document
  .querySelector('.btn.btn-pepperoni')
  .addEventListener('click', function () {
    state.pepperoni = !state.pepperoni;
    renderEverything();
  });

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document
  .querySelector('.btn.btn-mushrooms')
  .addEventListener('click', function () {
    state.mushrooms = !state.mushrooms;
    renderEverything();
  });
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document
  .querySelector('.btn.btn-green-peppers')
  .addEventListener('click', function () {
    state.greenPeppers = !state.greenPeppers;
    renderEverything();
  });
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
