
import './App.css';
import Bio from './Profile/Component/bio';
import FullName from './Profile/Component/FullName';
// import HandleName from './Profile/ProfileComponent/Handlename';
import Profession from './Profile/Component/professional';
import PropTypes from 'prop-types';
import img from './Profile/Component/img';
import Photo from './Profile/Component/img';

function App() {
    function handleClick() {
      alert("JLION wears");
    };
    
   
  return (
    <div className="App">
      <div className='App1'>
       <Photo img ={img} >
        <p className='name'>
          <strong >JlionWears Luxury Hoodie.</strong>
        </p>
      </Photo >
      </div >
      
      <div className='Texts'>
      <FullName fullname = " Olayinka Seun."/>
      <Bio bio = " Ceo of JlionWears."/>
      <Profession prof = " I am a Learning Developer."/>
      </div>

      
     
      
    
    <button className='btn' onClick={handleClick}>
      Click me
    </button>

    </div>
    
  );
}

FullName.defaultProps = {
  fullname: "JUNIOR SEUN"
};
FullName.propTypes = {
  fullname: PropTypes.string
}

Bio.defaultProps = {
  bio: ""
}
Bio.propTypes = {
  bio: PropTypes.string
}

Profession.defaultProps={
  prof: "A Researcher and a Professor"
}
Profession.propTypes = {
  prof: PropTypes.string
}

export default App;
