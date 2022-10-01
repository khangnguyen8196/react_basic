import React from "react";

class AddComponent extends React.Component {
    
    state={
        title:'',
        salary:'',
       
    }
    handleChangeJobTitle = (e) =>{
        this.setState({title:e.target.value})
    }

    handleChangeSalary = (e) =>{
        this.setState({salary:e.target.value})
    }

    handleSubmit = (e) =>{
        e.preventDefault() 
        if(!this.state.title || !this.state.salary){
            alert("Missing required parameters")
            return;
        }
        console.log('>>> check data input:',this.state)
        this.props.addNewJob({
            id:Math.floor(Math.random()*10),
            title:this.state.title,
            salary:this.state.salary
        
        })
        this.setState({
            title:'',
            salary:''
        })
    }
    render(){
        return(
            <div>
                <form >
                <label htmlFor="fname">Job's title:</label><br/>
                <input 
                    type="text"  
                    value={this.state.title}
                    onChange={(e) => this.handleChangeJobTitle(e)}
                />
                <br/>
                <label htmlFor="lname">Salary:</label><br/>
                <input 
                    type="text"  
                    value={this.state.salary}
                    onChange={(e) => this.handleChangeSalary(e)}
                />
                <br/><br/>
                <input type="submit" value="Submit"
                    onClick ={(e)=> this.handleSubmit(e)}
                />
                </form> 
            </div>
        )
    }

}
export default AddComponent;