const inicio = (req,res, next)=>{
    res.render("index",{title:"Costa Radio"});
}

var pro = [
    {id:"Lunes", day:[ {name:"Moviendo Tu Ritmo",hour:"12:00-03:00"}]},
    {id:"Martes", day:[ {name:"Moviendo Tu Ritmo",hour:"12:00-03:00"}]},
    {id:"Miercoles", day:[ {name:"Moviendo Tu Ritmo",hour:"12:00-03:00"}]},
    {id:"Jueves", day:[ {name:"Moviendo Tu Ritmo",hour:"12:00-03:00"}]},
    {id:"Viernes", day:[ {name:"Moviendo Tu Ritmo",hour:"12:00-03:00"}]},
    {id:"Sabados", day:[ {name:"Moviendo Tu Ritmo",hour:"12:00-03:00"}]},
    {id:"Domingos", day:[ {name:"Moviendo Tu Ritmo",hour:"12:00-03:00"}]}
]

const horario = (req,res)=>{
    res.render("horario",{
        title:"Horario",
        programas: pro
    });
}

const newPrograma = (req,res)=>{
    const {newPrograma} = req.body;
    //console.log(newPrograma)
    pro.push({id: pro.length+1, name: newPrograma})
    res.redirect("/horario");
}

module.exports = {
    inicio,
    horario,
    newPrograma
}