import React from "react";
import ChildComponent from './ChildComponent.js'

class MyComponent extends React.Component {
    state ={ 
        firstName:'',
        lastName:'',
        age:'',
        address:'',
        arrJobs:[
            {id:'abcJob1', title:'Developers', salary:'500'},
            {id:'abcJob2', title:'Testers', salary:'400'},
            {id:'abcJob3', title:'Project manager', salary:'1100'},
            
        ]
    }

    handleChangeFirstName = (e) =>{
        this.setState({firstName:e.target.value})
    }

    handleChangeLastName = (e) =>{
        this.setState({lastName:e.target.value})
    }
    handleChangeAge = (e) =>{
        this.setState({age:e.target.value})
    }
    handleChangeAddress = (e) =>{
        this.setState({address:e.target.value})
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        
        console.log('>>> check data input:',this.state)
    }
    
    render(){
        console.log('>>> call render:',this.state)
        return(
            <>
        
                
                <form >
                <label htmlFor="fname">First name:</label><br/>
                <input 
                    type="text"  
                    value={this.state.firstName}
                    onChange={(e) => this.handleChangeFirstName(e)}
                />
                <br/>
                <label htmlFor="lname">Last name:</label><br/>
                <input 
                    type="text"  
                    value={this.state.lastName}
                    onChange={(e) => this.handleChangeLastName(e)}
                />
                <br/>
                <label htmlFor="fname">Age:</label><br/>
                <input 
                    type="text"  
                    value={this.state.age}
                    onChange={(e) => this.handleChangeAge(e)}
                />
                <br/>
                <label htmlFor="fname">Address:</label><br/>
                <input 
                    type="text"  
                    value={this.state.address}
                    onChange={(e) => this.handleChangeAddress(e)}
                />
                <br/><br/>
                <input type="submit" value="Submit"
                    onClick ={(e)=> this.handleSubmit(e)}
                />
                </form> 
            
                <ChildComponent 
                firstName={this.state.firstName}
                lastName={this.state.lastName}
                age ={this.state.age}
                address={this.state.address}
                arrJobs ={this.state.arrJobs}
                />
            </>
        )
    }
}

export default MyComponent;