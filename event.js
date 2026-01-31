let form = document.getElementById('formFill');
let container = document.getElementById('formDiv');
let count = 0;
let totalCount = document.getElementById('count')

form.addEventListener('submit', function(e) {
   e.preventDefault();
   let inputName = document.getElementById('name');
   let nameValue = inputName.value;

   let inputEmail = document.getElementById('email');
   let emailValue = inputEmail.value;

   let inputAge = document.getElementById('age');
   let ageValue = inputAge.value;

   let para = document.createElement('p');

   let deleteBtn = document.createElement('button');
   deleteBtn.textContent = 'Delete';
   deleteBtn.classList.add('delete-btn');

   let editBtn = document.createElement('button');
   editBtn.textContent = 'Edit';
   editBtn.classList.add('edit-btn');

   let textSpan = document.createElement('span');
   textSpan.textContent = 'Name: ' + nameValue + ', Email: ' + emailValue + ', Age: ' + ageValue;

   if(!nameValue) {
      alert('Enter the name');
   } else if(!emailValue) {
      alert('Enter the email');
   } else {
      container.append(para);
      inputName.value = '';
      inputEmail.value = ''; 
      inputAge.value = '';
      count++;
      totalCount.textContent = 'Total Entries: ' + count
      para.append(deleteBtn);
      para.append(editBtn);
      para.append(textSpan);
   };
});

container.addEventListener('click', function(e) {
    if(e.target.classList.contains('delete-btn') && confirm('Are you sure?')) { 
      e.target.parentElement.remove();
      count--;
      totalCount.textContent = 'Total Entries: ' + count
    };

    if(e.target.classList.contains('edit-btn')) {
     let span = e.target.parentElement.querySelector('span');

     let newName = prompt('Enter new name: ', span.textContent.split(', ')[0].split(': ')[1]);
     let newEmail = prompt('Enter new email: ', span.textContent.split(', ')[1].split(': ')[1]);
     let newAge = prompt('Enter new age: ', span.textContent.split(', ')[2].split(': ')[1])

     if(newName && newEmail && newAge) {
      newName = newName.trim();
      newEmail = newEmail.trim();
      newAge = newAge.trim();
      if(newName && newEmail) {
          span.textContent = 'Name: ' + newName + ', Email: ' + newEmail + ', Age: ' + newAge;
      }
     }
    };
});