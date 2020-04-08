import React, {Component} from 'react';
import '../App.css';
import FullCalender from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

export default class EventCalendar extends Component{

    render(){
        return(
            <FullCalender 
            defaultView="dayGridMonth" 
            plugins={[ dayGridPlugin ]}
            weekends={true}
            events={[
                { title: 'event 1', date: '2020-04-08' },
                { title: 'event 2', date: '2020-04-09' }
              ]}
            />
        )
    }

}