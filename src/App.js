// 1. Create the context.
// 2. Context have a provider.
    // Wrap the components that you want to allow access
    // the context data inside the provider

// 3. Pass the values you want to share in the context, as the value
    // prop to the context provider

// 4. Actually use the data from context somewhere.
    // Use the  "useContext" hook for this

import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import UserContexProvider from './context/userContext';


function App() {
  return ( 
    <UserContexProvider randomProp='randomData'>
      <div className="App" style={{ boxSizing: 'border-box' }}>
        <Header />
        <Footer />
      </div>
    </UserContexProvider>
  );
}

export default App;
