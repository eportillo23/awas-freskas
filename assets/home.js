const homeDrinks={
  jamaica:{description:'La que parece de limón es de jamaica, pero sabe a tamarindo.',index:'01 / 03'},
  limon:{description:'La que parece de tamarindo es de limón, pero sabe a jamaica.',index:'02 / 03'},
  tamarindo:{description:'La que parece de jamaica es de tamarindo, pero sabe a limón.',index:'03 / 03'}
};
document.querySelectorAll('[data-drink]').forEach(button=>button.addEventListener('click',()=>{
  const drink=homeDrinks[button.dataset.drink];
  document.querySelectorAll('[data-drink]').forEach(item=>item.setAttribute('aria-pressed',String(item===button)));
  document.querySelector('#selected-description').textContent=drink.description;
  document.querySelector('.photoindex').textContent=drink.index;
}));
