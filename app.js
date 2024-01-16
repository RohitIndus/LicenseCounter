console.log("Hello World");
let json_output;
let hostname = []
let consumed_units = []
let temp_var = []

//Func();


function Func() { 
	fetch("./response_1705301588001.json") 
		.then((res) => { 
		return res.json(); 
	}) 
	.then((data) => {
        console.log(data);
        json_output = data;
        console.log(json_output);

        for(let i=0;i<json_output.hosts.length;i++)
            {
                hostname[i] = json_output.hosts[i].hostInfo.displayName;
                consumed_units[i] = json_output.hosts[i].hostInfo.consumedHostUnits
               // document.querySelector("td").innerHTML=json_output.hosts[i];
              //  console.log(hostname[i],consumed_units[i]);
                hostname.unshift(hostname[i]);
                consumed_units.unshift(consumed_units[i]);

                
            }

            
       
    });
   
}

console.log(hostname);
console.log(consumed_units);


let sleep = ms => {
    return new Promise(resolve => setTimeout(resolve, ms));
    };
    
    //document.write("Begin" + "<br>");
    console.log("Sleeping");
    
    sleep(5000).then(() => 
    {
        table_creation();

    });

function table_creation ()
{
    var table = document.createElement('table');
    for (var i = 1; i < hostname.length; i++){
    var tr = document.createElement('tr');   

    var td1 = document.createElement('td');
    var td2 = document.createElement('td');

    var text1 = document.createTextNode(hostname[i]);
    var text2 = document.createTextNode(consumed_units[i]);

    td1.appendChild(text1);
    td2.appendChild(text2);
    tr.appendChild(td1);
    tr.appendChild(td2);

    table.appendChild(tr);
}
document.body.appendChild(table);
}














