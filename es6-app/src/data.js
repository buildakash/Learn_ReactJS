const animals = [
    { name: "cat", sound: "meow", foodRequirement:{
        food: 2,
        water: 3
    } },
    { name: "dog", sound: "woof" }
  ];

  function useanimals(animal){
    return [
        animal.name,
        function(){
            console.log(animal.sound);
        }
    ]
  }
  
export default animals;
export {useanimals};
