import React from "react";
class ChildComponent extends React.Component {
   
    
    render(){
    console.log('>>> check props:',this.props)
    let {firstName, lastName , age ,address ,arrJobs} = this.props;

        return(
            <>
            <div>Children component: {firstName}-{lastName} - {age} - {address}</div>
            <div>
                {arrJobs.map((item,index)=>{
                    return(
                        <div key={item.id}>
                            {item.title} - {item.salary}
                        </div>
                    )
                })}
            </div>
            </>
        )
    }
}

export default ChildComponent;