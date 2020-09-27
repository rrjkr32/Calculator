output_val=0;
buffer_val=0;
prev_val=0;
operator= null ;
function processclick(input){
	console.log("hey got");
	console.log(input);

	if(parseInt(input)>=0 & parseInt(input)<=9){
		output_val= output_val*10 + parseInt(input);
		if (operator == null)
		{
			buffer_val= output_val;
		}prev_val= output_val;
		
		display();
	}
	else{
		

		 if (input ==="="){
			domath();
			output_val=buffer_val;
			prev_val=output_val;
			display();
			output_val=0;
		}
		else if (input ==="C"){
			buffer_val=0;
			output_val=0;
			operator=null;
			display();
		}
		else if(input==="<-"){
			console.log(buffer_val);
			buffer_val=Math.floor(buffer_val/10);
			console.log(output_val);
		
			prev_val=buffer_val;
			display();
		}
		else{
			operator=input;
			prev_val= output_val;
			output_val=0;
			display();
		}
		
	}

	
	

}

function domath(){
		if(operator== "+")
		{
			buffer_val= buffer_val + prev_val;
		}
		else if (operator =="-"){
			buffer_val= buffer_val - prev_val;
		}
		else if (operator =="X"){
			buffer_val= buffer_val * prev_val;
		}
		else if (operator =="/"){
			buffer_val= buffer_val / prev_val;
		}else
		output_val=0;
	 
}

function display(){
	document.querySelector(".output p").innerText = output_val;
}


function init(){
	document.querySelector(".main_box").addEventListener("click",function(event){
		console.log(event.target.innerText);
		processclick(event.target.innerText);
	})
}

init();