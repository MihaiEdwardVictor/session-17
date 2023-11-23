

// Exercițiul 1: Schimbarea culorii de fundal la clic
// Creați un element HTML cu un anumit ID.
// Adăugați un eveniment de clic la acest element. 
// În funcția de tratare a evenimentului de clic, schimbați culoarea de fundal a elementului.


// const btn = document.getElementById('myButton');

// let index = 0;

// const colors = ['red','blue','green','purple'];

// btn.addEventListener('click',function onClick(){
//     btn.style.backgroundColor = colors[index];
//     btn.style.color = 'white';

//     index = index >=colors.length -1 ? 0 : index +1;
// })



// here it is the same as before but random colors instead of a cycle 

// const btn = document.getElementById('myButton');

// const colors = ['red','blue','green','purple','black','orange','yellow'];

// btn.addEventListener('click',function onClick(){
//     const randomIndex = Math.floor(Math.random()*colors.length)
//     btn.style.backgroundColor = colors[randomIndex];
//     btn.style.color = 'white';
// })



// Exercițiul 2: Adăugarea și eliminarea clasei CSS la trecerea cursorului peste un element
// Creați un element HTML cu un anumit ID.
// Adăugați un eveniment de "mouseover" (trecerea cursorului peste element) la acest element.
// În funcția de tratare a evenimentului de "mouseover", adăugați o clasă CSS la element folosind classList.add.
// Adăugați și un eveniment de "mouseout" (ieșirea cursorului din element) la același element.
// În funcția de tratare a evenimentului de "mouseout", eliminați clasa CSS folosind classList.remove.



// const btn = document.getElementById('myButton');

// btn.addEventListener('mouseover', function mouseOverButton(){
//     btn.textContent = 'Styled button'
//     btn.classList.add('styledButton')
// })
// btn.addEventListener('mouseout', function mouseOutOfButton(){
//     btn.textContent = 'Just button'
//     btn.classList.remove('styledButton')
// })



// Exercițiul 3: Schimbarea textului unui element la submiterea unui formular
// Creați un formular HTML cu un buton de submit.
// Adăugați un eveniment de "submit" la formular.
// În funcția de tratare a evenimentului de "submit", preveniți comportamentul implicit al formularului folosind event.preventDefault().
// Accesați un element din DOM folosind getElementById.
// Schimbați textul acelui element folosind textContent.



// const form = document.getElementById('myForm');
// const textChange = document.getElementById('textToChange');

// form.addEventListener('submit', function(event){
//     event.preventDefault();
//     textChange.textContent = "Thy Text Has Changed!";
// })



// Exercițiul 4: Adăugarea unui element nou la apăsarea unei taste
// Adăugați un eveniment de "keydown" (apăsarea unei taste) la document.
// În funcția de tratare a evenimentului de "keydown", verificați dacă tasta apăsată este Enter (cheia cu codul 13).
// Dacă este apăsată tasta Enter, creați un element nou folosind createElement.
// Adăugați noul element în DOM folosind appendChild.



// document.addEventListener('keydown', function(keyPress){
//     if(keyPress.code === 'Enter'){
//         const paragraph = document.createElement('p');
//         paragraph.textContent = "This is a paragraph generated with JS";
//         document.body.appendChild(paragraph);
//     }
// })



// Exercițiul 5: Eliminarea unui element la dublu clic
// Creați un element HTML cu un anumit ID.
// Adăugați un eveniment de "dblclick" (dublu clic) la acest element.
// În funcția de tratare a evenimentului de "dblclick", accesați elementul părinte folosind parentNode.
// Eliminați elementul din DOM folosind removeChild.




// const parentOfButton = document.getElementById('parentOfButton');
// const deleteButton = document.getElementById('delButton');


// deleteButton.addEventListener('dblclick', function(){
//     const removeChild = parentOfButton.removeChild(deleteButton);
// })

