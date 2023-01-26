import {Component} from 'react';

export class GeneralInfo extends Component{

    
    render(){
        return(
            <div>GeneralInfo</div>
        )
    }
}

export class Education extends Component{


    render(){
        return(
            <div>Education {this.props.school}</div>
        )
    }
}

export class Experience extends Component{
    constructor(){
        super();
        this.state = {
            experience: {
                position: "",
                company: "",
                from: new Date(),
                to: new Date()
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
                    to: this.state.experience.to
                }
            })
        };
        if(e.target.id === 'position'){
            this.setState({
                experience: {
                    position: e.target.value,
                    company: this.state.experience.company,
                    from: this.state.experience.from,
                    to: this.state.experience.to
                }
            })
        };
        if(e.target.id === 'from'){
            this.setState({
                experience: {
                    position: this.state.experience.position,
                    company: this.state.experience.company,
                    from: e.target.value,
                    to: this.state.experience.to
                }
            })
        };
        if(e.target.id === 'to'){
            this.setState({
                experience: {
                    position: this.state.experience.position,
                    company: this.state.experience.company,
                    from: this.state.experience.from,
                    to: e.target.value
                }
            }, ()=>console.log(this.state.experience))
        };
      }
      onSubmitTask = e =>{
        e.preventDefault();
        this.experienceList = this.experienceList.concat(this.state.company);
        alert(this.state.experienceList)
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
            </form></div>
        )
    }
}
