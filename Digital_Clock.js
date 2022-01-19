let a;
    let date_new;
    let time_new;
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    setInterval(function() { //arrow notation of this is setInterval(() => {functionbody},time)
      a = new Date();

      //my logic but not pretty
      // let date_new = a.getDate() + "-" + (a.getMonth()+1) + "-" + a.getFullYear();

      date_new = a.toLocaleDateString(undefined, options);
      time_new = ("0" + a.getHours()).slice(-2) + ":" + ("0" + a.getMinutes()).slice(-2) + ":" + ("0" + a.getSeconds()).slice(-2);
      document.getElementById("time_new").innerHTML = time_new + "<br>on " + date_new;
    }, 1000);
