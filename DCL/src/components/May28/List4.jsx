import React from "react";

function List4(){
    let students=[{name:"raj",marks:70,age:21},
                  {name:"naga",marks:54,age:17},
                  {name:"sushila",marks:62,age:32},
                  {name:"shahil",marks:81,age:20},
                  {name:"subash",marks:48,age:34}
    ]
    return(
        <>
        {
            <ol style={{paddingLeft:"20px"}}>
                 {
                    students.map((x,index)=>{
                          return <li key={index}>{x.name} - {x.marks}</li>
                        
                    })
                }
            </ol>
        }
        


         {
            <ul style={{paddingLeft:"20px"}}>
                 {
                    students.map((x,index)=>{
                         if(x.marks>60){
                             return <li key={index}>{x.name} - {x.marks}</li>
                         }
                        
                    })
                }
            </ul>
        }


        
         {
            <ol style={{paddingLeft:"20px"}}>
                 {
                    students.map((x,index)=>{
                         if(x.marks<60){
                             return <li key={index}>{x.name} - {x.marks}</li>
                         }
                        
                    })
                }
            </ol>
        }


        
         {
            <ol style={{paddingLeft:"20px"}}>
                 {
                    students.map((x,index)=>{
                         if(x.age<=30){
                             return <li key={index}>{x.name}</li>
                         }
                        
                    })
                }
            </ol>
        }

        
         {
            <ul style={{paddingLeft:"20px"}}>
                 {
                    students.map((x,index)=>{
                         if(x.age>30){
                             return <li key={index}>{x.name} : {x.age}</li>
                         }
                        
                    })
                }
            </ul>
        }

        </>
    )
}

export default List4;