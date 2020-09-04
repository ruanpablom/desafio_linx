// Input
const categories = [
    {
        parent: null,
        id: 'futebol'
    },
    {
        parent: 'futebol',
        id: 'bola'
    },
    {
        parent: null,
        id: 'camisas'
    },
    {
        parent: 'camisas',
        id: 'gola polo'
    },
    {
        parent: 'bola',
        id: 'nike'
    },
    {
      parent: 'gola polo',
      id: 'hadouken'
    },
    {
      parent: 'hadouken',
      id: 'hadouken2'
    }
]

// Output
// {
//     futebol: {
//         bola: {
//             nike: {}
//         }
//     },
//     camisas: {
//         'gola polo': {}
//     }
// }

const data = {};

/**
 * This function must insert one element of categories inside data object by the rules of output
 * @param  {Object} data
 * @param  {CategorieElement} element
 */
const insertElement = (data, element) => {
  if(element.parent === null){
    data[element.id] = {};
    return;
  }

  for (const [key, value] of Object.entries(data)) {
    if(key === element.parent){
      data[key][element.id] = {};
      return;
    }
    
    insertElement(data[key], element);
  }
}

categories.forEach( element => {
  insertElement(data, element);
});

console.log(data);