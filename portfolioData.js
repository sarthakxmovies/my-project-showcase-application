export const portfolioData = [
  {
    id: 1,
    type: 'blog',
    title: 'Getting Started with React Hooks',
    description: 'Learn how to use React hooks to manage state and side effects in your functional components. This comprehensive guide covers useState, useEffect, and custom hooks.',
    content: `
      <h2>Introduction</h2>
      <p>React Hooks revolutionized the way we write React components. They allow us to use state and other React features in functional components, making our code more concise and easier to understand.</p>
      
      <h2>useState Hook</h2>
      <p>The useState hook allows us to add state to functional components. It returns an array with two elements: the current state value and a function to update it.</p>
      
      <h2>useEffect Hook</h2>
      <p>The useEffect hook lets us perform side effects in functional components. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount combined.</p>
      
      <h2>Custom Hooks</h2>
      <p>Custom hooks are JavaScript functions whose names start with "use" and that may call other hooks. They let us extract component logic into reusable functions.</p>
    `,
    date: '2024-03-15',
    author: 'John Doe',
    tags: ['react', 'javascript', 'hooks'],
    readTime: '5 min read'
  },
  {
    id: 2,
    type: 'project',
    title: 'E-commerce Dashboard',
    description: 'A modern dashboard for e-commerce management built with React and TypeScript. Features include real-time analytics, inventory management, and order tracking.',
    content: `
      <h2>Project Overview</h2>
      <p>This e-commerce dashboard is a comprehensive solution for managing online stores. Built with React and TypeScript, it provides a modern and intuitive interface for business owners.</p>
      
      <h2>Key Features</h2>
      <ul>
        <li>Real-time sales analytics</li>
        <li>Inventory management system</li>
        <li>Order tracking and management</li>
        <li>Customer relationship management</li>
        <li>Responsive design for mobile and desktop</li>
      </ul>
      
      <h2>Technologies Used</h2>
      <p>React, TypeScript, Chart.js, Tailwind CSS, Node.js, Express, MongoDB</p>
    `,
    date: '2024-03-10',
    author: 'John Doe',
    tags: ['react', 'typescript', 'dashboard'],
    readTime: 'Live Demo'
  },
  {
    id: 3,
    type: 'blog',
    title: 'CSS Grid vs Flexbox: When to Use What',
    description: 'A detailed comparison between CSS Grid and Flexbox, helping you understand when to use each layout method for optimal results in your web projects.',
    content: `
      <h2>Understanding Layout Methods</h2>
      <p>CSS Grid and Flexbox are both powerful layout systems, but they serve different purposes and excel in different scenarios.</p>
      
      <h2>When to Use Flexbox</h2>
      <p>Flexbox is ideal for one-dimensional layouts. Use it when you need to align items in a single row or column, distribute space, or center content.</p>
      
      <h2>When to Use CSS Grid</h2>
      <p>CSS Grid is perfect for two-dimensional layouts. Use it when you need to create complex layouts with both rows and columns.</p>
      
      <h2>Combining Both</h2>
      <p>The best approach is often to use both together. Use Grid for the overall page layout and Flexbox for component-level alignment.</p>
    `,
    date: '2024-03-08',
    author: 'Jane Smith',
    tags: ['css', 'layout', 'flexbox', 'grid'],
    readTime: '8 min read'
  },
  {
    id: 4,
    type: 'project',
    title: 'Weather App with Geolocation',
    description: 'A responsive weather application that uses geolocation to provide current weather and 5-day forecasts. Built with vanilla JavaScript and OpenWeather API.',
    content: `
      <h2>Project Description</h2>
      <p>This weather application automatically detects your location and provides detailed weather information including current conditions and a 5-day forecast.</p>
      
      <h2>Features</h2>
      <ul>
        <li>Automatic location detection</li>
        <li>Current weather conditions</li>
        <li>5-day weather forecast</li>
        <li>City search functionality</li>
        <li>Responsive design</li>
        <li>Dark/light mode toggle</li>
      </ul>
      
      <h2>Technical Implementation</h2>
      <p>The app uses the Geolocation API to get the user's coordinates and the OpenWeather API to fetch weather data. It's built with vanilla JavaScript and CSS for a lightweight experience.</p>
    `,
    date: '2024-03-05',
    author: 'John Doe',
    tags: ['javascript', 'api', 'weather'],
    readTime: 'Demo Available'
  },
  {
    id: 5,
    type: 'blog',
    title: 'Modern JavaScript ES2023 Features',
    description: 'Explore the latest features introduced in ES2023, including Array.findLast(), top-level await improvements, and other exciting additions to JavaScript.',
    content: `
      <h2>What's New in ES2023</h2>
      <p>ES2023 brings several exciting features that enhance JavaScript's capabilities and developer experience.</p>
      
      <h2>Array.findLast() and Array.findLastIndex()</h2>
      <p>These new methods allow you to find elements from the end of an array, providing more flexibility in array operations.</p>
      
      <h2>Hashbang Comments</h2>
      <p>JavaScript now officially supports hashbang comments for better compatibility with shell environments.</p>
      
      <h2>Symbols as WeakMap Keys</h2>
      <p>WeakMaps now accept Symbols as keys, expanding the use cases for this collection type.</p>
    `,
    date: '2024-03-01',
    author: 'Alex Johnson',
    tags: ['javascript', 'es2023', 'features'],
    readTime: '6 min read'
  },
  {
    id: 6,
    type: 'project',
    title: 'Task Management App',
    description: 'A full-featured task management application with drag-and-drop functionality, team collaboration, and real-time updates built with React and Firebase.',
    content: `
      <h2>Project Overview</h2>
      <p>This task management application helps teams organize their work efficiently with intuitive drag-and-drop interfaces and real-time collaboration features.</p>
      
      <h2>Key Features</h2>
      <ul>
        <li>Drag-and-drop task organization</li>
        <li>Real-time collaboration</li>
        <li>Team member management</li>
        <li>Project timelines and deadlines</li>
        <li>File attachments and comments</li>
        <li>Progress tracking and reporting</li>
      </ul>
      
      <h2>Tech Stack</h2>
      <p>Built with React, Firebase for real-time data, React Beautiful DnD for drag-and-drop, and Material-UI for the component library.</p>
    `,
    date: '2024-02-28',
    author: 'John Doe',
    tags: ['react', 'firebase', 'collaboration'],
    readTime: 'Try Demo'
  }
];