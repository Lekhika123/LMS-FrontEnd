# LMS-frontend
### Steps to set up a plain vite project

1. Open vs code and navigate to directory (where project is to be created)

2. Open terminal and create vite project using

```
npm create vite@latest

```

3. Select project name, Package name, framework and variant

4. Run following commands

```
  cd LMS-Frontend
  npm install
  npm run dev

```

Vite Project set up DONE!

### Setup instructions for tailwind
1. Install tailwindcss

```
   npm install -D tailwindcss
```
2. Create tailwind config file

```
    npx tailwindcss init
```
3. Add file extension to tailwind config file in content block

```
    "./src/**/*.{html,js,jsx,ts,tsx}"
```
4. Add Tailwind diectives to index.css

```
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
```