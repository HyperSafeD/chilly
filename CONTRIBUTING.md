# Contributing to Chilly 🌶️

Thank you for your interest in contributing to Chilly! This document provides guidelines and instructions for contributing to the project.

## 🤝 How to Contribute

### Reporting Bugs

If you find a bug, please open an issue with:

- A clear title and description
- Steps to reproduce the bug
- Expected vs actual behavior
- Screenshots if applicable
- Your environment (browser, OS, Node version)
nice job

### Suggesting Features

We welcome feature suggestions! Please open an issue with:

- A clear description of the feature
- Use cases and benefits
- Any mockups or examples if applicable

### Code Contributions

1. **Fork the repository**

   ```bash
   git clone https://github.com/your-username/chilly.git
   cd chilly
   ```

2. **Create a branch**

   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

3. **Make your changes**

   - Follow the existing code style
   - Write clear, descriptive commit messages
   - Add comments for complex logic
   - Update documentation if needed

4. **Test your changes**

   ```bash
   npm run dev
   # Test the functionality thoroughly
   npm run lint
   ```

5. **Commit your changes**

   ```bash
   git add .
   git commit -m "Add: descriptive commit message"
   ```

6. **Push and create a Pull Request**
   ```bash
   git push origin feature/your-feature-name
   ```

## 📝 Code Style Guidelines

### TypeScript

- Use TypeScript for all new files
- Define proper types and interfaces
- Avoid `any` types when possible
- Use meaningful variable and function names

### React Components

- Use functional components with hooks
- Keep components focused and single-purpose
- Extract reusable logic into custom hooks
- Use proper prop types with TypeScript

### Styling

- Use Tailwind CSS utility classes
- Follow the existing design system
- Ensure dark mode compatibility
- Make components responsive

### File Structure

- Place components in `components/` directory
- Group related components in subdirectories
- Keep utility functions in `lib/`
- Use descriptive file names

## 🧪 Testing

Before submitting a PR, please:

1. Test all new functionality
2. Test on different screen sizes (mobile, tablet, desktop)
3. Test dark mode
4. Test wallet connections
5. Ensure no console errors

## 📚 Documentation

- Update README.md if adding new features
- Add JSDoc comments for complex functions
- Update this CONTRIBUTING.md if needed
- Keep code comments clear and helpful

## 🎯 Areas for Contribution

We're always looking for help with:

- **Smart Contracts**: Solidity contracts for on-chain order storage
- **Testing**: Unit tests, integration tests, E2E tests
- **UI/UX**: Design improvements, accessibility
- **Documentation**: Tutorials, guides, API docs
- **Performance**: Optimization, caching strategies
- **Security**: Security audits, best practices

## 📋 Pull Request Checklist

Before submitting a PR, ensure:

- [ ] Code follows the project's style guidelines
- [ ] All tests pass (if applicable)
- [ ] No linting errors
- [ ] Documentation is updated
- [ ] Commit messages are clear and descriptive
- [ ] Changes are tested in development
- [ ] Dark mode is supported (if UI changes)

## 💬 Questions?

Feel free to:

- Open an issue for questions
- Start a discussion in GitHub Discussions
- Reach out to maintainers

## 🙏 Thank You!

Your contributions make Chilly better for everyone. We appreciate your time and effort!
