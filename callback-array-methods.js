const minions = [
	'bob',
	'kevin',
	'stuart',
	'dave',
	'jerry',
	'kevin',
	'mark',
	'tim',
	'phil',
	'carl'
];
//present minions
minions.forEach(minion=>{
	console.log(minion=>console.log(minion+" - present"))
		//document.getElementById("output").append(minion+"- present")
	// let br = document.createElement("br")
		// // document.getElementById("output").append(minion.charAt(0).toUpperCase()+minion.substring(1,minion.length))
		// document.getElementById("output").appendChild(br)
})
//captilize
 let capitalizedMinions = minions.map(minion=>{
	if(minion!="kevin"){
		 return minion.charAt(0).toUpperCase()+minion.substring(1,minion.length)
	}else{
		return minion
	}
	})
//every
function isCapitalized(minion){
	let upperTest= minion.charAt(0).toUpperCase()
	let actualcase = minion.charAt(0)
	return upperTest==actualcase
}
console.log(minions.every((minion)=>isCapitalized(minion)))
//filter 
        // if you console.log ns, kevin should be gone and you should see..
		let actuallyCapitalizedMinions = capitalizedMinions.filter(minion=>isCapitalized(minion))
		
		console.log(actuallyCapitalizedMinions.every((minion)=>isCapitalized(minion)))
		
 let uncapitalizedMinion = capitalizedMinions.find((minion)=>{
	let upperTest= minion.charAt(0).toUpperCase()
	let actualcase = minion.charAt(0)
	return upperTest!=actualcase
 })
 console.log(uncapitalizedMinion)
 //indedx of kevin
let kevinIndex = capitalizedMinions.findIndex((minion)=>{
	let upperTest= minion.charAt(0).toUpperCase()
	let actualcase = minion.charAt(0)
	return upperTest!=actualcase
 })
 //fixing Kevin 
 capitalizedMinions[kevinIndex] = capitalizedMinions[kevinIndex].charAt(0).toUpperCase()+capitalizedMinions[kevinIndex].substring(1,capitalizedMinions[kevinIndex].length)
 console.log(capitalizedMinions)
kevinIndex =   capitalizedMinions.findIndex((minion)=>{
	let upperTest= minion.charAt(0).toUpperCase()
	let actualcase = minion.charAt(0)
	return upperTest!=actualcase
 })
 console.log(kevinIndex)
 delete capitalizedMinions[kevinIndex]
  let minionNameLengths = capitalizedMinions.map((minion)=>minion.length)
  minionNameLengths= minionNameLengths.reduce((num1,num2)=>num1+num2)
console.log(minionNameLengths)

//some
console.log(capitalizedMinions.some((minion)=>minion.length>6))
//function compareMinions
function compareMinions(a,b){
return a.length-b.length
}
console.log(capitalizedMinions.sort(compareMinions))
