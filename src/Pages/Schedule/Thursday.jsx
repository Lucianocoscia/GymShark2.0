import React from 'react'

const Thursday = () => {
  const thursday = [
    {classname: 'Musculacion', time: '9:00am - 10:00am', trainer: 'David Vila'  },
    {classname: 'Calistenia', time: '10:00pm - 11:00pm', trainer: 'John Weights'  },
    {classname: 'JuJitSu', time: '6:00pm - 7:00pm', trainer: 'Junifor Jonas'  },
    {classname: 'G.A.P', time: '9:00am - 10:00am', trainer: 'Robert Louis'  },
]
return (
<>
     
{
    thursday.map((schedule) => {
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

export default Thursday