import React from "react";

class AddComponent extends React.Component {
    
    state={
        jobTitle:'',
        salary:'',
       
    }
    handleChangeJobTitle = (e) =>{
        this.setState({jobTitle:e.target.value})
    }

    handleChangeSalary = (e) =>{
        this.setState({salary:e.target.value})
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        
        console.log('>>> check data input:',this.state)
    }
    render(){
        return(
            <div>
                <form >
                <label htmlFor="fname">Job's title:</label><br/>
                <input 
                    type="text"  
                    value={this.state.jobTitle}
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