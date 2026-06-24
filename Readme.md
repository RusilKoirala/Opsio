# Opsio 

It is a simple tool that allows you to manage your environment variables in a more efficient way. With Opsio, you can easily create, read, update and delete your .env files without having to manually edit them. Opsio provides a user-friendly interface that makes it easy to manage your env.

![Opsio Screenshot](/demo/screenshot.png)
## Tech Stack 

- Next.js
- TypeScript
- Tailwind CSS
- MongoDB
- Clerk 

## How it works

When you sign in to Opsio, you will be able to create a new project or select an existing one. Once you have selected a project, you will be able to view all the environment variables associated with that project. You can add new environment variables, edit existing ones or delete them as needed You can also search and filter the environment variables to quickly find what you are looking for. Additionally, you can export the environment variables to your local machine for use in your development environment.

## Folder Structure

```
opsio/
├── docs/
├── public/
│   └── demos/
├── src/
│   ├── app/
│   │   ├── (marketing)/
│   │   ├── api/
│   │   │   ├── members/
│   │   │   ├── notifications/
│   │   │   ├── projects/
│   │   │   └── users/
│   │   ├── dashboard/
│   │   ├── invite/
│   │   ├── sign-in/
│   │   └── ...
│   ├── components/
│   ├── config/
│   ├── contexts/
│   ├── hooks/
│   ├── lib/
│   ├── providers/
│   ├── schema/
│   ├── services/
│   └── types/
├── package.json
├── next.config.ts
├── tsconfig.json
└── ...
```


## Features
- Create, read, update and delete .env files
- User-friendly interface
- Search and filter environment variables
- Export environment variables to your local machine

## Getting Started
To get started with Opsio, you can follow these steps:

1. Clone the repository to your local machine

```bash
git clone https://github.com/rusilkoirala/opsio.git
```

2. Navigate to the project directory

```bash
cd opsio
```

3. Install the dependencies

```bash
npm install
```

or 

```bash
pnpm install
``` 
4. Create a .env file in the root directory and add your environment variables like .env.example

5. Run the development server

```bash
npm run dev
```

## Use of AI:

I have used AI to generate some of the code in this project. The AI has been used to generate code snippets, functions, and other parts of the codebase. However, I have reviewed and modified the generated code to ensure that it meets the requirements of the project.

## Thank you :)
