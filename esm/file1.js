function sayMessage(message, time) {
    if(time<12) {
        message = "Good morning, " + message;
    } else if(time<18) {
        message = "Good afternoon, " + message;
    } else {
        message = "Good evening, " + message;
    }
    console.log(message);
}

export { sayMessage };