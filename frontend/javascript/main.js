//for login form
document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');
    try {
      const response = await fetch('/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (!response.ok) {
        throw new Error('Login failed');
      }
      const data = await response.json();
      console.log('Login successful:', data);
    } catch (error) {
      console.error('Error:', error.message);
    }
  });
  

  //for registration form submission
  document.getElementById('registerForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const firstname = formData.get('firstname');
    const lastname = formData.get('lastname');
    const email = formData.get('email');
    const password = formData.get('password');
    try {
      const response = await fetch('/register', {
        method: 'POST',
        body: JSON.stringify({ firstname, lastname, email, password }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (!response.ok) {
        throw new Error('Registration failed');
      }
      const data = await response.json();
      console.log('Registration successful:', data);
    } catch (error) {
      console.error('Error:', error.message);
    }
  });

  //js for character addiftion form

  document.getElementById('addcharform').addEventListener('submit',async (event)=>{
    event.preventDefault();
    const formData = new FormData(event.target);
    const id = formData.get('id');
    const active = formData.get('active');
    const name = formData.get('name');
    const subtitle = formData.get('subtitle');
    const description = formData.get('description');
    const image = formData.get('image');
    const strength = formData.get('strength');
    const speed = formData.get('speed');
    const skill = formData.get('skill');
    const fear_factor = formData.get('fear_factor')
    const power = formData.get('power');
    const intelligence = formData.get('intelligence');
    const wealth = formData.get('wealth');

    const character = {
        id,
        active,
        name,
        subtitle,
        description,
        image,
        strength,
        speed,
        skill,
        fear_factor,
        power,
        intelligence,
        wealth,
    };
    try {
      const response = await fetch('/addchar', {
        method: 'POST',
        body: JSON.stringify(character),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (!response.ok) {
        throw new Error('character creation failed');
      }
      const data = await response.json();
      alert(data.message);
      console.log('Registration successful:', data);
    } catch (error) {
      console.error('Error:', error.message);
    }
  });
  