let form = document.getElementById('formFill');
let container = document.getElementById('formDiv');
let count = 0;
let totalCount = document.getElementById('count')

form.addEventListener('submit', function(e) {
   e.preventDefault();
   let inputName = document.getElementById('name');
   let nameValue = inputName.value;

   let inputEmail = document.getElementById('email');
   let emailValue = inputEmail.value
   let emailRegex = /^[A-Za-z\d]+(?:[.+-][a-zA-Z\d]+)*@[a-zA-Z\d]+\.[a-zA-Z0-9]{2,}$/;
    

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
   }else if(!emailRegex.test(emailValue.trim())) {
      alert('Invalid Email ❌');
   } else if(emailValue) {
      alert('Successfully Submitted ✅ ')
      container.append(para);
      inputName.value = '';
      inputEmail.value = ''; 
      inputAge.value = '';
      count++;
      totalCount.textContent = 'Total Entries: ' + count;
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

     let editEmailRegex = /^[A-Za-z\d]+(?:[.+-][a-zA-Z\d]+)*@[a-zA-Z\d]+\.[a-zA-Z0-9]{2,}$/;

     let newName = prompt('Enter new name: ', span.textContent.split(', ')[0].split(': ')[1]);
     let newEmail = prompt('Enter new email: ', span.textContent.split(', ')[1].split(': ')[1]);
     let newAge = prompt('Enter new age: ', span.textContent.split(', ')[2].split(': ')[1])

     if(!editEmailRegex.test(newEmail)) {
         alert('Invalid Email Id');
         return;
      }
     if(newName && newEmail && newAge) {
      newName = newName.trim();
      newEmail = newEmail.trim();
      newAge = newAge.trim();
      if(newName && newEmail && newAge) {
          span.textContent = 'Name: ' + newName + ', Email: ' + newEmail + ', Age: ' + newAge;
      }
     }
    };
});