var express=require('express')
var app=express()
var login = require("facebook-chat-api");


var CronJob = require('cron').CronJob;

  var json = JSON.parse(require('fs').readFileSync('userids.json', 'utf8'));

  //console.log('faffu')
  try {
    new CronJob('45,58 9,22 * * 7,1-4',function(error){
        login({
            email:"",
            password:""
               },function callback(error,api){
                  var json = JSON.parse(require('fs').readFileSync('userids.json', 'utf8'));
                  var d = new Date();
                  var n = d.getDay();
                  //console.log(n);
                  if (error) return console.error(error);
                  for(var i=0;i<keys.length;i++){
                        //console.log(json["0"][0][keys[i]])
                        if(i==0){
                          var time="2:00 pm";
                        }else{
                          var time="2:30 pm"  
                        }
                        var slot=json[n.toString()][0][keys[i]];
                        for(var stud in slot){
                          console.log(slot[stud]["username"]+time+slot[stud]["subject"])
                          var msg={
                              body:"Hey! "+slot[stud]["username"]+" slot: "+i+" Subject: "+slot[stud]["subject"]+"At: AshaKiran"+"time: "+time
                                  }
                                  api.sendMessage(msg,slot[stud]["profile_id"])
                        }
                  }
              });

      },null,true,'America/Los_Angeles')
} catch(ex) {
    console.log("cron pattern not valid");
}

  app.listen(3000,function(){
    console.log('server running on port 3000')
  })
