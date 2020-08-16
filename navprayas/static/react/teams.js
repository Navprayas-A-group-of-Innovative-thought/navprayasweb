const teamDetails = [{
    photoName : 'kedar.jpg',
    name : "Kedar Nath",
    college : "IIT Guwahati",
    post : "Coordinator"
},
{
    photoName : 'ranjan.jpg',
    name : "Ranjan Kumar",
    college : "IIT ISM Dhanbad",
    post : "Coordinator"
},]

const TeamMember = ({member})=>{
    const aurl = '/static/img/members/' + member.photoName
    const url = `url(${aurl})`
    const name = member.name
    const college = member.college
    const post = member.post

    return (
        <div className="col-md-3">
        <a href={aurl} className="img-pop-up">
            <div className="single-gallery-image" style={{ backgroundImage: url}}>
            </div>
        </a>
        <p className="text-center">{name}</p>
        <p className="text-center">{college}</p>
        <p className="text-center">{post}</p>
    </div>

    )

}

const Team = ({teamDetails })=>{
    return (<React.Fragment>
            {
                teamDetails.map(data => (<TeamMember member={data} key={data.photoName}/>))
            }
        </React.Fragment>
    )
}

ReactDOM.render(<Team teamDetails={teamDetails}/>, document.getElementById("team"));

