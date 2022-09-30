import React from "react";
import ChildComponent from './ChildComponent.js'
import AddComponent from "./AddComponent.js";

class MyComponent extends React.Component {
    state ={ 
        arrJobs:[
            {id:'abcJob1', title:'Developers', salary:'500'},
            {id:'abcJob2', title:'Testers', salary:'400'},
            {id:'abcJob3', title:'Project manager', salary:'1100'},
            
        ]
    }

    
    render(){
        console.log('>>> call render:',this.state)
        return(
            <>
                <AddComponent/>
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