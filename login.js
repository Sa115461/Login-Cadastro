function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  auth.signInWithEmailAndPassword(email, password)
      .then(function(userCredential) {
          displayFeedback('O login foi realizado com sucesso!');
      })
      .catch(function(error) {
          displayFeedback('Erro ao logar usuário: ' + error.message, true);
      });
}

document.getElementById('loginButton').addEventListener('click', login);

function register() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
      validateEmail(email);
      validatePassword(password);
      auth.createUserWithEmailAndPassword(email, password)
          .then(function(userCredential) {
              const user = userCredential.user;
              const user_data = {
                  email: email,
                  registration_time: new Date().toString(),
              };
              database.ref('users/' + user.uid).set(user_data);
              displayFeedback('Usuário criado com sucesso!');
          })
          .catch(function(error) {
              displayFeedback('Erro ao cadastrar usuário: ' + error.message, true);
          });
  } catch (error) {
      displayFeedback(error.message, true);
  }
}

document.getElementById('registerButton').addEventListener('click', register);

function displayFeedback(message, isError = false) {
  const feedbackContainer = document.getElementById('feedback');
  feedbackContainer.style.color = isError ? 'red' : 'green';
  feedbackContainer.innerText = message;
}

function validateEmail(email) {
  const expression = /^[^@]+@\w+(\.\w+)+\w$/;
  if (!expression.test(email)) {
      throw new Error('Email inválido.');
  }
}

function validatePassword(password) {
  if (password.length < 6) {
      throw new Error('A senha deve ter no mínimo 6 caracteres.');
  }
  if (password.length > 10) {
      throw new Error('A senha deve ter no máximo 10 caracteres.');
  }
  if (!/[a-zA-Z]/.test(password)) {
      throw new Error('A senha deve conter pelo menos uma letra.');
  }
  if (!/\d/.test(password)) {
      throw new Error('A senha deve conter pelo menos um número.');
  }
}
