# HTML Hidden Elements  
The reason we use hidden hidden elements is because we have to know if the user is not "checkbox checked" or others.  
If the user did not check the checkbox, our JS will get "undefined".  

``` HTML  
            <div>
              <input type="hidden" id="gracePeriodCheck" name="oneTimeOnly" value="nn" >
              <input type="checkbox" id="gracePeriodCheck" name="oneTimeOnly" value="oneTime" checked >
              <label for="oneTimeOnly"> Remove it after Read.</label><br>
            </div>
```


In the JS parts, we could do something like below:  
``` JS  
    let defaultOneTimeValue = "";
    defaultOneTimeValue = req.body.oneTimeOnly[1];//if checked, you will get oneTime, if no, get 'n'
    console.log(defaultOneTimeValue);  
    
```  

### The other approach to handle "undefined" please check handleUndefined.md   
