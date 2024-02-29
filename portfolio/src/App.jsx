import './App.css';
import About from './components/about/about';
import Header from './components/header/header';
import Projects from './components/projects/projects';
import ThankYou from './components/thankyou/thankyou';

export default function App() {
   const name = 'Luke Holland';
   const descriptors = [
      'Problem-solver',
      'Collaborative',
      'Detail-oriented',
      'Results-driven',
      'Excellent communicator',
      'Software Engineer',
   ];

   return (
      <>
         <Header name={name} descriptors={descriptors} />
         <About />
         <Projects />
         <ThankYou />
      </>
   );
}
