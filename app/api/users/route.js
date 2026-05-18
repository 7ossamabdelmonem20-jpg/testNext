

// export async function GET() {
//   return Response.json({
//     message: "Users fetched successfully",
//   });
// }

let users = [
    {id:1,name:"Hossam"},
    {id:2,name:"Ahmed"},

]

export async function GET(){
    return Response.json(users);
}


export async function POST(req){
    let body =await req.json()

    const newUser = {
        id:users.length + 1,
        name:body.name,
    }
    users.push(newUser);

    return Response.json({
        message:"User added",
        newUser:newUser,
    })

}

export async function PUT(req){
    let body = await req.json();

    let user = users.find((x)=>x.id == body.id)

    if(!user){
        return Response.json({
            message:"User Not Found"
        })
    }
    user.name = body.name;
    
    return Response.json({
        message:"User UpDate",
        user,
    })
}

export async function DELETE(req){
    const body = await req.json();
    
    users = users.filter((y)=>y.id !== body.id);

    return Response.json({
        message:"User deleted",
        users
    })
}