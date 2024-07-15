
  function check(){

    const sent=document.getElementById("sentence").value
    const sen=sent.split(" ").join("")
    const senArr=sen.split("")
    const senArrRev=senArr.reverse()
    const senRev=senArrRev.join("")
    var result=document.querySelector(".result")

    if(sen===senRev)
    result.innerHTML=`Palindrome`
    else
    result.innerHTML=`Not a Palindrome`


  }

    







