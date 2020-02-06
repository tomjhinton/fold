//pic size 687*687
import React from 'react'
import {Link} from 'react-router-dom'




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
    const centerContent = document.getElementById('center-content')
    const centerFold = document.getElementById('center-fold')

let overflowHeight =  centerContent.clientHeight - centerFold.clientHeight

document.body.style.height = overflowHeight + window.innerHeight + "px";
let foldsContent = Array.from(document.getElementsByClassName('fold-content'))
let tick = () => {
    let scroll = -(
        document.documentElement.scrollTop || document.body.scrollTop
    );
    foldsContent.forEach((content) => {
        content.style.transform = `translateY(${scroll/2}px)`;
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
      <div className="wrapper-3d">
	<div className="fold fold-top">
		<div className="fold-content">
			<div className="square green"></div>
			<h1>This is my content</h1>
			<div className="square blue"></div>
			<h1>This is my content</h1>
			<div className="square red"></div>
		</div>
	</div>
	<div className="fold fold-center" id="center-fold">
		<div className="fold-content" id="center-content">
			<div className="square green"></div>
			<h1>This is my content</h1>
			<div className="square blue"></div>
			<h1>This is my content</h1>
			<div className="square red"></div>
		</div>
	</div>
	<div className="fold fold-bottom">
		<div className="fold-content">
			<div className="square green"></div>
			<h1>This is my content</h1>
			<div className="square blue"></div>
			<h1>This is my content</h1>
			<div className="square red"></div>
		</div>
	</div>
</div>




    )
  }
}
export default Main
