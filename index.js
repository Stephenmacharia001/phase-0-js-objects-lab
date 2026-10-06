//Declare and initialize the attendee object

let attendee = {
  attendeeId: "t001",
  name: "Stephen Machaia",
  event: "JavaScript Conference",
  ticketType: "Standard",
  ticketPrice: 100,

};

//Create a function to log the attendee's name
function logAttendeeName(attendeeObj) {
  console.log(attendeeObj.name);
}

//Create unction to log ticket price 
function logTicketPrice(attendeeObj) {
  console.log(attendeeObj.ticketPrice);
}

//Create a function to update the ticket type
function updateTicketType(attendeeObj, newTicketType) {
  attendeeObj.ticketType = newTicketType;
}

//Create a function to update the ticket price
function updateTicketPrice(attendeeObj, newTicketPrice) {
  attendeeObj.ticketPrice = newTicketPrice;
}

//Create a function to remove the event property
function removeEventProperty(attendeeObj) {
  delete attendeeObj.event;
}

//Create a function to add a checkedIn property
function addCheckedInProperty(attendeeObj) {
  attendeeObj.checkedIn = true;
}

//Needed for the tests to work. Don't modify
module.exports = {
  ...(typeof attendee !== 'undefined' && { attendee }),
  ...(typeof logAttendeeName !== 'undefined' && { logAttendeeName }),
  ...(typeof logTicketPrice !== 'undefined' && { logTicketPrice }),
  ...(typeof updateTicketType !== 'undefined' && { updateTicketType }),
  ...(typeof updateTicketPrice !== 'undefined' && { updateTicketPrice }),
  ...(typeof removeEventProperty !== 'undefined' && { removeEventProperty }),
  ...(typeof addCheckedInProperty !== 'undefined' && { addCheckedInProperty })
};