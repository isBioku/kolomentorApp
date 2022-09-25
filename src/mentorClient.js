import fetch from 'unfetch';
//Method to check the status of the payload
const checkStatus = response => {

    if (response.ok){
        return response;
    }else{
        const error = new Error(response.statusText);
        error.response = response;
        return Promise.reject(error);
    }

}

//method to get all the mentors
export const getAllMentors = () =>
    fetch("mentors")
    .then(checkStatus);

//method to add new mentor to the db
export const addNewMentor = mentor =>
    fetch("mentors/add", {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(mentor)

    })
// method to add a new mentee to the database
export const addAllMentee = mentee => {
    return ("mentees", {
        headers: {
            'content-Type': 'application/json'
        },method: 'POST',
        body: JSON.stringify(mentee)
    })
}
