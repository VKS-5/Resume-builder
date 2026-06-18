function generateResume(){
    let name = document.getElementById("name").value
    let job = document.getElementById("job").value
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone").value
    let education = document.getElementById("education").value
    let skills = document.getElementById("skills").value
    let experience = document.getElementById("experience").value
    document.getElementById("resume").innerHTML=
    `
    <h1>${name}</h1> 
    <h3>${job}</h3>
     <p><i class="fa-solid fa-envelope"></i>${email}</p> 
    <p><i class="fa-solid fa-phone"></i>${phone}</p>
    <hr> 
    <h2>Education</h2> <p>${education}</p> 
    <h2>skills</h2> <p>${skills}</p> 
    <h2>Experience</h2> <p>${experience}</p> 
    `
    }

    function downloadPDF(){
        let element = document.getElementById("resume")
        html2pdf().from(element).save("Resume.pdf")
    }
