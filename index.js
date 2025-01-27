function bg(bl) {
  if (list[bl]===0){
    document.getElementById(bl).style.backgroundColor="#dddddd";
  } else {
    document.getElementById(bl).style.backgroundColor="red";
  }
}

let count = 1;
let wincount = 0;

function success(){
  let re = document.getElementById("result");
  const average = list.reduce((a,c)=>a+c)/list.length;
  if(average==0 || average==1){
    re.textContent =count+"번째 성공하였습니다."
    count=1;
    wincount++;
    win.textContent = "성공횟수 : "+wincount;
  } else {
    re.textContent = "Turn : "+count;
    count++;
    all_bg();
  }
}

function clickbt(location) {
  list[location]=(list[location]+1)%2;
  const element = document.getElementById(location);
  element.innerText = list[location];
  bg(location);

  if((location+1)%b2 !== 0){
    list[location+1]=(list[location+1]+1)%2;
    const element1 = document.getElementById(location+1);
    element1.innerText = list[location+1];
    bg(location+1);
  }

  if(location%b2 !== 0){
    list[location-1]=(list[location-1]+1)%2;
    const element1 = document.getElementById(location-1);
    element1.innerText = list[location-1];
    bg(location-1);
  }

  if(location<(b1-1)*b2){
    list[location+b2]=(list[location+b2]+1)%2;
    const element1 = document.getElementById(location+b2);
    element1.innerText = list[location+b2];
    bg(location+b2);
  }

  if(location>=b2){
    list[location-b2]=(list[location-b2]+1)%2;
    const element1 = document.getElementById(location-b2);
    element1.innerText = list[location-b2];
    bg(location-b2);
  }
  success();
}

function main(a1, a2) {
  list=[]  
  count=1;
  let tag = "<div class='container'>";
    b1 = parseInt(a1);
    b2 = parseInt(a2);
    for (j = 0; j < b1; j++) {
      tag += "<div class='row'>";
      for (i = 0; i < b2; i++) {
        list.push(Math.floor(Math.random()*2));
        tag += "<div class='column' id='"+(i+j*b2)+"' onclick='clickbt("+(i+j*b2)+")'>"+list[i+j*b2]+"</div>";
      }
      tag += "</div>";
    }
    tag += "</div>";
    area.innerHTML = tag;

    for(k=0;k<b1*b2;k++){
      bg(k);
    }

    document.getElementById("result").textContent = "Turn : 0";
  }

  onload = () => {
    main(txt1.value, txt2.value)
  }