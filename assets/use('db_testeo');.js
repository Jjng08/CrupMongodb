use('db_testeo');
/*
db.createCollection('alumnos');

db.getCollectionNames();

db.clase.insertOne({
    'rut'     : '12345678-9',
    'nombre'  : 'Juan',
    'apellido': 'Perez',
    'edad'    : 20,
    'curso'   : '1A'
});

db.clase.insertMany([{
    'rut'     : '12345678-9',
    'nombre'  : 'Pedro',
    'apellido': 'Perez',
    'edad'    : 20,
    'curso'   : '1A'
},{
    'rut'     : '12345678-9',
    'nombre'  : 'Pepe',
    'apellido': 'Perez',
    'edad'    : 20,
    'curso'   : '1A'
}])*/
const alumnos = [
    {
        rut: '12345678-9',
        nombre: 'Pedro',
        apellido: 'Perez',
        edad: 20,
        curso: '1A'
    },
    {
        rut: '98765432-1',
        nombre: 'Juan',
        apellido: 'Gomez',
        edad: 22,
        curso: '2B'
    },
    {
        rut: '45678901-2',
        nombre: 'Maria',
        apellido: 'Lopez',
        edad: 19,
        curso: '1A'
    },
    {
        rut: '23456789-0',
        nombre: 'Ana',
        apellido: 'Martinez',
        edad: 21,
        curso: '1A'
    }
];

alumnos.forEach(e => {
    if(e.curso === '1A'){
        db.clase.insertOne(e);
    }
});

db.clase.find();


