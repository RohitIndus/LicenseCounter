console.log("Hello World");
let json_output;
let hostname = []
let consumed_units = []
let temp_var = []
let start_table_creation=[];

Func();


function Func() { 
	fetch("https://apm.indusind.com/e/a5524478-859f-46f3-abcf-9f33bb51d130/api/v1/oneagents?includeDetails=true&availabilityState=MONITORED",{
  method: "GET",
  headers: {"Authorization": "Api-Token dt0c01.OCEZZ7BO63YFVA3R2YCDX35Y.OHTMAWBAEUXSZ4GH6G4BQEJDBYJHAXUXFMDZUAMVLDAKJJ27YOLNNBO7KXV3CK2E"}
}) 
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
                start_table_creation.unshift("1");
                
            }

            
       
    });
console.log("Executed Func Sucess" +start_table_creation );   
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
        if(start_table_creation)
        {
        table_creation();
        }

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
