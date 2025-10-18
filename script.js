// your code here
let pre='https://localhost:8080/'
let url=document.getElementById('url')
url.innerHTML=pre
let name=document.getElementById('name')
let year=document.getElementById('year')
let button=document.getElementById('button')

button.addEventListener("click",()=>{
	url.innerHTML=''
	let arr=[]
	if(name.value.trim()!=''&&(name.value!=undefined &&name.value!=null)){arr.push(`name=${name.value}`)}
	if(year.value!=''&&(year.value!=undefined &&year.value!=null)){arr.push(`year=${year.value}`)}
	url.innerHTML=pre
	for(let i=0;i<arr.length;i++){
		if(i==0){url.innerHTML+="?"}else{url.innerHTML+="&"}
		url.innerHTML+=arr[i]
	}
})






























































