function firstChar(text) {
  // your code here
	let result = '';
	if(text.length === 0)
	{
		return result;
	}
	else{

		for(let i=0; i<text.length; i++)
			{
				let charCode = text.charCodeAt(i);
				if(text.charAt(i) === charCode)
				{
					result+=text.charAt(i);
					return result;
				}
					
			}
		
	}
}

// Do not change the code below

// const text = prompt("Enter text:");
// alert(firstChar(text));
