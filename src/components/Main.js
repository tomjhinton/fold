//pic size 687*687
import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'




class Main extends React.Component{
  constructor(){
    super()
    this.state = {
      data: {},
      error: ''

    }
    this.componentDidMount = this.componentDidMount.bind(this)





  }


  componentDidMount(){
    axios.get(`/api/works`)
        .then(res => this.setState({works: res.data}))
    const centerContent = document.getElementById('center-content')
    const centerFold = document.getElementById('center-fold')



    let tick = () => {
      let overflowHeight =  centerContent.offsetHeight - centerFold.offsetHeight

      document.body.style.height = overflowHeight + window.innerHeight + "px";
      let foldsContent = Array.from(document.getElementsByClassName('fold-content'))
    let scroll = -(
        document.documentElement.scrollTop || document.body.scrollTop
    );
    foldsContent.forEach((content) => {
        content.style.transform = `translateY(${scroll}px)`;
    })
    requestAnimationFrame(tick);
}
tick();

  }

  componentDidUpdate(prevProps){



  }




  render() {

    console.log(this.state)

    return (
      <div>

    <div className="screen " id="fold-effect">
      <div className="wrapper-3d">
        <div className="fold fold-top">
          <div className="fold-align">
            <div className="fold-content">
            {this.state.works && this.state.works.map(x=>{
              return(<div key={x.id}>
                <img src={`data:image/png;base64,  ${x.dat.slice(2).slice(0, -1)}`}/>
                  <h1>The intersection of art  and technology</h1>
                </div>
              )
            })}


            </div>
          </div>
        </div>
        <div className="fold fold-center" id="center-fold">
          <div className="fold-align">
            <div className="fold-content" id="center-content">
            {this.state.works && this.state.works.map(x=>{
              return(<div key={x.id}>
                <img src={`data:image/png;base64,  ${x.dat.slice(2).slice(0, -1)}`}/>
                  <h1>The intersection of art  and technology</h1>
                </div>
              )
            })}
            {!this.state.works &&   <h1>The intersection of art  and technology</h1>}

            </div>
          </div>
        </div>
        <div className="fold fold-bottom">
          <div className="fold-align">
            <div className="fold-content">
            {this.state.works && this.state.works.map(x=>{
              return(<div key={x.id}>
                <img src={`data:image/png;base64,  ${x.dat.slice(2).slice(0, -1)}`}/>
                  <h1>The intersection of art  and technology</h1>
                </div>
              )
            })}
            </div>
          </div>
        </div>
      </div>
    </div>


  </div>




    )
  }
}
export default Main
