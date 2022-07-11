import './App.css';
import logo from "../src/images/ironhack-logo-xs.png";
import menu from './images/menu-top-xs.png';
import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
import icon4 from './images/icon4.png';

import Icons from '../src/components/icons';


function App() {
  return (
    <div >
   <header  className="header">
				<div className="headerImages">
			
					<img src={logo} alt="logo" /> 
				
					<a href="/">
						<img src={menu} alt="menu" id="imageMenu" />
					</a> 
				</div>
				<div  >
					<h1>Say hello to ReactJS</h1>
					<p>
						You will learn how to use<br /> the most popular frontend library,<br /> and become a super
						Ninja developer.
					</p> 
		
					<a  href="/">
						Awesome!
					</a> 
				</div>
			</header>

      <section >
        
        <div>
        <Icons image={icon1} title={"Declarative"} definition={"React makes it painless to create interactive UIs"}/>
        </div>
        <div>
        <Icons image={icon2} title={"Components"} definition={"Build encapsulated components that manage their state."}/>
        </div>
        <div>
        <Icons image={icon3} title={"Single-Way"} definition={"A set of immutable values are passed to the component's."}/>
        </div>
        <div>
        <Icons image={icon4} title={"JSX"} definition={"Statically-typed, designed to run on modern browsers."}/>
        </div>
      </section>


    </div>
  );
}
export default App;