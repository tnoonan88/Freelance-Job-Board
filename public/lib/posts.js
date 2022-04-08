const newFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#postTitle').value.trim();
    const skills = document.querySelector('#requiredSkills').value.trim();
    const salary = document.querySelector('#recSalary').value.trim();
    const description = document.querySelector('#jobDescription').value.trim();
    const emEmail = document.querySelector('#employerEmail').value.trim();

  
    if (title && skills && salary && description && emEmail) {
      const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({ title, skills, salary, description, emEmail }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/posts');
      } else {
        alert('Failed to create post');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/post');
      } else {
        alert('Failed to delete post');
      }
    }
  };
  
  document
    .querySelector('.newPost')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.delete--button')
    .addEventListener('click', delButtonHandler);