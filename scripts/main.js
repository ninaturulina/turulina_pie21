// Функция для добавления блока блога на страницу
function AddBlogToPage(blog) {
  let newBlogDiv = document.createElement('div');
  newBlogDiv.classList.add('blog');

  let blogImage = document.createElement('img');
  let keys = Object.keys(images);
  blogImage.src = images[keys[keys.length * Math.random() << 0]]; 
  blogImage.alt = "Blog Image";
  blogImage.classList.add('blog-image');

  let blogContentDiv = document.createElement('div');
  blogContentDiv.classList.add('blog-content');

  let blogTitle = document.createElement('h2');
  blogTitle.classList.add('blog-title');
  blogTitle.textContent = blog['title'];
  blogTitle.alt = blog['title'];

  let blogText = document.createElement('p');
  blogText.classList.add('blog-text');
  blogText.textContent = blog['body'];
  blogText.alt = "Text " + blog['id'];


  let blogId = document.createElement('p');
  blogId.textContent = 'Eyes: ' + blog['id'];
  blogId.alt = "Your eyes";

  blogContentDiv.appendChild(blogTitle);
  blogContentDiv.appendChild(blogText);
  blogContentDiv.appendChild(blogId);

  newBlogDiv.appendChild(blogImage);
  newBlogDiv.appendChild(blogContentDiv);

  BlogsElem.appendChild(newBlogDiv);
}

// Запрос к удаленному серверу для получения JSON данных
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'GET',
}).then((response) => response.json()).then((json) => json.forEach((blog) => AddBlogToPage(blog)));