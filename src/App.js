import {useState } from 'react'
import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'react-dom'
import player1_1 from './Images/Player1_1.png'
import player1_2 from './Images/Player1_2.png'
import player1_3 from './Images/Player1_3.png'
import background from './Images/Background.png'

function App() {

  var matrix = []
  for (let i=0;i<6;i+=1){
    matrix[i] = []
    for (let j=0;j<4;j+=1){
      matrix[i][j] = 0
    }
  }

  var matrix2 = []
  for (let i=0;i<6;i+=1){
    matrix2[i] = []
    for (let j=0;j<4;j+=1){
      matrix2[i][j] = background
    }
  }

  const [state, setCount] = useState(matrix)

  const [image, setImage] = useState(matrix2)

  const [hel, set] = useState(1)

  const handleClick = e => Increment(e.target.id)

  const handleImage = e => ImageUpdate(e.target.id)

  function ImageUpdate(id) {
    let row = parseInt(id[0])
    let col = parseInt(id[1])
    var dummyImage = image
    if (state[row][col] === 0 ){
      dummyImage[row][col] = background
    }
    else if (state[row][col] === 1 ){
      dummyImage[row][col] = player1_1
    }
    else if (state[row][col] === 2 ){
      dummyImage[row][col] = player1_2
    }
    else {
      dummyImage[row][col] = player1_3
    }
      
    setImage ( () => {return dummyImage})
  }

  function Increment(id) {
    let row = parseInt(id[0])
    let col = parseInt(id[1])
    console.log(id)
    var dummy  = state
    //console.log(dummy)
    dummy[row][col] += 1

    setCount ( () => {return dummy})
    
    set(hel + 1)
    ImageUpdate(id)
  }

  const style = {marginTop: "10px", marginBottom:"5px", width:"40px", height:"40px"}

  return (
    <div className="container-fluid">
      <nav class="navbar navbar-dark bg-dark">
        <p class="navbar-brand">
          Chain Reaction
        </p>
      </nav>
        <div className="row">
          <div className="col-3">
          <br></br><br></br><br></br><br></br><br></br><br></br>
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">Player Name</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-success">
                
                <td>Yashi</td>
              </tr>
              <tr className="bg-success">
                
                <td>Yuvraj</td>
              </tr>
              <tr className="bg-success">
                
                <td>Shrey</td>
              </tr>
              <tr className="bg-success">
                
                <td>Siddhant</td>
              </tr>
            </tbody>
          </table>
          </div>
          <div className="col-1"></div>
          <div className="col-4">
            <br></br><br></br><br></br>
            <table className="table table-dark table-bordered text-center">
                <tbody>
                    <tr >
                    <td id="00" onClick={handleClick}><img onClick={handleImage} id="00" style={style} className="mx-auto d-block" alt="."src={image[0][0]}></img></td>
                    <td id="01" onClick={handleClick}><img onClick={handleImage} id="01" style={style} className="mx-auto d-block" alt="."  src={image[0][1]}></img></td>
                    <td id="02" onClick={handleClick}><img onClick={handleImage} id="02" style={style} className="mx-auto d-block" alt="."  src={image[0][2]}></img></td>
                    <td id="03" onClick={handleClick}><img onClick={handleImage} id="03" style={style} className="mx-auto d-block" alt="." src={image[0][3]}></img></td>
                    </tr>
                    <tr >
                    <td id="10" onClick={handleClick}><img onClick={handleImage} id="10" style={style} className="mx-auto d-block" alt="." src={image[1][0]}></img></td>
                    <td id="11" onClick={handleClick}><img onClick={handleImage} id="11" style={style} className="mx-auto d-block" alt="." src={image[1][1]}></img></td>
                    <td id="12" onClick={handleClick}><img onClick={handleImage} id="12" style={style} className="mx-auto d-block" alt="." src={image[1][2]}></img></td>
                    <td id="13" onClick={handleClick}><img onClick={handleImage} id="13" style={style} className="mx-auto d-block" alt="." src={image[1][3]}></img></td>
                    </tr>
                    <tr >
                    <td id="20" onClick={handleClick}><img onClick={handleImage} id="20" style={style} className="mx-auto d-block" alt="." src={image[2][0]}></img></td>
                    <td id="21" onClick={handleClick}><img onClick={handleImage} id="21" style={style} className="mx-auto d-block" alt="." src={image[2][1]}></img></td>
                    <td id="22" onClick={handleClick}><img onClick={handleImage} id="22" style={style} className="mx-auto d-block" alt="." src={image[2][2]}></img></td>
                    <td id="23" onClick={handleClick}><img onClick={handleImage} id="23" style={style} className="mx-auto d-block" alt="." src={image[2][3]}></img></td>
                    </tr>
                    <tr >
                    <td id="30" onClick={handleClick}><img onClick={handleImage} id="30" style={style} className="mx-auto d-block" alt="." src={image[3][0]}></img></td>
                    <td id="31" onClick={handleClick}><img onClick={handleImage} id="31" style={style} className="mx-auto d-block" alt="." src={image[3][1]}></img></td>
                    <td id="32" onClick={handleClick}><img onClick={handleImage} id="32" style={style} className="mx-auto d-block" alt="." src={image[3][2]}></img></td>
                    <td id="33" onClick={handleClick}><img onClick={handleImage} id="33" style={style} className="mx-auto d-block" alt="." src={image[3][3]}></img></td>
                    </tr>
                    <tr >
                    <td id="40" onClick={handleClick}><img onClick={handleImage} id="40" style={style} className="mx-auto d-block" alt="." src={image[4][0]}></img></td>
                    <td id="41" onClick={handleClick}><img onClick={handleImage} id="41" style={style} className="mx-auto d-block" alt="." src={image[4][1]}></img></td>
                    <td id="42" onClick={handleClick}><img onClick={handleImage} id="42" style={style} className="mx-auto d-block" alt="." src={image[4][2]}></img></td>
                    <td id="43" onClick={handleClick}><img onClick={handleImage} id="43" style={style} className="mx-auto d-block" alt="." src={image[4][3]}></img></td>
                    </tr>
                    <tr >
                    <td id="50" onClick={handleClick}><img onClick={handleImage} id="50" style={style} className="mx-auto d-block" alt="." src={image[5][0]}></img></td>
                    <td id="51" onClick={handleClick}><img onClick={handleImage} id="51" style={style} className="mx-auto d-block" alt="." src={image[5][1]}></img></td>
                    <td id="52" onClick={handleClick}><img onClick={handleImage} id="52" style={style} className="mx-auto d-block" alt="." src={image[5][2]}></img></td>
                    <td id="53" onClick={handleClick}><img onClick={handleImage} id="53" style={style} className="mx-auto d-block" alt="." src={image[5][3]}></img></td>
                    </tr>    
                </tbody>
            </table>
          </div>
          <div className="col"></div>
      </div> 
    </div>
  );
}

export default App;
