```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* The solution is to move the catch-all route to the end of the Route list */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {  return <div>Home</div>;}
function About() {  return <div>About</div>;}
function NotFound() { return <div>Not Found</div>;}
export default App;
```