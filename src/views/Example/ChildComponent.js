import React from "react";
class ChildComponent extends React.Component {
   
    state = {
        showJobs: false,
    }
    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        });
    }
    render(){
        console.log('>>> check props:',this.props)
        let {firstName, lastName , age ,address ,arrJobs} = this.props;
        let {showJobs,} = this.state;
        let check = showJobs ===true ? 'showJobs === true ': 'showJobs === false';
        console.log('>>> check conditional:',check);

        return(
            <>
                <div>Children component: {firstName}-{lastName} - {age} - {address}</div>
                {showJobs === false ?
                <div>
                    <button onClick = {()=> {this.handleShowHide()}}>show</button>
                </div>
                
                :
                <> 
                    <div className="job-lists">
                        {arrJobs.map((item,index)=>{
                            return(
                                <div key={item.id}>
                                    {item.title} - {item.salary} $
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