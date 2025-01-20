# Blog Website Project

This is a simple **Blog Website** built using **Node.js**, **Express.js**, and **EJS**. The project allows users to write and post blogs, view a list of all posted blogs, and read individual blog posts. It also includes an **About Us** page and a **Contact Us** page.

---

## Features

1. **Home Page**:
   - Displays an introduction to the blog.
   - Lists all the blog posts with a "Read More" button for each.

2. **Compose Page**:
   - Allows users to write and publish new blog posts.
   - Posts include a title and body content.

3. **Dynamic Blog Posts**:
   - Each blog post is accessible via a unique URL generated from the post title.

4. **About Us Page**:
   - Provides details about the website and the developer.

5. **Contact Us Page**:
   - Offers a form for users to reach out to the developer.

---

## Technologies Used

- **Backend**: Node.js, Express.js
- **Templating**: EJS
- **CSS & Static Files**: Public directory for custom styles and assets
- **Utility**: Lodash for string manipulation

---

## Project Structure

```
├── public
│   ├── css
│   │   └── styles.css
├── views
│   ├── index.ejs
│   ├── compose.ejs
│   ├── about.ejs
│   ├── contact.ejs
│   └── post.ejs
├── app.js
└── package.json
```

- **`app.js`**: The main server file.
- **`views/`**: Contains EJS templates for rendering the pages.
- **`public/`**: Contains static assets like CSS files.

---

## Routes

### 1. **Home (`/`)**
- Displays the homepage with all blog posts and an introduction.
- Shows a "Read More" link for each blog post.

### 2. **Compose (`/compose`)**
- Form to create a new blog post.
- Posts are stored in memory (as an array of objects).

### 3. **About Us (`/about`)**
- Displays information about the website and developer.

### 4. **Contact Us (`/contact`)**
- Provides a contact form (currently non-functional).

### 5. **Individual Blog Post (`/posts/:postName`)**
- Displays the full content of a blog post.
- Matches the blog title dynamically with the URL parameter.

---

## Installation

### 1. **Clone the Repository**
```bash
git clone <repository_url>
cd <repository_name>
```

### 2. **Install Dependencies**
```bash
npm install
```

### 3. **Start the Server**
```bash
node app.js
```

### 4. **Access the Application**
Open your browser and go to: [http://localhost:3000](http://localhost:3000)

---

## Usage

1. Navigate to the **Home** page to view blog posts.
2. Click the **Compose** button to add a new blog post.
3. Access individual posts via dynamic URLs by clicking **Read More**.
4. Learn more about the site from the **About Us** page.
5. Use the **Contact Us** page to reach out to the developer.

---

## Future Enhancements

2. **User Authentication**:
   - Allow users to log in and manage their own posts.
3. **Enhanced UI**:
   - Improve design using modern CSS frameworks like Bootstrap or Tailwind CSS.
4. **Contact Form Functionality**:
   - Implement email-sending capabilities using Nodemailer or a similar library.

---

## Contributing

1. Fork the repository.
2. Create a new branch for your feature.
3. Submit a pull request for review.

---

Enjoy blogging! 😊
