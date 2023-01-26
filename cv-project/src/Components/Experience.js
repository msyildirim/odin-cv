import { Component } from "react";
import uniqid from "uniqid";
import './Experience.css'
export default class Experience extends Component{
    constructor(){
        super();
        this.state = {
            experience: {
                position: "",
                company: "",
                from: new Date().toLocaleDateString,
                to: new Date().toLocaleDateString,
                id: uniqid()
            },
            experienceList: []
          }
      }
      handleChange = e =>{
        if(e.target.id === 'company'){
            this.setState({
                experience: {
                    position: this.state.experience.position,
                    company: e.target.value,
                    from: this.state.experience.from,
                    to: this.state.experience.to,
                    id: this.state.experience.id
                }
            })
        };
        if(e.target.id === 'position'){
            this.setState({
                experience: {
                    position: e.target.value,
                    company: this.state.experience.company,
                    from: this.state.experience.from,
                    to: this.state.experience.to,
                    id: this.state.experience.id
                }
            })
        };
        if(e.target.id === 'from'){
            this.setState({
                experience: {
                    position: this.state.experience.position,
                    company: this.state.experience.company,
                    from: e.target.value,
                    to: this.state.experience.to,
                    id: this.state.experience.id
                }
            })
        };
        if(e.target.id === 'to'){
            this.setState({
                experience: {
                    position: this.state.experience.position,
                    company: this.state.experience.company,
                    from: this.state.experience.from,
                    to: e.target.value,
                    id: this.state.experience.id
                }
            }, ()=>console.log(this.state.experience))
        };
      }
      onSubmitTask = e =>{
        e.preventDefault();
        this.setState({
            experienceList: this.state.experienceList.concat(this.state.experience)
        }, ()=>console.log(this.state.experienceList))
      }
    render(){
        return(
            <div><form onSubmit={this.onSubmitTask}>
                <input 
                    onChange={this.handleChange}
                    type='text'
                    id='company'
                    placeholder='Company'
                />
                <input 
                    onChange={this.handleChange}
                    type='text'
                    id='position'
                    placeholder='Position'
                />
                <input 
                    onChange={this.handleChange}
                    type='text'
                    id='from'
                    placeholder='from'
                />
                <input 
                    onChange={this.handleChange}
                    type='text'
                    id='to'
                    placeholder='to'
                />
                <button type="submit">Add</button>
            </form>
            <Overview experienceList =  {this.state.experienceList}/>
            </div>
        )
    }
}

class Overview extends Component {
    constructor(props){
        super(props);
    }
    render(){
        const {experienceList} = this.props
        return(
            <div>    
                {experienceList.map((experience)=>{
                    return(
                    <ul  class='experience-list'key={experience.id}>
                    <li>{experience.company}</li>
                    <li>{experience.position}</li>
                    <li>{experience.from}</li>
                    <li>{experience.to}</li>
                    </ul>
                    )
                })}             
            </div>
        )
    }
}