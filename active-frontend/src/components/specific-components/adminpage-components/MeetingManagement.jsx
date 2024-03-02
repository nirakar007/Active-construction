import React, { useEffect, useState } from 'react';

function MeetingManagement() {
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    // Fetch meetings from the backend
    const fetchMeetings = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/meetings');

        if (response.ok) {
          const data = await response.json();
          setMeetings(data);
        } else {
          console.error('Failed to fetch meetings');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchMeetings();
  }, []); // Empty dependency array ensures the effect runs once on component mount

  const handleCheckboxChange = async (meetingId) => {
    try {
      // Find the meeting with the given id
      const updatedMeetings = meetings.map((meeting) =>
        meeting.id === meetingId ? { ...meeting, done: !meeting.done } : meeting
      );

      // Update state optimistically
      setMeetings(updatedMeetings);

      // Make a request to update the backend
      const response = await fetch(`http://localhost:8080/api/meetings/${meetingId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ done: !updatedMeetings.find((meeting) => meeting.id === meetingId).done }),
      });

      if (!response.ok) {
        console.error('Failed to update meeting status');
        // Revert state if the backend update fails
        setMeetings((prevMeetings) =>
          prevMeetings.map((meeting) =>
            meeting.id === meetingId ? { ...meeting, done: !meeting.done } : meeting
          )
        );
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="">
      <h2 className="text-2xl font-jost mb-4">Meeting Management</h2>
      {meetings.length === 0 ? (
        <p>No meetings scheduled.</p>
      ) : (
        <ul>
          {meetings.map((meeting) => (
            <li key={meeting.id}>
              <p>Date: {meeting.date}</p>
              <p>Time: {meeting.time}</p>
              {/* Additional meeting details can be displayed here */}
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={meeting.done || false}
                  onChange={() => handleCheckboxChange(meeting.id)}
                  className="form-checkbox h-4 w-4 text-blue-500 ml-2"
                />
                <span className="ml-2">Done</span>
              </label>
              <hr className="my-4" />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MeetingManagement;
