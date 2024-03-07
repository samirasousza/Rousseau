import React from 'react'
import CardAlerts from './CardAlerts'


function Alerts(props) {
  return (
        <div className='alerts'>
            <CardAlerts sala={props.sala} setor={props.setor} predio={props.predio} />
        </div>
  )
}

export default Alerts