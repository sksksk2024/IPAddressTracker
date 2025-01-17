import img1 from './images/icon-location.svg';
import { Header } from './components/Header';

function App() {
  return (
    <>
      <main>
        <Header />
        <img src={img1} alt="" />
      </main>
    </>
  );
}

export default App;
