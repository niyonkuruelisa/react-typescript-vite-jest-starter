# React TypeScript Vite Starter

A modern, feature-rich starter template for building React applications with TypeScript, Vite, TailwindCSS, and Jest.

## Features

- ⚡️ [Vite](https://vitejs.dev/) - Lightning fast build tool
- ⚛️ [React 18](https://react.dev/) - A JavaScript library for building user interfaces
- 🔷 [TypeScript](https://www.typescriptlang.org/) - JavaScript with syntax for types
- 🎨 [TailwindCSS](https://tailwindcss.com/) - A utility-first CSS framework
- ✅ [Jest](https://jestjs.io/) - Testing Framework with React Testing Library
- 📝 [ESLint](https://eslint.org/) - Pluggable JavaScript linter
- 🎯 Modern folder structure with feature-based organization

## Prerequisites

- Node.js (version 18.0.0 or higher)
- npm or yarn or pnpm

## Getting Started

1. Clone this repository:
```bash
git clone [your-repo-url]
cd react-typescript-vite-jest-starter
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Your app should now be running on http://localhost:3000

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Creates an optimized production build
- `npm run preview` - Preview the production build locally
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── common/         # Common/shared components
│   ├── features/       # Feature-specific components
│   └── layout/         # Layout components
├── hooks/              # Custom React hooks
│   ├── common/         # Common/shared hooks
│   └── feature-specific/ # Feature-specific hooks
├── pages/              # Application pages/routes
├── types/              # TypeScript type definitions
│   ├── api/           # API related types
│   ├── common/        # Common types
│   └── models/        # Data model types
├── utils/              # Utility functions
│   ├── api/           # API utilities
│   ├── formatters/    # Data formatters
│   └── validators/    # Validation utilities
├── constants/          # Application constants
├── contexts/          # React contexts
├── services/          # Service layer
└── tests/             # Test files
    ├── __mocks__/     # Test mocks
    └── setup.ts       # Test setup
```

## Configuration Files

- `vite.config.ts` - Vite configuration
- `tsconfig.json` - TypeScript configuration
- `jest.config.ts` - Jest configuration
- `tailwind.config.js` - TailwindCSS configuration
- `eslint.config.js` - ESLint configuration
- `postcss.config.js` - PostCSS configuration

## Testing

This project uses Jest with React Testing Library for testing. Tests are located in the `src/tests` directory. Run tests with:

```bash
npm run test
```

## Code Quality

- ESLint is configured for code linting
- TypeScript strict mode is enabled
- Jest coverage thresholds are set to 80%
- Directory structure enforces separation of concerns

## Performance Optimization

- Vite's built-in optimizations
- React.lazy and Suspense ready for code-splitting
- Production build minification with Terser
- Source maps enabled for debugging

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).
