# PokemonApp\n\nFollow README from canvas instructions.

# PokemonApp

A React Native app built with **Redux Toolkit**, **RTK Query**, and **MVVM architecture**.  
The app fetches a list of Pokémon from the [PokeAPI](https://pokeapi.co/), persists the data, and shows Pokémon details on selection.

---

## ✨ Features
- **MVVM architecture** (ViewModels as custom hooks)
- **Redux Toolkit + RTK Query** for state and data fetching
- **redux-persist** for offline caching
- **React Navigation (Stack)** for screen navigation
- **Unit tests** with Jest + React Testing Library
- **60%+ coverage threshold**
- Configurable **BASE_API_URL** via environment variables

---

## 📂 Project Structure

src/
api/ # RTK Query API
store/ # Redux store + persist
viewmodels/ # MVVM hooks for logic
views/screens/ # UI Screens
components/ # Reusable components
navigation/ # Navigation setup
App.js # Root App
tests/ # Unit tests


---

## ⚙️ Setup

1. **Clone repository**
   ```sh
   git clone https://github.com/your-org/PokemonApp.git
   cd PokemonApp
2. **Install dependencies**
   npm install
      # or
   yarn install
3. **Clone repository**
   
   Copy .env.example to .env
   Update BASE_API_URL if needed (default: https://pokeapi.co/api/v2)


🚀 Running the App

Start Metro:

 npm start

Run on Android:
 
 npm run android

Run on iOS:

 npm run ios

🧪 Testing

Run tests with coverage:
 
 npm test

**Coverage threshold is enforced at 60% (branches, functions, lines, statements).**

📖 Usage

Open the app → list of Pokémon loads.

Tap a Pokémon → navigate to detail screen showing stats and sprite.

Data is cached locally for offline usage.


🔧 Development Notes (Agile + MVVM)

Each feature/story is small and independent (List, Detail, Persistence, Tests).

ViewModels isolate logic from UI, making them easy to test.

Reusable components like PokemonListItem keep views clean.

Unit tests provided for List + Detail screens.

👨‍💻 Author

Abdul Hanan Khan

📧 ahkhan622@gmail.com