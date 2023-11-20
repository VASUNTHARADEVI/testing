// import React, { useState } from 'react';

// const ListItem = ({ item }) => {
//   return <li>{item}</li>;
// };

// const List = ({ items }) => {
//   return (
//     <ul>
//       {items.map((item, index) => (
//         <ListItem key={index} item={item} />
//       ))}
//     </ul>
//   );
// };

// const SearchList = ({ data }) => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const filteredData = data.filter(item =>
//     item.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search..."
//         value={searchTerm}
//         onChange={e => setSearchTerm(e.target.value)}
//       />
//       <List items={filteredData} />
//     </div>
//   );
// };

// const App = () => {
//   const items = ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple'];
//   return <SearchList data={items} />;
// };

// export default App;


import React, { useState } from 'react';

function Search(){
  return(
    <>

    </>
  )
}
export default Search;
