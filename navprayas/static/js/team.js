const team = [{
        photoName: 'ranjan.jpeg',
        name: "Ranjan Kumar",
        college: "IIT (ISM) Dhanbad Passout",
        post: "Chairperson"
    },
    {
        photoName: 'abhay.jpeg',
        name: "Abhay Kumar",
        college: "NIT Hamirpur",
        post: "General Secretary"
    },
    {
        photoName: 'saras.jpeg',
        name: "Saraswati Kumari",
        college: "MNNIT Allahabad",
        post: "Organizer Head"
    },
    //     photoName: 'vikash.jpg',
    //     name: "Vikash Kumar",
    //     college: "IIT Kharagpur",
    //     post: "Organising Head"
    // },
    // {
    //     photoName: 'govind.jpg',
    //     name: "Govind Nath",
    //     college: "NITK Surathkal",
    //     post: "Organiser"
    // },
    // {
    //     photoName: 'Budhdev.jpg',
    //     name: "Budhdev Kumar",
    //     college: "BIT Patna",
    //     post: "Organiser"
    // },
    {
        photoName: 'manisha.jpeg',
        name: "Manisha Kumari",
        college: "NSEC Kolkata",
        post: "Event Co-ordinator"
    },
    {
        photoName: 'rahul.jpg',
        name: "Rahul Kumar",
        college: "NIT Jalandhar",
        post: "Event Co-ordinator"
    },

]

function teamHtml(member) {

    const val = `
    <div class="col-md-3">
        <a href="/static/img/members/${member.photoName}" class="img-pop-up">
            <div class="single-gallery-image" style="background: url('/static/img/members/${member.photoName}');">
            </div>
        </a>
        <p class="text-center">${member.name}</p>
        <p class="text-center">${member.college}</p>
        <p class="text-center">${member.post}</p>
    </div>
    `
    return val;

}

for (const member of team) {
    document.write(teamHtml(member));
}