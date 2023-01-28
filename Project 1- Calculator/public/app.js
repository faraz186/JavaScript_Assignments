var input = document.getElementById('InpVal');

function addVal(val)
{
    input.value += val;
}

function ClrScreen()
{
    input.value = " ";
}

function Equal()
{
    try{
        var res = eval(input.value);
    input.value = res;
    }
    catch{
        input.value = "Error!"
    }
}

function BackWard()
{
    var value = input.value.split("");
    value.splice(input.value.length-1,1);
    input.value = value.join('');
    
}