# Handle "undefined"  
The easist way is using "typeof". Ex:  

``` JS  
    if(typeof req.file === 'undefined'){
      var obj = {
          timeStamp: current,
          timePeriod: req.body.timePeriod,
          oneTimeOnly: defaultOneTimeValue,
          name: req.body.name,
          desc: req.body.desc
      }

```  
Put `typeof foo === 'undefined'` into an if().   

You could use this skill ex. If the user did not upload an image to your website, but your JS still need the image.  
