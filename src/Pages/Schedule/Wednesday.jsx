import React from 'react'

const Wednesday = () => {
  const wednesday = [
    {classname: 'Spinning', time: '9:00am - 10:00am', trainer: 'Mario Vreco'  },
    {classname: 'Funcional', time: '10:00pm - 11:00pm', trainer: 'John Weights'  },
    {classname: 'Zumba', time: '6:00pm - 7:00pm', trainer: 'Tom Rizzly'  },
    {classname: 'Yoga', time: '9:00am - 10:00am', trainer: 'Michael Jonson'  },
]
return (
<>
     
{
    wednesday.map((schedule) => {
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

export default Wednesday