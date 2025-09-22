//Об'єкти

const fn = () => {
    const obj1 = { name: 'Bette' };
    let obj2 = { name: 'Tina' };

    obj1.name = 'Henry';    //can modify a property inside
  //obj1 = { name: 'Henry' } can't reassign the object itself
    obj2.name = 'Jodie';
    
    return { obj1, obj2 };
}
console.log(fn());

