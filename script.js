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
	if(name.value.trim()!=''){arr.push(`name=${name.value}`)}
	if(year.value!=''){arr.push(`year=${year.value}`)}
	url.innerHTML=pre
	for(let i=0;i<arr.length;i++){
		if(i==0)url.innerHTML+="?"
		if(i!=0)url.innerHTML+="&"
		url.innerHTML+=arr[i]
	}
})






























































