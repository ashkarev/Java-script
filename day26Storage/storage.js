const items=()=>{

    try {
          const StoredVal=   document.getElementById('userName').value
 console.log(StoredVal)
    const forEmail=emailId.value
    let details={StoredVal,forEmail}
    console.log(details)

    let jso=JSON.stringify(details)
    console.log(jso)

    localStorage.setItem('User',jso)
    window.location='./local.html'
  
        
    } catch (error) {
        console.log(error)
        alert("error Ocuured")
    }
  
}