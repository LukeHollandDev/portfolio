import './App.css';
import About from './components/about/about';
import CreatedUsing from './components/createdusing/createdusing';
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
   const languages = ['React', 'TypeScript', 'TailwindCSS', 'FontAwesome'];

   return (
      <>
         <Header name={name} descriptors={descriptors} />
         <About />
         <Projects />
         <ThankYou />
         <CreatedUsing languages={languages} />
         <br />
      </>
   );
}
