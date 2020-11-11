import React, { Component } from 'react'
import Result from './Result'
  
class Game extends Component{ 
  
	static defaultProps = {secret : Math.floor(Math.random() * 100) + 1} 
	  
	constructor(props){
		super(props)
		this.state = { term : '' } 
		this.handleChange = this.handleChange.bind(this)
	} 
	  
	handleChange(event){ 
		this.setState({ 
		[event.target.name] : event.target.value 
		}) 
	} 
	  
	render(){ 
		return ( 
			<div> 
				<div> 
					<p>Vel neatjaunina minamo skaitli kad atminets (F5 lai atj.).</p>
					<label htmlFor='term'> 
						<p>Mini skaitli no 1 lidz 100</p>
					</label> 
				</div> 
				<input 
					id='term' 
					type='text' 
					name='term' 
					value={this.state.term}  
					onChange={this.handleChange}  
				/> 
		
				<Result term={this.state.term} secretNum={this.props.secret} /> 
			</div> 
		) 
	} 
} 
export default Game