import React from 'react'

const Tuesday = () => {
  const tuesday = [
    {classname: 'Boxing', time: '9:00am - 10:00am', trainer: 'Mike Tyson'  },
    {classname: 'Yoga', time: '10:00pm - 11:00pm', trainer: 'Mia Kha'  },
    {classname: 'Crossfit', time: '6:00pm - 7:00pm', trainer: 'Cristofer Columbo'  },
]
return (
<>
     
{
    tuesday.map((schedule) => {
        return(
            <>
                <div className='grid-schedule-day'>
                    <div className='container-info-schedule'>
                        <p>Classname</p>
                        <h3>{schedule.classname}</h3>
                    </div>
                    <div className='container-info-schedule'>
                        <p>Time</p>
                        <h3>{schedule.time}</h3>
                    </div>
                    <div className='container-info-schedule'>
                        <p>Trainer</p>
                        <h3>{schedule.trainer}</h3>
                    </div>
                    <div className='container-info-schedule'>
                        <button className='button-schedule'>Join Now</button>
                    </div>
                </div>
           
            </>
            
        )
    })
}       
</>
)
}

export default Tuesday