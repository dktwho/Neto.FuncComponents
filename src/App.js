import './App.css';
import { ShopItemFunc } from './Components/ShopItemFunc';


function App(props) {
  
  return (
    
    
    <div className="container">
      <div className="background-element">
      </div>
      <div className="highlight-window">
        <div className='highlight-overlay'></div>
      </div>
      <div className="window">
        <ShopItemFunc item={props} />
        
      </div>
    </div>
  )
}

export default App;
