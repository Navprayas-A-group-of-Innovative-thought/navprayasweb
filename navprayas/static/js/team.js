const team = [
    {
        photoName : 'vikash.jpg',
        name : "Vikash Kumar",
        college : "IIT Kharagpur Passout",
        post : "Organising Head"
    },
    {
        photoName : 'govind.jpg',
        name : "Govind Nath",
        college : "NIT Surathkal",
        post : "Organiser"
    },
    {
        photoName : 'Budhdev.jpg',
        name : "Budhdev Kumar",
        college : "NIT Patna",
        post : "Organiser"
    },
    {
        photoName : 'ranjan.jpg',
        name : "Ranjan Kumar",
        college : "IIT ISM Dhanbad",
        post : "Coordinator"
    },

]

function teamHtml(member){

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

for(const member of team){
    document.write(teamHtml(member));
}

