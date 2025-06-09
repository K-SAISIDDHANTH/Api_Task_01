import '../Cards.css'
import Popup from 'reactjs-popup'
function Cards({ data }) {

  return (
    <Popup trigger={<button className="cardcomp">
      <div className="maincard">
        <div className="img" >
          <img src="https://th.bing.com/th/id/OIP.7BSdgl7f0znwH8JGQYisGgHaE4?rs=1&pid=ImgDetMain" alt="" />
        </div>
        <div>
          <h4>
            Name:{data.attributes.name}
          </h4>
        </div>
        <div>
          <h4>description:</h4>  <p className="desc" >{data.attributes.description}</p>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ paddingRight: "20px" }}>
            <h4>
              MinAge:{data.attributes.life.min}
            </h4>
          </div>
          <div>
            <h4>
              MaxAge:{data.attributes.life.max}
            </h4>
          </div>
        </div>
      </div>
    </button>}
      modal
      position="center center">
      {(close)=>(
      <div className="maincard Popup">
        <div className="nav-bar">
          <button className="btns" onClick={close} >x</button></div>
        <div className="image">
          <img src="https://th.bing.com/th/id/OIP.7BSdgl7f0znwH8JGQYisGgHaE4?rs=1&pid=ImgDetMain" alt="" />
        </div>
        <h3>Name:{data.attributes.name}</h3>
        <h4>Description:</h4><p>{data.attributes.description}</p>
        <div className="age">
          <div className="a"><p>MinAge:{data.attributes.life.min}</p></div>
          <div className="a"><p>MaxAge:{data.attributes.life.max}</p></div>
        </div>
      </div>
)}
    </Popup>
      
  )
}

export default Cards;