const caltemp=() =>{
    const inputtemp = document.getElementById('temp').value;

    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = temp_diff[tempSelected.selectedIndex].value;

    const ctof = (cel) =>{
        let fahrenheit = ((cel * 9 / 5) + 32 ).toFixed(3);
        return fahrenheit;
    }

    const ftoc = (fah) =>{
        let celcius = ((fah - 32) * 5 / 9).toFixed(3);
        return celcius;
    }

    if(valueTemp == 'cel')
    {
        document.getElementById("result").innerHTML = ctof(inputtemp) + "Fahrenheit";
    }
    else{
        document.getElementById("result").innerHTML = ftoc(inputtemp) + "Celcius";
    }
}
