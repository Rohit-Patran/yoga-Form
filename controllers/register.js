import USER from "../yogaUserModel/yogaUserModel.js";

const register = (request , response) => {

    const fullname = request.body.fullname;
    const date = request.body.date;
    const batch = request.body.batch;
    const age = request.body.age;
    const amount = request.body.amount;

    const result = (fullname.length !=0 && date.length !=0 && batch.length != 0 && age >= 18 && age <= 65 && amount == 500) ? true : false;

    if(result)
    {
        const yogaUser = new USER({...request.body});
        yogaUser.save()
        response.status(200);
        response.send({message : "User subscribed and Payment Completed"});
    }
    else{
        response.status(400);
        response.send({message: "Credentials Error"});
    }
    
};

export { register as default };