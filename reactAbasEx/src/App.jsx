
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Menu from './components/Menu'

function App() {  

  return (
    <>
      <Menu/>
      <div className='container-father'>

        <div className='container-logo'>
          <h1 className='logo-title'>Vite</h1>
          <img src={viteLogo} className="logo" alt="Vite logo" />
          <p className='logo-pa'>Vite Legal</p>
        </div>
      
        <div className='container-logo'>
          <h1 className='logo-title'>React</h1>
          <img src={reactLogo} className="logo" alt="React logo" />
          <p className='logo-pa'>React Legal</p>
        </div>

        <div className='container-logo'>
          <h1 className='logo-title'>Axios</h1>
          <img src="../public/imgs/axios_logo.png" className='logo-axios' alt="Axios logo" />
          <p className='logo-pa'>Axios top de linha</p>
        </div>

        <div className='container-logo'>
          <h1 className='logo-title'>ROUTER</h1>
          <img src="../public/imgs/react-router.png" className='logo-router' alt="Router logo" />
          <p className='router-par'>REACT ROUTER top</p>
        </div>

        <div className='container-logo'>
          <h1 className='npm-title'>Npm</h1>
          <img src="../public/imgs/npm_logo.png" className='logo-npm' alt="Npm logo" />
          <p className='npm-par'>Npm top de linha</p>
        </div>

        <div className='container-logo'>
          <h1 className='logo-title'>Node</h1>
          <img src="../public/imgs/node_logopng.png"  className='logo-node' alt="Node logo" />
          <p className='logo-pa'>Node daora meu</p>
        </div>

      </div>
      
      
    </>
  );
}

export default App;
