# Story-Teller

A React-based web application that leverages Google's Gemini AI to generate stories. This project was created during the PanScience hackathon.

## 🚀 Features

- Interactive story generation using Gemini AI
- Modern React components
- Responsive design with Tailwind CSS
- Fast development environment with Vite

## 🛠️ Tech Stack

- [React](https://react.dev/) - A JavaScript library for building user interfaces
- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [Google Generative AI](https://ai.google.dev/) - Google's Gemini AI API
- ESLint - For code linting and maintaining code quality

## 📦 Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn package manager

## 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/DreamerAkhilesh/Story-Teller.git
   cd gemini-story-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your Gemini API key:
   ```
   VITE_GEMINI_API_KEY=your_api_key_here
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:5173`

## 📝 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview the production build locally

## 🏗️ Project Structure

```
gemini-story-app/
├── public/            # Public assets
├── src/              # Source code
│   ├── assets/       # Static assets
│   ├── App.jsx       # Main application component
│   ├── App.css       # Application styles
│   ├── main.jsx      # Entry point
│   └── index.css     # Global styles
├── .env              # Environment variables
├── index.html        # HTML entry point
├── package.json      # Project dependencies and scripts
└── vite.config.js    # Vite configuration
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

## ✨ Acknowledgments

- Thanks to Google for providing the Gemini AI API
- PanScience hackathon organizers and participants

## 🔧 Development Notes

This project uses Vite with React for optimal development experience, featuring Hot Module Replacement (HMR) and ESLint integration. The official [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) plugin is used for Fast Refresh functionality.
