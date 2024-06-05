import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const events = [
    {
        title: 'Meeting',
        start: new Date(),
        end: new Date(),
    },
    // Add more events here
];

const Calendar = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">Calendar</h1>
            <BigCalendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
            />
        </div>
    );
};

export default Calendar;
