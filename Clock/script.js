function setDate(){
    const now=new Date();
    const seconds= now.getSeconds();
    const minutes =now.getMinutes();
    const hours =now.getHours();
    const hoursdegree=((hours/12)*360)+90;
    const minutesdegree= (((minutes/60)*360)+90);
    const secondsdegree=(((seconds/60)*360)+90);
    document.querySelector('.seconds-hand').style.transform=`rotate(${secondsdegree}deg)`;
    document.querySelector('.minutes-hand').style.transform=`rotate(${minutesdegree}deg)`;
    document.querySelector('.hours-hand').style.transform=`rotate(${hoursdegree}deg)`;
    // console.log(seconds);
}

setInterval(setDate,1000);