import React from "react";
import './ChildComponent.scss';
class ChildComponent extends React.Component {
   
    state = {
        showJobs: false,
    }
    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        });
    }
    handleDeleteJob = (job) => {
        console.log('>>> deleteJob:',job)
        this.props.deleteAJob(job);
    }

    handleDeleteAll = () => {
        console.log('>>> deleteAll:',)
    }
    render(){
        console.log('>>> check props:',this.props)
        let {arrJobs} = this.props;
        let {showJobs,} = this.state;
        let check = showJobs ===true ? 'showJobs === true ': 'showJobs === false';
        console.log('>>> check conditional:',check);

        return(
            <>
                {showJobs === false ?
                <div>
                    <button className={'btn-show'} onClick = {()=> {this.handleShowHide()}}>show</button>
                </div>
                
                :
                <> 
                    <div className="job-lists">
                        {arrJobs.map((item,index)=>{
                            return(
                                <div key={item.id}>
                                    {item.title} - {item.salary}
                                    <span className={'btn-delete-job'} onClick={()=> this.handleDeleteJob(item)}>&times;</span>
                                </div>
                            )
                        })}
                    
                    </div>
                    <div>
                        <button onClick = {()=> {this.handleShowHide()}}>hide</button>
                    </div>
                </>
                }

            </>
        )
    }
}

export default ChildComponent;