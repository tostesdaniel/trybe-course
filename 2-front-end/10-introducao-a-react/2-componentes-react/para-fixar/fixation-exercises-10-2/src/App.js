import staringcat from './staringcat.jpg';
import Image from './Image';

function App() {
  return (
    <main>
      <Image source={staringcat} alternativeText="Cute cat staring" />
    </main>
  );
}

export default App;