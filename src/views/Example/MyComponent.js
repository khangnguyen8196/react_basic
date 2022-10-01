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

//   c1  addNewJob = (job) => {
//         this.setState({
//             arrJobs:[...this.state.arrJobs,job]
//         })
//     }
//  c2

        addNewJob = (job) => {
            let currentJobs =this.state.arrJobs;
            currentJobs.push(job);
            this.setState({
                arrJobs:currentJobs
            })
        }
        deleteAJob = (job) => {
            let currentJobs =this.state.arrJobs;
            currentJobs= currentJobs.filter(item => item.id !== job.id);
            this.setState({
                arrJobs:currentJobs
            })
        }



    
    render(){
        console.log('>>> call render:',this.state)
        return(
            <>
                <AddComponent
                    addNewJob={this.addNewJob}
                />

                <ChildComponent 
                    arrJobs ={this.state.arrJobs}
                    deleteAJob ={this.deleteAJob}
                />
            </>
        )
    }
}

export default MyComponent;